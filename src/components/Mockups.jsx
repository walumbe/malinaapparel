// Original SVG branding mockups. Every mockup uses a 400x300 viewBox so all
// image tiles share one aspect ratio. Pass a palette from PALETTES, a brand
// name and a mark index (0-4). Replace with real photos via data/portfolio.js.

export function Mark({ kind = 0, p, scale = 1, x = 0, y = 0 }) {
  const t = `translate(${x} ${y}) scale(${scale})`
  switch (kind % 5) {
    case 0:
      return (
        <g transform={t}>
          <circle r="44" fill={p.accent} />
          <path d="M-20 20 L0 -26 L20 20 Z" fill={p.fg === '#FFFFFF' ? '#0A0A0A' : p.alt} />
        </g>
      )
    case 1:
      return (
        <g transform={t}>
          <rect x="-38" y="-38" width="76" height="76" rx="10" fill={p.accent} transform="rotate(45)" />
          <circle r="14" fill={p.alt} />
        </g>
      )
    case 2:
      return (
        <g transform={t}>
          <circle r="38" fill="none" stroke={p.accent} strokeWidth="14" />
          <circle cx="18" cy="-18" r="10" fill={p.fg} />
        </g>
      )
    case 3:
      return (
        <g transform={t}>
          <rect x="-40" y="4" width="22" height="36" rx="4" fill={p.accent} />
          <rect x="-11" y="-14" width="22" height="54" rx="4" fill={p.accent} opacity=".75" />
          <rect x="18" y="-40" width="22" height="80" rx="4" fill={p.fg} />
        </g>
      )
    default:
      return (
        <g transform={t}>
          <path d="M-42 0 A42 42 0 0 1 42 0 Z" fill={p.accent} />
          <path d="M42 8 A42 42 0 0 1 -42 8 Z" fill={p.fg} />
        </g>
      )
  }
}

const Frame = ({ p, label, children }) => (
  <svg
    viewBox="0 0 400 300"
    role="img"
    aria-label={label}
    className="block h-full w-full"
    preserveAspectRatio="xMidYMid slice"
    fontFamily="'Space Grotesk', system-ui, sans-serif"
  >
    <rect width="400" height="300" fill={p.bg} />
    {children}
  </svg>
)

const Shadow = ({ cx, cy, rx, ry = 8 }) => <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#000" opacity=".12" />

export function LogoSheet({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Logo concept for ${name}`}>
      <Mark kind={mark} p={p} x={200} y={115} scale={1.1} />
      <text x="200" y="205" textAnchor="middle" fontSize="28" fontWeight="700" fill={p.fg} letterSpacing="1">
        {name}
      </text>
      <text x="200" y="228" textAnchor="middle" fontSize="11" fill={p.fg} opacity=".6" letterSpacing="4">
        BRAND IDENTITY
      </text>
      <circle cx="40" cy="260" r="8" fill={p.accent} />
      <circle cx="62" cy="260" r="8" fill={p.fg} />
      <circle cx="84" cy="260" r="8" fill={p.alt} stroke={p.fg} strokeOpacity=".2" />
    </Frame>
  )
}

export function Cards({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Business card concept for ${name}`}>
      <g transform="rotate(-8 200 150)">
        <rect x="95" y="85" width="190" height="115" rx="8" fill={p.accent} />
        <Mark kind={mark} p={{ ...p, accent: p.alt, fg: p.fg }} x={190} y={142} scale={0.7} />
      </g>
      <g transform="rotate(6 200 150)">
        <rect x="130" y="120" width="190" height="115" rx="8" fill={p.alt} />
        <rect x="130" y="120" width="190" height="115" rx="8" fill="none" stroke="#000" strokeOpacity=".08" />
        <Mark kind={mark} p={p} x={160} y={150} scale={0.28} />
        <text x="146" y="188" fontSize="13" fontWeight="700" fill={p.fg}>{name}</text>
        <rect x="146" y="200" width="70" height="4" rx="2" fill={p.fg} opacity=".25" />
        <rect x="146" y="210" width="100" height="4" rx="2" fill={p.fg} opacity=".25" />
      </g>
    </Frame>
  )
}

