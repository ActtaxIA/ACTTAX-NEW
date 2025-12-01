// Navigation types
export interface NavLink {
  name: string
  href: string
  description?: string
  children?: NavLink[]
}

// Service types
export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  features: string[]
  subservices: SubService[]
}

export interface SubService {
  title: string
  description: string
}

// Blog types
export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  date: string
  author: string
  category: BlogCategory
  categoryLabel: string
  tags: string[]
  image?: string
  readingTime: number
  featured?: boolean
}

export type BlogCategory =
  | 'precios-transferencia'
  | 'operaciones-vinculadas'
  | 'valoracion'
  | 'actualidad'
  | 'guias'
  | 'ia-fiscalidad'

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: BlogCategory
  tags: string[]
  image?: string
  readingTime: number
  featured?: boolean
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image?: string
  rating?: number
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  privacyAccepted: boolean
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// SEO types
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noIndex?: boolean
}
