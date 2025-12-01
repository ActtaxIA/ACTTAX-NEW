export const siteConfig = {
  name: 'ACTTAX',
  description: 'Asesoría fiscal especializada en precios de transferencia, operaciones vinculadas, valoración de empresas e inteligencia artificial aplicada a fiscalidad.',
  url: 'https://www.acttax.es',
  email: 'contacto@acttax.es',
  phone: '+34 XXX XXX XXX',
  address: {
    city: 'Murcia',
    country: 'España',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/acttax-fiscal-y-tributario/',
    facebook: 'https://www.facebook.com/acttax.fiscal.tributario/',
  },
}

export const navigationLinks = [
  { name: 'Inicio', href: '/' },
  {
    name: 'Servicios',
    href: '/servicios',
    children: [
      {
        name: 'Operaciones Vinculadas y PT',
        href: '/servicios/operaciones-vinculadas',
        description: 'Consultoría en precios de transferencia y operaciones vinculadas',
      },
      {
        name: 'Valoración de Empresas',
        href: '/servicios/valoracion-empresas',
        description: 'Valoración financiera, M&A, startups e intangibles',
      },
      {
        name: 'Inteligencia Artificial',
        href: '/servicios/inteligencia-artificial',
        description: 'IA aplicada a fiscalidad y automatización financiera',
      },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
]

export const footerLinks = {
  servicios: [
    { name: 'Operaciones Vinculadas', href: '/servicios/operaciones-vinculadas' },
    { name: 'Valoración de Empresas', href: '/servicios/valoracion-empresas' },
    { name: 'Inteligencia Artificial', href: '/servicios/inteligencia-artificial' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { name: 'Aviso Legal', href: '/legal/aviso-legal' },
    { name: 'Política de Privacidad', href: '/legal/privacidad' },
    { name: 'Política de Cookies', href: '/legal/cookies' },
  ],
}
