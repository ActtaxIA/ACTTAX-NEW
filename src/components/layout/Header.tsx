'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationLinks } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isHomePage = pathname === '/'

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled || !isHomePage ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
    )}>
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src={isScrolled || !isHomePage ? '/images/logo/logo_acttax4.png' : '/images/logo/logo_acttax4-white.png'}
              alt="ACTTAX"
              width={140}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.children ? (
                  <>
                    <div 
                      className="flex items-center gap-1"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'font-space font-medium transition-colors',
                          pathname === link.href
                            ? (isScrolled || !isHomePage ? 'text-primary' : 'text-white')
                            : (isScrolled || !isHomePage ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white')
                        )}
                      >
                        {link.name}
                      </Link>
                      <ChevronDown className={cn(
                        'w-4 h-4 transition-colors',
                        isScrolled || !isHomePage ? 'text-gray-700' : 'text-white/90'
                      )} />
                    </div>
                    <div
                      className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[280px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-space font-medium text-gray-900 hover:text-primary">{child.name}</span>
                            {child.description && (
                              <span className="block text-sm text-gray-500 mt-0.5">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'font-space font-medium transition-colors',
                      pathname === link.href
                        ? (isScrolled || !isHomePage ? 'text-primary' : 'text-white')
                        : (isScrolled || !isHomePage ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white')
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contacto">
              <Button variant={isScrolled || !isHomePage ? 'primary' : 'outline'} size="sm"
                className={!isScrolled && isHomePage ? 'border-white text-white hover:bg-white hover:text-primary' : ''}>
                Contactar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled || !isHomePage ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        )}>
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4">
            {navigationLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <div className="py-2">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="flex items-center justify-between w-full py-2 font-space font-medium text-gray-900"
                    >
                      {link.name}
                      <ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === link.name && 'rotate-180')} />
                    </button>
                    <div className={cn(
                      'overflow-hidden transition-all duration-200 pl-4',
                      activeDropdown === link.name ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    )}>
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block py-2 text-gray-600 hover:text-primary">
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-3 font-space font-medium transition-colors',
                      pathname === link.href ? 'text-primary' : 'text-gray-900 hover:text-primary'
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link href="/contacto">
                <Button variant="primary" className="w-full">Contactar</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