export function Brochure({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Brochure concept for ${name}`}>
      <Shadow cx={200} cy={250} rx={140} />
      <polygon points="70,70 150,62 150,235 70,225" fill={p.alt} />
      <polygon points="150,62 250,62 250,235 150,235" fill={p.accent} />
      <polygon points="250,62 330,70 330,225 250,235" fill={p.fg} />
      <Mark kind={mark} p={{ ...p, accent: p.alt }} x={200} y={120} scale={0.55} />
      <text x="200" y="180" textAnchor="middle" fontSize="18" fontWeight="700" fill={p.alt}>{name}</text>
      <rect x="170" y="196" width="60" height="4" rx="2" fill={p.alt} opacity=".6" />
      {[90, 105, 120, 135].map((y) => (
        <rect key={y} x="84" y={y + 20} width="50" height="4" rx="2" fill={p.fg} opacity=".25" />
      ))}
      <rect x="266" y="90" width="48" height="48" rx="6" fill={p.accent} />
      {[160, 175, 190].map((y) => (
        <rect key={y} x="266" y={y} width="48" height="4" rx="2" fill={p.alt} opacity=".5" />
      ))}
    </Frame>
  )
}

export function Box({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Packaging concept for ${name}`}>
      <Shadow cx={205} cy={245} rx={130} />
      <polygon points="105,110 255,110 255,235 105,235" fill={p.accent} />
      <polygon points="255,110 320,82 320,205 255,235" fill={p.fg} opacity=".9" />
      <polygon points="105,110 170,82 320,82 255,110" fill={p.alt} />
      <Mark kind={mark} p={{ ...p, accent: p.alt, fg: p.fg }} x={180} y={158} scale={0.5} />
      <text x="180" y="212" textAnchor="middle" fontSize="16" fontWeight="700" fill={p.alt}>{name}</text>
      <text x="288" y="170" fontSize="9" fill={p.alt} transform="rotate(-20 288 170)" opacity=".7" letterSpacing="2">Bungoma</text>
    </Frame>
  )
}

export function Tee({ p, name = 'Brand', mark = 0 }) {
  const shirt = p.fg === '#FFFFFF' ? p.alt : p.fg
  const ink = shirt === p.fg ? p.alt : p.fg
  return (
    <Frame p={p} label={`T-shirt branding concept for ${name}`}>
      <Shadow cx={200} cy={268} rx={110} />
      <path
        d="M140 40 L96 56 L46 104 L80 136 L106 114 L106 262 L294 262 L294 114 L320 136 L354 104 L304 56 L260 40 Q200 80 140 40 Z"
        fill={shirt}
      />
      <Mark kind={mark} p={{ ...p, fg: ink, alt: shirt }} x={200} y={140} scale={0.45} />
      <text x="200" y="184" textAnchor="middle" fontSize="13" fontWeight="700" fill={ink} letterSpacing="2">
        {name.toUpperCase()}
      </text>
    </Frame>
  )
}

export function Mug({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Branded mug concept for ${name}`}>
      <Shadow cx={190} cy={232} rx={90} />
      <path d="M240 110 Q300 110 300 150 Q300 190 240 190" fill="none" stroke={p.fg} strokeWidth="14" strokeLinecap="round" />
      <rect x="120" y="76" width="130" height="150" rx="14" fill={p.alt} />
      <rect x="120" y="76" width="130" height="150" rx="14" fill="none" stroke="#000" strokeOpacity=".08" />
      <Mark kind={mark} p={p} x={185} y={140} scale={0.5} />
      <text x="185" y="198" textAnchor="middle" fontSize="14" fontWeight="700" fill={p.fg}>{name}</text>
    </Frame>
  )
}

export function Bag({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Branded bag concept for ${name}`}>
      <Shadow cx={200} cy={252} rx={90} />
      <path d="M165 90 Q165 40 200 40 Q235 40 235 90" fill="none" stroke={p.fg} strokeWidth="8" strokeLinecap="round" />
      <rect x="125" y="86" width="150" height="165" rx="6" fill={p.accent} />
      <polygon points="125,86 275,86 262,102 138,102" fill="#000" opacity=".1" />
      <Mark kind={mark} p={{ ...p, accent: p.alt, fg: p.fg }} x={200} y={158} scale={0.6} />
      <text x="200" y="222" textAnchor="middle" fontSize="15" fontWeight="700" fill={p.alt}>{name}</text>
    </Frame>
  )
}

