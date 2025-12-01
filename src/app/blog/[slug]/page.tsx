import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import { CTASection } from '@/components/sections'
import { supabase, Article } from '@/lib/supabase'
import { calculateReadingTime, generateSlug } from '@/lib/articleFormatter'

// Forzar la generación dinámica para evitar problemas con Supabase en build time
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidar cada hora

// Función simple para generar descripción sin dependencias externas
function generateSimpleDescription(text: string, maxLength: number = 160): string {
  const clean = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  if (clean.length <= maxLength) return clean
  return clean.substring(0, maxLength).trim() + '...'
}

interface PageProps {
  params: {
    slug: string
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    // Solo mostrar artículos publicados (el script actualiza el status automáticamente)
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*')
      .eq('status', 'published')

    if (error) {
      console.error('Error fetching articles:', error)
      return null
    }

    if (!articles || articles.length === 0) {
      console.log('No articles found')
      return null
    }

    // Buscar el artículo que coincida con el slug
    const article = articles.find((a: Article) => generateSlug(a.title) === slug)
    
    if (!article) {
      console.log(`Article not found for slug: ${slug}`)
      return null
    }

    // Incrementar vistas (sin esperar para no bloquear)
    supabase
      .from('articles')
      .update({ views: (article.views || 0) + 1 })
      .eq('id', article.id)
      .then((result) => {
        if (result.error) {
          console.error('Error updating views:', result.error)
        } else {
          console.log(`Views updated for article ${article.id}`)
        }
      })

    return article
  } catch (error) {
    console.error('Exception in getArticleBySlug:', error)
    return null
  }
}

async function getRelatedArticles(currentArticleId: string, category: string | null, limit = 3): Promise<Article[]> {
  try {
    let query = supabase
      .from('articles')
      .select('*')
      .eq('status', 'published')
      .neq('id', currentArticleId)
      .order('published_date', { ascending: false })
      .limit(limit)

    // Si tiene categoría, buscar artículos de la misma categoría
    if (category) {
      query = query.eq('category', category)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching related articles:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Exception in getRelatedArticles:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const article = await getArticleBySlug(params.slug)

    if (!article) {
      return {
        title: 'Artículo no encontrado | ACTTAX',
        description: 'El artículo que buscas no está disponible.',
      }
    }

    // Usar contenido formateado si existe, si no usar el raw
    const content = article.formatted_content || article.content || ''
    const description = generateSimpleDescription(content, 160)

    return {
      title: `${article.title} | ACTTAX`,
      description,
    }
  } catch (error) {
    console.error('Error in generateMetadata:', error)
    return {
      title: 'Error | ACTTAX',
      description: 'Ocurrió un error al cargar el artículo.',
    }
  }
}

export default async function ArticlePage({ params }: PageProps) {
  try {
    const article = await getArticleBySlug(params.slug)

    if (!article) {
      console.log(`Article not found, triggering notFound() for slug: ${params.slug}`)
      notFound()
    }

    const relatedArticles = await getRelatedArticles(article.id, article.category)
    
    // Si NO hay contenido formateado, mostrar el contenido raw sin formatear
    // El formateo SOLO se hace mediante el script batch, NO en tiempo real
    const formattedHTML = article.formatted_content || article.content || '<p>Contenido no disponible</p>'
    const plainText = formattedHTML.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
    const readingTime = calculateReadingTime(plainText)

    return (
      <>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary-700 text-white">
          <Container>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al blog
            </Link>

            <div className="max-w-4xl">
              {article.category && (
                <Badge variant="secondary" className="mb-6">
                  {article.category}
                </Badge>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {formatDate(article.published_date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {readingTime} min de lectura
                </span>
              </div>
            </div>
          </Container>
        </section>

      {/* Article Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article 
              className="prose prose-lg prose-gray max-w-none
                prose-headings:font-space prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-5xl prose-h2:text-gray-900 prose-h2:mt-20 prose-h2:mb-10 prose-h2:first:mt-0 prose-h2:leading-tight prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-4
                prose-h3:text-3xl prose-h3:text-gray-800 prose-h3:mt-12 prose-h3:mb-6 prose-h3:font-bold prose-h3:leading-tight
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-8 prose-p:text-xl prose-p:font-light
                prose-ul:my-8 prose-ul:space-y-4 prose-ul:list-disc prose-ul:list-outside prose-ul:ml-8 prose-ul:text-lg
                prose-ol:my-8 prose-ol:space-y-4 prose-ol:list-decimal prose-ol:list-outside prose-ol:ml-8 prose-ol:text-lg
                prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg prose-li:pl-3 prose-li:marker:text-primary prose-li:marker:font-bold
                prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-xl
                prose-em:text-gray-600 prose-em:italic
                prose-a:text-primary prose-a:no-underline prose-a:hover:underline"
              dangerouslySetInnerHTML={{ __html: formattedHTML }}
            />

            {/* Tags/Keywords */}
            {article.category && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <Link
                    href={`/blog?category=${encodeURIComponent(article.category)}`}
                    className="text-primary hover:underline font-space font-medium"
                  >
                    {article.category}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold font-space text-gray-900 mb-8">
                Artículos relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${generateSlug(related.title)}`}
                    className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    {related.category && (
                      <Badge variant="primary" size="sm" className="mb-3">
                        {related.category}
                      </Badge>
                    )}
                    <h3 className="text-base font-bold font-space text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {formatDate(related.published_date)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

        {/* CTA Section */}
        <CTASection
          title="¿Necesitas asesoramiento personalizado?"
          description="Nuestro equipo de expertos está listo para ayudarte con tus consultas fiscales."
          variant="dark"
        />
      </>
    )
  } catch (error) {
    console.error('Critical error in ArticlePage:', error)
    notFound()
  }
}
