-- ============================================================
-- Luxury Voyage — إعداد قاعدة البيانات في Supabase
-- شغّل هذا الملف كاملاً داخل: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- هذا الملف آمن لإعادة التشغيل أي عدد من المرات (Idempotent)
-- لن يحذف أي بيانات موجودة، وسيتخطى ما هو موجود بالفعل بدل أن يفشل
-- ============================================================

-- 1) جدول الحجوزات
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  destination text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.bookings enable row level security;

-- نحذف السياسة القديمة أولاً إن كانت موجودة، ثم نعيد إنشاءها
-- هذا يمنع خطأ "policy already exists" عند تشغيل الملف أكثر من مرة
drop policy if exists "Anyone can submit a booking" on public.bookings;
create policy "Anyone can submit a booking"
  on public.bookings
  for insert
  to anon
  with check (true);

-- ============================================================
-- 2) جدول رسائل التواصل العام (Contact Form)
-- منفصل عن الحجوزات: للأسئلة العامة غير المرتبطة بحجز محدد
-- ============================================================
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

drop policy if exists "Anyone can submit a contact message" on public.contacts;
create policy "Anyone can submit a contact message"
  on public.contacts
  for insert
  to anon
  with check (true);

-- ============================================================
-- ملاحظة: لا توجد سياسة SELECT/UPDATE/DELETE للزوار في أي من الجدولين
-- هذا يعني: لا أحد يستطيع قراءة أو تعديل أو حذف البيانات من المتصفح
-- أنت فقط (عبر Table Editor في لوحة Supabase) تستطيع رؤية وإدارة البيانات
-- ============================================================
