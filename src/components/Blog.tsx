interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: '5 conseils pour maintenir un espace de travail propre',
      excerpt: 'Un environnement de travail propre booste la productivité. Découvrez nos meilleurs conseils pour garder vos bureaux impeccables.',
      date: '15 Décembre 2024',
      category: 'Conseils',
      image: '/image-14.jpeg'
    },
    {
      id: 2,
      title: 'Comment éliminer naturellement les acariens de votre maison',
      excerpt: 'Les acariens peuvent causer des problèmes respiratoires. Apprenez comment les éliminer de façon écologique et naturelle.',
      date: '10 Décembre 2024',
      category: 'Santé',
      image: '/image-15.jpeg'
    },
    {
      id: 3,
      title: 'L\'importance du nettoyage régulier pour la santé de votre famille',
      excerpt: 'Un environnement propre est la clé d\'une famille saine. Découvrez pourquoi le nettoyage régulier est indispensable.',
      date: '5 Décembre 2024',
      category: 'Santé',
      image: '/image-16.jpeg'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Blog & Conseils
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Découvrez nos articles et conseils pour un environnement plus propre et sain
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted">{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-2 hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all duration-200"
                >
                  Lire l'article
                  <span className="ml-2">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Voir tous les articles
          </a>
        </div>
      </div>
    </section>
  )
}
