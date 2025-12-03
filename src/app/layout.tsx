import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout'
import { siteConfig } from '@/lib/constants'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import BackToTop from '@/components/ui/BackToTop'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Asesoría Fiscal Especializada en Precios de Transferencia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'precios de transferencia',
    'operaciones vinculadas',
    'valoración de empresas',
    'asesoría fiscal Murcia',
    'transfer pricing',
    'modelo 232',
    'APAs',
    'OCDE',
    'valoración financiera',
    'inteligencia artificial fiscal',
    'IA financiera',
    'automatización fiscal',
  ],
  authors: [{ name: 'Narciso Pardo - ACTTAX' }],
  creator: 'ACTTAX',
  publisher: 'ACTTAX',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'ACTTAX - Asesoría Fiscal Especializada | Precios de Transferencia y Valoración',
    description: 'Expertos en precios de transferencia, operaciones vinculadas y valoración de empresas. Consultoría fiscal especializada con IA aplicada.',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ACTTAX - Asesoría Fiscal Especializada en Precios de Transferencia',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACTTAX - Asesoría Fiscal Especializada',
    description: 'Expertos en precios de transferencia, operaciones vinculadas y valoración de empresas',
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: '@acttax',
  },
  icons: {
    icon: '/images/logo/favicon.png',
    shortcut: '/images/logo/favicon.png',
    apple: '/images/logo/favicon.png',
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preconnect a dominios externos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://rivwqzwxkiwjdkbyniyo.supabase.co" />
        
        {/* DNS prefetch para otros recursos */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <GoogleAnalytics />
      </head>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
