// Faint topographic contour lines, drawn behind page headers.
// Color comes from the text color (e.g. `text-moss`), so it works in dark mode.
export default function Topo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M-40 380 C120 330 260 370 420 310 S760 200 1240 270" />
        <path d="M-40 350 C130 300 270 335 430 280 S750 170 1240 235" />
        <path d="M-40 320 C140 270 280 300 440 250 S740 140 1240 200" />
        <path d="M-40 290 C150 242 290 266 452 222 S735 112 1240 166" />
        <path d="M-40 260 C160 214 300 234 465 196 S730 86 1240 134" />
        <path d="M-40 230 C170 188 310 204 478 172 S728 62 1240 104" />
        <path d="M760 150 C820 108 905 116 925 152 S870 214 815 204 S735 184 760 150Z" />
        <path d="M785 154 C825 128 885 134 896 158 S858 196 822 190 S768 176 785 154Z" />
        <path d="M812 158 C836 144 866 148 872 162 S850 182 830 179 S800 170 812 158Z" />
        <path d="M-40 110 C60 80 150 118 250 96 S400 40 520 58" />
        <path d="M-40 80 C70 52 160 88 262 68 S410 14 540 28" />
        <path d="M-40 50 C80 24 170 58 275 40 S420 -10 560 0" />
        <path d="M960 40 C1040 20 1120 60 1240 36" />
        <path d="M940 70 C1030 48 1120 92 1240 66" />
      </g>
    </svg>
  )
}
