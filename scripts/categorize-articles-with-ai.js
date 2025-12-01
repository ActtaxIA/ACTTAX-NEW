require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const CATEGORIES = [
  'Precios de Transferencia',
  'Valoración de Empresas',
  'IA Financiera',
];

async function categorizeArticle(title, content) {
  // Usar solo los primeros 1000 caracteres del contenido para reducir tokens
  const contentPreview = content.substring(0, 1000);

  const systemPrompt = `Eres un experto en fiscalidad y consultoría financiera. 
Tu tarea es clasificar artículos técnicos en una de estas 3 categorías:

1. "Precios de Transferencia" - Artículos sobre operaciones vinculadas, transfer pricing, Modelo 232, APAs, documentación de PT, comparabilidad, servicios intragrupo, normativa OCDE.

2. "Valoración de Empresas" - Artículos sobre valoración financiera, DCF, múltiplos, M&A, startups, activos, intangibles, due diligence, métodos de valoración.

3. "IA Financiera" - Artículos sobre inteligencia artificial, automatización, machine learning, tecnología aplicada a finanzas/fiscalidad, OCR, análisis predictivo, digitalización.

Responde ÚNICAMENTE con el nombre exacto de la categoría, sin explicaciones adicionales.`;

  const userPrompt = `Título: ${title}

Contenido (extracto):
${contentPreview}

¿A qué categoría pertenece este artículo?`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.1,
      max_completion_tokens: 50,
    });

    const category = response.choices[0].message.content.trim();
    
    // Validar que la categoría es una de las válidas
    if (CATEGORIES.includes(category)) {
      return category;
    } else {
      // Si no coincide exactamente, intentar encontrar la más similar
      const lowerCategory = category.toLowerCase();
      if (lowerCategory.includes('precio') || lowerCategory.includes('transferencia')) {
        return 'Precios de Transferencia';
      } else if (lowerCategory.includes('valoración') || lowerCategory.includes('valoracion')) {
        return 'Valoración de Empresas';
      } else if (lowerCategory.includes('ia') || lowerCategory.includes('inteligencia')) {
        return 'IA Financiera';
      }
      
      console.warn(`⚠️  Categoría inesperada: "${category}". Asignando a Precios de Transferencia por defecto.`);
      return 'Precios de Transferencia';
    }
  } catch (error) {
    console.error('Error al categorizar con OpenAI:', error.message);
    return null;
  }
}

async function categorizeAllArticles() {
  console.log('🤖 Iniciando categorización automática con IA...\n');

  // Obtener todos los artículos sin categoría
  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, content, category')
    .is('category', null);

  if (error) {
    console.error('❌ Error al obtener artículos:', error.message);
    process.exit(1);
  }

  console.log(`📊 Total de artículos sin categoría: ${articles.length}\n`);

  const categoryCounts = {
    'Precios de Transferencia': 0,
    'Valoración de Empresas': 0,
    'IA Financiera': 0,
  };

  let processed = 0;
  let errors = 0;

  for (const article of articles) {
    try {
      console.log(`[${processed + 1}/${articles.length}] Procesando: "${article.title.substring(0, 60)}..."`);
      
      const category = await categorizeArticle(article.title, article.content);
      
      if (category) {
        // Actualizar en Supabase
        const { error: updateError } = await supabase
          .from('articles')
          .update({ category })
          .eq('id', article.id);

        if (updateError) {
          console.error(`   ❌ Error actualizando: ${updateError.message}`);
          errors++;
        } else {
          console.log(`   ✅ Categorizado como: ${category}`);
          categoryCounts[category]++;
        }
      } else {
        console.error(`   ❌ No se pudo determinar categoría`);
        errors++;
      }

      processed++;

      // Pequeña pausa para no saturar la API
      await new Promise(resolve => setTimeout(resolve, 500));

    } catch (error) {
      console.error(`   ❌ Error procesando artículo:`, error.message);
      errors++;
      processed++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN DE CATEGORIZACIÓN:');
  console.log('='.repeat(60));
  console.log(`✅ Artículos procesados: ${processed}`);
  console.log(`❌ Errores: ${errors}`);
  console.log('\n📁 Distribución por categoría:');
  Object.entries(categoryCounts).forEach(([category, count]) => {
    const percentage = ((count / processed) * 100).toFixed(1);
    console.log(`   ${category}: ${count} artículos (${percentage}%)`);
  });
  console.log('='.repeat(60));
  console.log('\n🎉 ¡Categorización completada!');
}

categorizeAllArticles();

