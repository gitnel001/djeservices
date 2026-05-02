# Guide de Configuration - DJê Services

## Configuration Post-Déploiement

### 1. Formspree - Formulaire de Contact

Le formulaire de contact est intégré avec **Formspree** (service gratuit).

**Étapes :**

1. Allez sur [formspree.io](https://formspree.io)
2. Créez un nouveau compte avec votre email
3. Créez un nouveau formulaire
4. Copiez votre **Form ID** (format: `f/xyzqwbvl`)
5. Remplacez `xyzqwbvl` dans `src/components/ContactForm.tsx` ligne 11:
   ```typescript
   const response = await fetch('https://formspree.io/f/VOTRE_ID_ICI', {
   ```
6. Les emails du formulaire seront envoyés directement à votre adresse

**Alternative WhatsApp :**
Les boutons de contact redirigent vers WhatsApp. Vérifiez que le numéro +229 51 234 567 dans `src/components/Footer.jsx` est correct.

---

### 2. Google Analytics

Google Analytics est partiellement configuré dans `index.html`.

**Étapes :**

1. Allez sur [google.com/analytics](https://google.com/analytics)
2. Créez une nouvelle propriété pour votre site
3. Récupérez votre **Tracking ID** (format: `G-XXXXXXXXXX`)
4. Remplacez `G-XXXXXXXXXX` dans `index.html` (2 emplacements) :
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-VOTRE_ID_ICI"></script>
   ...
   gtag('config', 'G-VOTRE_ID_ICI');
   ```

---

### 3. Optimisation des Images

Le site inclut un composant `OptimizedImage` pour les images responsives.

**Utilisation :**
```typescript
import OptimizedImage from './components/OptimizedImage'

<OptimizedImage
  src="https://images.unsplash.com/..."
  alt="Description"
  className="w-full h-96 object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

**Avantages :**
- Génère automatiquement srcset responsive
- Support WebP pour les navigateurs modernes
- JPEG par défaut pour compatibilité
- Lazy loading actif par défaut

---

### 4. Meilleures Pratiques

#### Images Locales
Plutôt que Unsplash, utilisez des images réelles de votre entreprise :

1. Créez un dossier `public/images/`
2. Placez vos images locales là
3. Référencez-les : `src="/images/mon-image.jpg"`

#### Formulaire de Contact
Le formulaire supporte :
- Validation HTML5 native
- Messages de succès/erreur
- Champs : Nom, Email, Téléphone, Service, Message

#### Blog
La section Blog est structurée pour :
- Afficher 3 articles récents
- Catégorisation (Conseils, Santé, etc.)
- Dates de publication
- Lien "Lire l'article" (à implémenter)

---

### 5. Fichiers Importants

| Fichier | Description |
|---------|------------|
| `src/App.tsx` | Point d'entrée principal (TypeScript) |
| `src/components/ContactForm.tsx` | Formulaire de contact |
| `src/components/BeforeAfter.tsx` | Galerie avant/après interactive |
| `src/components/Blog.tsx` | Section blog/conseils |
| `src/components/OptimizedImage.tsx` | Component images optimisées |
| `src/types/index.ts` | Types TypeScript partagés |
| `index.html` | Meta tags, analytics, favicon |
| `tailwind.config.js` | Thème et couleurs |

---

### 6. Variables d'Environnement (Futur)

Pour plus de sécurité, vous pouvez ajouter un `.env.local` :

```env
VITE_FORMSPREE_ID=xyzqwbvl
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_PHONE_NUMBER=+22951234567
VITE_EMAIL=contact@djeservices.bj
```

Puis utiliser dans le code :
```typescript
const formspreeId = import.meta.env.VITE_FORMSPREE_ID
```

---

### 7. Déploiement

```bash
# Build production
npm run build

# Prévisualiser
npm run preview

# Tests (si ajoutés)
npm test
```

Fichiers à déployer : tout le contenu du dossier `dist/`

---

### 8. Support TypeScript

Le projet est maintenant compatible TypeScript :
- Fichiers `.tsx` pour les composants React
- Fichiers `.ts` pour les utilitaires
- Fichiers `.jsx` existants continuent de fonctionner

Pour activer TypeScript complet, renommez progressivement `.jsx` → `.tsx`

---

### Questions Fréquentes

**Q: Le formulaire n'envoie pas d'email ?**
A: Vérifiez que vous avez configuré Formspree et remplacé l'ID dans ContactForm.tsx

**Q: Les images sont lentes ?**
A: Utilisez le composant OptimizedImage ou remplacez par des images locales

**Q: Comment ajouter une page ?**
A: Créez un composant dans `src/components/` et importez-le dans `App.tsx`

---

**Dernière mise à jour:** 2 Mai 2026
