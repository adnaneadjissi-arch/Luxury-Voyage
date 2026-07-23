import { useEffect } from 'react';
import { SvgIcon } from './Icons';

export default function DetailModal({ open, onClose, img, eyebrow, title, description, highlights }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div onClick={onClose} className="absolute inset-0 bg-dark-900/85 backdrop-blur-md animate-[fadeIn_.4s_ease-out]" />

      <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-dark-800 border border-gold-500/15 shadow-2xl animate-[modalIn_.5s_cubic-bezier(.16,1,.3,1)]">
        <button onClick={onClose} aria-label="إغلاق"
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-dark-900/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors duration-300">
          <SvgIcon name="x" size={18} />
        </button>

        <div className="relative h-64 md:h-80 overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/20 to-transparent" />
        </div>

        <div className="p-8 md:p-10">
          {eyebrow && <p className="text-gold-500 text-[11px] tracking-[.4em] mb-3 font-light">{eyebrow.toUpperCase()}</p>}
          <h3 className="font-display text-3xl md:text-4xl font-medium mb-5 text-white">{title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">{description}</p>

          {highlights && highlights.length > 0 && (
            <div className="border-t border-white/10 pt-6">
              <p className="text-gold-500 text-[11px] tracking-[.25em] mb-4">HIGHLIGHTS</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm">
                    <SvgIcon name="check" size={15} className="text-gold-500 mt-0.5 shrink-0" />
                    {h}
                  </li>))}
              </ul>
            </div>
          )}

          <a href="#book" onClick={onClose}
            className="mt-9 inline-flex items-center gap-3 px-9 py-3.5 bg-gold-500 text-dark-900 text-sm tracking-[.15em] font-medium hover:bg-gold-300 transition-all duration-500 btn-shine luxury-ease">
            INQUIRE NOW
          </a>
        </div>
      </div>
    </div>
  );
}
