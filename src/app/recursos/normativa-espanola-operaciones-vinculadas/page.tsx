import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Scale, Calendar, ExternalLink, FileText, AlertTriangle, 
  CheckCircle, ArrowRight, BookOpen, Clock, Shield,
  TrendingUp, Building2, ChevronDown, Gavel, Euro,
  FileWarning, Users, Target, Lightbulb
} from 'lucide-react'
import Container from '@/components/ui/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Normativa Española Operaciones Vinculadas 2024 | Artículo 18 LIS',
  description: 'Guía completa sobre normativa española de operaciones vinculadas: Art. 18 LIS, Reglamento, Modelo 232, documentación y sanciones.',
  alternates: {
    canonical: 'https://www.acttax.es/recursos/normativa-espanola-operaciones-vinculadas',
  },
  openGraph: {
    title: 'Normativa Española Operaciones Vinculadas 2024 | Artículo 18 LIS',
    description: 'Todo sobre normativa española de operaciones vinculadas: Artículo 18 LIS, obligaciones documentación, Modelo 232 y casos prácticos.',
    url: 'https://www.acttax.es/recursos/normativa-espanola-operaciones-vinculadas',
    siteName: 'ACTTAX',
    locale: 'es_ES',
    type: 'article',
  },
  keywords: [
    'artículo 18 Ley Impuesto sobre Sociedades',
    'operaciones vinculadas normativa española',
    'modelo 232',
    'documentación operaciones vinculadas España',
    'reglamento operaciones vinculadas',
    'límites operaciones vinculadas',
    'art 18 LIS',
  ],
}

