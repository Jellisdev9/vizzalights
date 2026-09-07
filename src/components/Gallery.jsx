import colonial from '../assets/gallery/colonial.jpg'
import modern from '../assets/gallery/modern.jpg'
import storefront from '../assets/gallery/storefront.jpg'
import patio from '../assets/gallery/patio.jpg'
import twostory from '../assets/gallery/twostory.jpg'
import path from '../assets/gallery/path.jpg'
import gameday from '../assets/gallery/gameday.jpg'
import holiday from '../assets/gallery/holiday.jpg'

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
              <img src={t.img} alt={`${t.title} — ${t.sub}`} loading="lazy" />
              <div className="gallery-caption">
                <span className="gallery-caption-title">{t.title}</span>
                <span className="gallery-caption-sub">{t.sub}</span>
                <span className="gallery-credit">Photo: {t.credit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
