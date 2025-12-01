import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  FileText, TrendingUp, Brain, ArrowRight, CheckCircle, ArrowLeft, ChevronDown,
  Globe, FileWarning, Shield, Network, RefreshCw, DollarSign, Users, Home,
  Scale, Merge, FileCheck, ArrowUpCircle, Eye, FileStack, Database, LineChart,
  ShieldCheck, ScanSearch, BarChart, Clock, Target, Rocket, Mail, Calendar, Phone
} from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { CTASection } from '@/components/sections'
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services'
import { supabase } from '@/lib/supabase'
import { generateSlug } from '@/lib/articleFormatter'

const serviceIcons = {
  'operaciones-vinculadas': FileText,
  'valoracion-empresas': TrendingUp,
  'inteligencia-artificial': Brain,
}

const useCaseIcons: Record<string, any> = {
  Globe, FileWarning, Shield, TrendingUp, Network, RefreshCw,
  DollarSign, Users, Home, Scale, Merge,
  FileStack, Database, LineChart, ShieldCheck, ScanSearch, BarChart
}

const benefitIcons: Record<string, any> = {
  ShieldCheck, Target, CheckCircle, FileCheck, ArrowUpCircle, Eye, Clock, Brain, Rocket,
  Heart: CheckCircle, Award: CheckCircle
}

interface ServicePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
  const otherServices = services.filter((s) => s.id !== service.id)

  // Mapeo de servicios a categorías de artículos
  const serviceCategoryMap: Record<string, string> = {
    'operaciones-vinculadas': 'Precios de Transferencia',
    'valoracion-empresas': 'Valoración de Empresas',
    'inteligencia-artificial': 'IA Financiera',
  }

  // Obtener artículos relacionados del blog según la categoría del servicio
  const serviceCategory = serviceCategoryMap[service.id]
  const { data: relatedArticles } = await supabase
    .from('articles')
    .select('id, title, published_date, category')
    .eq('status', 'published')
    .eq('category', serviceCategory)
    .order('published_date', { ascending: false })
    .limit(3)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-700 text-white">
        <Container>
          <Link href="/servicios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </Link>
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">{service.title}</h1>
            <p className="text-xl text-white/80 leading-relaxed">{service.description}</p>
          </div>
        </Container>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {service.features.map((feature) => (
              <div key={feature} className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-space font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Casos de Uso */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-4">¿Cuándo necesitas este servicio?</h2>
            <p className="section-subtitle mx-auto">Situaciones habituales en las que podemos ayudarte</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases.map((useCase) => {
              const UseCaseIcon = useCaseIcons[useCase.icon] || FileText
              return (
                <div key={useCase.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <UseCaseIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-space font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-4">¿Qué conseguirás?</h2>
            <p className="section-subtitle mx-auto">Beneficios reales para tu empresa</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.benefits.map((benefit) => {
              const BenefitIcon = benefitIcons[benefit.icon] || CheckCircle
              return (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <BenefitIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-4">¿Cómo trabajamos contigo?</h2>
            <p className="section-subtitle mx-auto">Un proceso claro y transparente en {service.workflow.length} pasos</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Línea conectora */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            
            <div className="space-y-12">
              {service.workflow.map((step, index) => (
                <div key={step.title} className={`flex gap-8 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="text-xl font-bold font-space text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">{step.description}</p>
                      <span className="text-sm text-primary font-semibold inline-flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl font-space shadow-lg z-10 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Subservices Detail */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-4">Servicios incluidos</h2>
            <p className="section-subtitle mx-auto">Conoce en detalle cada uno de los servicios que ofrecemos</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {service.subservices.map((sub, index) => (
              <div key={sub.title} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-space font-bold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold font-space text-gray-900 mb-3">{sub.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{sub.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Preguntas frecuentes</h2>
              <p className="section-subtitle">Resolvemos tus dudas sobre {service.title.toLowerCase()}</p>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                  <summary className="flex items-center justify-between font-space font-semibold text-gray-900 list-none">
                    <span className="pr-8">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Artículos Relacionados del Blog */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Artículos relacionados</h2>
              <p className="section-subtitle">Profundiza en el tema con nuestro blog</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedArticles.map((article) => (
                <Link 
                  key={article.id}
                  href={`/blog/${generateSlug(article.title)}`}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary/30"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <h3 className="font-space font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(article.published_date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold">
                    Leer más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" href="/blog">
                Ver todos los artículos
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Other Services */}
      <section className="py-24 bg-white">
        <Container>
          <h2 className="section-title text-center mb-12">Otros servicios que te pueden interesar</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherServices.map((otherService) => {
              const OtherIcon = serviceIcons[otherService.id as keyof typeof serviceIcons]
              return (
                <Link key={otherService.id} href={`/servicios/${otherService.slug}`}
                  className="group bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <OtherIcon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-space font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {otherService.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{otherService.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Mejorado con múltiples opciones */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-700 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-6">
              ¿Listo para empezar con {service.title.toLowerCase()}?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Agenda una consulta gratuita de 30 minutos para discutir cómo podemos ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                href="/contacto"
                className="group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agenda consulta gratuita
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/contacto"
                className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Solicitar presupuesto
              </Button>
            </div>
            <p className="mt-8 text-white/60 text-sm">
              O llámanos directamente al <a href="tel:+34XXX" className="text-white underline hover:text-yellow-300 transition-colors">+34 XXX XXX XXX</a>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
