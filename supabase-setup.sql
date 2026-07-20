-- ============================================================
-- Luxury Voyage — إعداد جدول الحجوزات في Supabase
-- شغّل هذا الملف كاملاً داخل: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ============================================================

-- 1) إنشاء جدول الحجوزات
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  destination text,
  message text,
  created_at timestamptz not null default now()
);

-- 2) تفعيل الحماية على مستوى الصفوف (Row Level Security)
-- بدون هذا، أي شخص يملك مفتاحك العام يمكنه قراءة كل الحجوزات مباشرة من المتصفح
alter table public.bookings enable row level security;

-- 3) سياسة تسمح لأي زائر (حتى بدون تسجيل دخول) بإضافة حجز جديد فقط
-- هذا مناسب لأن نموذج الحجز في الموقع متاح للعامة
create policy "Anyone can submit a booking"
  on public.bookings
  for insert
  to anon
  with check (true);

-- 4) لا نضيف أي سياسة SELECT/UPDATE/DELETE للزوار
-- هذا يعني: لا أحد يستطيع قراءة أو تعديل أو حذف الحجوزات من المتصفح
-- أنت فقط (عبر Table Editor في لوحة Supabase، أو مفتاح service_role السري)
-- تستطيع رؤية وإدارة البيانات — وهذا هو التصرف الآمن الصحيح

-- ============================================================
-- ملاحظة مهمة: بعد تشغيل هذا الملف، تحقق من:
-- Authentication -> Policies -> bookings
-- يجب أن ترى سياسة واحدة فقط باسم "Anyone can submit a booking"
-- ============================================================
