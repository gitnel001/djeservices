import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.target)
      const response = await fetch('https://formspree.io/f/xyzqwbvl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.target.reset()
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Formulaire de Contact
          </h2>
          <p className="text-lg text-text-muted">
            Remplissez ce formulaire et nous vous répondrons rapidement
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface rounded-2xl shadow-lg p-8 md:p-12">
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-text font-semibold mb-2">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="Votre nom"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-text font-semibold mb-2">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="votre@email.com"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-text font-semibold mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              placeholder="+229 XX XX XX XX"
            />
          </div>

          {/* Service */}
          <div className="mb-6">
            <label htmlFor="service" className="block text-text font-semibold mb-2">
              Service demandé
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            >
              <option value="">Sélectionner un service</option>
              <option value="nettoyage-classique">Nettoyage classique</option>
              <option value="nettoyage-professionnel">Nettoyage professionnel</option>
              <option value="nettoyage-industriel">Nettoyage industriel</option>
              <option value="lutte-antiparasitaire">Lutte antiparasitaire</option>
              <option value="controle-rongeurs">Contrôle des rongeurs</option>
              <option value="espaces-verts">Espaces verts</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-text font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
              placeholder="Décrivez votre demande..."
            ></textarea>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
              ✓ Merci ! Votre message a été envoyé avec succès. Nous vous répondrons très bientôt.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
              ✗ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par WhatsApp.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon demande'}
          </button>

          <p className="text-center text-text-muted text-sm mt-6">
            Ou appelez-nous directement : <a href="tel:+229196849437" className="text-accent font-semibold hover:underline">+229 1 96 84 94 37</a>
          </p>
        </form>
      </div>
    </section>
  )
}
