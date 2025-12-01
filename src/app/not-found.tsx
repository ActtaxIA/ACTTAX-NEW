import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-[180px] md:text-[250px] font-gasoek text-primary/10 leading-none block">
              404
            </span>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold font-space text-gray-900 mb-4">
            Página no encontrada
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
            Quizás puedas encontrar lo que necesitas en nuestro inicio o servicios.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                Volver al inicio
              </Button>
            </Link>
            <Link href="/servicios">
              <Button variant="outline" size="lg">
                Ver servicios
              </Button>
            </Link>
          </div>

          {/* Help Text */}
          <p className="mt-12 text-gray-500">
            ¿Necesitas ayuda?{' '}
            <Link href="/contacto" className="text-primary hover:underline font-medium">
              Contáctanos
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
