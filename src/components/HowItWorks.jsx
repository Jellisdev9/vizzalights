const STEPS = [
  {
    n: '01',
    title: 'Design Consultation',
    body: 'We walk your property, measure rooflines and features, and design a fixture layout tailored to your architecture — no ladders or guesswork on your end.',
  },
  {
    n: '02',
    title: 'Professional Installation',
    body: 'Low-voltage, weatherproof fixtures are mounted discreetly along trim, eaves, and accents so nothing is visible in daylight.',
  },
  {
    n: '03',
    title: 'Control Any Occasion',
    body: 'Switch looks from an app in seconds — everyday warm white, holiday colors, team colors on game day, or a fully custom scene.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section section-alt" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How It Works</span>
          <h2>From consultation to color, in three steps.</h2>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
