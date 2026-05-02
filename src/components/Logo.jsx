export default function Logo({ size = 'md', loading = 'lazy', className = '' }) {
  const sizes = {
    xs: 'h-6',
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-14',
    xl: 'h-16',
    '2xl': 'h-20',
  }

  return (
    <img
      src="/logo.png"
      alt="DJE Services"
      className={`${sizes[size]} object-contain ${className}`}
      loading={loading}
    />
  )
}
