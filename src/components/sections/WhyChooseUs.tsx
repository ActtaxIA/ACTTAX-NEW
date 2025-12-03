import Link from 'next/link'
import { Shield, Target, Users, Lightbulb, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const reasons = [
  {
    icon: Shield,
    title: 'Especialización fiscal',
    description:
      'No somos una consultora genérica. Aplicamos conocimiento experto directamente a procesos financieros y fiscales.',
  },
  {
    icon: Target,
    title: 'Enfoque boutique',
    description:
      'Soluciones a medida, adaptadas a tu realidad empresarial. Cada cliente es único y merece atención personalizada.',
  },
  {
    icon: Users,
    title: 'Cumplimiento garantizado',
    description:
      'Informes y documentación alineados con normativa española e internacional. Tranquilidad ante inspecciones.',
  },
  {
    icon: Lightbulb,
    title: 'Visión de futuro',
    description:
      'Integramos la IA de forma escalable y segura. Preparamos tu empresa para los desafíos del mañana.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-space font-semibold text-sm rounded-full mb-4">
              ¿Por qué ACTTAX?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space text-gray-900 mb-6">
              Experiencia y especialización al servicio de tu empresa
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              En ACTTAX combinamos años de experiencia en fiscalidad internacional 
              con las últimas tecnologías de automatización. Nuestro objetivo es 
              simple: que te centres en hacer crecer tu negocio mientras nosotros 
              nos ocupamos del cumplimiento fiscal.
            </p>
            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center gap-2 text-primary font-space font-semibold hover:gap-3 transition-all"
            >
              Conoce más sobre nosotros
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right: Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={cn(
                  'p-6 rounded-2xl transition-all duration-300',
                  'hover:shadow-lg hover:-translate-y-1',
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-primary/5'
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-space font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
