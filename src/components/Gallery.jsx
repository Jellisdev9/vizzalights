import GalleryScene from './GalleryScene.jsx'

const TILES = [
  { id: 'colonial', title: 'Colonial', sub: 'Roofline outline' },
  { id: 'modern', title: 'Modern Build', sub: 'Eave accent' },
  { id: 'storefront', title: 'Storefront', sub: 'Brand colors' },
  { id: 'patio', title: 'Backyard Patio', sub: 'Ambient string lights' },
  { id: 'twostory', title: 'Two-Story', sub: 'Gable peaks' },
  { id: 'path', title: 'Landscape', sub: 'Path accents' },
  { id: 'gameday', title: 'Game Day', sub: 'Team colors' },
  { id: 'holiday', title: 'Holiday', sub: 'Seasonal scene' },
]

export default function Gallery() {
  return (
    <section className="section section-alt" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>Every install, its own look.</h2>
          <p>
            Illustrated concept scenes — swap in real installation photography and video
            here once available. Each one previews a different install style the system
            supports.
          </p>
        </div>
        <div className="gallery-grid">
          {TILES.map((t) => (
            <div className="gallery-tile" key={t.id}>
              <GalleryScene type={t.id} />
              <div className="gallery-caption">
                <span className="gallery-caption-title">{t.title}</span>
                <span className="gallery-caption-sub">{t.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
