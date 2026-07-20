import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const hasValidConfig = supabaseUrl && supabaseAnonKey

if (!hasValidConfig) {
  console.warn(
    '[Supabase] المتغيرات VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY غير موجودة أو غير صحيحة. ' +
    'أنشئ ملف .env بناءً على .env.example وضع قيمك من لوحة تحكم Supabase، ثم أعد تشغيل npm run dev. ' +
    'الموقع سيعمل ويظهر بشكل طبيعي، لكن نموذج الحجز لن يحفظ البيانات حتى تضيف المفاتيح.'
  )
}

// نستخدم قيماً وهمية صالحة الشكل عند غياب الإعداد الحقيقي، فقط لمنع توقف الموقع بالكامل
export const supabase = createClient(
  hasValidConfig ? supabaseUrl : 'https://placeholder.supabase.co',
  hasValidConfig ? supabaseAnonKey : 'placeholder-key'
)

export const isSupabaseConfigured = hasValidConfig
