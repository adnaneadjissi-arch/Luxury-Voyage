# Luxury Voyage — موقع فاخر لوكالة سفر

مشروع React + Vite + Tailwind + Supabase، مبني بنية احترافية جاهزة للنشر والبيع.

## ما الذي تغيّر عن النسخة الأصلية؟

| قبل | بعد |
|---|---|
| ملف HTML واحد، React عبر CDN، Babel يترجم في المتصفح | مشروع Vite حقيقي، كود مُترجَم مسبقاً (Build)، أداء أسرع بكثير |
| 9 مكوّنات كلها في ملف واحد | كل مكوّن في ملف منفصل داخل src/components |
| زر "BOOK NOW" لا يفعل شيئاً فعلياً | نموذج حجز حقيقي متصل بقاعدة بيانات Supabase |
| لا توجد قاعدة بيانات | جدول bookings مع حماية RLS صحيحة |

---

## 1) التشغيل محلياً

```
npm install
npm run dev
```

سيعمل الموقع على http://localhost:5173

---

## 2) ربط Supabase (خطوات تحتاج تدخّلك أنت فقط)

### أ) أنشئ مشروع Supabase
1. اذهب إلى supabase.com وأنشئ حساباً (مجاني)
2. أنشئ مشروعاً جديداً (New Project)
3. من القائمة الجانبية: Settings -> API
4. انسخ قيمتين: Project URL و anon public key

### ب) أنشئ جدول الحجوزات
1. من القائمة الجانبية: SQL Editor -> New Query
2. افتح ملف supabase-setup.sql الموجود في هذا المشروع، انسخ محتواه كاملاً، الصقه، ثم اضغط Run
3. هذا سينشئ جدول bookings مع حماية RLS صحيحة (الزوار يمكنهم الإرسال فقط، لا يمكنهم القراءة)

### ج) ضع المفاتيح في المشروع
```
cp .env.example .env
```
افتح ملف .env وضع القيمتين اللتين نسختهما من الخطوة (أ).

ملاحظة أمنية مهمة: مفتاح anon key مُصمَّم ليكون ظاهراً في كود الموقع — هذا طبيعي وليس خطأً. الحماية الحقيقية تأتي من سياسات RLS التي أنشأناها في الخطوة (ب)، وليس من إخفاء المفتاح.

### د) تحقق من عمل النموذج
```
npm run dev
```
املأ نموذج "BOOK NOW" في الموقع وأرسله، ثم تحقق من ظهور البيانات في: Table Editor -> bookings داخل لوحة Supabase.

---

## 3) النشر (Deployment)

### الخيار الموصى به: Vercel + GitHub

1. ارفع المشروع إلى مستودع جديد على GitHub (لا ترفع ملف .env — مُستبعد تلقائياً)
2. سجّل دخول إلى vercel.com بحساب GitHub
3. اضغط New Project واختر المستودع
4. في خطوة الإعداد، أضف متغيرات البيئة (Environment Variables):
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
5. اضغط Deploy

سيعطيك Vercel رابطاً حياً مباشرة (مثال: luxury-voyage.vercel.app)، ويمكنك لاحقاً ربط دومين خاص بك.

---

## 4) بنية المشروع

```
luxury-voyage/
├── src/
│   ├── components/       # كل قسم من الموقع في ملف منفصل
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Destinations.jsx
│   │   ├── Stats.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonial.jsx
│   │   ├── CTASection.jsx   # يحتوي نموذج الحجز
│   │   ├── BookingForm.jsx  # النموذج المتصل بـ Supabase
│   │   ├── Footer.jsx
│   │   └── Icons.jsx
│   ├── lib/
│   │   └── supabaseClient.js  # إعداد الاتصال بـ Supabase
│   ├── hooks.jsx            # useScrollAnim + FadeIn
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── supabase-setup.sql       # شغّله في Supabase SQL Editor
├── .env.example
└── README.md
```

---

## 5) للاستخدام كمنتج قابل للبيع

- غيّر اسم "Luxury Voyage" والألوان في tailwind.config.js حسب علامة العميل التجارية
- عدّل بيانات التواصل في Footer.jsx و CTASection.jsx
- استبدل صور picsum.photos بصور حقيقية للعميل
- أضف Google Analytics أو Meta Pixel قبل التسليم النهائي للعميل
