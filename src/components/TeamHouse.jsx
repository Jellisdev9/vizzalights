// Simulates colored architectural lighting over a real house photo: a bold
// roofline glow in the team's primary color plus a second, lower accent
// glow in the secondary color (echoing a garage/entry lighting zone), so
// the two-tone pairing reads as "this team" at a glance rather than "some
// colored lights." Screen-blended, blurred bars read as light bloom on the
// photo rather than a flat sticker. Not a real installation photo.

function glowLayer(band, color, rotate) {
  return {
    position: 'absolute',
    top: band.top,
    left: band.left,
    right: band.right,
    height: band.height,
    background: color,
    mixBlendMode: 'screen',
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    transformOrigin: 'left center',
  }
}

export default function TeamHouse({ photo, alt, band, colors, rotate = 0 }) {
  const [primary, secondary] = colors

  const topNum = parseFloat(band.top) || 0
  const heightNum = parseFloat(band.height) || 8
  const accentBand = {
    top: `${topNum + heightNum * 1.6}%`,
    left: band.left,
    right: band.right,
    height: `${heightNum * 0.6}%`,
  }

  const primaryGlow = glowLayer(band, primary, rotate)
  const accentGlow = glowLayer(accentBand, secondary, rotate)

  return (
    <>
      <img src={photo} alt={alt} style={{ filter: 'saturate(1.2) contrast(1.05) brightness(0.97)' }} />
      <div style={{ ...primaryGlow, filter: 'blur(24px)', opacity: 1 }} />
      <div style={{ ...primaryGlow, filter: 'blur(6px)', opacity: 0.9 }} />
      <div style={{ ...accentGlow, filter: 'blur(16px)', opacity: 0.95 }} />
      <div style={{ ...accentGlow, filter: 'blur(3px)', opacity: 0.85 }} />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '22%',
          background: `linear-gradient(0deg, ${secondary}70, transparent)`,
          mixBlendMode: 'screen',
          filter: 'blur(12px)',
        }}
      />
    </>
  )
}
