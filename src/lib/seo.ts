import { Metadata } from 'next'

const siteConfig = {
  name: 'ACTTAX',
  url: 'https://www.acttax.es',
  description: 'Asesoría fiscal especializada en precios de transferencia, operaciones vinculadas, valoración de empresas e inteligencia artificial aplicada a fiscalidad.',
  author: 'ACTTAX',
  ogImage: 'https://www.acttax.es/og-image.jpg',
  keywords: [
    'precios de transferencia',
    'operaciones vinculadas',
    'valoración de empresas',
    'asesoría fiscal',
    'transfer pricing',
    'OCDE',
    'APAs',
    'Modelo 232',
    'inteligencia artificial fiscalidad',
    'Murcia',
    'España',
  ],
}

interface SEOProps {
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

/**
 * Generate metadata for pages
 */
export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: SEOProps): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const seoDescription = description || siteConfig.description
  const seoImage = image || siteConfig.ogImage
  const seoUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const seoKeywords = keywords?.length ? keywords : siteConfig.keywords

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: authors?.map((author) => ({ name: author })) || [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'es_ES',
      type: type,
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },
    alternates: {
      canonical: seoUrl,
    },
  }
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo_acttax4.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Murcia',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@acttax.es',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English'],
    },
  }
}

/**
 * Generate JSON-LD structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/logo/logo_acttax4.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Murcia',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '37.9922',
      longitude: '-1.1307',
    },
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
    priceRange: '€€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }
}

/**
 * Generate JSON-LD structured data for Blog Article
 */
export function generateArticleSchema({
  title,
  description,
  image,
  url,
  publishedTime,
  modifiedTime,
  author,
}: {
  title: string
  description: string
  image: string
  url: string
  publishedTime: string
  modifiedTime?: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    url: `${siteConfig.url}${url}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Organization',
      name: author || siteConfig.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo/logo_acttax4.png`,
      },
    },
  }
}

/**
 * Generate JSON-LD structured data for Service
 */
export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    url: `${siteConfig.url}${url}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
  }
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}
