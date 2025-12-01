import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/constants'

interface CTASectionProps {
  title?: string
  description?: string
  variant?: 'primary' | 'dark'
}

export default function CTASection({
  title = '¿Listo para optimizar tu fiscalidad?',
  description = 'Contacta con nuestro equipo de expertos y descubre cómo podemos ayudarte.',
  variant = 'primary',
}: CTASectionProps) {
  return (
    <section className={variant === 'dark' ? 'py-24 bg-gray-800 text-white' : 'py-24 bg-gradient-to-br from-primary to-primary-700 text-white'}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mb-6">{title}</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Solicitar consulta gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver servicios
              </Button>
            </Link>
          </div>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            {siteConfig.email}
          </a>
        </div>
      </Container>
    </section>
  )
}
