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

async function simulateViews() {
  try {
    console.log('👀 Simulando vistas en los artículos...\n');

    // Obtener artículos publicados
    const { data: articles, error } = await supabase
      .from('articles')
      .select('id, title')
      .eq('status', 'published')
      .order('published_date', { ascending: false });

    if (error) {
      console.error('❌ Error al obtener artículos:', error.message);
      process.exit(1);
    }

    console.log(`📊 Total de artículos publicados: ${articles.length}\n`);

    // Asignar vistas aleatorias (entre 50 y 500)
    for (const article of articles) {
      const views = Math.floor(Math.random() * 450) + 50; // 50-500 vistas
      
      const { error: updateError } = await supabase
        .from('articles')
        .update({ views })
        .eq('id', article.id);

      if (updateError) {
        console.error(`❌ Error actualizando ${article.id}:`, updateError.message);
      } else {
        const titlePreview = article.title.substring(0, 50);
        console.log(`✅ "${titlePreview}..." → ${views} vistas`);
      }
    }

    console.log('\n🎉 ¡Vistas simuladas exitosamente!');
    console.log('\n💡 Puedes ver los artículos más visitados en la sección destacada del blog.');

  } catch (error) {
    console.error('❌ Error general:', error.message);
    process.exit(1);
  }
}

simulateViews();

