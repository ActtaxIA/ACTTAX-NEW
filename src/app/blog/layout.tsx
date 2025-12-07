import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | ACTTAX',
  description:
    'Artículos, guías y noticias sobre precios de transferencia, operaciones vinculadas, valoración de empresas e inteligencia artificial aplicada a fiscalidad.',
  alternates: {
    canonical: 'https://www.acttax.es/blog',
  },
  openGraph: {
    title: 'Blog | ACTTAX',
    description: 'Artículos, guías y noticias sobre precios de transferencia, operaciones vinculadas, valoración de empresas e inteligencia artificial aplicada a fiscalidad.',
    url: 'https://www.acttax.es/blog',
    siteName: 'ACTTAX',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

