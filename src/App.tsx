import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showLoading && <LoadingScreen />}
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <Blog />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
