import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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

