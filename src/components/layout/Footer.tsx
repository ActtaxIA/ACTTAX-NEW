import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Linkedin, Facebook } from 'lucide-react'
import Container from '@/components/ui/Container'
import { siteConfig, footerLinks } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="py-16 relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/">
                <Image src="/images/logo/logo_acttax4-white.png" alt="ACTTAX" width={140} height={50} className="h-10 w-auto mb-6" />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Asesoría fiscal especializada en precios de transferencia, valoración de empresas e inteligencia artificial aplicada.
              </p>
              <div className="flex gap-3">
                {siteConfig.social.linkedin && (
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-space font-bold text-lg mb-6">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-space font-bold text-lg mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="font-space font-bold text-lg mb-6">Contacto</h3>
              <ul className="space-y-4 mb-6">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{siteConfig.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{siteConfig.address.city}, {siteConfig.address.country}</span>
                </li>
              </ul>
              
              <h4 className="font-space font-semibold text-sm text-gray-300 mb-3">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/sitemap.xml" className="text-gray-500 hover:text-white text-sm transition-colors">
                Mapa del sitio
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
