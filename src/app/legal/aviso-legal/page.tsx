import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal y condiciones de uso de la web de ACTTAX.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.acttax.es/legal/aviso-legal',
  },
}

export default function AvisoLegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 bg-gray-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
              Aviso Legal
            </h1>
            <p className="text-gray-600">
              Última actualización: Diciembre 2024
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-10 md:py-12">
        <Container>
          <div className="max-w-3xl prose prose-lg">
            <h2>1. Datos identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en el artículo 10 
              de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la 
              Información y del Comercio Electrónico, a continuación se reflejan los 
              siguientes datos:
            </p>
            <ul>
              <li><strong>Titular:</strong> {siteConfig.name}</li>
              <li><strong>Domicilio:</strong> {siteConfig.address.city}, {siteConfig.address.country}</li>
              <li><strong>Email:</strong> {siteConfig.email}</li>
            </ul>

            <h2>2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso del sitio web {siteConfig.url}, 
              del que es titular {siteConfig.name}.
            </p>
            <p>
              La navegación por el sitio web atribuye la condición de usuario del 
              mismo e implica la aceptación plena y sin reservas de todas y cada 
              una de las disposiciones incluidas en este Aviso Legal.
            </p>

            <h2>3. Propiedad intelectual e industrial</h2>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo su 
              programación, edición, compilación y demás elementos necesarios para 
              su funcionamiento, los diseños, logotipos, texto y/o gráficos, son 
              propiedad del titular o, en su caso, dispone de licencia o autorización 
              expresa por parte de los autores.
            </p>

            <h2>4. Responsabilidad</h2>
            <p>
              El titular no se hace responsable, en ningún caso, de los daños y 
              perjuicios de cualquier naturaleza que pudieran ocasionar, a título 
              enunciativo: errores u omisiones en los contenidos, falta de 
              disponibilidad del portal o la transmisión de virus o programas 
              maliciosos.
            </p>

            <h2>5. Modificaciones</h2>
            <p>
              El titular se reserva el derecho de efectuar sin previo aviso las 
              modificaciones que considere oportunas en su portal.
            </p>

            <h2>6. Legislación aplicable y jurisdicción</h2>
            <p>
              La relación entre el titular y el usuario se regirá por la normativa 
              española vigente. Para la resolución de todas las controversias serán 
              competentes los Juzgados y Tribunales de Murcia.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
