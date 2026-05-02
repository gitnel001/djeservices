import { useEffect, useRef, useState } from 'react'

const CheckmarkIcon = () => (
  <svg className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" clipRule="evenodd" />
  </svg>
)

const ClipboardIcon = () => (
  <svg className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-3-7H8v2h8v-2z" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
)

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState([false, false, false])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSteps([false, false, false])
            setTimeout(() => setVisibleSteps([true, false, false]), 100)
            setTimeout(() => setVisibleSteps([true, true, false]), 400)
            setTimeout(() => setVisibleSteps([true, true, true]), 700)
          }
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      num: 1,
      title: 'Évaluation des besoins',
      desc: 'Nous analysons vos besoins spécifiques et vos priorités',
      icon: ClipboardIcon
    },
    {
      num: 2,
      title: 'Intervention professionnelle',
      desc: 'Notre équipe qualifiée exécute le travail avec excellence',
      icon: CheckmarkIcon
    },
    {
      num: 3,
      title: 'Suivi et satisfaction',
      desc: 'Nous veillons à votre satisfaction et votre confiance',
      icon: StarIcon
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Comment ça marche
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Un processus simple et transparent pour une satisfaction garantie
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary-light opacity-20"></div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => {
              const IconComponent = step.icon
              const isVisible = visibleSteps[i]

              return (
                <div
                  key={i}
                  className={`relative transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Step Circle */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                        {/* Semi-transparent overlay for better icon visibility */}
                        <div className="absolute inset-0 bg-black/10 rounded-full"></div>
                        <div className="relative z-10">
                          <IconComponent />
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg shadow-md">
                        {step.num}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-text mb-3">{step.title}</h3>
                    <p className="text-text-muted leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
