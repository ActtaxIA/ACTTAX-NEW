require('dotenv').config({ path: '.env.local' });
const XLSX = require('xlsx');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Configurar Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Faltan las credenciales de Supabase en .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function importArticles() {
  try {
    console.log('📖 Leyendo archivo Excel...');
    
    // Leer el archivo Excel
    const workbook = XLSX.readFile(path.join(__dirname, '..', 'Libro1.xlsx'));
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    console.log(`📊 Total de artículos encontrados: ${data.length}`);

    // Obtener los nombres de las columnas (asumiendo que la primera fila tiene los encabezados)
    const columns = Object.keys(data[0]);
    console.log('🔍 Columnas detectadas:', columns);

    // Mapear los datos al formato de la tabla
    const articles = data.map((row) => {
      // Las columnas del Excel son largas, así que las tomamos por índice
      const title = row[columns[0]]; // Primera columna = título
      const content = row[columns[1]]; // Segunda columna = contenido
      const status = row[columns[2]] || 'checked'; // Tercera columna = estado

      return {
        title: title?.trim() || 'Sin título',
        content: content?.trim() || '',
        status: status?.trim() || 'checked'
      };
    });

    console.log('\n📝 Insertando artículos en Supabase...');
    console.log('⏳ Este proceso puede tardar un momento...\n');

    // Insertar en lotes de 50 para evitar problemas de límite
    const batchSize = 50;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < articles.length; i += batchSize) {
      const batch = articles.slice(i, i + batchSize);
      
      const { data: insertedData, error } = await supabase
        .from('articles')
        .insert(batch)
        .select();

      if (error) {
        console.error(`❌ Error al insertar lote ${Math.floor(i / batchSize) + 1}:`, error.message);
        errorCount += batch.length;
      } else {
        successCount += insertedData.length;
        console.log(`✅ Lote ${Math.floor(i / batchSize) + 1} insertado correctamente (${insertedData.length} artículos)`);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMEN DE IMPORTACIÓN:');
    console.log('='.repeat(60));
    console.log(`✅ Artículos insertados correctamente: ${successCount}`);
    console.log(`❌ Artículos con errores: ${errorCount}`);
    console.log(`📝 Total procesados: ${articles.length}`);
    console.log('='.repeat(60));

    // Verificar la tabla
    console.log('\n🔍 Verificando tabla en Supabase...');
    const { count, error: countError } = await supabase
      .from('articles')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('❌ Error al verificar la tabla:', countError.message);
    } else {
      console.log(`✅ Total de artículos en la tabla: ${count}`);
    }

    console.log('\n🎉 ¡Proceso completado!');

  } catch (error) {
    console.error('❌ Error general:', error.message);
    process.exit(1);
  }
}

// Ejecutar la importación
importArticles();

