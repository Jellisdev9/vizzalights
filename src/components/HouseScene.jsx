import { useMemo } from 'react'

// Roofline + trim points the LED dots sit on, expressed as [x, y] on a 400x260 viewBox.
const LED_POINTS = [
  [40, 150], [70, 118], [100, 86], [130, 118], [160, 150], // left roof slope
  [200, 150], [230, 118], [260, 86], [290, 118], [320, 150], // right roof slope
  [40, 150], [40, 210], // left wall trim
  [320, 150], [320, 210], // right wall trim
  [40, 210], [90, 210], [140, 210], [190, 210], [240, 210], [290, 210], [320, 210], // eave line
]

export default function HouseScene({ isNight, colors }) {
  const dotColors = useMemo(() => {
    if (colors.length === 1) return LED_POINTS.map(() => colors[0])
    return LED_POINTS.map((_, i) => colors[i % colors.length])
  }, [colors])

  return (
    <svg viewBox="0 0 360 230" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* roof */}
      <path
        className="house-body"
        d="M20 150 L100 70 L180 150 Z M180 150 L260 70 L340 150 Z"
        strokeWidth="2"
      />
      {/* walls */}
      <rect className="house-body" x="20" y="150" width="320" height="60" strokeWidth="2" />
      {/* windows */}
      <rect className="house-window" x="55" y="168" width="34" height="26" rx="2" />
      <rect className="house-window" x="150" y="168" width="34" height="26" rx="2" />
      <rect className="house-window" x="245" y="168" width="34" height="26" rx="2" />
      {/* door */}
      <rect className="house-body" x="185" y="168" width="30" height="42" strokeWidth="2" />

      {/* LED trim */}
      {LED_POINTS.map(([x, y], i) => (
        <circle
          key={i}
          className="led-dot"
          cx={x}
          cy={y}
          r="3.4"
          fill={dotColors[i]}
          style={isNight ? { filter: `drop-shadow(0 0 6px ${dotColors[i]})` } : undefined}
        />
      ))}
    </svg>
  )
}
