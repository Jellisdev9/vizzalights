import { useState } from 'react'

const INITIAL = { name: '', email: '', phone: '', city: '', occasion: 'Everyday Elegant', message: '' }

export default function ConsultationForm() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Prototype only — no backend/CRM wired up yet.
    setSubmitted(true)
  }

  return (
    <section className="section section-light" id="consultation">
      <div className="wrap consult-grid">
        <div className="consult-copy">
          <span className="eyebrow" style={{ color: '#9b7327' }}>
            Free Consultation
          </span>
          <h2>See what VizzaLights looks like on your property.</h2>
          <p>
            Tell us a bit about your home or business and we&apos;ll follow up to schedule a
            design walkthrough and quote — no obligation.
          </p>
          <ul className="consult-list">
            <li>Custom fixture layout for your architecture</li>
            <li>Professional, weatherproof installation</li>
            <li>App control with millions of color options</li>
          </ul>
        </div>

        <div className="form-card">
          {submitted ? (
            <div className="form-success">
              <h3>Thanks — we&apos;ll be in touch.</h3>
              <p>Someone from VizzaLights will reach out to schedule your consultation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row two">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row two">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    required
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="occasion">Primary interest</label>
                  <select
                    id="occasion"
                    value={form.occasion}
                    onChange={(e) => update('occasion', e.target.value)}
                  >
                    <option>Everyday Elegant</option>
                    <option>Holiday Colors</option>
                    <option>Team Colors</option>
                    <option>Custom Occasion</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="message">Anything else we should know?</label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </div>
              </div>
              <button className="btn btn-dark" type="submit" style={{ width: '100%' }}>
                Request Consultation
              </button>
              <p className="form-note">
                Prototype form — not yet connected to a CRM or scheduling system.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
