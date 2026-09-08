// Simulates a colored roofline light strip over a real house photo — a
// blurred, screen-blended gradient bar so it reads as glow bloom on the
// photo rather than a flat sticker. Not a real installation photo.

function buildGradient(colors) {
  const bulb = 8
  const gap = 18
  const step = bulb + gap
  const stops = []
  colors.forEach((c, i) => {
    const start = i * step
    stops.push(`${c} ${start}px`, `${c} ${start + bulb}px`, `transparent ${start + bulb}px`)
  })
  const total = colors.length * step
  stops.push(`transparent ${total}px`)
  return `repeating-linear-gradient(90deg, ${stops.join(', ')})`
}

export default function TeamHouse({ photo, alt, band, colors, rotate = 0 }) {
  const gradient = buildGradient(colors)
  const overlayBase = {
    position: 'absolute',
    top: band.top,
    left: band.left,
    right: band.right,
    height: band.height,
    backgroundImage: gradient,
    backgroundRepeat: 'repeat-x',
    mixBlendMode: 'screen',
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    transformOrigin: 'left center',
  }

  return (
    <>
      <img src={photo} alt={alt} />
      <div style={{ ...overlayBase, filter: 'blur(16px)', opacity: 0.95 }} />
      <div style={{ ...overlayBase, filter: 'blur(3px)', opacity: 0.9 }} />
    </>
  )
}
