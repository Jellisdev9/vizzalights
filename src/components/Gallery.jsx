import colonial from '../assets/gallery/colonial.jpg'
import modern from '../assets/gallery/modern.jpg'
import storefront from '../assets/gallery/storefront.jpg'
import patio from '../assets/gallery/patio.jpg'
import twostory from '../assets/gallery/twostory.jpg'
import path from '../assets/gallery/path.jpg'
import gameday from '../assets/gallery/gameday.jpg'
import holiday from '../assets/gallery/holiday.jpg'
import TeamHouse from './TeamHouse.jsx'

// Reference photography only — none of these are real VizzaLights installs
// (see footer disclaimer). Free-license stock (Unsplash/Pexels), credited
// here even though neither license requires it. `category` maps each tile
// back to the matching card in the Occasions section ("Every Reason, Every
// Season") so clicking a card can filter down to its examples here.
const TILES = [
  { img: colonial, title: 'Colonial', sub: 'Roofline outline', credit: 'Roger Starnes Sr / Unsplash', category: 'everyday' },
  { img: modern, title: 'Modern Build', sub: 'Eave accent', credit: 'Littlehampton Bricks / Pexels', category: 'everyday' },
  { img: storefront, title: 'Commercial Facade', sub: 'Accent uplighting', credit: 'Zulfugar Karimov / Pexels', category: 'everyday' },
  { img: patio, title: 'Backyard Patio', sub: 'Ambient string lights', credit: 'Virginia Marinova / Unsplash', category: 'custom' },
  { img: twostory, title: 'Two-Story', sub: 'Gable peaks', credit: 'Binyamin Mellish / Pexels', category: 'everyday' },
  { img: path, title: 'Landscape', sub: 'Path accents', credit: 'Marcel Eberle / Unsplash', category: 'everyday' },
  { img: gameday, title: 'Custom Accent', sub: 'Colored lighting', credit: 'Kyle Johnson / Unsplash', category: 'custom' },
  { img: holiday, title: 'Holiday', sub: 'Seasonal scene', credit: 'James Wheeler / Pexels', category: 'holiday' },
]

// Simulated: real base photos with a digitally added roofline light strip in
// real team color palettes — not real installations, flagged as such below.
const TEAM_TILES = [
  {
    photo: twostory,
    title: 'Jacksonville Jaguars',
    sub: 'Teal & gold',
    credit: 'Binyamin Mellish / Pexels',
    colors: ['#00778B', '#D7A22A'],
    band: { top: '43%', left: '8%', right: '10%', height: '8%' },
  },
  {
    photo: modern,
    title: 'Kansas City Chiefs',
    sub: 'Red & gold',
    credit: 'Littlehampton Bricks / Pexels',
    colors: ['#E31837', '#FFB612'],
    band: { top: '11%', left: '9%', right: '43%', height: '15%' },
    rotate: -8,
  },
]

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'everyday', label: 'Everyday Elegant' },
  { key: 'holiday', label: 'Holiday Colors' },
  { key: 'team', label: 'Team Colors' },
  { key: 'custom', label: 'Custom Occasions' },
]

const ALL_TILES = [
  ...TILES.map((t) => ({ ...t, kind: 'photo' })),
  ...TEAM_TILES.map((t) => ({ ...t, kind: 'team', category: 'team' })),
]

export default function Gallery({ filter = 'all', onFilterChange }) {
  const visible = filter === 'all' ? ALL_TILES : ALL_TILES.filter((t) => t.category === filter)
  const activeLabel = CATEGORIES.find((c) => c.key === filter)?.label

  return (
    <section className="section section-alt" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>Every install, its own look.</h2>
          <p>
            Reference photography, not real VizzaLights installs — swap in real project
            photos and video here once available. Each one previews a different install
            style the system supports.
          </p>
          <div className="gallery-filters" role="tablist" aria-label="Filter gallery by occasion">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                className={`gallery-filter-pill${filter === c.key ? ' is-active' : ''}`}
                aria-pressed={filter === c.key}
                onClick={() => onFilterChange?.(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        {filter !== 'all' && (
          <p className="gallery-filter-note">
            Showing: <strong>{activeLabel}</strong> —{' '}
            <button type="button" className="gallery-filter-clear" onClick={() => onFilterChange?.('all')}>
              show all
            </button>
          </p>
        )}
        <div className="gallery-grid">
          {visible.map((t) =>
            t.kind === 'team' ? (
              <div className="gallery-tile" key={t.title}>
                <div className="gallery-media">
                  <TeamHouse
                    photo={t.photo}
                    alt={`${t.title} — ${t.sub} (simulated)`}
                    band={t.band}
                    colors={t.colors}
                    rotate={t.rotate}
                  />
                </div>
                <span className="gallery-sim-badge">Simulated</span>
                <div className="gallery-caption">
                  <span className="gallery-caption-title">{t.title}</span>
                  <span className="gallery-caption-sub">{t.sub}</span>
                  <span className="gallery-credit">Photo: {t.credit} — lighting added digitally</span>
                </div>
              </div>
            ) : (
              <div className="gallery-tile" key={t.title}>
                <div className="gallery-media">
                  <img src={t.img} alt={`${t.title} — ${t.sub}`} loading="lazy" />
                </div>
                <div className="gallery-caption">
                  <span className="gallery-caption-title">{t.title}</span>
                  <span className="gallery-caption-sub">{t.sub}</span>
                  <span className="gallery-credit">Photo: {t.credit}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
