export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="rounded-2xl h-96 relative overflow-hidden shadow-lg">
            <img
              src="/image-13.jpeg"
              alt="Équipe DJE Services"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute top-6 left-6 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold">
              5 ans d'expérience
            </div>
            <div className="absolute bottom-6 right-6 bg-white text-text px-4 py-2 rounded-lg text-sm font-semibold">
              Équipe certifiée
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Pourquoi nous choisir?
            </h2>

            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              DJê Services s'engage à fournir les plus hauts standards de nettoyage et d'entretien professionnel. Notre équipe dévouée apporte expertise, rigueur et passion à chaque projet.
            </p>

            <ul className="space-y-4 mb-8">
              {['Équipe qualifiée et expérimentée', 'Produits écologiques et certifiés', 'Tarifs compétitifs et transparents', 'Disponibilité 24h/24 et 7j/7', 'Garantie de satisfaction 100%'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/229196849437?text=Bonjour%20DJê%20Services,%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
