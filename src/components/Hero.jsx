import { useState } from 'react'
import HouseScene from './HouseScene.jsx'

const PRESETS = [
  { name: 'Warm White', colors: ['#ffd98a'] },
  { name: 'Ice Blue', colors: ['#6fc6ff'] },
  { name: 'Team Colors', colors: ['#ff4d4d', '#ffffff', '#2b6fff'] },
  { name: 'Holiday', colors: ['#ff3b3b', '#2ecc71'] },
  { name: 'Royal Purple', colors: ['#b06bff'] },
  { name: 'Sunset Gold', colors: ['#ffb347'] },
]

export default function Hero() {
  const [isNight, setIsNight] = useState(true)
  const [preset, setPreset] = useState(PRESETS[0])

  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div>
          <span className="eyebrow">Permanent Architectural Lighting</span>
          <h1>
            Discreet by day. <em>Extraordinary</em> at night.
          </h1>
          <p className="lede">
            VizzaLights installs a permanent lighting system that disappears into your
            architecture in daylight and transforms it after dark — everyday elegance,
            holiday color, team pride, or a custom look for any occasion, controlled from
            your phone in millions of colors.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="#consultation">
              Get a Free Consultation
            </a>
            <a className="btn btn-ghost" href="#occasions">
              See It In Action
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <b>Millions</b>
              <span>of colors, one system</span>
            </div>
            <div className="hero-stat">
              <b>100%</b>
              <span>invisible by day</span>
            </div>
            <div className="hero-stat">
              <b>Pro</b>
              <span>installed &amp; weatherproof</span>
            </div>
          </div>
        </div>

        <div className="scene-card">
          <div className={`scene ${isNight ? 'is-night' : 'is-day'}`}>
            <div className="scene-stars" />
            <div className="scene-sun" />
            <div className="scene-moon" />
            <HouseScene isNight={isNight} colors={preset.colors} />
            <div className="scene-ground" />
          </div>

          <div className="scene-caption">
            <p>Try it — toggle day and night, then pick a lighting mood below.</p>
            <div className="day-night-toggle" role="tablist" aria-label="Preview time of day">
              <button
                type="button"
                className={!isNight ? 'active' : ''}
                onClick={() => setIsNight(false)}
              >
                Day
              </button>
              <button
                type="button"
                className={isNight ? 'active' : ''}
                onClick={() => setIsNight(true)}
              >
                Night
              </button>
            </div>
          </div>

          <div className="swatch-row" role="group" aria-label="Lighting presets">
            {PRESETS.map((p) => (
              <button
                key={p.name}
                type="button"
                title={p.name}
                aria-label={p.name}
                className={`swatch ${preset.name === p.name ? 'active' : ''}`}
                style={{
                  background:
                    p.colors.length > 1
                      ? `conic-gradient(${p.colors.join(', ')})`
                      : p.colors[0],
                }}
                onClick={() => setPreset(p)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
