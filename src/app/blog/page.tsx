'use client'

import { useEffect, useState, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import { CTASection } from '@/components/sections'
import { supabase, CATEGORIES, Article } from '@/lib/supabase'
import { generateDescription, calculateReadingTime, generateSlug } from '@/lib/articleFormatter'

// Forzar la página a ser dinámica para evitar problemas con useSearchParams
export const dynamic = 'force-dynamic'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface BlogArticle {
  id: string
  slug: string
  title: string
  description: string
  date: string
  category: string | null
  readingTime: number
}

export default function BlogPage() {
  const router = useRouter()
  
  const [articles, setArticles] = useState<BlogArticle[]>([])
  const [filteredArticles, setFilteredArticles] = useState<BlogArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas')
  const [articlesPerPage, setArticlesPerPage] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function fetchArticles() {
      // Solo mostrar artículos publicados (el script actualiza el status automáticamente)
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .order('published_date', { ascending: false })

      if (error) {
        console.error('Error fetching articles:', error)
        setLoading(false)
        return
      }

      const processedArticles = data.map((article: Article) => ({
        id: article.id,
        slug: generateSlug(article.title),
        title: article.title,
        description: generateDescription(article.content, 200),
        date: article.published_date,
        category: article.category,
        readingTime: calculateReadingTime(article.content),
      }))

      setArticles(processedArticles)
      setFilteredArticles(processedArticles)
      setLoading(false)
    }

    fetchArticles()
  }, [])

  // Filtrar artículos cuando cambian los filtros
  useEffect(() => {
    let filtered = [...articles]

    // Filtro por categoría
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    // Filtro por búsqueda textual
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query)
      )
    }

    setFilteredArticles(filtered)
    setCurrentPage(1) // Resetear a la primera página cuando se filtra
  }, [searchQuery, selectedCategory, articles])

  // Paginación
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = filteredArticles.slice(startIndex, endIndex)

  // Artículos destacados (los 5 más visitados - solo en vista sin filtros)
  const [featuredArticles, setFeaturedArticles] = useState<BlogArticle[]>([])
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8
      const newScrollPosition = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    async function fetchFeaturedArticles() {
      try {
        const today = new Date().toISOString()
        
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('status', 'published')
          .lte('published_date', today)
          .order('views', { ascending: false })
          .limit(5)

        if (error) {
          console.error('Error fetching featured articles:', error)
          // Si la columna views no existe, intentar sin ordenar por views
          if (error.code === '42703') {
            console.log('Column views does not exist, fetching by date instead')
            const { data: fallbackData, error: fallbackError } = await supabase
              .from('articles')
              .select('*')
              .eq('status', 'published')
              .lte('published_date', today)
              .order('published_date', { ascending: false })
              .limit(5)
            
            if (fallbackError || !fallbackData) {
              console.error('Fallback fetch also failed:', fallbackError)
              return
            }
            
            const processedArticles = fallbackData.map((article: Article) => ({
              id: article.id,
              slug: generateSlug(article.title),
              title: article.title,
              description: generateDescription(article.content, 200),
              date: article.published_date,
              category: article.category,
              readingTime: calculateReadingTime(article.content),
            }))
            
            setFeaturedArticles(processedArticles)
          }
          return
        }

        const processedArticles = data.map((article: Article) => ({
          id: article.id,
          slug: generateSlug(article.title),
          title: article.title,
          description: generateDescription(article.content, 200),
          date: article.published_date,
          category: article.category,
          readingTime: calculateReadingTime(article.content),
        }))

        setFeaturedArticles(processedArticles)
      } catch (err) {
        console.error('Exception in fetchFeaturedArticles:', err)
      }
    }

    if (currentPage === 1 && !searchQuery && selectedCategory === 'Todas') {
      fetchFeaturedArticles()
    }
  }, [currentPage, searchQuery, selectedCategory])

  // Obtener categorías únicas (solo las que tienen artículos)
  const availableCategories: string[] = ['Todas', ...Array.from(new Set(articles.map(a => a.category).filter(Boolean))) as string[]]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-16 bg-gradient-to-br from-primary to-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white font-space font-semibold text-sm rounded-full mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6">
              Conocimiento fiscal a tu alcance
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Artículos, guías y análisis sobre precios de transferencia, 
              valoración de empresas y las últimas novedades en fiscalidad e IA.
            </p>
          </div>
        </Container>
      </section>

      {/* Filtros y Búsqueda */}
