const XLSX = require('xlsx');
const path = require('path');

// Leer el archivo Excel
const workbook = XLSX.readFile(path.join(__dirname, '..', 'Libro1.xlsx'));

// Obtener el nombre de la primera hoja
const sheetName = workbook.SheetNames[0];
console.log('📄 Nombre de la hoja:', sheetName);

// Obtener los datos de la primera hoja
const worksheet = workbook.Sheets[sheetName];

// Convertir a JSON
const data = XLSX.utils.sheet_to_json(worksheet);

console.log('\n📊 Total de filas:', data.length);
console.log('\n🔍 Columnas encontradas:');
if (data.length > 0) {
  console.log(Object.keys(data[0]));
}

console.log('\n📋 Primeras 5 filas:');
console.log(JSON.stringify(data.slice(0, 5), null, 2));

