import { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies del sitio web de ACTTAX.',
}

export default function CookiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
            Política de Cookies
          </h1>
          <p className="text-gray-600">Última actualización: Diciembre 2024</p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="prose prose-lg max-w-4xl">
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo
              (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten
              que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.
            </p>

            <h2>2. ¿Qué tipos de cookies utilizamos?</h2>

            <h3>Cookies técnicas (necesarias)</h3>
            <p>
              Son aquellas que permiten la navegación a través de la página web y la
              utilización de las diferentes opciones o servicios que en ella existen.
            </p>

            <h3>Cookies de análisis</h3>
            <p>
              Son aquellas que permiten el seguimiento y análisis del comportamiento
              de los usuarios en el sitio web. La información recogida se utiliza para
              la medición de la actividad y para la elaboración de perfiles de navegación.
            </p>

            <h3>Cookies de personalización</h3>
            <p>
              Son aquellas que permiten recordar información para que el usuario acceda
              al servicio con determinadas características que pueden diferenciar su
              experiencia de la de otros usuarios.
            </p>

            <h2>3. Cookies utilizadas en este sitio web</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Cookie</th>
                    <th className="border border-gray-300 px-4 py-2">Tipo</th>
                    <th className="border border-gray-300 px-4 py-2">Duración</th>
                    <th className="border border-gray-300 px-4 py-2">Finalidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Análisis</td>
                    <td className="border border-gray-300 px-4 py-2">2 años</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics - Distinguir usuarios</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Análisis</td>
                    <td className="border border-gray-300 px-4 py-2">24 horas</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics - Distinguir usuarios</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
                    <td className="border border-gray-300 px-4 py-2">Técnica</td>
                    <td className="border border-gray-300 px-4 py-2">1 año</td>
                    <td className="border border-gray-300 px-4 py-2">Almacenar preferencias de cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>4. ¿Cómo gestionar las cookies?</h2>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo
              mediante la configuración de las opciones del navegador instalado en su dispositivo.
            </p>
            <ul>
              <li>
                <strong>Chrome:</strong>{' '}
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Configuración de cookies en Chrome
                </a>
              </li>
              <li>
                <strong>Firefox:</strong>{' '}
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Configuración de cookies en Firefox
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{' '}
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Configuración de cookies en Safari
                </a>
              </li>
              <li>
                <strong>Edge:</strong>{' '}
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Configuración de cookies en Edge
                </a>
              </li>
            </ul>

            <h2>5. Consentimiento</h2>
            <p>
              Al navegar y continuar en nuestro sitio web, está consintiendo el uso de
              las cookies antes mencionadas, por los plazos señalados y en las condiciones
              contenidas en la presente Política de Cookies.
            </p>

            <h2>6. Actualizaciones</h2>
            <p>
              Es posible que actualicemos la Política de Cookies de nuestro sitio web.
              Por ello, le recomendamos revisar esta política cada vez que acceda a
              nuestro sitio web con el objetivo de estar adecuadamente informado.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Si tiene dudas sobre esta política de cookies, puede contactar con nosotros
              en: <a href="mailto:info@acttax.es" className="text-primary hover:underline">info@acttax.es</a>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
