require('dotenv').config({ path: '.env.local' });
const OpenAI = require('openai').default;
const { createClient } = require('@supabase/supabase-js');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Función para convertir texto enriquecido a HTML
function convertEnrichedTextToHTML(text) {
  const lines = text.split('\n');
  const html = [];
  let inList = false;
  let listType = null;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Línea vacía
    if (!line) {
      if (inList && listType) {
        html.push(`</${listType}>`);
        inList = false;
        listType = null;
      }
      continue;
    }

    // Omitir línea de título si la IA la añadió
    if (/^t[íi]tulo\s*:/i.test(line)) {
      continue;
    }

    // Subtítulo cuando termina en ":"
    if (!/^[•\-\–\*\d]/.test(line) && line.endsWith(':')) {
      if (inList && listType) {
        html.push(`</${listType}>`);
        inList = false;
        listType = null;
      }
      line = line.replace(/:$/, '').trim();
      html.push(`<h3>${line}</h3>`);
      continue;
    }

    // Título principal (TODO MAYÚSCULAS con varias palabras)
    const words = line.split(/\s+/);
    if (line === line.toUpperCase() && (words.length >= 3 || line.length >= 20) && !/^[•\-\–\*\d]/.test(line)) {
      if (inList && listType) {
        html.push(`</${listType}>`);
        inList = false;
        listType = null;
      }
      html.push(`<h2>${line}</h2>`);
      continue;
    }

    // Subtítulo (Title Case)
    if (/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)+$/.test(line)) {
      if (inList && listType) {
        html.push(`</${listType}>`);
        inList = false;
        listType = null;
      }
      html.push(`<h3>${line}</h3>`);
      continue;
    }

    // Lista con viñetas (•, -, –, *)
    if (/^[•\-\–\*]\s+/.test(line)) {
      if (!inList || listType !== 'ul') {
        if (inList && listType) html.push(`</${listType}>`);
        html.push('<ul>');
        inList = true;
        listType = 'ul';
      }
      const content = line.replace(/^[•\-\–\*]\s+/, '').trim();
      html.push(`<li>${processInlineFormatting(content)}</li>`);
      continue;
    }

    // Lista numerada (1. 2. 3.)
    if (/^\d+\.\s/.test(line)) {
      if (!inList || listType !== 'ol') {
        if (inList && listType) html.push(`</${listType}>`);
        html.push('<ol>');
        inList = true;
        listType = 'ol';
      }
      const content = line.replace(/^\d+\.\s/, '').trim();
      html.push(`<li>${processInlineFormatting(content)}</li>`);
      continue;
    }

    // Párrafo normal
    if (inList && listType) {
      html.push(`</${listType}>`);
      inList = false;
      listType = null;
    }
    html.push(`<p>${processInlineFormatting(line)}</p>`);
  }

  // Cerrar lista si quedó abierta
  if (inList && listType) {
    html.push(`</${listType}>`);
  }

  return html.join('\n');
}

// Función para procesar formato inline
function processInlineFormatting(text) {
  // Convertir *texto* en <strong>
  text = text.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
  
  // Convertir términos en MAYÚSCULAS en <strong> (solo si tienen 3+ letras)
  text = text.replace(/\b([A-ZÁÉÍÓÚÑ]{3,})\b/g, '<strong>$1</strong>');
  
  return text;
}

async function formatArticle(rawContent, title) {
  const userPrompt = `Reformula este texto para publicarlo en mi blog profesional.

INSTRUCCIONES CRÍTICAS:
- Conserva TODO el contenido (no inventes ni resumas)
- Devuélveme SOLO HTML limpio y válido
- Usa <h2> para títulos principales, <h3> para subtítulos
- Usa <p> para párrafos cortos (2-3 frases máximo)
- CONVIERTE enumeraciones en listas: <ul><li>...</li></ul> o <ol><li>...</li></ol>
- Usa <strong> para términos importantes
- NO uses bloques de código markdown, NO comentarios, NO repitas el título

Título del artículo (NO incluir en la salida): "${title}"

Texto a formatear:
${rawContent}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'Eres editor senior de un medio económico. Tu trabajo: convertir texto técnico en HTML publicable y elegante. CRÍTICO: Conserva TODO el HTML correcto con <ul><li> para listas con viñetas y <ol><li> para listas numeradas. NO uses texto plano para listas, SIEMPRE usa HTML. Conserva TODO el contenido original. Párrafos cortos (2-3 frases), encabezados claros (h2/h3), <strong> en términos clave.',
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
      temperature: 0.2,
      max_completion_tokens: 16000,
    });

    let html = completion.choices[0]?.message?.content?.trim() || '';
    
    // Limpiar bloques de código markdown/html si la IA los añadió
    html = html
      .replace(/```html\s*/gi, '')
      .replace(/```markdown\s*/gi, '')
      .replace(/```\s*/g, '')
      .trim();

    // Si la IA devolvió HTML directamente, usarlo tal cual
    // Si parece texto enriquecido (sin tags HTML), convertir
    if (!html.includes('<') || html.match(/^[A-Z\s]+$/m)) {
      html = convertEnrichedTextToHTML(html);
    }

    return html;
  } catch (error) {
    console.error('Error al formatear:', error.message);
    return null;
  }
}

async function processAllArticles() {
  console.log('🚀 Iniciando formateo de todos los artículos con IA...\n');

  // Obtener todos los artículos que NO tienen formatted_content
  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, content, formatted_content')
    .is('formatted_content', null)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('❌ Error al obtener artículos:', error.message);
    return;
  }

  console.log(`📊 Artículos a procesar: ${articles.length}\n`);

  if (articles.length === 0) {
    console.log('✅ Todos los artículos ya están formateados!');
    return;
  }

  let processed = 0;
  let errors = 0;

  for (const article of articles) {
    const titlePreview = article.title.substring(0, 60);
    console.log(`\n📝 [${processed + 1}/${articles.length}] Procesando: "${titlePreview}..."`);
    console.log(`   Longitud: ${article.content.length} caracteres`);

    try {
      const formattedHTML = await formatArticle(article.content, article.title);

      if (!formattedHTML) {
        console.log(`   ❌ Error al formatear`);
        errors++;
        continue;
      }

      // Guardar en Supabase
      const { error: updateError } = await supabase
        .from('articles')
        .update({ formatted_content: formattedHTML })
        .eq('id', article.id);

      if (updateError) {
        console.log(`   ❌ Error al guardar: ${updateError.message}`);
        errors++;
      } else {
        console.log(`   ✅ Formateado y guardado (${formattedHTML.length} caracteres)`);
        processed++;
      }

      // Pausa de 2 segundos entre requests para no saturar la API
      await new Promise(resolve => setTimeout(resolve, 2000));

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
      errors++;
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log('📊 RESUMEN FINAL:');
  console.log('='.repeat(70));
  console.log(`✅ Artículos procesados correctamente: ${processed}`);
  console.log(`❌ Artículos con errores: ${errors}`);
  console.log(`📝 Total: ${articles.length}`);
  console.log('='.repeat(70));
  console.log('\n🎉 ¡Proceso completado!');
}

processAllArticles();

