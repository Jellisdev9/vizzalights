import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Occasions from './components/Occasions.jsx'
import StatBar from './components/StatBar.jsx'
import Gallery from './components/Gallery.jsx'
import ConsultationForm from './components/ConsultationForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top">
      <Nav />
      <Hero />
      <StatBar />
      <Occasions />
      <HowItWorks />
      <Gallery />
      <ConsultationForm />
      <Footer />
    </div>
  )
}
