import { useEffect } from 'react'

const StarIcon = () => (
  <svg className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
)

const testimonials = [
  {
    quote: "La qualité de leur service, impeccable. Je vous le recommande vivement.",
    author: "Mannuella Bodehou",
    role: "Propriétaire d'immeuble",
    rating: 5
  },
  {
    quote: "Service professionnel, rapide et à l'écoute. Je recommande vivement.",
    author: "Odette Kougblenou",
    role: "Administratrice d'entreprise",
    rating: 5
  },
  {
    quote: "Un service très efficace. Je vous le recommande.",
    author: "Godwill Gnimadi",
    role: "Directeur d'établissement",
    rating: 5
  },
  {
    quote: "Meilleur service, je le recommande vivement.",
    author: "Fructueux",
    role: "Client satisfait",
    rating: 5
  }
]

export default function Testimonials() {
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

    document.querySelectorAll('.testimonial-card').forEach(card => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="text-lg font-semibold text-text-muted">4.9/5 - Hautement recommandé</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="testimonial-card scroll-hidden bg-surface rounded-xl p-8 shadow-sm hover:shadow-lg border border-border transition-all duration-300 hover:border-accent/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-text mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text">{testimonial.author}</p>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-text-muted mb-4">Plus de <span className="font-bold text-accent">200 clients satisfaits</span> nous font confiance</p>
          <div className="inline-flex gap-4 bg-surface rounded-lg px-6 py-3 border border-border">
            <span className="font-semibold text-text">✓ Certifiés</span>
            <span className="font-semibold text-text">✓ Assurés</span>
            <span className="font-semibold text-text">✓ Garantis</span>
          </div>
        </div>
      </div>
    </section>
  )
}
