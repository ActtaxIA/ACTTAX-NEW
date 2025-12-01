import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface FormattedArticleContent {
  html: string
  plainText: string
}

/**
 * Convierte texto enriquecido simple a HTML estructurado
 */
function convertEnrichedTextToHTML(text: string): string {
  const lines = text.split('\n')
  const html: string[] = []
  let inList = false
  let listType: 'ul' | 'ol' | null = null

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim()
    
    // Saltar líneas vacías
    if (!line) {
      if (inList && listType) {
        html.push(`</${listType}>`)
        inList = false
        listType = null
      }
      continue
    }

    // Omitir línea de título si viene en la salida (p.ej. "TÍTULO: ...")
    const lower = line.toLowerCase()
    if (/^t[íi]tulo\s*:/.test(lower)) {
      continue
    }

    // Subtítulo cuando termina en ":" (limpiar el ":")
    if (!/^[•\-\–\*\d]/.test(line) && line.endsWith(':')) {
      if (inList && listType) {
        html.push(`</${listType}>`)
        inList = false
        listType = null
      }
      line = line.replace(/:$/, '').trim()
      html.push(`<h3>${line}</h3>`)
      continue
    }

    // Título principal (línea en MAYÚSCULAS que parece un encabezado)
    const words = line.split(/\s+/)
    if (
      line === line.toUpperCase() &&
      (words.length >= 3 || line.length >= 20) && // evitar acrónimos tipo "OCDE"
      !/^[•\-\–\*\d]/.test(line)
    ) {
      if (inList && listType) {
        html.push(`</${listType}>`)
        inList = false
        listType = null
      }
      html.push(`<h2>${line}</h2>`)
      continue
    }

    // Subtítulo (Title Case)
    if (line.match(/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)+$/)) {
      if (inList && listType) {
        html.push(`</${listType}>`)
        inList = false
        listType = null
      }
      html.push(`<h3>${line}</h3>`)
      continue
    }

    // Lista con viñetas (•, -, –, *)
    if (/^[•\-\–\*]\s+/.test(line)) {
      if (!inList || listType !== 'ul') {
        if (inList && listType) html.push(`</${listType}>`)
        html.push('<ul>')
        inList = true
        listType = 'ul'
      }
      const content = line.replace(/^[•\-\–\*]\s+/, '').trim()
      html.push(`<li>${processInlineFormatting(content)}</li>`)
      continue
    }

    // Lista numerada (1. 2. 3.)
    if (/^\d+\.\s/.test(line)) {
      if (!inList || listType !== 'ol') {
        if (inList && listType) html.push(`</${listType}>`)
        html.push('<ol>')
        inList = true
        listType = 'ol'
      }
      const content = line.replace(/^\d+\.\s/, '').trim()
      html.push(`<li>${processInlineFormatting(content)}</li>`)
      continue
    }

    // Párrafo normal
    if (inList && listType) {
      html.push(`</${listType}>`)
      inList = false
      listType = null
    }
    html.push(`<p>${processInlineFormatting(line)}</p>`)
  }

  if (inList && listType) {
    html.push(`</${listType}>`)
  }

  return html.join('\n')
}

/**
 * Procesa formato inline: *texto* → <strong>, términos MAYÚSCULAS → <strong>
 */
function processInlineFormatting(text: string): string {
  // Convertir *texto* en <strong>
  text = text.replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
  
  // Convertir términos en MAYÚSCULAS en <strong> (solo si tienen 3+ letras)
  text = text.replace(/\b([A-ZÁÉÍÓÚÑ]{3,})\b/g, '<strong>$1</strong>')
  
  return text
}

/**
 * Formatea el contenido del artículo usando IA
 * Convierte texto "guarro" de Supabase en HTML bien estructurado
 */
export async function formatArticleWithAI(
  rawContent: string,
  title: string
): Promise<FormattedArticleContent> {
  try {
    const userPrompt = `Reformula y DA FORMATO para publicar en un blog profesional (estilo revista digital) el siguiente artículo técnico.

Título del artículo (no lo repitas en la salida): "${title}"

Texto original (no inventes nada, no resumas, conserva todo el contenido):
${rawContent}

Instrucciones de formato (HTML limpio y semántico):
- Usa <h2> para secciones y <h3> para subsecciones.
- Convierte enumeraciones en <ul>/<ol> con <li> (viñetas o numeradas).
- Divide párrafos largos en <p> cortos (2–3 frases).
- Usa <strong> para términos clave (OCDE, BEPS, principio de plena competencia, etc.).
- No incluyas el título principal del artículo en la salida.
- No devuelvas bloques \`\`\` ni comentarios, SOLO HTML.

Devuelve ÚNICAMENTE HTML válido listo para pegar (sin <html>, sin <body>, solo el contenido).`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
      content: `Eres editor senior de un medio económico. Tu objetivo es entregar HTML publicable y elegante.
Reglas clave: no inventes, no resumas, conserva TODO el contenido; solo estructura y limpia.
Párrafos breves, encabezados claros, listas bien marcadas, sin fences ni comentarios.`,
        },
        {
          role: 'user',
      content: userPrompt,
        },
      ],
      temperature: 0.2, // Baja temperatura para preservar contenido
      max_completion_tokens: 16000, // Tokens suficientes para artículos largos completos
    })

    let formattedHTML = completion.choices[0]?.message?.content?.trim() || rawContent

    // Limpiar bloques de código si la IA los añadiera por error
    formattedHTML = formattedHTML
      .replace(/```html\s*/gi, '')
      .replace(/```|\u200b/gi, '')
      .trim()

    // Extraer texto plano para búsquedas y meta descriptions
    const plainText = formattedHTML
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    return {
      html: formattedHTML,
      plainText,
    }
  } catch (error) {
    console.error('Error formatting article with AI:', error)
    
    // Fallback: devolver el contenido original con formato básico
    const basicHTML = rawContent
      .replace(/\r\r\n/g, '\n')
      .split('\n\n')
      .filter(p => p.trim())
      .map(p => `<p>${p.trim()}</p>`)
      .join('\n')

    return {
      html: basicHTML,
      plainText: rawContent.replace(/\r\r\n/g, ' ').replace(/\s+/g, ' ').trim(),
    }
  }
}

/**
 * Genera una descripción optimizada del artículo
 */
export function generateDescriptionFromPlainText(plainText: string, maxLength: number = 160): string {
  // Buscar el primer párrafo sustancial
  const sentences = plainText.split(/[.!?]+/).filter(s => s.trim().length > 30)
  
  if (sentences.length === 0) {
    return plainText.substring(0, maxLength).trim() + '...'
  }

  let description = ''
  for (const sentence of sentences) {
    const trimmed = sentence.trim()
    if (description.length + trimmed.length + 2 <= maxLength) {
      description += trimmed + '. '
    } else {
      break
    }
  }

  if (description.length === 0) {
    description = sentences[0].substring(0, maxLength).trim() + '...'
  }

  return description.trim()
}

