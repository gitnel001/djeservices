# DJê Services - Professional Cleaning Website

A modern, responsive website for DJê Services, a professional cleaning company based in Godomey, Bénin. Built with React, Vite, and Tailwind CSS for optimal performance and user experience.

## Features

- **Responsive Design** - Mobile-first approach with full responsiveness across devices
- **Modern UI** - Clean, professional interface with smooth animations
- **Service Showcase** - Detailed presentation of cleaning services offered
- **Before/After Gallery** - Visual proof of service quality
- **Client Testimonials** - Real customer feedback and ratings
- **FAQ Section** - Common questions and answers
- **Contact Form** - Lead capture with form validation
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Performance** - Fast loading with optimized assets and code splitting

## Tech Stack

- **React 19** - UI framework
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and consistency
- **JavaScript ES Modules** - Modern JavaScript standards

## Project Structure

```
src/
├── components/
│   ├── About.jsx          # Company information section
│   ├── BackToTop.jsx      # Scroll-to-top button
│   ├── BeforeAfter.jsx    # Before/after image gallery
│   ├── ContactForm.jsx    # Lead capture form
│   ├── FAQ.jsx            # Frequently asked questions
│   ├── Features.jsx       # Service features
│   ├── FinalCTA.jsx       # Final call-to-action
│   ├── Footer.jsx         # Site footer
│   ├── Hero.jsx           # Landing hero section
│   ├── HowItWorks.jsx     # Service process explanation
│   ├── LoadingScreen.jsx  # Initial loading animation
│   ├── Logo.jsx           # Company logo component
│   ├── Navbar.jsx         # Navigation bar
│   ├── Services.jsx       # Main services listing
│   ├── Stats.jsx          # Key metrics display
│   └── Testimonials.jsx   # Customer reviews section
├── App.jsx                # Main application component
└── main.jsx              # React entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd djesrvices-site
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` with automatic reload on file changes.

### Building

Create an optimized production build:

```bash
npm run build
```

Output files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## Deployment

The site is deployed on Vercel. Static assets are served from the `public/` directory.

### Deployment Checklist

- [ ] Update Google Analytics tracking ID in `index.html`
- [ ] Configure environment variables if needed
- [ ] Test all contact forms and integrations
- [ ] Verify images load correctly from `public/images/`
- [ ] Test mobile responsiveness
- [ ] Run production build locally to verify

## Content Management

### Updating Services
Edit the `Services.jsx` component to add, remove, or modify offered services.

### Modifying Testimonials
Update testimonials in the `Testimonials.jsx` component with client feedback.

### Contact Form Integration
The `ContactForm.jsx` component handles lead capture. Configure backend integration as needed.

### Images
Place images in `public/images/` directory. Update image paths in components accordingly.

## Performance Notes

- Initial page load includes a 1.5s loading animation (`LoadingScreen`)
- Images are optimized for web delivery
- Code is minified and tree-shaken during production build
- Service uses modern browser APIs with appropriate fallbacks

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

When modifying components:
1. Maintain responsive design principles
2. Follow existing code structure and naming conventions
3. Test on mobile and desktop viewports
4. Ensure accessibility standards are met
5. Run linting before committing

## License

Private project for DJê Services.
