import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Target, Users, Lightbulb, Award, Building, Globe, Clock } from 'lucide-react'
import Container from '@/components/ui/Container'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'ACTTAX: +15 años en precios de transferencia y valoración empresarial. Despacho boutique con resultados excepcionales. Murcia, España.',
  alternates: {
    canonical: 'https://www.acttax.es/sobre-nosotros',
  },
  openGraph: {
    title: 'Sobre Nosotros | ACTTAX',
    description: 'Conoce ACTTAX: más de 15 años de experiencia en precios de transferencia, valoración de empresas e innovación fiscal. Enfoque boutique con resultados excepcionales.',
    url: 'https://www.acttax.es/sobre-nosotros',
    siteName: 'ACTTAX',
    locale: 'es_ES',
    type: 'website',
  },
}

const values = [
  {
    icon: Shield,
    title: 'Rigor técnico',
    description:
      'Cada informe, cada análisis, cada documento está respaldado por un conocimiento profundo de la normativa fiscal nacional e internacional.',
  },
  {
    icon: Target,
    title: 'Orientación a resultados',
    description:
      'No nos conformamos con cumplir: buscamos optimizar tu posición fiscal dentro del marco legal, maximizando el valor para tu empresa.',
  },
  {
    icon: Users,
    title: 'Cercanía',
    description:
      'Somos un equipo accesible. Creemos en la comunicación directa y en construir relaciones duraderas basadas en la confianza.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description:
      'Integramos las últimas tecnologías de IA y automatización para ofrecer servicios más eficientes y de mayor valor añadido.',
  },
]

const stats = [
  { number: '+15', label: 'años de experiencia', icon: Clock },
  { number: '+200', label: 'clientes satisfechos', icon: Building },
  { number: '100%', label: 'éxito en inspecciones', icon: Award },
  { number: '3', label: 'países de actuación', icon: Globe },
]

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white font-space font-semibold text-sm rounded-full mb-6">
              Sobre Nosotros
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">
              Especialización y cercanía al servicio de tu empresa
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Somos un despacho boutique con enfoque en precios de transferencia, 
              valoración empresarial e innovación fiscal. Combinamos experiencia 
              técnica con tecnología de vanguardia.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-12 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-bold font-space text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-gray-900 mb-6">
                Nuestra historia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ACTTAX nace de la convicción de que las empresas merecen un asesoramiento 
                  fiscal de primer nivel, accesible y personalizado. Tras años de experiencia 
                  en grandes firmas de consultoría, decidimos crear un despacho donde la 
                  especialización y la cercanía fueran los pilares fundamentales.
                </p>
                <p>
                  Nos hemos especializado en las áreas más técnicas y demandadas de la 
                  fiscalidad: precios de transferencia, valoración de empresas y, más 
                  recientemente, la aplicación de inteligencia artificial a los procesos 
                  fiscales y contables.
                </p>
                <p>
                  Hoy, trabajamos con empresas de todos los tamaños, desde startups 
                  tecnológicas hasta grupos multinacionales, ayudándoles a cumplir con 
                  la normativa mientras optimizan su posición fiscal.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="bg-gradient-to-br from-primary to-primary-700 rounded-3xl p-12 text-white">
              <h3 className="text-2xl font-bold font-space mb-6">
                Nuestra misión
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Democratizar el acceso a asesoramiento fiscal de primer nivel, 
                combinando el rigor técnico de las grandes firmas con la cercanía 
                y flexibilidad de un despacho boutique.
              </p>
              <div className="pt-8 border-t border-white/20">
                <h4 className="font-space font-semibold mb-4">Nuestra visión</h4>
                <p className="text-white/80">
                  Ser el referente en España en fiscalidad aplicada con tecnología, 
                  liderando la transformación digital del sector.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-gray-900 mb-4">
              Nuestros valores
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo día a día.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-space text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-gray-900 text-center mb-12">
              ¿Por qué trabajar con nosotros?
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Especialización real',
                  description:
                    'No somos generalistas. Nos dedicamos exclusivamente a precios de transferencia, valoración y tecnología fiscal. Esto nos permite ofrecer un nivel de profundidad y actualización que difícilmente encontrarás en despachos tradicionales.',
                },
                {
                  title: 'Enfoque boutique',
                  description:
                    'Conocemos a cada cliente por su nombre. Trabajamos en equipo contigo, no como un proveedor externo. Nuestra filosofía es ser una extensión de tu departamento financiero.',
                },
                {
                  title: 'Tecnología de vanguardia',
                  description:
                    'Invertimos continuamente en herramientas de IA y automatización. Esto nos permite ser más eficientes, reducir tiempos de entrega y ofrecer servicios que otros despachos no pueden.',
                },
                {
                  title: 'Resultados demostrables',
                  description:
                    'Más de 200 clientes satisfechos y un 100% de éxito en inspecciones de operaciones vinculadas. Nuestros números hablan por nosotros.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-xl font-bold font-space text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Quieres conocernos mejor?"
        description="Agenda una llamada sin compromiso y descubre cómo podemos ayudarte."
        variant="dark"
      />
    </>
  )
}
