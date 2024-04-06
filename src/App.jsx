import "./app.scss"
import Contact from "./components/contact/Contact"
import Cursor from "./components/cursor/Cursor"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"

export default function App() {
  return (
    <div>
      <Cursor />
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}
