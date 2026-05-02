interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  loading?: 'lazy' | 'eager'
  width?: number
  height?: number
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  width,
  height
}: OptimizedImageProps) {
  // Générer les URLs srcset pour Unsplash
  const generateUnsplashSrcset = (url: string) => {
    const params = url.includes('?') ? '&' : '?'
    return [
      `${url}${params}w=320&q=50 320w`,
      `${url}${params}w=640&q=50 640w`,
      `${url}${params}w=960&q=50 960w`,
      `${url}${params}w=1280&q=50 1280w`,
    ].join(', ')
  }

  // Générer les URLs WebP (pour Unsplash)
  const generateWebpSrcset = (url: string) => {
    const params = url.includes('?') ? '&' : '?'
    return [
      `${url}${params}fm=webp&w=320&q=50 320w`,
      `${url}${params}fm=webp&w=640&q=50 640w`,
      `${url}${params}fm=webp&w=960&q=50 960w`,
      `${url}${params}fm=webp&w=1280&q=50 1280w`,
    ].join(', ')
  }

  return (
    <picture>
      {/* WebP format pour les navigateurs modernes */}
      <source
        srcSet={generateWebpSrcset(src)}
        sizes={sizes}
        type="image/webp"
      />
      {/* Format JPEG par défaut */}
      <img
        src={src}
        srcSet={generateUnsplashSrcset(src)}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
      />
    </picture>
  )
}
