import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
  lightTheme?: boolean
}

export default function Breadcrumbs({ items, className = '', lightTheme = false }: BreadcrumbsProps) {
  const textColor = lightTheme ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900'
  const activeColor = lightTheme ? 'text-white/90' : 'text-gray-900'
  const separatorColor = lightTheme ? 'text-white/50' : 'text-gray-400'

  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
      <Link href="/" className={`${textColor} transition-colors flex items-center gap-1`}>
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Inicio</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        
        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className={`w-4 h-4 ${separatorColor}`} />
            {item.href && !isLast ? (
              <Link href={item.href} className={`${textColor} transition-colors`}>
                {item.name}
              </Link>
            ) : (
              <span className={`${activeColor} line-clamp-1 ${isLast ? 'font-medium' : ''}`}>
                {item.name}
              </span>
            )}
          </div>
        )
      })}
    </nav>
  )
}

