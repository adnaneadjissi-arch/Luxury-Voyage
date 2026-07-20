import { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus('error');
      setErrorMsg('الاسم والبريد الإلكتروني مطلوبان.');
      return;
    }

    if (!isSupabaseConfigured) {
      setStatus('error');
      setErrorMsg('لم يتم ربط Supabase بعد. راجع خطوة "ب" و"ج" في README لإضافة المفاتيح.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('bookings').insert([{
      full_name: form.name,
      email: form.email,
      phone: form.phone || null,
      destination: form.destination || null,
      message: form.message || null,
    }]);

    if (error) {
      console.error(error);
      setStatus('error');
      setErrorMsg('حدث خطأ أثناء الإرسال. حاول مجدداً أو تواصل معنا مباشرة عبر الهاتف.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', phone: '', destination: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto text-center py-16 px-6 border border-gold-500/20 bg-dark-700/50">
        <div className="w-14 h-14 rounded-full border border-gold-500 flex items-center justify-center mx-auto mb-6">
          <SvgIcon name="check" size={24} className="text-gold-500" />
        </div>
        <h3 className="font-display text-2xl mb-3 text-white">تم استلام طلبك</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          سيتواصل معك فريق الكونسيرج قريباً لبدء تصميم رحلتك.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
      <FadeIn>
        <div className="grid sm:grid-cols-2 gap-5">
          <input
            name="name" value={form.name} onChange={handleChange}
            placeholder="الاسم الكامل *"
            className="bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300"
          />
          <input
            name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="البريد الإلكتروني *"
            className="bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300"
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.05}>
        <div className="grid sm:grid-cols-2 gap-5">
          <input
            name="phone" value={form.phone} onChange={handleChange}
            placeholder="رقم الهاتف"
            className="bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300"
          />
          <input
            name="destination" value={form.destination} onChange={handleChange}
            placeholder="الوجهة المرغوبة"
            className="bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300"
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          placeholder="أخبرنا عن رحلة أحلامك..." rows={4}
          className="w-full bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300 resize-none"
        />
      </FadeIn>

      {status === 'error' && (
        <p className="text-red-400 text-xs text-center">{errorMsg}</p>
      )}

      <FadeIn delay={0.15}>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center gap-3 px-12 py-4 bg-gold-500 text-dark-900 text-sm tracking-[.2em] font-medium hover:bg-gold-300 transition-all duration-500 btn-shine btn-glow luxury-ease disabled:opacity-60"
        >
          {status === 'loading' ? 'جاري الإرسال...' : 'أرسل الطلب'}
        </button>
      </FadeIn>
    </form>
  );
}
