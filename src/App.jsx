import BCIGate from './components/BCIGate'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import PracticeAreas from './components/PracticeAreas'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <BCIGate />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <PracticeAreas />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
