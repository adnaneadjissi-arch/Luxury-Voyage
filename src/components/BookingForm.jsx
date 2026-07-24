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
      setErrorMsg('Name and email are required.');
      return;
    }

    if (!isSupabaseConfigured) {
      setStatus('error');
      setErrorMsg('Supabase is not connected yet. See steps "B" and "C" in the README to add your keys.');
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
      setErrorMsg('Something went wrong while sending your request. Please try again or contact us directly by phone.');
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
        <h3 className="font-display text-2xl mb-3 text-white">Request Received</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Our concierge team will be in touch shortly to start designing your trip.
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
            placeholder="Full Name *"
            className="bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300"
          />
          <input
            name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="Email Address *"
            className="bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300"
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.05}>
        <div className="grid sm:grid-cols-2 gap-5">
          <input
            name="phone" value={form.phone} onChange={handleChange}
            placeholder="Phone Number"
            className="bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300"
          />
          <input
            name="destination" value={form.destination} onChange={handleChange}
            placeholder="Preferred Destination"
            className="bg-dark-700 border border-white/10 focus:border-gold-500 outline-none px-5 py-3.5 text-sm text-white placeholder:text-gray-500 transition-colors duration-300"
          />
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          placeholder="Tell us about your dream trip..." rows={4}
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
          {status === 'loading' ? 'Sending...' : 'Send Request'}
        </button>
      </FadeIn>
    </form>
  );
}
