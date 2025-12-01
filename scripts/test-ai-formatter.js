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

async function testFormatter() {
  console.log('🤖 Probando el formateo con IA...\n');

  // Obtener un artículo de prueba
  const { data: article, error } = await supabase
    .from('articles')
    .select('title, content')
    .eq('title', 'Cómo manejar los ajustes de precios de transferencia al final del año fiscal')
    .single();

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('📄 Artículo:', article.title);
  console.log('📏 Longitud del contenido:', article.content.length, 'caracteres\n');
  console.log('⏳ Enviando a OpenAI...\n');

  const prompt = `Eres un editor de contenido experto en fiscalidad y precios de transferencia. 

Tu tarea es tomar este artículo técnico y formatearlo correctamente en HTML semántico y limpio.

TÍTULO DEL ARTÍCULO: "${article.title}"

CONTENIDO RAW:
${article.content.substring(0, 2000)}...

INSTRUCCIONES:
1. Limpia todos los caracteres especiales extraños (\\r\\r\\n, etc.)
2. Estructura el contenido con:
   - <h2> para títulos principales de secciones
   - <h3> para subtítulos
   - <p> para párrafos normales
   - <ul> y <li> para listas
   - <strong> para texto importante
3. Identifica correctamente las secciones (Introducción, Conclusión, etc.)
4. Mantén TODO el contenido técnico y legal exactamente como está
5. NO inventes ni añadas contenido nuevo
6. NO incluyas el título principal del artículo (ya está en el hero)
7. Asegúrate de que el HTML sea válido y bien estructurado

IMPORTANTE: Devuelve SOLO el HTML puro, SIN bloques de código markdown, SIN \`\`\`html, SIN explicaciones. Empieza directamente con la primera etiqueta HTML.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Eres un editor técnico experto que formatea contenido fiscal y legal en HTML limpio y semántico. Preservas TODO el contenido original sin inventar nada nuevo.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 4000,
    });

    let html = completion.choices[0]?.message?.content?.trim() || '';
    
    // Limpiar bloques de código markdown
    html = html
      .replace(/```html\s*/gi, '')
      .replace(/```\s*/g, '')
      .trim();

    console.log('✅ Respuesta recibida!\n');
    console.log('📏 Longitud del HTML:', html.length, 'caracteres\n');
    console.log('📝 Primeros 500 caracteres del HTML:\n');
    console.log(html.substring(0, 500));
    console.log('\n...\n');
    console.log('🎉 ¡El formateo con IA funciona correctamente!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testFormatter();

