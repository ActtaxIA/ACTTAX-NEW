import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/lib/constants'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con ACTTAX para una consulta gratuita sobre precios de transferencia, valoración de empresas o automatización fiscal.',
}

const contactInfo = [
  { icon: Mail, title: 'Email', content: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, title: 'Ubicación', content: `${siteConfig.address.city}, ${siteConfig.address.country}` },
  { icon: Clock, title: 'Horario', content: 'Lunes a Viernes: 9:00 - 18:00' },
]

export default function ContactoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white font-space font-semibold text-sm rounded-full mb-6">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">Hablemos de tu proyecto</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              ¿Tienes dudas sobre precios de transferencia, necesitas valorar tu empresa o quieres automatizar tus procesos fiscales?
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-space text-gray-900 mb-8">Información de contacto</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-space font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-gray-600 hover:text-primary transition-colors">{item.content}</a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-accent/20 rounded-2xl p-6">
                <h3 className="font-space font-bold text-gray-900 mb-2">Respuesta garantizada</h3>
                <p className="text-gray-600 text-sm">Respondemos en menos de 24 horas laborables.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <h2 className="text-2xl font-bold font-space text-gray-900 mb-2">Envíanos un mensaje</h2>
                <p className="text-gray-600 mb-8">Cuéntanos tu situación y nos pondremos en contacto contigo.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
