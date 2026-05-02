import Logo from './Logo'

export default function LoadingScreen() {
  return (
    <div className="loading-screen bg-primary">
      <div className="flex flex-col items-center gap-4">
        <Logo size="2xl" className="animate-pulse" />
        <div className="loading-text text-white">DJê Services</div>
      </div>
    </div>
  )
}
