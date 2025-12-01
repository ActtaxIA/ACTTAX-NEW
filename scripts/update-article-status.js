require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function updateArticleStatus() {
  console.log('🔄 Actualizando status de artículos según fecha de publicación...\n');

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString();

  // Obtener todos los artículos con fecha de publicación
  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, published_date, status')
    .not('published_date', 'is', null);

  if (error) {
    console.error('❌ Error al obtener artículos:', error.message);
    process.exit(1);
  }

  console.log(`📊 Total de artículos con fecha: ${articles.length}\n`);

  let publishedCount = 0;
  let scheduledCount = 0;
  let updatedCount = 0;

  for (const article of articles) {
    const articleDate = new Date(article.published_date);
    articleDate.setHours(0, 0, 0, 0);
    
    const shouldBePublished = articleDate <= today;
    const currentStatus = article.status;

    if (shouldBePublished && currentStatus !== 'published') {
      // Debería estar publicado pero no lo está
      const { error: updateError } = await supabase
        .from('articles')
        .update({ status: 'published' })
        .eq('id', article.id);

      if (updateError) {
        console.error(`❌ Error actualizando artículo ${article.id}:`, updateError.message);
      } else {
        console.log(`✅ Actualizado a PUBLICADO: "${article.title.substring(0, 50)}..." (${article.published_date})`);
        updatedCount++;
        publishedCount++;
      }
    } else if (!shouldBePublished && currentStatus !== 'scheduled') {
      // Debería estar programado pero no lo está
      const { error: updateError2 } = await supabase
        .from('articles')
        .update({ status: 'scheduled' })
        .eq('id', article.id);

      if (updateError2) {
        console.error(`❌ Error actualizando artículo ${article.id}:`, updateError2.message);
      } else {
        console.log(`📅 Actualizado a PROGRAMADO: "${article.title.substring(0, 50)}..." (${article.published_date})`);
        updatedCount++;
        scheduledCount++;
      }
    } else {
      // Ya tiene el status correcto
      if (shouldBePublished) {
        publishedCount++;
      } else {
        scheduledCount++;
      }
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN:');
  console.log('='.repeat(60));
  console.log(`✅ Artículos actualizados: ${updatedCount}`);
  console.log(`📰 Artículos publicados: ${publishedCount}`);
  console.log(`📅 Artículos programados: ${scheduledCount}`);
  console.log('='.repeat(60));
  console.log('\n🎉 ¡Proceso completado!');
}

updateArticleStatus();

