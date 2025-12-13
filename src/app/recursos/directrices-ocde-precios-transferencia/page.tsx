import { Metadata } from 'next'
import Link from 'next/link'
import { 
  BookOpen, Calendar, ExternalLink, FileText, Globe, 
  TrendingUp, Shield, CheckCircle, ArrowRight, Download,
  Clock, AlertCircle, Lightbulb, Scale, Building2, ChevronDown
} from 'lucide-react'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Directrices OCDE Precios de Transferencia 2024 | Guía Completa',
  description: 'Guía actualizada sobre las Directrices OCDE de Precios de Transferencia. Capítulos, novedades BEPS 2.0 y cómo implementarlas en España.',
  alternates: {
    canonical: 'https://www.acttax.es/recursos/directrices-ocde-precios-transferencia',
  },
  openGraph: {
    title: 'Directrices OCDE Precios de Transferencia 2024 | Guía Completa',
    description: 'Guía completa y actualizada sobre las Directrices de la OCDE sobre Precios de Transferencia. Implementación, novedades y recursos oficiales.',
    url: 'https://www.acttax.es/recursos/directrices-ocde-precios-transferencia',
    siteName: 'ACTTAX',
    locale: 'es_ES',
    type: 'article',
  },
  keywords: [
    'directrices ocde precios de transferencia',
    'oecd transfer pricing guidelines',
    'directrices ocde 2022',
    'guía precios transferencia ocde',
    'beps ocde',
    'principio de plena competencia',
    'arm\'s length principle',
  ],
}

