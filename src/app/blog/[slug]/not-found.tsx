import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Container from '@/components/ui/Container'

export default function NotFound() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-primary to-primary-700 text-white flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold font-space mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold font-space mb-4">
            Artículo no encontrado
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Lo sentimos, no pudimos encontrar el artículo que buscas. 
            Es posible que haya sido movido o eliminado.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-gray-900 font-space font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al blog
          </Link>
        </div>
      </Container>
    </section>
  )
}

