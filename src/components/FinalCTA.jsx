export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-primary via-primary-light to-primary relative overflow-hidden">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
          Prêt à transformer votre espace ?
        </h2>

        <p className="text-xl md:text-2xl text-white mb-12 font-light max-w-2xl mx-auto drop-shadow-md">
          Obtenez un devis gratuit et découvrez pourquoi plus de 200 clients nous font confiance
        </p>

        <a href="https://wa.me/229196849437?text=Bonjour%20DJê%20Services,%20je%20souhaite%20demander%20un%20devis%20gratuit" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-primary font-bold px-12 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 mb-12 cursor-pointer shadow-xl hover:shadow-2xl inline-block">
          Demander un devis gratuit
        </a>

        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-white text-base font-medium mb-6 drop-shadow-md">Ou appelez-nous directement:</p>
          <a
            href="tel:+229196849437"
            className="text-4xl md:text-5xl font-bold text-white hover:text-yellow-200 transition-colors cursor-pointer inline-block mb-6 drop-shadow-lg"
          >
            +229 1 96 84 94 37
          </a>
          <p className="text-white text-base drop-shadow-md">Disponible 24h/24 et 7j/7 pour vous servir</p>
        </div>
      </div>
    </section>
  )
}
