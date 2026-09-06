const OCCASIONS = [
  { key: 'everyday', title: 'Everyday Elegant', body: 'Soft warm white for year-round curb appeal.' },
  { key: 'holiday', title: 'Holiday Colors', body: 'Festive palettes for every holiday, no ladders.' },
  { key: 'team', title: 'Team Colors', body: 'Rep your team on game day, city-wide.' },
  { key: 'custom', title: 'Custom Occasions', body: 'Birthdays, gender reveals, anything you imagine.' },
]

export default function Occasions() {
  return (
    <section className="section" id="occasions">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Every Reason, Every Season</span>
          <h2>One system. Millions of colors. Any occasion.</h2>
        </div>
        <div className="occasion-grid">
          {OCCASIONS.map((o) => (
            <div className={`occasion-card occ-${o.key}`} key={o.key}>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