export default function DirectricesOCDEPage() {
  // JSON-LD Structured Data
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Directrices de la OCDE sobre Precios de Transferencia',
    description: 'Guía completa y actualizada sobre las Directrices OCDE de Precios de Transferencia',
    author: {
      '@type': 'Person',
      name: 'Narciso Pardo',
      url: 'https://www.acttax.es/sobre-nosotros',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ACTTAX',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.acttax.es/images/logo/logo_acttax4.png',
      },
    },
    datePublished: '2024-12-07',
    dateModified: '2024-12-07',
    articleSection: 'Recursos Fiscales',
    about: 'OECD Transfer Pricing Guidelines',
    inLanguage: 'es-ES',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.acttax.es',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Recursos',
        item: 'https://www.acttax.es/recursos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Directrices OCDE',
        item: 'https://www.acttax.es/recursos/directrices-ocde-precios-transferencia',
      },
    ],
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-10 bg-gradient-to-br from-primary to-primary-700 text-white">
        <Container>
          <Breadcrumbs 
            items={[
              { name: 'Recursos', href: '/recursos' },
              { name: 'Directrices OCDE' }
            ]}
            className="mb-6"
            lightTheme
          />

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-12 h-12" />
              <span className="px-4 py-1.5 bg-white/20 text-white font-space font-semibold text-sm rounded-full">
                Recurso Actualizado 2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 leading-tight">
              Directrices de la OCDE sobre Precios de Transferencia
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Guía completa y actualizada sobre las <strong>OECD Transfer Pricing Guidelines for Multinational Enterprises and Tax Administrations</strong>. 
              Todo lo que necesitas saber sobre el marco normativo internacional para operaciones vinculadas.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Última actualización: Diciembre 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                15 minutos de lectura
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Introducción */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold font-space text-gray-900 mb-6">
                ¿Qué son las Directrices de la OCDE sobre Precios de Transferencia?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Las <strong>Directrices de la OCDE sobre Precios de Transferencia</strong> (en inglés: <em>OECD Transfer Pricing Guidelines for Multinational Enterprises and Tax Administrations</em>) 
                son el marco de referencia internacional más importante para determinar los precios de transferencia en operaciones entre empresas vinculadas.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Publicadas por primera vez en 1995 y actualizadas continuamente, estas directrices establecen los principios y métodos que las administraciones tributarias 
                y las empresas multinacionales deben seguir para asegurar que las transacciones entre partes relacionadas se realicen a <strong>valor de mercado</strong> 
                (principio de plena competencia o <em>arm's length principle</em>).
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-space font-bold text-gray-900 mb-2">¿Por qué son importantes?</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-0">
                      Las Directrices OCDE son adoptadas por <strong>más de 140 países</strong> y constituyen la base para:
                    </p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>✓ Legislaciones nacionales de precios de transferencia</li>
                      <li>✓ Resolución de disputas fiscales internacionales</li>
                      <li>✓ Documentación de operaciones vinculadas</li>
                      <li>✓ Defensa ante inspecciones de Hacienda</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold font-space text-gray-900 mb-4 mt-10">
                ¿A quién afectan estas Directrices?
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                Las Directrices OCDE son aplicables a:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <Building2 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-space font-bold text-gray-900 mb-2">Empresas Multinacionales</h4>
                  <p className="text-sm text-gray-600">
                    Grupos con operaciones en múltiples países que realizan transacciones con empresas vinculadas.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <Scale className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-space font-bold text-gray-900 mb-2">Administraciones Tributarias</h4>
                  <p className="text-sm text-gray-600">
                    Hacienda y otras autoridades fiscales que inspeccionan y validan operaciones vinculadas.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                En España, la <strong>Agencia Tributaria</strong> adopta las Directrices OCDE como marco interpretativo para la aplicación del 
                artículo 18 de la Ley del Impuesto sobre Sociedades y el Modelo 232 de declaración informativa.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Historia y Evolución */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Historia y Evolución de las Directrices
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

              <div className="space-y-8">
                {[
                  {
                    year: '1979',
                    title: 'Primera publicación',
                    description: 'La OCDE publica el primer informe sobre precios de transferencia, estableciendo el principio de plena competencia.'
                  },
                  {
                    year: '1995',
                    title: 'Directrices oficiales',
                    description: 'Primera versión completa de las OECD Transfer Pricing Guidelines. Se establecen los 5 métodos tradicionales de valoración.'
                  },
                  {
                    year: '2010',
                    title: 'Actualización importante',
                    description: 'Revisión de los capítulos sobre intangibles y reestructuraciones empresariales. Mayor énfasis en análisis funcional.'
                  },
                  {
                    year: '2015-2017',
                    title: 'Proyecto BEPS',
                    description: 'Integración de las 15 acciones BEPS (Base Erosion and Profit Shifting). Documentación maestra y país por país (CBC reporting).'
                  },
                  {
                    year: '2022',
                    title: 'Versión consolidada actual',
                    description: 'Última versión completa con más de 1.250 páginas. Incluye clarificaciones sobre intangibles de difícil valoración (HTVI) y servicios intragrupo.'
                  },
                  {
                    year: '2024',
                    title: 'BEPS 2.0 - Pilares Uno y Dos',
                    description: 'Implementación progresiva del Amount A (redistribución de beneficios) y Amount B (simplificación para distribuidores). Impuesto mínimo global del 15%.'
                  },
                ].map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm font-space shadow-lg z-10 flex-shrink-0">
                      {item.year.includes('-') ? (
                        <div className="flex flex-col items-center justify-center leading-tight">
                          <span>{item.year.split('-')[0]}</span>
                          <span className="text-xs">-</span>
                          <span>{item.year.split('-')[1]}</span>
                        </div>
                      ) : (
                        item.year
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-bold font-space text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Los 10 Capítulos */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-4 text-center">
              Los 10 Capítulos de las Directrices OCDE
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Las Directrices OCDE 2022 están estructuradas en 10 capítulos que cubren todos los aspectos de los precios de transferencia
            </p>

            <div className="grid gap-6">
              {[
                {
                  chapter: 'I',
                  title: 'Principio de Plena Competencia (Arm\'s Length Principle)',
                  description: 'Establece el principio fundamental: las transacciones entre empresas vinculadas deben valorarse como si fueran entre partes independientes.',
                  keyPoints: [
                    'Artículo 9 del Modelo de Convenio Tributario OCDE',
                    'Comparabilidad como elemento esencial',
                    'Análisis funcional, activos y riesgos'
                  ]
                },
                {
                  chapter: 'II',
                  title: 'Métodos de Precios de Transferencia',
                  description: 'Detalla los 5 métodos reconocidos para determinar precios de transferencia conformes al principio de plena competencia.',
                  keyPoints: [
                    'Métodos tradicionales: CUP, Precio de Reventa, Coste Incrementado',
                    'Métodos transaccionales: Reparto de Beneficios, Margen Neto Transaccional',
                    'Selección del método más apropiado'
                  ]
                },
                {
                  chapter: 'III',
                  title: 'Análisis de Comparabilidad',
                  description: 'Guía para identificar y seleccionar comparables independientes que permitan aplicar los métodos de valoración.',
                  keyPoints: [
                    '5 factores de comparabilidad',
                    'Bases de datos de comparables',
                    'Ajustes de comparabilidad'
                  ]
                },
                {
                  chapter: 'IV',
                  title: 'Procedimientos Administrativos de Solución de Controversias',
                  description: 'Mecanismos para resolver disputas sobre precios de transferencia entre administraciones tributarias.',
                  keyPoints: [
                    'Acuerdos Previos de Valoración (APAs)',
                    'Procedimiento Amistoso',
                    'Arbitraje fiscal internacional'
                  ]
                },
                {
                  chapter: 'V',
                  title: 'Documentación de Precios de Transferencia',
                  description: 'Estándares para la documentación que las empresas deben preparar para justificar sus políticas de precios de transferencia.',
                  keyPoints: [
                    'Archivo Maestro (Master File)',
                    'Archivo Local (Local File)',
                    'Declaración País por País (CBC Report)'
                  ]
                },
                {
                  chapter: 'VI',
                  title: 'Consideraciones Especiales para Activos Intangibles',
                  description: 'Orientación específica para la valoración de intangibles (patentes, marcas, know-how, etc.) en operaciones vinculadas.',
                  keyPoints: [
                    'Identificación y propiedad de intangibles',
                    'Intangibles de difícil valoración (HTVI)',
                    'Métodos de valoración específicos'
                  ]
                },
                {
                  chapter: 'VII',
                  title: 'Consideraciones Especiales para Servicios Intragrupo',
                  description: 'Guía para determinar si se han prestado servicios intragrupo y cómo valorarlos adecuadamente.',
                  keyPoints: [
                    'Test de beneficio y test de actividad',
                    'Servicios de bajo valor añadido',
                    'Acuerdos de reparto de costes'
                  ]
                },
                {
                  chapter: 'VIII',
                  title: 'Acuerdos de Reparto de Costes',
                  description: 'Marco para estructurar y documentar acuerdos mediante los cuales varias empresas del grupo comparten costes y beneficios.',
                  keyPoints: [
                    'Estructura de CCAs (Cost Contribution Arrangements)',
                    'Contribuciones esperadas vs. reales',
                    'Ajustes de entrada y salida'
                  ]
                },
                {
                  chapter: 'IX',
                  title: 'Reestructuraciones Empresariales',
                  description: 'Análisis de las implicaciones fiscales de reestructuraciones dentro de grupos multinacionales.',
                  keyPoints: [
                    'Transferencia de funciones, activos y riesgos',
                    'Compensación por reestructuraciones',
                    'Ubicación económica vs. legal'
                  ]
                },
                {
                  chapter: 'X',
                  title: 'Operaciones con Materias Primas (Commodities)',
                  description: 'Orientación específica para precios de transferencia en transacciones que involucran materias primas cotizadas.',
                  keyPoints: [
                    'Uso de precios cotizados (quoted prices)',
                    'Ajustes por calidad, ubicación y timing',
                    'Transparencia en operaciones commodity'
                  ]
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-space font-bold text-xl">{item.chapter}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-space text-gray-900 mb-2">
                        Capítulo {item.chapter}: {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-900">Puntos clave:</p>
                        <ul className="space-y-1">
                          {item.keyPoints.map((point, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Novedades 2024 */}
      <section className="py-12 md:py-16 bg-primary/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold font-space text-gray-900">
                Novedades y Actualizaciones 2024
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold font-space text-gray-900 mb-3">
                  BEPS 2.0: Pilares Uno y Dos
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La OCDE está implementando dos pilares fundamentales para reformar el sistema fiscal internacional:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Pilar Uno - Amount A:</strong>
                      <span className="text-gray-700"> Redistribución de derechos de imposición sobre beneficios de grandes multinacionales ({'>'}20.000M€ ingresos).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Pilar Uno - Amount B:</strong>
                      <span className="text-gray-700"> Simplificación de precios de transferencia para actividades de distribución de bajo riesgo.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Pilar Dos:</strong>
                      <span className="text-gray-700"> Impuesto mínimo global del 15% (GloBE Rules) para grupos multinacionales con ingresos {'>'}750M€.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold font-space text-gray-900 mb-3">
                  Consultas Públicas y Próximas Actualizaciones
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La OCDE mantiene un proceso continuo de consultas públicas sobre diversos aspectos de precios de transferencia:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Guía de implementación de Amount B (finalización esperada 2024)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Actualización del Capítulo X sobre materias primas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Orientación sobre economía digital y criptoactivos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Recursos Oficiales OCDE */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Recursos Oficiales de la OCDE
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Directrices OCDE 2022 (Versión Completa)',
                  description: 'Documento oficial completo con los 10 capítulos y más de 1.250 páginas de orientación.',
                  link: 'https://www.oecd.org/en/publications/oecd-transfer-pricing-guidelines-for-multinational-enterprises-and-tax-administrations-2022_0e655865-en.html',
                  icon: BookOpen
                },
                {
                  title: 'Portal de Precios de Transferencia OCDE',
                  description: 'Hub central con todas las publicaciones, consultas y actualizaciones sobre el tema.',
                  link: 'https://www.oecd.org/en/topics/transfer-pricing.html',
                  icon: Globe
                },
                {
                  title: 'Informes País por País (CBC)',
                  description: 'Guía y estándares para la declaración país por país (Country-by-Country Reporting).',
                  link: 'https://www.oecd.org/tax/beps/country-by-country-reporting.htm',
                  icon: FileText
                },
                {
                  title: 'BEPS - Erosión de Base y Traslado de Beneficios',
                  description: 'Las 15 acciones BEPS y su implementación en precios de transferencia.',
                  link: 'https://www.oecd.org/tax/beps/',
                  icon: Shield
                },
              ].map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <resource.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-space font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Implementación */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Cómo Implementar las Directrices OCDE en tu Empresa
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold font-space text-gray-900 mb-6">
                Checklist de Cumplimiento
              </h3>
              <div className="space-y-4">
                {[
                  'Identificar todas las operaciones vinculadas (intragrupo)',
                  'Realizar análisis funcional de cada transacción',
                  'Seleccionar el método de valoración más apropiado',
                  'Realizar estudios de comparabilidad con empresas independientes',
                  'Documentar políticas de precios de transferencia (Master File + Local File)',
                  'Preparar declaración país por país si superas 750M€',
                  'Presentar Modelo 232 en España (si superas umbrales)',
                  'Revisar y actualizar documentación anualmente',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-space mb-4">
                ¿Necesitas Ayuda con las Directrices OCDE?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                En ACTTAX somos expertos en implementar las Directrices OCDE de Precios de Transferencia. 
                Te ayudamos con documentación, análisis de comparabilidad, defensa ante inspecciones y cumplimiento normativo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary" 
                  href="/contacto"
                  className="group"
                >
                  Consulta Gratuita
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  href="/servicios/operaciones-vinculadas"
                  className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
                >
                  Ver Servicios
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: '¿Son obligatorias las Directrices OCDE en España?',
                  answer: 'Aunque las Directrices OCDE no son legalmente vinculantes, la Agencia Tributaria española las adopta como marco interpretativo oficial para la aplicación del artículo 18 de la Ley del Impuesto sobre Sociedades. En la práctica, seguir las Directrices OCDE es esencial para defender tus operaciones vinculadas ante inspecciones.'
                },
                {
                  question: '¿Qué países aplican las Directrices OCDE?',
                  answer: 'Más de 140 países, incluyendo todos los miembros de la OCDE (38 países) y muchos países en desarrollo, han adoptado las Directrices como base para sus legislaciones de precios de transferencia. España, como miembro de la OCDE, las aplica plenamente.'
                },
                {
                  question: '¿Cómo se relacionan con el Modelo 232 en España?',
                  answer: 'El Modelo 232 es la declaración informativa española de operaciones vinculadas. Su contenido y requisitos de documentación están basados directamente en las Directrices OCDE, especialmente en el Capítulo V sobre documentación (Master File y Local File).'
                },
                {
                  question: '¿Qué cambió en la versión 2022 de las Directrices?',
                  answer: 'La versión 2022 es una consolidación que integra todas las actualizaciones derivadas del proyecto BEPS (2015-2017), clarificaciones sobre intangibles de difícil valoración (HTVI), servicios intragrupo de bajo valor añadido, y orientación sobre reestructuraciones empresariales.'
                },
                {
                  question: '¿Con qué frecuencia se actualizan las Directrices?',
                  answer: 'La OCDE revisa y actualiza continuamente las Directrices a través de consultas públicas. Las versiones consolidadas completas se publican cada varios años (la anterior fue 2017), pero hay actualizaciones parciales más frecuentes sobre temas específicos.'
                },
              ].map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <summary className="flex items-center justify-between font-space font-semibold text-gray-900 list-none">
                    <span className="pr-8">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Necesitas asesoramiento sobre Directrices OCDE?"
        description="Nuestro equipo de expertos en precios de transferencia te ayuda a cumplir con las Directrices OCDE y optimizar tu posición fiscal."
        variant="dark"
      />
    </>
  )
}
