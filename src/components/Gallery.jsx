const TILES = [
  'Colonial · roofline outline',
  'Modern build · eave accent',
  'Storefront · brand colors',
  'Backyard patio · ambient',
  'Two-story · gable peaks',
  'Landscape · path accents',
  'Game-day install',
  'Holiday scene',
]

export default function Gallery() {
  return (
    <section className="section section-alt" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>Built for real installations.</h2>
          <p>
            Placeholder tiles — swap in real installation photography and video here once
            available. Labels reflect the kind of shots worth capturing.
          </p>
        </div>
        <div className="gallery-grid">
          {TILES.map((t) => (
            <div className="gallery-tile" key={t}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
