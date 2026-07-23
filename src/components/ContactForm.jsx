import { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';

function validate(form) {
  const errors = {};
  if (!form.name || form.name.trim().length < 2) errors.name = 'الاسم يجب أن يكون حرفين على الأقل.';
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(form.email || '')) errors.email = 'بريد إلكتروني غير صالح.';
  if (!form.message || form.message.trim().length < 10) errors.message = 'الرسالة يجب أن تكون 10 أحرف على الأقل.';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) setFieldErrors({ ...fieldErrors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    // إن لم يكن Supabase مضبوطاً بعد، نسجّل البيانات في الـ Console
    // ونظهر واجهة النجاح، حتى لا يتعطل النموذج أثناء التطوير المحلي
    if (!isSupabaseConfigured) {
      console.log('[ContactForm] Supabase غير مُعَد — بيانات النموذج:', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      return;
    }

    const { error } = await supabase.from('contacts').insert([{
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    }]);

    if (error) {
      console.error(error);
      setStatus('error');
      setErrorMsg('حدث خطأ أثناء إرسال رسالتك. حاول مجدداً لاحقاً.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto text-center py-14 px-6 border border-gold-500/20 bg-dark-700/50">
        <div className="w-14 h-14 rounded-full border border-gold-500 flex items-center justify-center mx-auto mb-6">
          <SvgIcon name="check" size={24} className="text-gold-500" />
        </div>
        <h3 className="font-display text-2xl mb-3 text-white">تم إرسال رسالتك</h3>
        <p className="text-gray-400 text-sm leading-relaxed">سيرد عليك فريقنا في أقرب وقت ممكن.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-gold-500 text-xs tracking-widest hover:text-gold-300 transition-colors">
          إرسال رسالة أخرى
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto space-y-5">
      <FadeIn>
        <div>
          <input
            name="name" value={form.name} onChange={handleChange}
            placeholder="الاسم الكامل"
            className={`w-full bg-dark-700 border outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300 ${
              fieldErrors.name ? 'border-red-500/60' : 'border-white/10 focus:border-gold-500'}`}
          />
          {fieldErrors.name && <p className="text-red-400 text-xs mt-1.5">{fieldErrors.name}</p>}
        </div>
      </FadeIn>
      <FadeIn delay={.05}>
        <div>
          <input
            name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="البريد الإلكتروني"
            className={`w-full bg-dark-700 border outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300 ${
              fieldErrors.email ? 'border-red-500/60' : 'border-white/10 focus:border-gold-500'}`}
          />
          {fieldErrors.email && <p className="text-red-400 text-xs mt-1.5">{fieldErrors.email}</p>}
        </div>
      </FadeIn>
      <FadeIn delay={.1}>
        <div>
          <textarea
            name="message" value={form.message} onChange={handleChange}
            placeholder="رسالتك..." rows={4}
            className={`w-full bg-dark-700 border outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300 resize-none ${
              fieldErrors.message ? 'border-red-500/60' : 'border-white/10 focus:border-gold-500'}`}
          />
          {fieldErrors.message && <p className="text-red-400 text-xs mt-1.5">{fieldErrors.message}</p>}
        </div>
      </FadeIn>

      {status === 'error' && <p className="text-red-400 text-xs text-center">{errorMsg}</p>}

      <FadeIn delay={.15}>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center gap-3 px-12 py-4 bg-gold-500 text-dark-900 text-sm tracking-[.2em] font-medium hover:bg-gold-300 transition-all duration-500 btn-shine btn-glow luxury-ease disabled:opacity-60"
        >
          {status === 'loading' ? 'جاري الإرسال...' : 'إرسال الرسالة'}
        </button>
      </FadeIn>
    </form>
  );
}
