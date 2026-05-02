export interface Service {
  icon: string
  title: string
  desc: string
  image: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  rating: number
}

export interface Step {
  num: number
  title: string
  desc: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  desc: string
}

export interface BeforeAfterProject {
  title: string
  desc: string
  before: string
  after: string
}
