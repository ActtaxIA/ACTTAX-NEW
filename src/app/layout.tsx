import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout'
import { siteConfig } from '@/lib/constants'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

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
    default: `${siteConfig.name} | Asesoría Fiscal Especializada`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Asesoría Fiscal Especializada`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/logo/logo_acttax4.png',
        width: 1200,
        height: 630,
        alt: 'ACTTAX - Asesoría Fiscal Especializada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Asesoría Fiscal Especializada`,
    description: siteConfig.description,
    images: ['/images/logo/logo_acttax4.png'],
  },
  icons: {
    icon: '/images/logo/favicon.png',
    shortcut: '/images/logo/favicon.png',
    apple: '/images/logo/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
