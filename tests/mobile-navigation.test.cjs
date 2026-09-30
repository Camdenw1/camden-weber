/* eslint-disable @typescript-eslint/no-require-imports -- This Node test harness loads the TSX component as CommonJS. */
const assert = require('node:assert/strict')
const { afterEach, beforeEach, test } = require('node:test')
const { readFileSync } = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const { JSDOM } = require('jsdom')
const ts = require('typescript')
const React = require('react')
const { act } = React
const { createRoot } = require('react-dom/client')
const { PathnameContext } = require('next/dist/shared/lib/hooks-client-context.shared-runtime')

// Render the real component in a DOM. The browser tests separately cover routing,
// layout and hit targets; these tests reproduce Safari's blur-before-click order.
const filename = path.resolve(__dirname, '../components/Navbar.tsx')
const compiled = ts.transpileModule(readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
}).outputText
const navbarModule = new Module(filename, module)
navbarModule.filename = filename
navbarModule.paths = Module._nodeModulePaths(path.dirname(filename))
navbarModule._compile(compiled, filename)
const Navbar = navbarModule.exports.default

let dom, root
const originalGlobals = new Map()
beforeEach(async () => {
  dom = new JSDOM('<div id="root"></div><button id="outside">Outside</button>', {
    url: 'http://localhost/', pretendToBeVisual: true,
  })
  for (const [name, value] of Object.entries({
    window: dom.window, document: dom.window.document, Node: dom.window.Node,
    HTMLElement: dom.window.HTMLElement, navigator: dom.window.navigator,
    self: dom.window, IS_REACT_ACT_ENVIRONMENT: true,
  })) {
    originalGlobals.set(name, Object.getOwnPropertyDescriptor(globalThis, name))
    Object.defineProperty(globalThis, name, { configurable: true, writable: true, value })
  }
  root = createRoot(document.querySelector('#root'))
  await act(async () => root.render(
    React.createElement(PathnameContext.Provider, { value: '/' }, React.createElement(Navbar)),
  ))
})
afterEach(async () => {
  await act(async () => root.unmount())
  dom.window.close()
  for (const [name, descriptor] of originalGlobals) {
    if (descriptor) Object.defineProperty(globalThis, name, descriptor)
    else delete globalThis[name]
  }
  originalGlobals.clear()
})

const toggle = () => document.querySelector('button[aria-controls="mobile-navigation"]')
const expanded = () => toggle().getAttribute('aria-expanded') === 'true'
async function click(element) {
  await act(async () => element.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true })))
}
async function open() {
  await click(toggle())
  assert.equal(expanded(), true)
}
async function safariBlur(element) {
  await act(async () => element.dispatchEvent(new window.FocusEvent('focusout', { bubbles: true, relatedTarget: null })))
}

test('a Safari blur before tapping a menu link does not hide the link', async () => {
  await open()
  const home = document.querySelector('#mobile-navigation a')
  await safariBlur(home)
  assert.equal(expanded(), true)
  // Avoid jsdom navigation; Next still invokes the component's click handler.
  home.addEventListener('click', event => event.preventDefault(), { once: true })
  await click(home)
  assert.equal(expanded(), false)
})

test('a Safari blur before tapping Close does not reopen the menu', async () => {
  await open()
  await safariBlur(document.activeElement)
  await click(toggle())
  assert.equal(expanded(), false)
})

test('inside pointer presses keep the menu open; outside presses close it', async () => {
  await open()
  await act(async () => document.querySelector('#mobile-navigation a').dispatchEvent(
    new window.Event('pointerdown', { bubbles: true }),
  ))
  assert.equal(expanded(), true)
  await act(async () => document.querySelector('#outside').dispatchEvent(
    new window.Event('pointerdown', { bubbles: true }),
  ))
  assert.equal(expanded(), false)
})

test('Escape closes the menu and returns focus to its toggle', async () => {
  await open()
  await act(async () => document.activeElement.dispatchEvent(
    new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
  ))
  assert.equal(expanded(), false)
  assert.equal(document.activeElement, toggle())
})

test('keyboard focus leaving navigation closes the menu', async () => {
  await open()
  await act(async () => document.querySelector('#outside').focus())
  assert.equal(expanded(), false)
})

test('opening the menu preserves scroll when moving keyboard focus', async () => {
  let focusOptions
  const originalFocus = window.HTMLElement.prototype.focus
  window.HTMLElement.prototype.focus = function (options) {
    focusOptions = options
    return originalFocus.call(this, options)
  }
  await open()
  assert.deepEqual(focusOptions, { preventScroll: true })
  assert.equal(document.activeElement, document.querySelector('#mobile-navigation a'))
})
