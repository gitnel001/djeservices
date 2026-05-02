import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-surface shadow-lg' : 'bg-white/10 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo size="md" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={`font-medium relative transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300 ${
            isScrolled ? 'text-text' : 'text-white'
          }`}>Accueil</a>
          <a href="#services" className={`font-medium relative transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300 ${
            isScrolled ? 'text-text' : 'text-white'
          }`}>Services</a>
          <a href="#about" className={`font-medium relative transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300 ${
            isScrolled ? 'text-text' : 'text-white'
          }`}>À propos</a>
          <a href="#testimonials" className={`font-medium relative transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300 ${
            isScrolled ? 'text-text' : 'text-white'
          }`}>Témoignages</a>
          <a href="#contact" className={`font-medium relative transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300 ${
            isScrolled ? 'text-text' : 'text-white'
          }`}>Contact</a>
        </div>

        {/* CTA Button */}
        <a href="https://wa.me/229196849437?text=Bonjour%20DJê%20Services,%20je%20souhaite%20demander%20un%20devis" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-accent hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 cursor-pointer inline-block">
          Demander un devis
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl cursor-pointer ${
            isScrolled ? 'text-text' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-surface shadow-lg p-6 flex flex-col gap-4 md:hidden">
            <a href="#home" className="text-text hover:text-accent font-medium transition-colors cursor-pointer">Accueil</a>
            <a href="#services" className="text-text hover:text-accent font-medium transition-colors cursor-pointer">Services</a>
            <a href="#about" className="text-text hover:text-accent font-medium transition-colors cursor-pointer">À propos</a>
            <a href="#testimonials" className="text-text hover:text-accent font-medium transition-colors cursor-pointer">Témoignages</a>
            <a href="#contact" className="text-text hover:text-accent font-medium transition-colors cursor-pointer">Contact</a>
            <a href="https://wa.me/229196849437?text=Bonjour%20DJê%20Services,%20je%20souhaite%20demander%20un%20devis" target="_blank" rel="noopener noreferrer" className="bg-accent text-white font-semibold px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-orange-600 transition-colors inline-block text-center">
              Demander un devis
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
