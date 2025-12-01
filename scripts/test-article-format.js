require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testArticleFormat() {
  const { data, error } = await supabase
    .from('articles')
    .select('title, content')
    .eq('title', 'Cómo manejar los ajustes de precios de transferencia al final del año fiscal')
    .single();

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('='.repeat(80));
  console.log('TÍTULO:', data.title);
  console.log('='.repeat(80));
  console.log('\nCONTENIDO (primeros 1000 caracteres):');
  console.log(data.content.substring(0, 1000));
  console.log('\n...');
  console.log('\nLONGITUD TOTAL:', data.content.length);
  console.log('\nCARACTERES ESPECIALES:');
  console.log('  \\r\\r\\n:', (data.content.match(/\r\r\n/g) || []).length);
  console.log('  \\n:', (data.content.match(/\n/g) || []).length);
  console.log('  \\r:', (data.content.match(/\r/g) || []).length);
}

testArticleFormat();

