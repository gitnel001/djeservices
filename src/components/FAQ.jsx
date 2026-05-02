import { useState } from 'react'

const faqData = [
  {
    q: "Quels sont les services proposés par DJê Services?",
    a: "DJê Services propose un large gamme de services: nettoyage classique, nettoyage professionnel, nettoyage industriel, lutte antiparasitaire, contrôle des rats et aménagement d'espaces verts."
  },
  {
    q: "Êtes-vous disponible 24h/24?",
    a: "Oui, nous sommes disponibles 24h/24 et 7j/7 pour répondre à vos urgences et planifier vos interventions selon vos besoins."
  },
  {
    q: "Utilisez-vous des produits écologiques?",
    a: "Absolument! Nous utilisons exclusivement des produits écologiques et certifiés pour préserver votre santé et l'environnement."
  },
  {
    q: "Quel est votre zone de couverture?",
    a: "Nous opérons principalement à Godomey et environs, mais nous pouvons discuter de services pour d'autres zones selon vos besoins."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy-dark mb-4">
            Questions Fréquentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left font-bold text-navy-dark flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`accordion-icon text-gold text-2xl transition-transform ${
                  openIndex === i ? 'open' : ''
                }`}>
                  +
                </span>
              </button>

              <div className={`accordion-content overflow-hidden ${
                openIndex === i ? 'open' : ''
              }`}>
                <div className="px-6 py-4 text-charcoal opacity-75 border-t border-gray-200">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