<section className="py-8 bg-white border-b border-gray-200 sticky top-[70px] z-10 shadow-sm">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Buscador */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              {/* Filtro por categorías */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white cursor-pointer font-space text-sm"
                >
                  {availableCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Artículos por página */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 font-space">Mostrar:</span>
                <div className="relative">
                  <select
                    value={articlesPerPage}
                    onChange={(e) => {
                      setArticlesPerPage(Number(e.target.value))
                      setCurrentPage(1)
                    }}
                    className="appearance-none pl-3 pr-8 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white cursor-pointer font-space text-sm"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="mt-4 text-sm text-gray-600">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} de {filteredArticles.length} artículos
            {searchQuery && ` para "${searchQuery}"`}
            {selectedCategory !== 'Todas' && ` en ${selectedCategory}`}
          </div>
        </Container>
      </section>

      {/* Featured Posts - Carousel */}
      {currentPage === 1 && !searchQuery && selectedCategory === 'Todas' && featuredArticles.length > 0 && (
        <section className="py-10 md:py-12 bg-white">
          <Container>
            <h2 className="text-2xl font-bold font-space text-gray-900 mb-8">
              Artículos más visitados
            </h2>
            <div className="relative group/carousel">
              {/* Botón Izquierdo */}
              <button
                onClick={() => scrollCarousel('left')}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hover:scale-110"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              {/* Carrusel */}
              <div 
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth"
              >
                {featuredArticles.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex-shrink-0 w-[85%] md:w-[45%] lg:w-[30%] bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 snap-start border border-gray-100"
                  >
                    <Badge variant="primary" size="sm" className="mb-4">
                      {post.category || 'Sin categoría'}
                    </Badge>
                    <h3 className="text-xl font-bold font-space text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 pt-3 border-t border-gray-200">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime} min
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Botón Derecho */}
              <button
                onClick={() => scrollCarousel('right')}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hover:scale-110"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </Container>
        </section>
      )}

      {/* All Posts */}
      <section className="py-10 md:py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold font-space text-gray-900 mb-8">
            {currentPage === 1 && !searchQuery && selectedCategory === 'Todas' ? 'Todos los artículos' : 'Artículos'}
          </h2>
          
          {currentArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron artículos</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {currentArticles.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <Badge variant="primary" size="sm" className="mb-4 w-fit">
                      {post.category || 'Sin categoría'}
                    </Badge>
                    <h3 className="text-xl font-bold font-space text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readingTime} min
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-space text-sm"
                  >
                    Anterior
                  </button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // Mostrar solo algunas páginas alrededor de la actual
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-lg font-space text-sm ${
                              currentPage === page
                                ? 'bg-primary text-white'
                                : 'border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        )
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return <span key={page} className="px-2">...</span>
                      }
                      return null
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-space text-sm"
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </>
          )}
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space text-gray-900 mb-4">
              Suscríbete a nuestra newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Recibe nuestros artículos, guías y novedades fiscales directamente 
              en tu bandeja de entrada. Sin spam, solo contenido de valor.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-gray-900 font-space font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Suscribirme
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Al suscribirte aceptas nuestra{' '}
              <Link href="/legal/privacidad" className="text-primary hover:underline">
                política de privacidad
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Necesitas asesoramiento personalizado?"
        description="Nuestro equipo de expertos está listo para ayudarte con tus consultas fiscales."
        variant="dark"
      />
    </>
  )
}
