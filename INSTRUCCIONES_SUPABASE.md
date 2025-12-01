# Instrucciones para Importar Artículos a Supabase

## Paso 1: Crear la tabla en Supabase

1. Ve a tu proyecto de Supabase: https://rivwqzwxkiwjdkbyniyo.supabase.co
2. Abre el **SQL Editor** desde el menú lateral
3. Copia y pega el siguiente SQL:

```sql
-- Crear tabla de artículos
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT DEFAULT 'checked',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índice para búsquedas por título
CREATE INDEX idx_articles_title ON articles(title);

-- Índice para búsquedas por estado
CREATE INDEX idx_articles_status ON articles(status);

-- Habilitar Row Level Security (RLS)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Política para permitir lectura pública
CREATE POLICY "Allow public read access" ON articles
  FOR SELECT
  USING (true);

-- Política para permitir escritura con service_role
CREATE POLICY "Allow authenticated insert" ON articles
  FOR INSERT
  WITH CHECK (true);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

4. Haz clic en **Run** para ejecutar el SQL

## Paso 2: Ejecutar el script de importación

Una vez que la tabla esté creada en Supabase, ejecuta el siguiente comando:

```bash
node scripts/import-articles-to-supabase.js
```

Este script hará lo siguiente:
- Leerá el archivo `Libro1.xlsx`
- Procesará las 106 filas de artículos
- Los insertará en lotes de 50 en la tabla `articles` de Supabase
- Te mostrará un resumen al finalizar

## Estructura de la tabla

La tabla `articles` tiene los siguientes campos:
- `id` (UUID): Identificador único generado automáticamente
- `title` (TEXT): Título del artículo
- `content` (TEXT): Contenido completo del artículo
- `status` (TEXT): Estado del artículo (por defecto "checked")
- `created_at` (TIMESTAMP): Fecha de creación (se genera automáticamente)
- `updated_at` (TIMESTAMP): Fecha de última actualización (se actualiza automáticamente)

## Notas

- El archivo `.env.local` ya está configurado con las credenciales de Supabase
- Los datos del Excel se mapean automáticamente a la estructura de la tabla
- Si hay errores, el script continuará con los siguientes lotes y te mostrará un resumen al final

