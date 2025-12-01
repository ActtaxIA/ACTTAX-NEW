import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | ACTTAX',
  description:
    'Artículos, guías y noticias sobre precios de transferencia, operaciones vinculadas, valoración de empresas e inteligencia artificial aplicada a fiscalidad.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

