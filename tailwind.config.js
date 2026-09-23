/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Theme colors come from CSS variables in app/globals.css, so they
      // switch automatically in dark mode. `snow` and `ink` never switch:
      // use them for text and shading on top of photos.
      colors: {
        cream: 'rgb(var(--cream) / <alpha-value>)',
        bark: 'rgb(var(--bark) / <alpha-value>)',
        moss: 'rgb(var(--moss) / <alpha-value>)',
        stone: 'rgb(var(--stone) / <alpha-value>)',
        rust: 'rgb(var(--rust) / <alpha-value>)',
        snow: '#F9F7F4',
        ink: '#1C1C1A',
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['var(--font-dm-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
