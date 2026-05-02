import { useState } from 'react'

interface Project {
  title: string
  desc: string
  before: string
  after: string
}

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects: Project[] = [
    {
      title: 'Bureau Professionnel',
      desc: 'Nettoyage complet d\'un bureau avec lustrage des surfaces',
      before: '/images/image-7.jpeg',
      after: '/images/image-8.jpeg'
    },
    {
      title: 'Espace Résidentiel',
      desc: 'Nettoyage en profondeur d\'un appartement',
      before: '/images/image-9.jpeg',
      after: '/images/image-10.jpeg'
    },
    {
      title: 'Zone Commerciale',
      desc: 'Nettoyage industriel et entretien régulier',
      before: '/images/image-11.jpeg',
      after: '/images/image-12.jpeg'
    }
  ]

  const project = projects[currentIndex]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Galerie Avant/Après
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Découvrez les transformations spectaculaires de nos projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Before/After Images */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                <img
                  src={project.before}
                  alt="Avant"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-text">
                  AVANT
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                <img
                  src={project.after}
                  alt="Après"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-lg font-bold">
                  APRÈS
                </div>
              </div>
            </div>
          </div>

          {/* Project Info & Navigation */}
          <div className="flex flex-col justify-between h-full">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-text mb-4">
                {project.title}
              </h3>
              <p className="text-lg text-text-muted leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              {/* Dots */}
              <div className="flex gap-3 justify-center md:justify-start">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? 'bg-accent w-8'
                        : 'bg-border hover:bg-accent/50'
                    }`}
                    aria-label={`Projet ${i + 1}`}
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <button
                  onClick={prevProject}
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200"
                  aria-label="Projet précédent"
                >
                  ←
                </button>
                <div className="flex-1 text-center text-text-muted font-medium">
                  {currentIndex + 1} / {projects.length}
                </div>
                <button
                  onClick={nextProject}
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-white hover:bg-orange-600 transition-all duration-200"
                  aria-label="Projet suivant"
                >
                  →
                </button>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/229196849437?text=J'aime%20vos%20projets%20avant/apr%C3%A8s%20!%20Je%20souhaite%20demander%20un%20devis"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-accent hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Réaliser mon projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