export function Sign({ p, name = 'Brand', mark = 0 }) {
  const wall = p.bg
  return (
    <Frame p={p} label={`Shopfront signage concept for ${name}`}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="0" y={i * 50} width="400" height="1.5" fill="#000" opacity=".07" />
      ))}
      <rect x="40" y="52" width="320" height="92" rx="6" fill={p.fg} />
      <Mark kind={mark} p={p} x={105} y={98} scale={0.6} />
      <text x="150" y="108" fontSize="30" fontWeight="700" fill={p.alt} letterSpacing="1">{name}</text>
      <rect x="40" y="144" width="320" height="8" fill="#000" opacity=".2" />
      <rect x="60" y="165" width="130" height="115" rx="4" fill={p.alt} stroke={p.fg} strokeOpacity=".15" />
      <rect x="215" y="165" width="125" height="115" rx="4" fill={p.accent} opacity=".9" />
      <rect x="228" y="180" width="99" height="14" rx="3" fill={wall} opacity=".9" />
      <text x="277" y="191" textAnchor="middle" fontSize="9" fontWeight="700" fill={p.fg} letterSpacing="2">OPEN</text>
    </Frame>
  )
}

export function Poster({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Poster concept for ${name}`}>
      <rect x="138" y="38" width="150" height="220" fill="#000" opacity=".12" />
      <rect x="128" y="28" width="150" height="220" fill={p.accent} />
      <circle cx="203" cy="112" r="46" fill={p.fg} />
      <Mark kind={mark} p={{ ...p, accent: p.alt, fg: p.accent }} x={203} y={112} scale={0.55} />
      <text x="143" y="196" fontSize="26" fontWeight="700" fill={p.alt}>BIG</text>
      <text x="143" y="220" fontSize="26" fontWeight="700" fill={p.fg}>IDEAS.</text>
      <rect x="143" y="230" width="60" height="4" rx="2" fill={p.alt} />
    </Frame>
  )
}

export function Social({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Social media graphics concept for ${name}`}>
      <rect x="28" y="70" width="100" height="100" rx="10" fill={p.accent} />
      <Mark kind={mark} p={{ ...p, accent: p.alt, fg: p.fg }} x={78} y={120} scale={0.5} />
      <rect x="150" y="70" width="100" height="100" rx="10" fill={p.fg} />
      <text x="162" y="112" fontSize="17" fontWeight="700" fill={p.alt}>NEW</text>
      <text x="162" y="134" fontSize="17" fontWeight="700" fill={p.accent}>DROP</text>
      <rect x="162" y="146" width="50" height="4" rx="2" fill={p.alt} opacity=".5" />
      <rect x="272" y="70" width="100" height="100" rx="10" fill={p.alt} />
      <circle cx="322" cy="108" r="22" fill={p.accent} opacity=".25" />
      <Mark kind={mark} p={p} x={322} y={108} scale={0.28} />
      <rect x="286" y="144" width="72" height="5" rx="2.5" fill={p.fg} opacity=".25" />
      <rect x="28" y="190" width="100" height="62" rx="10" fill={p.alt} />
      <rect x="150" y="190" width="100" height="62" rx="10" fill={p.accent} opacity=".85" />
      <rect x="272" y="190" width="100" height="62" rx="10" fill={p.fg} />
    </Frame>
  )
}

export function Bottle({ p, name = 'Brand', mark = 0 }) {
  return (
    <Frame p={p} label={`Product label concept for ${name}`}>
      <Shadow cx={200} cy={262} rx={60} />
      <rect x="184" y="26" width="32" height="26" rx="4" fill={p.fg} />
      <path d="M188 50 L212 50 L212 74 Q246 92 246 128 L246 252 Q246 262 236 262 L164 262 Q154 262 154 252 L154 128 Q154 92 188 74 Z" fill={p.accent} opacity=".92" />
      <rect x="154" y="130" width="92" height="100" fill={p.alt} />
      <Mark kind={mark} p={p} x={200} y={166} scale={0.38} />
      <text x="200" y="208" textAnchor="middle" fontSize="12" fontWeight="700" fill={p.fg} letterSpacing="1">{name.toUpperCase()}</text>
      <rect x="176" y="216" width="48" height="3" rx="1.5" fill={p.fg} opacity=".3" />
    </Frame>
  )
}

export const MOCKUPS = { LogoSheet, Cards, Brochure, Box, Tee, Mug, Bag, Sign, Poster, Social, Bottle }
