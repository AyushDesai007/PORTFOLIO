import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio">
      <Header />

      <main className="content">
        <About />
        <Skills />

        <section className="card contact-card">
          <h3>Get in Touch</h3>
          <p>Email: 24it012@charusat.edu.in</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
