import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'

function Home() {
  return (
    <div className="portfolio">
      <Header />
      <main className="content">
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default Home
