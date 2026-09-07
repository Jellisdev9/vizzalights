// Illustrated night scenes for the gallery — same visual language as the
// hero's HouseScene (thin-stroke silhouettes + glowing LED dots), just one
// fixed "night" look per theme instead of an interactive day/night toggle.

function Leds({ points, colors }) {
  return points.map(([x, y], i) => {
    const c = colors[i % colors.length]
    return (
      <circle
        key={i}
        cx={x}
        cy={y}
        r="3.2"
        fill={c}
        style={{ filter: `drop-shadow(0 0 5px ${c})` }}
      />
    )
  })
}

const STRUCT = { fill: '#191b28', stroke: '#2a2d3d', strokeWidth: 2 }
const GLOW_WINDOW = { fill: '#ffd98a', opacity: 0.85 }

function Colonial() {
  const leds = [
    [160, 60], [120, 95], [90, 110], [230, 110], [200, 95], // pediment
    [70, 110], [70, 200], [250, 110], [250, 200], // wall trim
    [95, 200], [130, 200], [190, 200], [225, 200], // eave
  ]
  return (
    <>
      <path d="M90 110 L160 60 L230 110 Z" {...STRUCT} />
      <rect x="70" y="110" width="180" height="90" {...STRUCT} />
      <rect x="100" y="130" width="26" height="34" rx="1" style={GLOW_WINDOW} />
      <rect x="194" y="130" width="26" height="34" rx="1" style={GLOW_WINDOW} />
      <rect x="147" y="150" width="26" height="50" {...STRUCT} />
      <rect x="140" y="140" width="6" height="60" fill="#2a2d3d" />
      <rect x="174" y="140" width="6" height="60" fill="#2a2d3d" />
      <Leds points={leds} colors={['#ffd98a']} />
    </>
  )
}

function Modern() {
  const leds = [
    [60, 130], [110, 130], [160, 130], [200, 130], [250, 130],
    [150, 90], [180, 90], [210, 90], [240, 90],
  ]
  return (
    <>
      <rect x="60" y="130" width="200" height="70" {...STRUCT} />
      <rect x="150" y="90" width="90" height="110" {...STRUCT} />
      <rect x="75" y="150" width="90" height="40" style={GLOW_WINDOW} opacity={0.75} />
      <rect x="165" y="110" width="55" height="80" style={{ fill: '#6fc6ff', opacity: 0.5 }} />
      <Leds points={leds} colors={['#6fc6ff']} />
    </>
  )
}

function Storefront() {
  const leds = [
    [50, 120], [90, 120], [130, 120], [170, 120], [210, 120], [250, 120], [270, 120],
    [40, 140], [40, 200], [280, 140], [280, 200],
  ]
  return (
    <>
      <rect x="40" y="140" width="240" height="60" {...STRUCT} />
      <rect x="50" y="120" width="220" height="14" {...STRUCT} />
      <rect x="120" y="96" width="80" height="20" rx="4" style={{ fill: '#d7a860', opacity: 0.9 }} />
      {[56, 96, 136, 176, 216].map((x) => (
        <rect key={x} x={x} y="158" width="30" height="30" style={GLOW_WINDOW} opacity={0.7} />
      ))}
      <Leds points={leds} colors={['#d7a860']} />
    </>
  )
}

function Patio() {
  const curve1 = 'M60 90 Q160 130 260 90'
  const curve2 = 'M60 90 Q160 60 260 90'
  const dots = [
    [80, 96], [110, 105], [140, 111], [160, 113], [180, 111], [210, 105], [240, 96],
    [80, 84], [110, 75], [140, 69], [160, 67], [180, 69], [210, 75], [240, 84],
  ]
  return (
    <>
      <rect x="55" y="90" width="8" height="110" fill="#2a2d3d" />
      <rect x="257" y="90" width="8" height="110" fill="#2a2d3d" />
      {[70, 105, 140, 175, 210, 245].map((x) => (
        <rect key={x} x={x} y="82" width="10" height="8" fill="#2a2d3d" />
      ))}
      <path d={curve1} fill="none" stroke="#2a2d3d" strokeWidth="1.5" />
      <path d={curve2} fill="none" stroke="#2a2d3d" strokeWidth="1.5" />
      <ellipse cx="160" cy="185" rx="26" ry="7" fill="#191b28" stroke="#2a2d3d" strokeWidth="1.5" />
      <rect x="152" y="165" width="4" height="20" fill="#2a2d3d" />
      <Leds points={dots} colors={['#ffe1a8']} />
    </>
  )
}

