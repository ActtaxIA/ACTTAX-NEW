/**
 * Utilidades para formatear y limpiar el contenido de los artículos
 */

export interface FormattedContent {
  sections: ContentSection[]
}

export interface ContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'subheading'
  content: string | string[]
}

/**
 * Limpia caracteres especiales y normaliza el texto
 */
function cleanText(text: string): string {
  return text
    // Normalizar saltos de línea
    .replace(/\r\r\n/g, '\n')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    // Eliminar múltiples espacios
    .replace(/\s+/g, ' ')
    // Eliminar espacios al inicio y final
    .trim()
}

/**
 * Detecta si un texto es un título o encabezado
 */
function isHeading(text: string): boolean {
  const cleanedText = text.trim()
  
  // Títulos que terminan con ":"
  if (cleanedText.endsWith(':')) return true
  
  // Títulos cortos (menos de 100 caracteres) que son preguntas
  if (cleanedText.length < 100 && cleanedText.endsWith('?')) return true
  
  // Detectar patrones de título
  const headingPatterns = [
    /^¿.*\?$/,  // Preguntas completas
    /^Capítulo \d+/i,
    /^Parte \d+/i,
    /^\d+\.\s*[A-ZÁÉÍÓÚÑa-záéíóúñ]/,  // "1. Título"
    /^[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s]{3,}$/,  // TODO EN MAYÚSCULAS
  ]
  
  return headingPatterns.some(pattern => pattern.test(cleanedText))
}

/**
 * Detecta si un texto es un subtítulo (heading secundario)
 */
function isSubheading(text: string): boolean {
  const cleanedText = text.trim()
  
  // Subtítulos con formato "### Título" o "## Título"
  if (/^#{2,4}\s/.test(cleanedText)) return true
  
  // Líneas cortas que no son preguntas pero empiezan con mayúscula
  if (cleanedText.length < 80 && cleanedText.length > 15) {
    if (/^[A-ZÁÉÍÓÚÑ]/.test(cleanedText) && !cleanedText.endsWith('.')) {
      return true
    }
  }
  
  return false
}

/**
 * Detecta y extrae items de lista
 */
function extractListItems(text: string): string[] | null {
  const lines = text.split('\n').filter(line => line.trim())
  
  // Detectar listas con guiones
  if (lines.every(line => /^[-–—•*]\s/.test(line.trim()))) {
    return lines.map(line => line.replace(/^[-–—•*]\s+/, '').trim())
  }
  
  // Detectar listas numeradas
  if (lines.every((line, idx) => {
    const match = line.trim().match(/^(\d+)[\.)]\s/)
    return match && parseInt(match[1]) === idx + 1
  })) {
    return lines.map(line => line.replace(/^\d+[\.)]\s+/, '').trim())
  }
  
  // Detectar listas con viñetas en el texto
  const bulletPattern = /^[-–—•*]\s/
  const numberedPattern = /^\d+[\.)]\s/
  
  if (lines.some(line => bulletPattern.test(line) || numberedPattern.test(line))) {
    return lines.map(line => 
      line
        .replace(bulletPattern, '')
        .replace(numberedPattern, '')
        .trim()
    ).filter(item => item.length > 0)
  }
  
  return null
}

/**
 * Formatea el contenido completo del artículo
 */
export function formatArticleContent(content: string): FormattedContent {
  // Limpiar el contenido
  const cleaned = cleanText(content)
  
  // Dividir en bloques por saltos de línea múltiples
  const blocks = cleaned
    .split(/\n{2,}/)
    .map(block => block.trim())
    .filter(block => block.length > 0)
  
  const sections: ContentSection[] = []
  
  for (const block of blocks) {
    // Intentar extraer lista
    const listItems = extractListItems(block)
    if (listItems && listItems.length > 1) {
      sections.push({
        type: 'list',
        content: listItems
      })
      continue
    }
    
    // Detectar título principal
    if (isHeading(block)) {
      sections.push({
        type: 'heading',
        content: block.replace(/:\s*$/, '') // Quitar ":" final
      })
      continue
    }
    
    // Detectar subtítulo
    if (isSubheading(block)) {
      sections.push({
        type: 'subheading',
        content: block.replace(/^#{2,4}\s/, '') // Quitar markdown si existe
      })
      continue
    }
    
    // Por defecto, es un párrafo
    sections.push({
      type: 'paragraph',
      content: block
    })
  }
  
  return { sections }
}

/**
 * Genera una descripción corta del artículo (para meta tags y cards)
 */
export function generateDescription(content: string, maxLength: number = 160): string {
  const cleaned = cleanText(content)
  
  // Buscar el primer párrafo sustancial (más de 50 caracteres)
  const paragraphs = cleaned.split(/\n{2,}/)
  const firstParagraph = paragraphs.find(p => {
    const trimmed = p.trim()
    return trimmed.length > 50 && !isHeading(trimmed) && !isSubheading(trimmed)
  })
  
  if (firstParagraph) {
    const text = firstParagraph.trim()
    if (text.length <= maxLength) {
      return text
    }
    
    // Cortar en la última palabra completa antes del límite
    const truncated = text.substring(0, maxLength)
    const lastSpace = truncated.lastIndexOf(' ')
    return truncated.substring(0, lastSpace) + '...'
  }
  
  // Fallback: usar los primeros caracteres
  if (cleaned.length <= maxLength) {
    return cleaned
  }
  
  const truncated = cleaned.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  return truncated.substring(0, lastSpace) + '...'
}

/**
 * Calcula el tiempo de lectura estimado
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const cleaned = cleanText(content)
  const words = cleaned.split(/\s+/).filter(word => word.length > 0).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Genera un slug URL-friendly desde un título
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD') // Descomponer caracteres con acentos
    .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
    .replace(/[^a-z0-9\s-]/g, '') // Solo letras, números, espacios y guiones
    .trim()
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Eliminar guiones múltiples
    .substring(0, 100) // Limitar longitud
}

