interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  loading?: 'lazy' | 'eager'
  className?: string
}

export default function Logo({ size = 'md', loading = 'lazy', className = '' }: LogoProps) {
  const sizes: Record<LogoProps['size'], string> = {
    xs: 'h-6',
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-14',
    xl: 'h-16',
    '2xl': 'h-20',
  }

  return (
    <img
      src="DJE_logo-removebg-preview (1).png"
      alt="DJE Services"
      className={`${sizes[size]} object-contain ${className}`}
      loading={loading}
    />
  )
}
