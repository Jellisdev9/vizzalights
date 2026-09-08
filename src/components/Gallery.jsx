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
// here even though neither license requires it.
const TILES = [
  { img: colonial, title: 'Colonial', sub: 'Roofline outline', credit: 'Roger Starnes Sr / Unsplash' },
  { img: modern, title: 'Modern Build', sub: 'Eave accent', credit: 'Littlehampton Bricks / Pexels' },
  { img: storefront, title: 'Commercial Facade', sub: 'Accent uplighting', credit: 'Zulfugar Karimov / Pexels' },
  { img: patio, title: 'Backyard Patio', sub: 'Ambient string lights', credit: 'Virginia Marinova / Unsplash' },
  { img: twostory, title: 'Two-Story', sub: 'Gable peaks', credit: 'Binyamin Mellish / Pexels' },
  { img: path, title: 'Landscape', sub: 'Path accents', credit: 'Marcel Eberle / Unsplash' },
  { img: gameday, title: 'Custom Accent', sub: 'Colored lighting', credit: 'Kyle Johnson / Unsplash' },
  { img: holiday, title: 'Holiday', sub: 'Seasonal scene', credit: 'James Wheeler / Pexels' },
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

export default function Gallery() {
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
        </div>
        <div className="gallery-grid">
          {TILES.map((t) => (
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
          ))}
          {TEAM_TILES.map((t) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
