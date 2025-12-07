import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y protección de datos de ACTTAX.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.acttax.es/legal/privacidad',
  },
}

export default function PrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 bg-gray-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
              Política de Privacidad
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
            <h2>1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales es {siteConfig.name}, 
              con domicilio en {siteConfig.address.city}, {siteConfig.address.country}, 
              y correo electrónico de contacto: {siteConfig.email}.
            </p>

            <h2>2. Finalidad del tratamiento</h2>
            <p>
              Los datos personales que nos facilite serán tratados con las siguientes 
              finalidades:
            </p>
            <ul>
              <li>Atender sus consultas y solicitudes de información.</li>
              <li>Gestionar la prestación de nuestros servicios profesionales.</li>
              <li>Enviarle comunicaciones comerciales, previo consentimiento.</li>
              <li>Cumplir con las obligaciones legales aplicables.</li>
            </ul>

            <h2>3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul>
              <li>El consentimiento del interesado.</li>
              <li>La ejecución de un contrato o medidas precontractuales.</li>
              <li>El interés legítimo del responsable.</li>
              <li>El cumplimiento de obligaciones legales.</li>
            </ul>

            <h2>4. Destinatarios</h2>
            <p>
              Sus datos no serán cedidos a terceros, salvo obligación legal o cuando 
              sea necesario para la prestación de nuestros servicios.
            </p>

            <h2>5. Derechos del interesado</h2>
            <p>
              Usted tiene derecho a:
            </p>
            <ul>
              <li><strong>Acceso:</strong> Conocer qué datos personales tenemos.</li>
              <li><strong>Rectificación:</strong> Modificar los datos inexactos.</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
              <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado.</li>
            </ul>
            <p>
              Para ejercer estos derechos, contacte en {siteConfig.email}.
            </p>

            <h2>6. Conservación de datos</h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para cumplir con 
              la finalidad para la que se recabaron.
            </p>

            <h2>7. Seguridad</h2>
            <p>
              Hemos adoptado las medidas técnicas y organizativas necesarias para 
              garantizar la seguridad de sus datos personales.
            </p>

            <h2>8. Reclamaciones</h2>
            <p>
              Puede presentar una reclamación ante la Agencia Española de Protección 
              de Datos (www.aepd.es).
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
