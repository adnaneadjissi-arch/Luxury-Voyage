import { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';

function validate(form) {
  const errors = {};
  if (!form.name || form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(form.email || '')) errors.email = 'Please enter a valid email address.';
  if (!form.message || form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
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

    // If Supabase isn't configured yet, log the data to the console
    // and show the success UI so the form doesn't break during local development
    if (!isSupabaseConfigured) {
      console.log('[ContactForm] Supabase is not configured — form data:', form);
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
      setErrorMsg('Something went wrong sending your message. Please try again later.');
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
        <h3 className="font-display text-2xl mb-3 text-white">Message Sent</h3>
        <p className="text-gray-400 text-sm leading-relaxed">Our team will get back to you as soon as possible.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-gold-500 text-xs tracking-widest hover:text-gold-300 transition-colors">
          Send another message
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
            placeholder="Full Name"
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
            placeholder="Email Address"
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
            placeholder="Your message..." rows={4}
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
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </FadeIn>
    </form>
  );
}
