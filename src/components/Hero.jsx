import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=1200&h=800&fit=crop)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
        </div>

        {/* Professional in action image - overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <Logo size="lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          L'excellence de la propreté, <span className="text-accent">à portée de main</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-100 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Depuis 5 ans, DJê Services accompagne entreprises, administrations et particuliers à Godomey et environs avec expertise et professionnalisme.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/229196849437?text=Bonjour%20DJê%20Services,%20je%20souhaite%20demander%20un%20devis" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl inline-block text-center">
            Demander un devis
          </a>
          <a href="#services" className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 backdrop-blur-sm border border-white/30 cursor-pointer inline-block text-center">
            Nos services
          </a>
        </div>
      </div>
    </section>
  )
}
