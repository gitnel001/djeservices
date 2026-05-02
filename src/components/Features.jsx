const TargetIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const LeafGreenIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.92 7.02C17.45 4.18 14.97 2 12 2c-2.97 0-5.45 2.18-5.92 5.02C5.5 7.33 4 9.22 4 11.5c0 3.31 2.69 6 6 6h8c3.31 0 6-2.69 6-6 0-2.28-1.5-4.17-3.08-5.48zM12 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
  </svg>
)

const BoltIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
  </svg>
)

const CreditCardIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 8H4V4h16m0 12H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-1-5H5v2h14V7z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
)

export default function Features() {
  const features = [
    { icon: TargetIcon, title: 'Expertise Éprouvée', desc: '5 ans d\'expérience dans le secteur du nettoyage' },
    { icon: UsersIcon, title: 'Équipe Professionnelle', desc: 'Agents formés et certifiés' },
    { icon: LeafGreenIcon, title: 'Écologique', desc: 'Produits respectueux de l\'environnement' },
    { icon: BoltIcon, title: 'Efficacité', desc: 'Résultats garantis et rapides' },
    { icon: CreditCardIcon, title: 'Tarifs Justes', desc: 'Devis gratuit et transparent' },
    { icon: ShieldIcon, title: 'Confiance', desc: 'Assurance responsabilité civile' }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary-light/5 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-text text-center mb-16">
          Pourquoi nous préférer?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const IconComponent = feature.icon
            return (
              <div key={i} className="bg-surface rounded-xl p-8 shadow-sm hover:shadow-lg border border-border transition-all duration-200 hover:border-accent/30">
                <div className="mb-4">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
