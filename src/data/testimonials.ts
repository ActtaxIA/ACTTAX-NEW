export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'luis-bravo',
    name: 'Luis Bravo',
    role: 'Arquitecto',
    company: '',
    content:
      'Un servicio profesional y eficiente que me ha permitido valorar mi negocio correctamente. El equipo de ACTTAX destaca por su conocimiento técnico y cercanía con el cliente.',
    rating: 5,
  },
  {
    id: 'narciso-pardo',
    name: 'Narciso Pardo',
    role: 'CEO',
    company: 'Furgocasa',
    content:
      'Gracias a ACTTAX hemos optimizado nuestras operaciones vinculadas y tenemos la documentación siempre lista para cualquier requerimiento. Un equipo experto que entiende las necesidades del negocio.',
    rating: 5,
  },
]
