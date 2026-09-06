export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark" />
              VizzaLights
            </a>
            <p>The Invisible Lighting System. Every reason, every season, millions of colors.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Site</h4>
              <ul>
                <li><a href="#occasions">Occasions</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#consultation">Consultation</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>Jacksonville, FL</li>
                <li>hello@vizzalights.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VizzaLights.</span>
          <span>
            Prototype build
            <span className="badge-proto">Not affiliated / concept only</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
