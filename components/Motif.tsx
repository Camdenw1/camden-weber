export type MotifKind = 'mountain' | 'royce' | 'yellowjacket' | 'football' | 'network' | 'plot' | 'basketball' | 'palm' | 'coast' | 'lacrosse' | 'grid'

// Decorative ink drawings. No labels, interaction, or layout space inside the reading column.
export default function Motif({ kind, className = '' }: { kind: MotifKind; className?: string }) {
  const views: Partial<Record<MotifKind, string>> = { royce: '0 0 190 110', palm: '0 0 140 260', coast: '0 0 150 80' }
  return (
    <svg aria-hidden="true" focusable="false" viewBox={views[kind] ?? '0 0 120 100'} className={className} fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      {kind === 'mountain' && <><path d="m5 83 31-48 16 22 25-43 38 69H5Zm20-30 11 9 7-13M66 32l11 13 9-15M47 83l12-24M91 83l-9-20" /><path d="M10 90c23-3 34 2 52 0s26-2 48 1" strokeOpacity=".5" /></>}
      {kind === 'royce' && <><path d="M8 103h174M12 99h166M18 96V23h30v73M142 96V23h30v73M15 23l18-9 18 9M139 23l18-9 18 9M18 33h30M142 33h30M18 60h30M142 60h30M48 96V52h94v44M47 52l48-13 48 13M55 96V81a10 10 0 0 1 20 0v15M85 96V81a10 10 0 0 1 20 0v15M115 96V81a10 10 0 0 1 20 0v15M55 64h80M22 51V44a3 3 0 0 1 6 0v7M30 51V44a3 3 0 0 1 6 0v7M38 51V44a3 3 0 0 1 6 0v7M146 51V43a4 4 0 0 1 8 0v8M160 51V43a4 4 0 0 1 8 0v8M24 78V69a3 3 0 0 1 6 0v9M36 78V69a3 3 0 0 1 6 0v9M148 78V69a3 3 0 0 1 6 0v9M160 78V69a3 3 0 0 1 6 0v9" /><circle cx="95" cy="53" r="4" /></>}
      {kind === 'yellowjacket' && <><path d="M46 39C20 9 47 3 58 29M54 40C79 9 94 26 70 45M44 50C30 65 35 76 49 64" /><ellipse cx="52" cy="45" rx="13" ry="11" transform="rotate(25 52 45)" /><path d="M65 49c21-3 32 11 33 28-17 4-31-7-34-20M96 77l8 7-12-2M72 50l-4 13M82 54l-5 17M90 61l-5 14" /><path d="M40 39c-16 3-23-7-15-16 7-8 21-3 22 9M28 22l-4-11-7-3M36 21l4-11 6-3M43 52 29 59 21 72M53 57 48 70 37 75M65 57 63 76 54 84" /><circle cx="30" cy="31" r="1.5" /><path d="m22 36-5 1" /></>}
      {kind === 'football' && <><path d="M12 67c9-35 39-54 88-38-6 40-39 56-88 38Z" /><path d="M20 48c1 9 5 17 12 25M82 24c0 10 5 20 12 26M37 57l33-14M42 48l5 11M51 44l5 11M60 40l5 11M70 33l6 10" /></>}
      {kind === 'network' && <><path d="m14 18 41 16 30-18 23 28M14 77l41-43 30 45 23-35M14 18l41 41 30-43M14 77l41-18 30 20M85 16v63M55 34v25" strokeOpacity=".6" />{[[14,18],[14,77],[55,34],[55,59],[85,16],[85,79],[108,44]].map(([cx,cy])=><circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.7" />)}</>}
      {kind === 'plot' && <><path d="M12 12v72h96M20 73c21-3 27-19 42-25s25-7 40-25" strokeOpacity=".65" />{[[23,65],[32,70],[41,57],[50,60],[58,43],[70,51],[82,30],[91,39],[103,23]].map(([cx,cy])=><circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" />)}</>}
      {kind === 'basketball' && <><circle cx="60" cy="50" r="32" /><path d="M29 41c19 10 43 21 63 13M52 19c7 22 8 44 5 63M36 28c27-1 49 22 47 45M34 69c2-22 25-45 50-40" /></>}
      {kind === 'palm' && <><path d="M59 249c14-53 16-112 12-177M68 249c12-53 12-113 9-177M71 95l6 2M70 125l6 2M67 155l7 2M63 185l7 2M59 217l7 2" /><path d="M73 70C49 38 23 39 6 58c21-9 41-2 67 12ZM74 69C51 15 26 16 12 31c27-2 43 13 62 38ZM74 67C62 33 67 12 81 4c-4 24-6 41-7 63ZM77 68C98 25 122 27 137 41c-25 0-43 12-60 27ZM76 70C111 47 132 60 138 83c-20-14-34-15-62-13ZM75 72C112 71 123 102 118 123c-8-26-19-41-43-51ZM72 72C43 64 20 82 17 108c16-23 31-32 55-36Z" /><path d="m26 49-4 8m14-7-4 9M29 26l-1 8m12-2-1 9M75 28l6 6M102 40l5 6M102 65l-1 8M97 86l-6 5M36 86l7 4M47 251c12-3 24-3 36 0" /></>}
      {kind === 'coast' && <><path d="M9 12c21 1 20 16 36 15s20-11 34-4 15 18 26 24 21 1 35 7M8 20c15 1 20 16 36 16s22-10 33-4 15 17 25 23 24 2 36 8M6 49c7-3 14-3 21 0s14 3 21 0M16 62c6-3 12-3 19 0" /></>}
      {kind === 'lacrosse' && <><path d="m24 92 34-52M30 95l34-52M51 35c-3-17 8-31 24-29 16 3 18 19 7 32-9 11-23 12-31-3ZM56 15l19 21M65 9l17 19M54 27l11 14M53 26l24-9M56 36l27-10M63 41l19-10" /></>}
      {kind === 'grid' && <><rect x="27" y="15" width="66" height="66" rx="3" /><path d="M49 15v66M71 15v66M27 37h66M27 59h66M34 44l12 12m0-12L34 56M77 21l10 10m0-10L77 31" /><circle cx="60" cy="70" r="6" /></>}
    </svg>
  )
}

export function MarginMotif({ kind, side = 'left' }: { kind: MotifKind; side?: 'left' | 'right' }) {
  return <Motif kind={kind} className={`margin-motif margin-motif-${side}`} />
}
