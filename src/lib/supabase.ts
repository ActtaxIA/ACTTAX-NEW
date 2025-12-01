import { createClient } from '@supabase/supabase-js'

// Usar variables públicas para cliente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

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