function TwoStory() {
  const leds = [
    [110, 60], [140, 40], [170, 60], [200, 40], [230, 60], // roof peaks
    [80, 90], [80, 200], [260, 90], [260, 200], // wall trim
    [95, 200], [125, 200], [155, 200], [185, 200], [215, 200], [245, 200], // eave
  ]
  return (
    <>
      <path d="M80 90 L110 60 L140 90 Z" {...STRUCT} />
      <path d="M170 90 L200 60 L230 90 Z" {...STRUCT} />
      <rect x="80" y="90" width="180" height="110" {...STRUCT} />
      <line x1="80" y1="145" x2="260" y2="145" stroke="#2a2d3d" strokeWidth="1.5" />
      <rect x="95" y="105" width="24" height="24" style={GLOW_WINDOW} />
      <rect x="222" y="105" width="24" height="24" style={GLOW_WINDOW} />
      <rect x="95" y="160" width="24" height="24" style={GLOW_WINDOW} />
      <rect x="150" y="160" width="30" height="40" {...STRUCT} />
      <rect x="222" y="160" width="24" height="24" style={GLOW_WINDOW} />
      <Leds points={leds} colors={['#b06bff']} />
    </>
  )
}

function PathAccents() {
  const groundLeds = [
    [70, 195], [95, 185], [122, 173], [150, 163], [178, 165], [204, 172], [228, 182],
  ]
  return (
    <>
      <ellipse cx="60" cy="185" rx="16" ry="10" fill="#12141c" opacity="0.6" />
      <ellipse cx="255" cy="190" rx="20" ry="11" fill="#12141c" opacity="0.6" />
      <path d="M195 150 L215 110 L235 150 Z" {...STRUCT} />
      <rect x="196" y="150" width="40" height="45" {...STRUCT} />
      <rect x="205" y="164" width="9" height="9" style={GLOW_WINDOW} />
      <rect x="219" y="164" width="9" height="9" style={GLOW_WINDOW} />
      <rect x="211" y="175" width="8" height="20" fill="#2a2d3d" />
      <path d="M50 200 Q95 170 150 160 Q195 152 225 140" fill="none" stroke="#2a2d3d" strokeWidth="9" strokeLinecap="round" />
      <Leds points={groundLeds} colors={['#6fc6ff']} />
    </>
  )
}

function GameDay() {
  const leds = [
    [90, 130], [120, 100], [150, 130], [70, 130], [70, 200], [230, 130], [230, 200],
    [90, 200], [120, 200], [150, 200], [180, 200], [210, 200],
  ]
  return (
    <>
      <path d="M70 130 L150 70 L230 130 Z" {...STRUCT} />
      <rect x="70" y="130" width="160" height="70" {...STRUCT} />
      <rect x="105" y="150" width="26" height="26" style={GLOW_WINDOW} />
      <rect x="169" y="150" width="26" height="26" style={GLOW_WINDOW} />
      <line x1="150" y1="70" x2="150" y2="30" stroke="#2a2d3d" strokeWidth="2" />
      <path d="M150 30 L184 40 L150 50 Z" fill="#ff4d4d" />
      <Leds points={leds} colors={['#ff4d4d', '#ffffff', '#2b6fff']} />
    </>
  )
}

function Holiday() {
  const houseLeds = [
    [90, 130], [120, 100], [150, 130], [70, 130], [70, 200], [230, 130], [230, 200],
    [90, 200], [180, 200], [210, 200],
  ]
  const treeLeds = [
    [258, 200], [292, 200], [263, 180], [287, 180], [267, 163], [283, 163], [275, 148],
  ]
  return (
    <>
      <path d="M70 130 L150 70 L230 130 Z" {...STRUCT} />
      <rect x="70" y="130" width="160" height="70" {...STRUCT} />
      <rect x="90" y="150" width="26" height="26" style={GLOW_WINDOW} />
      <rect x="184" y="150" width="26" height="26" style={GLOW_WINDOW} />
      <rect x="139" y="160" width="22" height="40" {...STRUCT} />
      <circle cx="150" cy="172" r="8" fill="none" stroke="#2ecc71" strokeWidth="2.5" />
      <path d="M258 200 L292 200 L275 175 Z" fill="#12141c" stroke="#2a2d3d" strokeWidth="1.5" />
      <path d="M263 180 L287 180 L275 160 Z" fill="#12141c" stroke="#2a2d3d" strokeWidth="1.5" />
      <path d="M267 163 L283 163 L275 145 Z" fill="#12141c" stroke="#2a2d3d" strokeWidth="1.5" />
      <Leds points={houseLeds} colors={['#ff3b3b', '#2ecc71']} />
      <Leds points={treeLeds} colors={['#2ecc71', '#ff3b3b']} />
    </>
  )
}

const SCENES = {
  colonial: Colonial,
  modern: Modern,
  storefront: Storefront,
  patio: Patio,
  twostory: TwoStory,
  path: PathAccents,
  gameday: GameDay,
  holiday: Holiday,
}

export default function GalleryScene({ type }) {
  const Scene = SCENES[type]
  return (
    <div className="scene is-night gallery-scene">
      <div className="scene-stars" />
      <div className="scene-moon" />
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <Scene />
      </svg>
      <div className="scene-ground" />
    </div>
  )
}
