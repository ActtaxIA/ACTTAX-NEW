import { createClient } from '@supabase/supabase-js'

// Usar variables públicas para cliente - intentar múltiples nombres por si AWS usa diferentes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://rivwqzwxkiwjdkbyniyo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpdndxend4a2l3amRrYnluaXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MTIzODAsImV4cCI6MjA4MDE4ODM4MH0.WPZcYicfwK_T6kmcJcn20SAjdIrfijNeZSjNeKIFk6Q'

// Log para diagnóstico en producción
console.log('Supabase config:', {
  url: supabaseUrl ? 'present' : 'missing',
  key: supabaseAnonKey ? 'present' : 'missing',
  env: process.env.NODE_ENV,
  availableEnvVars: Object.keys(process.env).filter(k => k.includes('SUPABASE'))
})

// Validación más detallada
if (!supabaseUrl || !supabaseAnonKey) {
  const errorMsg = `Supabase configuration error: URL=${supabaseUrl ? 'OK' : 'MISSING'}, Key=${supabaseAnonKey ? 'OK' : 'MISSING'}`
  console.error(errorMsg)
  
  // En desarrollo, mostrar error claro
  if (process.env.NODE_ENV === 'development') {
    throw new Error(errorMsg)
  }
}

// Crear cliente con configuración robusta
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  db: {
    schema: 'public',
  },
  global: {
    headers: {
      'x-application-name': 'acttax-blog',
    },
  },
})

// Tipos
export interface Article {
  id: string
  title: string
  content: string
  formatted_content: string | null
  status: 'published' | 'scheduled' | 'draft'
  category: string | null
  views: number
  published_date: string
  created_at: string
  updated_at: string
}

export const CATEGORIES = [
  'Precios de Transferencia',
  'Valoración de Empresas',
  'IA Financiera',
] as const

