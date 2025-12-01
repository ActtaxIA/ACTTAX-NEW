'use client'

import Link from 'next/link'
import { FileText, TrendingUp, Brain, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'

const servicesData = [
  {
    id: 'operaciones-vinculadas',
    title: 'Operaciones Vinculadas y PT',
    description: 'Consultoría especializada en precios de transferencia. Documentación OCDE, APAs, defensa ante inspecciones y cumplimiento normativo.',
    href: '/servicios/operaciones-vinculadas',
    highlights: ['Modelo 232', 'Informes OCDE', 'APAs', 'Defensa fiscal'],
    Icon: FileText,
  },
  {
    id: 'valoracion-empresas',
    title: 'Valoración de Empresas',
    description: 'Valoraciones rigurosas para M&A, startups, activos financieros e intangibles. Metodologías reconocidas internacionalmente.',
    href: '/servicios/valoracion-empresas',
    highlights: ['M&A', 'Startups', 'Intangibles', 'Due Diligence'],
    Icon: TrendingUp,
  },
  {
    id: 'inteligencia-artificial',
    title: 'IA Aplicada a Fiscalidad',
    description: 'Automatización de procesos fiscales y contables con inteligencia artificial. OCR, reporting automático e integración con ERPs.',
    href: '/servicios/inteligencia-artificial',
    highlights: ['Automatización', 'OCR', 'Agentes IA', 'Integración ERP'],
    Icon: Brain,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-space font-semibold text-sm rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="section-title mb-4">
            Especialización que <span className="text-primary">marca la diferencia</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tres pilares de conocimiento experto para cubrir todas tus necesidades fiscales, financieras y tecnológicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-primary/20"
            >
              <div className="service-icon mb-6">
                <service.Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-space mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.highlights.map((highlight) => (
                  <span key={highlight} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-primary font-space font-semibold group-hover:gap-3 gap-2 transition-all">
                Saber más
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-primary font-space font-semibold hover:gap-3 transition-all">
            Ver todos los servicios
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
