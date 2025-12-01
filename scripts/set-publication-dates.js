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

async function setPublicationDates() {
  try {
    console.log('📅 Configurando fechas de publicación...\n');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Obtener solo artículos que NO están publicados (sin fecha o fecha futura)
    const { data: articles, error } = await supabase
      .from('articles')
      .select('id, title, published_date, status')
      .or(`published_date.is.null,published_date.gt.${today.toISOString()},status.eq.scheduled`)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('❌ Error al obtener artículos:', error.message);
      process.exit(1);
    }

    console.log(`📊 Artículos a programar: ${articles.length}\n`);

    // Configuración de fechas - distribuir con intervalos de 15-17 días
    // Fecha objetivo: inicio de noviembre 2025
    const nov2025Start = new Date('2025-11-01');
    const nov2025End = new Date('2025-11-30');
    const daysToNov = Math.floor((nov2025Start - today) / (1000 * 60 * 60 * 24));
    
    // Calcular cuántos artículos caben desde hoy hasta noviembre con intervalos de 15-17 días
    const avgInterval = 16; // Promedio de 16 días
    const articlesBeforeNov = Math.max(0, Math.floor(daysToNov / avgInterval));
    
    // Calcular cuántos artículos caben en noviembre (30 días / 16 días promedio = ~2 artículos)
    const articlesInNov = 2;
    
    // El resto se distribuye después de noviembre
    const articlesAfterNov = articles.length - articlesBeforeNov - articlesInNov;
    
    console.log(`📅 Distribución:`);
    console.log(`   • ${articles.length} artículos programados`);
    console.log(`   • ${articlesBeforeNov} artículos: desde hoy hasta noviembre 2025`);
    console.log(`   • ${articlesInNov} artículos: en noviembre 2025`);
    console.log(`   • ${articlesAfterNov} artículos: después de noviembre 2025`);
    console.log(`   • Intervalo: 15-17 días entre artículos\n`);

    console.log('📝 Asignando fechas...\n');

    // Asignar fechas a los artículos
    const updates = [];
    let currentDate = new Date(today);
    
    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      const daysVariation = 15 + Math.floor(Math.random() * 3); // 15-17 días
      
      if (i < articlesBeforeNov) {
        // Artículos desde hoy hasta noviembre 2025
        currentDate.setDate(today.getDate() + daysVariation * (i + 1));
        if (currentDate >= nov2025Start) {
          currentDate = new Date(nov2025Start);
          currentDate.setDate(currentDate.getDate() - daysVariation);
        }
      } else if (i < articlesBeforeNov + articlesInNov) {
        // Artículos en noviembre 2025
        const novIndex = i - articlesBeforeNov;
        currentDate = new Date(nov2025Start);
        const daysInNov = Math.floor(30 / (articlesInNov + 1));
        currentDate.setDate(currentDate.getDate() + (daysInNov * (novIndex + 1)));
        if (currentDate > nov2025End) {
          currentDate = new Date(nov2025End);
        }
      } else {
        // Artículos después de noviembre 2025
        const afterNovIndex = i - articlesBeforeNov - articlesInNov;
        currentDate = new Date(nov2025End);
        currentDate.setDate(currentDate.getDate() + daysVariation * (afterNovIndex + 1));
      }
      
      const publishDate = new Date(currentDate);
      
      // Asegurar que no sea antes de hoy
      if (publishDate < today) {
        publishDate.setDate(today.getDate() + 1);
      }

      // Establecer hora aleatoria entre 8:00 y 18:00
      const randomHour = 8 + Math.floor(Math.random() * 11);
      publishDate.setHours(randomHour, 0, 0, 0);

      updates.push({
        id: article.id,
        published_date: publishDate.toISOString(),
        status: 'scheduled' // Todos los artículos no publicados serán programados
      });

      console.log(`📅 PROGRAMADO: "${article.title.substring(0, 60)}..." → ${publishDate.toLocaleDateString('es-ES')} ${publishDate.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`);
    }

    console.log('\n💾 Guardando cambios en Supabase...\n');

    // Actualizar en lotes
    let successCount = 0;
    for (const update of updates) {
      const { error } = await supabase
        .from('articles')
        .update({
          published_date: update.published_date,
          status: update.status
        })
        .eq('id', update.id);

      if (error) {
        console.error(`❌ Error actualizando artículo ${update.id}:`, error.message);
      } else {
        successCount++;
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMEN:');
    console.log('='.repeat(60));
    console.log(`✅ Artículos programados: ${successCount}`);
    if (updates.length > 0) {
      const firstDate = new Date(updates[0].published_date);
      const lastDate = new Date(updates[updates.length - 1].published_date);
      console.log(`📆 Primera fecha: ${firstDate.toLocaleDateString('es-ES')}`);
      console.log(`📆 Última fecha: ${lastDate.toLocaleDateString('es-ES')}`);
      console.log(`📅 Intervalo: 15-17 días entre artículos`);
    }
    console.log('='.repeat(60));
    console.log('\n🎉 ¡Proceso completado!');
    console.log('\n💡 Nota: Los artículos ya publicados NO fueron modificados.');

  } catch (error) {
    console.error('❌ Error general:', error.message);
    process.exit(1);
  }
}

// Ejecutar
setPublicationDates();

