require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkPublicationDates() {
  console.log('📅 Revisando distribución de fechas de publicación...\n');

  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, published_date, status')
    .order('published_date', { ascending: true });

  if (error) {
    console.error('❌ Error:', error.message);
    return;
  }

  const today = new Date();
  const nov2025Start = new Date('2025-11-01');
  const nov2025End = new Date('2025-11-30');
  const dec2024Start = new Date('2024-12-01');
  const dec2024End = new Date('2024-12-31');

  console.log(`📊 Total de artículos: ${articles.length}\n`);

  // Contar por períodos
  const published = articles.filter(a => a.status === 'published' && new Date(a.published_date) <= today);
  const scheduled = articles.filter(a => a.status === 'scheduled' || new Date(a.published_date) > today);
  const inNov2025 = articles.filter(a => {
    const date = new Date(a.published_date);
    return date >= nov2025Start && date <= nov2025End;
  });
  const inDec2024 = articles.filter(a => {
    const date = new Date(a.published_date);
    return date >= dec2024Start && date <= dec2024End;
  });

  console.log('📈 Distribución:');
  console.log(`   ✅ Publicados (hasta hoy): ${published.length}`);
  console.log(`   📅 Programados (futuro): ${scheduled.length}`);
  console.log(`   📆 Diciembre 2024: ${inDec2024.length}`);
  console.log(`   📆 Noviembre 2025: ${inNov2025.length}\n`);

  if (inNov2025.length === 0) {
    console.log('⚠️  PROBLEMA: No hay artículos programados para noviembre de 2025\n');
  }

  // Mostrar rango de fechas
  if (articles.length > 0) {
    const firstDate = new Date(articles[0].published_date);
    const lastDate = new Date(articles[articles.length - 1].published_date);
    console.log(`📅 Rango de fechas:`);
    console.log(`   Primera: ${firstDate.toLocaleDateString('es-ES')}`);
    console.log(`   Última: ${lastDate.toLocaleDateString('es-ES')}\n`);
  }

  // Mostrar algunos artículos de noviembre 2025 si existen
  if (inNov2025.length > 0) {
    console.log('📝 Artículos en noviembre 2025:');
    inNov2025.slice(0, 5).forEach(a => {
      console.log(`   • ${new Date(a.published_date).toLocaleDateString('es-ES')}: ${a.title.substring(0, 50)}...`);
    });
    if (inNov2025.length > 5) {
      console.log(`   ... y ${inNov2025.length - 5} más`);
    }
  } else {
    console.log('📝 Artículos próximos (primeros 10 programados):');
    scheduled.slice(0, 10).forEach(a => {
      const date = new Date(a.published_date);
      console.log(`   • ${date.toLocaleDateString('es-ES')}: ${a.title.substring(0, 50)}...`);
    });
  }
}

checkPublicationDates();