export default function NormativaEspanolaPage() {
  // JSON-LD Structured Data
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Normativa Española de Operaciones Vinculadas',
    description: 'Guía completa sobre la normativa española de operaciones vinculadas: Artículo 18 LIS y Reglamento',
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
    about: 'Spanish Transfer Pricing Regulations',
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
        name: 'Normativa Española',
        item: 'https://www.acttax.es/recursos/normativa-espanola-operaciones-vinculadas',
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
              { name: 'Normativa Española' }
            ]}
            className="mb-6"
            lightTheme
          />

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-12 h-12" />
              <span className="px-4 py-1.5 bg-white/20 text-white font-space font-semibold text-sm rounded-full">
                Actualizado 2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 leading-tight">
              Normativa Española de Operaciones Vinculadas
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Guía completa sobre la regulación española de operaciones vinculadas: <strong>Artículo 18 de la Ley 27/2014 del Impuesto sobre Sociedades</strong>, 
              Reglamento, obligaciones de documentación, Modelo 232 y régimen sancionador.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Última actualización: Diciembre 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                20 minutos de lectura
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
                Marco Legal Español vs OCDE
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                La normativa española de operaciones vinculadas se fundamenta en el <strong>Artículo 18 de la Ley 27/2014 del Impuesto sobre Sociedades</strong>, 
                que incorpora los principios de las Directrices OCDE adaptándolos al ordenamiento jurídico español.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                España adopta el <strong>principio de plena competencia</strong> (arm's length principle) como criterio fundamental para valorar las transacciones 
                entre personas o entidades vinculadas, pero añade particularidades propias como umbrales específicos, obligaciones de documentación diferenciadas 
                y un régimen sancionador propio.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-space font-bold text-gray-900 mb-2">¿Por qué existe normativa específica española?</h3>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>✓ Adaptar principios OCDE al sistema fiscal español</li>
                      <li>✓ Establecer obligaciones concretas y ejecutables</li>
                      <li>✓ Fijar umbrales y límites cuantitativos</li>
                      <li>✓ Regular documentación y declaración informativa (Modelo 232)</li>
                      <li>✓ Definir régimen sancionador específico</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                    <h3 className="font-space font-bold text-gray-900">Directrices OCDE</h3>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Marco teórico internacional</li>
                    <li>• Principios y métodos generales</li>
                    <li>• No vinculante legalmente</li>
                    <li>• Guía interpretativa</li>
                  </ul>
                  <Link 
                    href="/recursos/directrices-ocde-precios-transferencia"
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-4 hover:gap-3 transition-all"
                  >
                    Ver guía OCDE
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-8 h-8 text-primary" />
                    <h3 className="font-space font-bold text-gray-900">Normativa Española</h3>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Ley vinculante</strong> (Art. 18 LIS)</li>
                    <li>• Obligaciones concretas</li>
                    <li>• Umbrales específicos (€250.000, €45M)</li>
                    <li>• Modelo 232 obligatorio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Artículo 18 LIS - Análisis Completo */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Artículo 18 de la Ley 27/2014 del Impuesto sobre Sociedades
            </h2>

            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Análisis detallado de los 14 apartados del artículo que regula las operaciones vinculadas en España
            </p>

            {/* Apartado 1: Principio de Plena Competencia */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-space font-bold text-xl">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-space text-gray-900 mb-3">
                    Principio de Plena Competencia (Valoración a Valor de Mercado)
                  </h3>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <p className="text-sm text-gray-700 italic">
                      <strong>Artículo 18.1 LIS:</strong> "Las operaciones efectuadas entre personas o entidades vinculadas se valorarán por su valor de mercado. 
                      Se entenderá por valor de mercado aquel que se habría acordado por personas o entidades independientes en condiciones que respeten el principio de libre competencia."
                    </p>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>¿Qué significa?</strong> Todas las transacciones entre partes vinculadas deben valorarse como si fueran entre partes independientes.
                    </p>
                    <p>
                      <strong>Objetivo:</strong> Evitar que grupos empresariales transfieran beneficios artificialmente entre jurisdicciones para reducir su carga fiscal.
                    </p>
                    <p>
                      <strong>Aplicación práctica:</strong> Si una empresa española vende productos a su filial extranjera a 100€, pero empresas independientes los venden a 150€, 
                      Hacienda ajustará el precio a 150€ (valor de mercado) y tributará sobre la diferencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apartado 2: Definición de Vinculación */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-space font-bold text-xl">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-space text-gray-900 mb-3">
                    Definición de Personas o Entidades Vinculadas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    El artículo 18.2 define 8 supuestos de vinculación. La clave: <strong>participación {'≥'} 25%</strong> o relación de <strong>control/grupo</strong>.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { letter: 'a)', text: 'Entidad y sus socios/partícipes' },
                      { letter: 'b)', text: 'Entidad y sus consejeros/administradores' },
                      { letter: 'c)', text: 'Entidad y familiares (hasta 3er grado) de socios/administradores' },
                      { letter: 'd)', text: 'Dos entidades del mismo grupo' },
                      { letter: 'e)', text: 'Entidad y administradores de otra del grupo' },
                      { letter: 'f)', text: 'Participación indirecta ≥ 25%' },
                      { letter: 'g)', text: 'Mismos socios participan ≥ 25% en dos entidades' },
                      { letter: 'h)', text: 'Entidad y sus establecimientos permanentes extranjeros' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <span className="font-bold text-primary flex-shrink-0">{item.letter}</span>
                        <span className="text-sm text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-700">
                        <strong className="text-amber-900">Importante:</strong> El umbral del 25% se aplica a participaciones directas o indirectas. 
                        Los administradores incluyen tanto de derecho como de hecho.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apartado 3: Documentación */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-space font-bold text-xl">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-space text-gray-900 mb-3">
                    Obligaciones de Documentación
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Todas las partes vinculadas deben mantener <strong>documentación específica</strong> a disposición de la Administración tributaria.
                  </p>

                  <h4 className="font-space font-bold text-gray-900 mb-4 text-lg">Tipos de documentación:</h4>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-bold text-gray-900 mb-2">✓ Documentación Simplificada</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Requisito:</strong> Cifra de negocios {'<'} 45 millones de euros
                      </p>
                      <p className="text-sm text-gray-600">
                        Contenido reducido, más sencillo de preparar. Menor carga administrativa.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-bold text-gray-900 mb-2">✓ Documentación Estándar (Completa)</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Requisito:</strong> Cifra de negocios {'>='} 45 millones de euros
                      </p>
                      <p className="text-sm text-gray-600">
                        Master File + Local File según estándares OCDE BEPS Acción 13.
                      </p>
                    </div>
                  </div>

                  <h4 className="font-space font-bold text-gray-900 mb-4 text-lg">Exclusiones documentación simplificada:</h4>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                    <p className="text-sm text-gray-700 mb-3">
                      <strong className="text-red-900">Nunca aplica documentación simplificada a:</strong>
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">1.</span>
                        <span>Operaciones IRPF (estimación objetiva) con entidad vinculada ≥25%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">2.</span>
                        <span>Transmisión de negocios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">3.</span>
                        <span>Transmisión de valores no cotizados (o cotizados en paraísos fiscales)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">4.</span>
                        <span><strong>Operaciones sobre inmuebles</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">5.</span>
                        <span><strong>Operaciones sobre activos intangibles</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-5">
                    <h5 className="font-bold text-gray-900 mb-3">Exenciones totales de documentación:</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Operaciones entre entidades del mismo grupo de consolidación fiscal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>Agrupaciones de Interés Económico (AIE) y Uniones Temporales de Empresas (UTE)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>OPAs (Ofertas Públicas de Adquisición de valores)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span><strong>Operaciones {'<'} 250.000€</strong> con la misma persona/entidad vinculada (umbral clave)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Apartado 4: Métodos de Valoración */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-space font-bold text-xl">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-space text-gray-900 mb-3">
                    Métodos de Valoración a Valor de Mercado
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    El artículo 18.4 establece <strong>5 métodos oficiales</strong> reconocidos (alineados con OCDE):
                  </p>

                  <div className="grid gap-4">
                    {[
                      {
                        letter: 'a)',
                        name: 'Precio Libre Comparable (CUP)',
                        description: 'Compara el precio de la operación vinculada con operaciones independientes idénticas o similares.',
                        ideal: 'Cuando existen transacciones comparables fiables'
                      },
                      {
                        letter: 'b)',
                        name: 'Coste Incrementado (Cost Plus)',
                        description: 'Valor de adquisición/producción + margen habitual en operaciones independientes.',
                        ideal: 'Servicios, fabricación por contrato, distribución'
                      },
                      {
                        letter: 'c)',
                        name: 'Precio de Reventa (Resale Price)',
                        description: 'Precio de venta final - margen del revendedor en operaciones independientes.',
                        ideal: 'Distribuidores que no añaden valor sustancial'
                      },
                      {
                        letter: 'd)',
                        name: 'Distribución del Resultado (Profit Split)',
                        description: 'Asigna el resultado común entre las partes según criterios de contribución.',
                        ideal: 'Operaciones altamente integradas, intangibles únicos'
                      },
                      {
                        letter: 'e)',
                        name: 'Margen Neto Operacional (TNMM)',
                        description: 'Atribuye un resultado neto calculado sobre ventas, costes u otra magnitud.',
                        ideal: 'Cuando no hay comparables directos de precio'
                      },
                    ].map((method, index) => (
                      <div key={index} className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="font-bold text-primary text-lg flex-shrink-0">{method.letter}</span>
                          <h4 className="font-space font-bold text-gray-900">{method.name}</h4>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{method.description}</p>
                        <p className="text-xs text-primary font-semibold">
                          <Target className="w-3 h-3 inline mr-1" />
                          Ideal para: {method.ideal}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-900">Flexibilidad:</strong> Si ningún método anterior es aplicable, 
                      se pueden usar <strong>otros métodos y técnicas generalmente aceptados</strong> que respeten el principio de libre competencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apartado 13: Régimen Sancionador */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-6 border-2 border-red-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-space font-bold text-xl">13</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-space text-gray-900 mb-3">
                    Infracciones y Sanciones
                  </h3>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-5 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-red-900 mb-2">¡Cuidado! Régimen sancionador específico</h4>
                        <p className="text-sm text-gray-700">
                          Las infracciones relacionadas con operaciones vinculadas tienen sanciones propias, diferentes de las infracciones tributarias generales.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-space font-bold text-gray-900 mb-4 text-lg">Tipo 1: Sin corrección de Hacienda</h4>
                  <div className="bg-amber-50 border border-amber-300 rounded-lg p-5 mb-6">
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Supuesto:</strong> Falta de documentación, documentación incompleta o con datos falsos, 
                      pero Hacienda <strong>NO realiza correcciones</strong> en la valoración.
                    </p>
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Sanción:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>1.000€</strong> por cada dato omitido o falso</li>
                        <li>• <strong>10.000€</strong> por conjunto de datos omitido o falso</li>
                        <li>• <strong>Límite máximo:</strong> El menor entre:</li>
                        <li className="ml-6">- 10% del importe de las operaciones vinculadas</li>
                        <li className="ml-6">- 1% de la cifra de negocios</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="font-space font-bold text-gray-900 mb-4 text-lg">Tipo 2: Con corrección de Hacienda</h4>
                  <div className="bg-red-50 border border-red-300 rounded-lg p-5">
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Supuesto:</strong> Mismas circunstancias que Tipo 1, pero Hacienda <strong>SÍ realiza correcciones</strong> de valoración.
                    </p>
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-bold text-gray-900 mb-2">Sanción:</p>
                      <p className="text-xl font-bold text-red-600 mb-2">15% sobre el importe de las correcciones</p>
                      <p className="text-xs text-gray-600 mb-3">
                        (Incompatible con otras sanciones del artículo 191-195 LGT por la misma base)
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded p-3 mt-3">
                        <p className="text-sm text-green-900">
                          <strong>✓ Importante:</strong> Si cumples la obligación de documentación, las correcciones de Hacienda 
                          <strong> NO constituyen infracción tributaria</strong> general (arts. 191-195 LGT).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Modelo 232 */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <FileText className="w-10 h-10 text-primary" />
              <h2 className="text-3xl font-bold font-space text-gray-900">
                Modelo 232: Declaración Informativa
              </h2>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
              El <strong>Modelo 232</strong> es la declaración informativa de operaciones vinculadas y operaciones y situaciones relacionadas con países o territorios 
              considerados paraísos fiscales. Es <strong>obligatorio</strong> para empresas y profesionales que realicen operaciones vinculadas.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="font-space font-bold text-gray-900 mb-4 text-lg">¿Quién debe presentarlo?</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Contribuyentes de IS, IRPF e IRNR que realicen operaciones vinculadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Que superen los umbrales de obligación de documentación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Que tengan operaciones con paraísos fiscales</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                <h3 className="font-space font-bold text-gray-900 mb-4 text-lg">¿Cuándo presentarlo?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-amber-600" />
                    <div>
                      <p className="font-bold text-gray-900">Mes de noviembre</p>
                      <p className="text-sm text-gray-600">Del ejercicio siguiente al declarado</p>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3 mt-3">
                    <p className="text-xs text-gray-600">
                      <strong>Ejemplo:</strong> Operaciones 2024 → Modelo 232 en noviembre 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="font-space font-bold text-gray-900 mb-4 text-xl">Contenido del Modelo 232</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Información del grupo', items: ['Identificación grupo multinacional', 'País de residencia matriz', 'Volumen operaciones grupo'] },
                  { title: 'Operaciones vinculadas', items: ['Detalle operación por operación', 'Persona/entidad vinculada', 'Importe y método valoración'] },
                  { title: 'Operaciones específicas', items: ['Operaciones {'>'} 100.000€/250.000€', 'Intangibles', 'Paraísos fiscales'] },
                  { title: 'País por país (CBC)', items: ['Solo grupos {'>'}750M€', 'Ingresos, beneficios, impuestos', 'Empleados por jurisdicción'] },
                ].map((section, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">{section.title}</h4>
                    <ul className="space-y-1.5">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Umbrales Clave */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Umbrales y Límites Cuantitativos 2024
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  amount: '250.000€',
                  title: 'Exención documentación',
                  description: 'Operaciones con la misma persona/entidad vinculada < 250k están exentas de documentación específica',
                  icon: CheckCircle,
                  color: 'green'
                },
                {
                  amount: '45M€',
                  title: 'Documentación simplificada',
                  description: 'Cifra de negocios < 45M permite usar documentación simplificada (salvo excepciones)',
                  icon: FileText,
                  color: 'blue'
                },
                {
                  amount: '750M€',
                  title: 'Country-by-Country',
                  description: 'Grupos con ingresos consolidados ≥ 750M deben presentar informe país por país (CBC Report)',
                  icon: Globe,
                  color: 'purple'
                },
              ].map((threshold, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 border-2 border-${threshold.color}-200 shadow-md`}>
                  <div className={`w-12 h-12 rounded-full bg-${threshold.color}-100 flex items-center justify-center mb-4`}>
                    <threshold.icon className={`w-6 h-6 text-${threshold.color}-600`} />
                  </div>
                  <p className={`text-3xl font-bold font-space text-${threshold.color}-600 mb-2`}>
                    {threshold.amount}
                  </p>
                  <h3 className="font-space font-bold text-gray-900 mb-3">
                    {threshold.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {threshold.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Euro className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-space font-bold text-gray-900 mb-2">Umbrales acumulativos</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    El umbral de <strong>250.000€</strong> se calcula por la suma de todas las operaciones con la misma persona/entidad vinculada durante el ejercicio, 
                    valoradas a <strong>valor de mercado</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Casos Prácticos */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Casos Prácticos Frecuentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Préstamo entre socio y sociedad',
                  scenario: 'Un socio presta 500.000€ a su sociedad al 0% interés. ¿Es correcto?',
                  solution: 'NO. Debe aplicarse un tipo de interés de mercado (ej: Euribor + diferencial). La diferencia tributará como dividendo para el socio y no será deducible para la sociedad.',
                  risk: 'Ajuste por Hacienda + sanción 15% sobre intereses no cobrados'
                },
                {
                  title: 'Servicios de gestión (management fees)',
                  scenario: 'Matriz extranjera cobra 100.000€ anuales por "servicios de gestión general" a filial española.',
                  solution: 'Debe documentarse: (1) qué servicios concretos se prestan, (2) que producen beneficio real, (3) test de duplicidad (no pagar dos veces lo mismo), (4) método de reparto si es servicio conjunto.',
                  risk: 'Sin documentación: no deducible + sanción'
                },
                {
                  title: 'Venta de inmueble entre vinculadas',
                  scenario: 'Sociedad vende local comercial a su administrador por 200.000€. Valor de mercado: 300.000€.',
                  solution: 'Diferencia de 100k: (a) Para sociedad: dividendo (no deducible), (b) Para administrador: rendimiento trabajo/capital (tributa). Obligatoria documentación completa (nunca simplificada en inmuebles).',
                  risk: 'Ajuste 100k + sanción 15% (15.000€) + tributación adicional administrador'
                },
              ].map((caso, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-space font-bold text-gray-900 mb-3 text-lg">
                        {caso.title}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Escenario:</p>
                          <p className="text-sm text-gray-600 bg-white rounded p-3">{caso.scenario}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-1">Solución correcta:</p>
                          <p className="text-sm text-gray-600 bg-white rounded p-3">{caso.solution}</p>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded p-3">
                          <p className="text-sm font-semibold text-red-900 mb-1">⚠️ Riesgo si no se hace bien:</p>
                          <p className="text-sm text-red-700">{caso.risk}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Comparativa España vs OCDE */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Particularidades Españolas vs Directrices OCDE
            </h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Scale className="w-8 h-8 text-primary" />
                    <h3 className="font-space font-bold text-gray-900 text-xl">España (Art. 18 LIS)</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span><strong>Umbrales concretos:</strong> 250k, 45M, 750M</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span><strong>Modelo 232</strong> obligatorio (noviembre)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span><strong>Sanciones específicas:</strong> 15% ajustes, 1k-10k/dato</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span><strong>Documentación simplificada</strong> para PYMEs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span><strong>APAs</strong> (Acuerdos Previos) válidos 4 años</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">▪</span>
                      <span>Régimen especial <strong>socios profesionales</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 bg-gray-50">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    <h3 className="font-space font-bold text-gray-900 text-xl">OCDE (Guidelines)</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▪</span>
                      <span><strong>Sin umbrales</strong> (cada país decide)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▪</span>
                      <span><strong>Master File + Local File</strong> (BEPS 13)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▪</span>
                      <span><strong>Sin régimen sancionador</strong> (no es ley)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▪</span>
                      <span><strong>Flexible</strong>: proporcionalidad y suficiencia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▪</span>
                      <span><strong>APAs bilaterales/multilaterales</strong> recomendados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">▪</span>
                      <span>Enfoque en <strong>análisis funcional</strong> detallado</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-primary/5 border-t border-primary/20">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Conclusión:</strong> España adopta los principios OCDE pero los concreta con umbrales, plazos y sanciones específicas. 
                  La normativa española es <strong>más prescriptiva y detallada</strong>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Checklist */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Checklist de Cumplimiento 2024
            </h2>

            <div className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12" />
                <div>
                  <h3 className="font-space font-bold text-2xl mb-1">Evita sanciones</h3>
                  <p className="text-white/80">Sigue esta lista paso a paso</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { step: '1', task: 'Identifica todas las operaciones vinculadas realizadas en el ejercicio', deadline: 'Cierre ejercicio' },
                { step: '2', task: 'Calcula importe total con cada persona/entidad vinculada (valoración mercado)', deadline: 'Cierre ejercicio' },
                { step: '3', task: 'Determina si superas umbral 250.000€ (necesitas documentación)', deadline: 'Cierre ejercicio' },
                { step: '4', task: 'Clasifica tipo de documentación: ¿Simplificada o Estándar? (45M cifra negocios)', deadline: 'Enero-Febrero' },
                { step: '5', task: 'Prepara análisis comparabilidad y selección método valoración', deadline: 'Marzo-Mayo' },
                { step: '6', task: 'Documenta política precios transferencia (Master File + Local File si aplica)', deadline: 'Junio-Septiembre' },
                { step: '7', task: 'Prepara Modelo 232 con todas las operaciones vinculadas', deadline: 'Octubre' },
                { step: '8', task: 'Presenta Modelo 232 (telemático) - DEADLINE NOVIEMBRE', deadline: 'Noviembre ⚠️' },
                { step: '9', task: 'Archiva documentación a disposición Hacienda (mínimo 4-6 años)', deadline: 'Permanente' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-space flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium mb-1">{item.task}</p>
                    <p className="text-sm text-primary font-semibold">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {item.deadline}
                    </p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-primary rounded mt-1" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: '¿Qué pasa si no presento el Modelo 232 a tiempo?',
                  answer: 'Sanción de 300€ a 20.000€ por presentación fuera de plazo, según gravedad y retraso. Si además la documentación es incorrecta o incompleta, aplican las sanciones del artículo 18.13 (1.000-10.000€ por dato, o 15% si hay correcciones).'
                },
                {
                  question: '¿Puedo usar documentación simplificada si facturo 30M€ pero vendo un inmueble a vinculada?',
                  answer: 'NO. Aunque tu cifra de negocios sea < 45M€, las operaciones sobre inmuebles NUNCA pueden usar documentación simplificada. Debes preparar documentación estándar completa para esa operación específica.'
                },
                {
                  question: '¿Las operaciones con mi grupo de consolidación fiscal necesitan documentación?',
                  answer: 'NO. Las operaciones entre entidades del mismo grupo de consolidación fiscal están EXENTAS de documentación (art. 18.3.a LIS). Pero SÍ deben declararse en Modelo 232.'
                },
                {
                  question: '¿Qué es un APA y cuándo me conviene solicitarlo?',
                  answer: 'Un APA (Acuerdo Previo de Valoración) es un acuerdo con Hacienda donde pactas por adelantado el método y valoración de tus operaciones vinculadas. Conviene cuando: (1) operaciones complejas/recurrentes, (2) intangibles únicos, (3) quieres seguridad jurídica. Válido 4 años.'
                },
                {
                  question: '¿Cómo sé si mi margen está en mercado?',
                  answer: 'Debes realizar un estudio de comparabilidad con empresas independientes similares. Usa bases de datos (Amadeus, Orbis) para buscar empresas comparables y analizar sus márgenes. Lo habitual es usar un rango intercuartil (percentil 25-75). Si tu margen está dentro, presunción de mercado.'
                },
                {
                  question: 'Soy autónomo y tengo una SL donde participo 100%. ¿Estamos vinculados?',
                  answer: 'SÍ. Según art. 18.2.a), tú y tu sociedad estáis vinculados (socio-entidad). TODAS tus operaciones con la SL deben valorarse a mercado: salarios, alquileres, préstamos, venta de servicios, etc. Si superas 250k€, necesitas documentación.'
                },
              ].map((faq, index) => (
                <details key={index} className="group bg-white rounded-xl p-6 cursor-pointer hover:shadow-md transition-all">
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

      {/* Recursos Relacionados */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space text-gray-900 mb-8 text-center">
              Recursos Relacionados
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/recursos/directrices-ocde-precios-transferencia"
                className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2 text-lg">
                      Directrices OCDE de Precios de Transferencia
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Marco internacional que complementa la normativa española. Los 10 capítulos explicados en detalle.
                    </p>
                    <span className="text-blue-600 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      Leer guía completa
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/servicios/operaciones-vinculadas"
                className="group bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-2 border-primary/30 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space font-bold text-gray-900 group-hover:text-primary transition-colors mb-2 text-lg">
                      Nuestros Servicios de Operaciones Vinculadas
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Te ayudamos con documentación, Modelo 232, estudios de comparabilidad y defensa ante inspecciones.
                    </p>
                    <span className="text-primary text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      Ver servicios
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Necesitas ayuda con tus operaciones vinculadas?"
        description="Más de 15 años ayudando a empresas a cumplir con la normativa española de operaciones vinculadas. Documentación, Modelo 232, defensa ante inspecciones."
        variant="dark"
      />
    </>
  )
}
