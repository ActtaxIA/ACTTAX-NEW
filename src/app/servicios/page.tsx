import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, TrendingUp, Brain, ArrowRight, CheckCircle } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { CTASection } from '@/components/sections'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Descubre nuestros servicios especializados: operaciones vinculadas, precios de transferencia, valoración de empresas e inteligencia artificial aplicada a fiscalidad.',
}

const serviceIcons = {
  'operaciones-vinculadas': FileText,
  'valoracion-empresas': TrendingUp,
  'inteligencia-artificial': Brain,
}

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white font-space font-semibold text-sm rounded-full mb-6">
              Nuestros Servicios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">
              Especialización fiscal para tu empresa
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Tres pilares de conocimiento experto que cubren todas tus necesidades fiscales, financieras y tecnológicas.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
              const isEven = index % 2 === 0

              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-space text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/servicios/${service.slug}`}>
                      <Button variant="secondary">
                        Ver servicio completo
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                      <h3 className="font-space font-bold text-gray-900 mb-6">Incluye:</h3>
                      <div className="space-y-4">
                        {service.subservices.slice(0, 5).map((sub) => (
                          <div key={sub.title} className="bg-white rounded-xl p-4 shadow-sm">
                            <h4 className="font-space font-semibold text-gray-900 mb-1">{sub.title}</h4>
                            <p className="text-sm text-gray-500 line-clamp-2">{sub.description}</p>
                          </div>
                        ))}
                        {service.subservices.length > 5 && (
                          <p className="text-sm text-gray-500 text-center pt-2">+{service.subservices.length - 5} servicios más</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <CTASection title="¿Necesitas asesoramiento especializado?" variant="dark" />
    </>
  )
}
