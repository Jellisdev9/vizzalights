import colonial from '../assets/gallery/colonial.jpg'
import holiday from '../assets/gallery/holiday.jpg'
import twostory from '../assets/gallery/twostory.jpg'
import gameday from '../assets/gallery/gameday.jpg'

const OCCASIONS = [
  {
    key: 'everyday',
    title: 'Everyday Elegant',
    body: 'Soft warm white for year-round curb appeal.',
    img: colonial,
  },
  {
    key: 'holiday',
    title: 'Holiday Colors',
    body: 'Festive palettes for every holiday, no ladders.',
    img: holiday,
  },
  {
    key: 'team',
    title: 'Team Colors',
    body: 'Rep your team on game day, city-wide.',
    img: twostory,
    tint: 'linear-gradient(125deg, rgba(0,168,196,0.6), rgba(227,24,55,0.35) 55%, rgba(255,182,18,0.55))',
  },
  {
    key: 'custom',
    title: 'Custom Occasions',
    body: 'Birthdays, gender reveals, anything you imagine.',
    img: gameday,
  },
]

export default function Occasions({ onSelect }) {
  return (
    <section className="section" id="occasions">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Every Reason, Every Season</span>
          <h2>One system. Millions of colors. Any occasion.</h2>
        </div>
        <div className="occasion-grid">
          {OCCASIONS.map((o) => (
            <button
              type="button"
              className={`occasion-card occ-${o.key}`}
              key={o.key}
              style={{
                backgroundImage: o.tint ? `${o.tint}, url(${o.img})` : `url(${o.img})`,
              }}
              onClick={() => onSelect?.(o.key)}
            >
              <h3>{o.title}</h3>
              <p>{o.body}</p>
              <span className="occasion-cta">See examples →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
