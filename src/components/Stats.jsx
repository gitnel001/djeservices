import { useEffect, useRef, useState } from 'react'

function Counter({ target, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasRun, setHasRun] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasRun) {
        setHasRun(true)
        let start = 0
        const increment = target / 30
        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 30)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, hasRun])

  return (
    <div ref={ref} className="text-center scroll-hidden">
      <div className="text-4xl md:text-6xl font-bold text-accent mb-2">{count}+</div>
      <p className="text-lg text-white opacity-90">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter target={5} label="Années d'expérience" />
          <Counter target={200} label="Clients satisfaits" />
          <Counter target={6} label="Services proposés" />
          <Counter target={100} label="Engagement qualité %" />
        </div>
      </div>
    </section>
  )
}
