export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" />
          VizzaLights
        </a>
        <ul className="nav-links">
          <li><a href="#occasions">Occasions</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
        <a className="btn btn-gold nav-cta" href="#consultation">
          Get a Free Consultation
        </a>
      </div>
    </header>
  )
}
