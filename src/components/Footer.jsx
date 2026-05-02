import Logo from './Logo'

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EnvelopeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333H16V2.169C15.547 2.098 14.4 2 13.051 2 9.75 2 7 4.478 7 8.008V8z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM9 17H7v-7h2v7zm1-8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17 17h-2v-4c0-.657-.238-1.333-1.333-1.333-.889 0-1.333.556-1.333 1.333v4h-2v-7h2v.889c.444-.667 1.333-1.333 2.667-1.333 2.667 0 3.333 1.667 3.333 3.667v3.777z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 md:pt-20">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-6">
              <div className="mb-4">
                <Logo size="lg" />
              </div>
              <p className="text-gray-300 text-sm font-light">
                Votre partenaire de confiance pour un nettoyage professionnel de qualité supérieure.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://wa.me/229196849437" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-accent hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-200 cursor-pointer" title="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.122 7.723L2.505 22.25l8.217-2.158c2.226 1.212 4.741 1.856 7.426 1.856 5.436 0 9.834-4.398 9.834-9.834 0-2.619-.963-5.084-2.713-7.017A9.831 9.831 0 0011.83 2.051zm0 17.707c-2.315 0-4.552-.633-6.468-1.833l-.464-.274-4.804 1.262 1.286-4.697-.299-.475A8.848 8.848 0 013.051 11.86c0-4.882 3.97-8.848 8.848-8.848 2.364 0 4.586.921 6.254 2.586 1.667 1.666 2.586 3.89 2.586 6.254 0 4.882-3.97 8.848-8.848 8.848z"/>
                </svg>
              </a>
              <a href="tel:+229196849437" className="w-10 h-10 rounded-lg bg-accent hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-200 cursor-pointer" title="Appel téléphonique">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:contact@djeservices.bj" className="w-10 h-10 rounded-lg bg-accent hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-200 cursor-pointer" title="Email">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Nettoyage Bureaux</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Nettoyage Résidentiel</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Nettoyage Industriel</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Maintenance Régulière</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Antiparasitaire</a></li>
            </ul>
          </div>

          {/* Column 3 - Liens */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Liens</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Accueil</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">À propos</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Témoignages</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors cursor-pointer text-sm">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+229196849437" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent flex items-center justify-center text-gray-400 group-hover:text-white">
                  <PhoneIcon />
                </div>
                <span className="text-sm">+229 1 96 84 94 37</span>
              </a>
              <a href="mailto:contact@djeservices.bj" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent flex items-center justify-center text-gray-400 group-hover:text-white">
                  <EnvelopeIcon />
                </div>
                <span className="text-sm">contact@djeservices.bj</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300 pt-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-gray-400 flex-shrink-0 mt-0.5">
                  <LocationIcon />
                </div>
                <span className="text-sm">Dèkoungbé, Bénin<br />Zone 1, Rue Principale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-6 py-8 text-center md:text-left">
          <div>
            <p className="text-gray-300 text-sm font-light">
              © 2026 DJÊ SERVICES - Tous droits réservés
            </p>
          </div>
          <div className="flex justify-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-accent transition-colors cursor-pointer">Légal</a>
            <a href="#" className="hover:text-accent transition-colors cursor-pointer">Confidentialité</a>
            <a href="#" className="hover:text-accent transition-colors cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
