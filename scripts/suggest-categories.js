require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

// Configurar Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Faltan las credenciales de Supabase en .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Palabras clave por categoría
const categoryKeywords = {
  'Precios de Transferencia': [
    'precios de transferencia',
    'transfer pricing',
    'operaciones vinculadas',
    'ocde',
    'beps',
    'comparabilidad',
    'intragrupo',
    'modelo 232',
    'apa',
    'margen neto',
    'arm\'s length',
    'plena competencia',
    'documentación',
    'informe maestro',
  ],
  'Valoración de Empresas': [
    'valoración',
    'valorar',
    'valuar',
    'valor de empresa',
    'dcf',
    'ebitda',
    'múltiplos',
    'startup',
    'goodwill',
    'patrimonio neto',
    'wacc',
    'tasa de descuento',
    'flujos de caja',
    'enterprise value',
    'equity value',
    'compraventa',
    'fusión',
    'm&a',
    'due diligence',
  ],
  'IA Financiera': [
    'inteligencia artificial',
    'ia',
    'automatización',
    'digitalización',
    'machine learning',
    'tecnología',
    'innovación',
    'transformación digital',
  ],
};

function detectCategory(title, content) {
  const text = (title + ' ' + content).toLowerCase();
  const scores = {};

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    let score = 0;
    for (const keyword of keywords) {
      const regex = new RegExp(keyword, 'gi');
      const matches = text.match(regex);
      if (matches) {
        score += matches.length;
      }
    }
    scores[category] = score;
  }

  // Retornar la categoría con mayor puntuación
  const sortedCategories = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  
  return {
    suggested: sortedCategories[0][1] > 0 ? sortedCategories[0][0] : null,
    scores: sortedCategories,
  };
}

async function suggestCategories() {
  try {
    console.log('📋 Analizando artículos y sugiriendo categorías...\n');

    const { data: articles, error } = await supabase
      .from('articles')
      .select('id, title, content, category')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('❌ Error al obtener artículos:', error.message);
      process.exit(1);
    }

    console.log(`📊 Total de artículos: ${articles.length}\n`);

    const suggestions = {};
    articles.forEach((article) => {
      const result = detectCategory(article.title, article.content);
      suggestions[article.id] = result.suggested;

      const titlePreview = article.title.substring(0, 60);
      const emoji = result.suggested === 'Precios de Transferencia' ? '💼' 
                  : result.suggested === 'Valoración de Empresas' ? '📊'
                  : result.suggested === 'IA Financiera' ? '🤖'
                  : '❓';

      console.log(`${emoji} "${titlePreview}..."`);
      console.log(`   Sugerencia: ${result.suggested || 'Sin categoría clara'}`);
      console.log(`   Puntuaciones: ${result.scores.map(([cat, score]) => `${cat}: ${score}`).join(', ')}`);
      console.log('');
    });

    // Resumen por categorías
    const categoryCounts = {};
    Object.values(suggestions).forEach(cat => {
      if (cat) {
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      }
    });

    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMEN POR CATEGORÍAS:');
    console.log('='.repeat(60));
    Object.entries(categoryCounts).forEach(([cat, count]) => {
      console.log(`${cat}: ${count} artículos`);
    });
    console.log('='.repeat(60));

    console.log('\n💡 NOTA: Estas son solo sugerencias basadas en palabras clave.');
    console.log('   Revisa manualmente cada artículo en Supabase para confirmar.');
    console.log('\n   Puedes usar este SQL para actualizar en lote (ejemplo):');
    console.log('   UPDATE articles SET category = \'Precios de Transferencia\' WHERE id IN (\'id1\', \'id2\', ...);');

  } catch (error) {
    console.error('❌ Error general:', error.message);
    process.exit(1);
  }
}

suggestCategories();

