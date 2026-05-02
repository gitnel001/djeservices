import { useEffect } from 'react'

const services = [
  {
    icon: 'SparklesIcon',
    title: 'Nettoyage classique',
    desc: 'Entretien régulier des locaux et habitations',
    image: '/image-1.jpeg'
  },
  {
    icon: 'CheckCircleIcon',
    title: 'Nettoyage professionnel',
    desc: 'Techniques spécialisées, résultats irréprochables',
    image: '/image-2.jpeg'
  },
  {
    icon: 'BuildingOfficeIcon',
    title: 'Nettoyage industriel',
    desc: 'Usines, ateliers, zones de production',
    image: '/image-3.jpeg'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Lutte antiparasitaire',
    desc: 'Traitement préventif et curatif contre les nuisibles',
    image: '/image-4.jpeg'
  },
  {
    icon: 'ExclamationTriangleIcon',
    title: 'Contrôle des rongeurs',
    desc: 'Élimination ciblée des rongeurs',
    image: '/image-5.jpeg'
  },
  {
    icon: 'LeafIcon',
    title: 'Espaces verts',
    desc: 'Tonte, taille, désherbage, aménagement paysager',
    image: '/image-6.jpeg'
  }
]

// SVG Icons (Heroicons)
const SparklesIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.566 12.75a3 3 0 11-6 0 3 3 0 016 0zM17.918 5.684a3 3 0 11-6 0 3 3 0 016 0zM12.75 20.066a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.061l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
)

const BuildingOfficeIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15a3 3 0 003 3h12a3 3 0 003-3V4.11a1.5 1.5 0 00-2.3-1.269l-.915.738A2.25 2.25 0 0013.5 4.5H10.5a2.25 2.25 0 00-1.285.401l-.915-.738z" />
    <path fillRule="evenodd" d="M6 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75A.75.75 0 006 9zm2 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75A.75.75 0 008 9zm2 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75A.75.75 0 0010 9zm2 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75zm2 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75zM6 12a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75zm2 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75zm2 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75zm2 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75zm2 0a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75z" clipRule="evenodd" />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0l-5.655 5.659a.75.75 0 00-.1.823l1.21 2.02c.04.065.102.126.166.165l5.694-5.698a.75.75 0 10-1.061-1.061L6.38 6.56a.75.75 0 00-.1.823l1.21 2.02c.04.065.102.126.166.165l5.694-5.698 5.655 5.659a.75.75 0 10 1.06-1.061L12.516 2.17z" clipRule="evenodd" />
  </svg>
)

const ExclamationTriangleIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9.401 3.003c1.492-2.089 5.106-2.089 6.598 0l7.355 10.369c1.494 2.089.235 5.465-3.299 5.465H5.345c-3.534 0-4.794-3.376-3.299-5.465L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
)

const LeafIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.5 3.75a6 6 0 00-5.98 6.496c.24 2.94 2.52 5.36 5.4 5.89V19.5a4.5 4.5 0 004.5 4.5h3a4.5 4.5 0 004.5-4.5V9.237c2.88-.53 5.16-2.95 5.4-5.89A6 6 0 0016.5 3.75h-9z" />
  </svg>
)

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('scroll-visible')
          }, index * 100)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const icons = {
    SparklesIcon,
    CheckCircleIcon,
    BuildingOfficeIcon,
    ShieldCheckIcon,
    ExclamationTriangleIcon,
    LeafIcon,
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins de nettoyage et d'entretien professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const IconComponent = icons[service.icon]
            return (
              <div
                key={i}
                className="service-card scroll-hidden bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg border-l-4 border-l-border hover:border-l-accent transition-all duration-300"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">{service.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
