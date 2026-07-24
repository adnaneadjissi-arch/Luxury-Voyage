import { useState, useEffect } from 'react';
import { SvgIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Lock background scroll while the side menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = ['Destinations', 'Experiences', 'Membership', 'Contact'];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 luxury-ease ${
        scrolled
          ? 'bg-dark-900/40 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
          : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-gold-500 rotate-45 flex items-center justify-center group-hover:border-gold-300 transition-colors duration-500">
              <div className="w-3.5 h-3.5 bg-gold-500 group-hover:bg-gold-300 transition-colors duration-500" />
            </div>
            <span className="text-[15px] tracking-[.3em] font-light text-white hidden sm:inline">LUXURY VOYAGE</span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-[13px] tracking-[.12em] text-gray-400 hover:text-gold-500 transition-colors duration-500 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold-500 after:transition-all after:duration-500 luxury-ease hover:after:w-full">
                {l.toUpperCase()}
              </a>))}
            <a href="#book" className="ml-4 px-7 py-2.5 border border-gold-500 text-gold-500 text-[13px] tracking-[.12em] hover:bg-gold-500 hover:text-dark-900 transition-all duration-500 luxury-ease btn-shine btn-glow">
              BOOK NOW
            </a>
          </div>

          <button onClick={() => setOpen(true)} className="lg:hidden text-white p-2 relative z-[60]" aria-label="Open menu">
            <SvgIcon name="menu" size={22} />
          </button>
        </div>
      </nav>

      {/* Dimmed backdrop behind the side menu */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-[70] bg-dark-900/70 backdrop-blur-sm transition-opacity duration-500 luxury-ease ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Slide-in menu from the right */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[78%] max-w-xs z-[80] bg-dark-800 border-l border-gold-500/10 shadow-2xl transition-transform duration-500 luxury-ease ${
        open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
          <span className="text-[13px] tracking-[.3em] font-light text-white">MENU</span>
          <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
            <SvgIcon name="x" size={20} />
          </button>
        </div>
        <div className="px-6 py-10 flex flex-col gap-7">
          {links.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              className={`text-base tracking-[.15em] text-gray-300 hover:text-gold-500 transition-all duration-500 luxury-ease ${
                open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              {l.toUpperCase()}
            </a>))}
          <a href="#book" onClick={() => setOpen(false)}
            className="mt-6 px-6 py-3.5 border border-gold-500 text-gold-500 text-sm tracking-[.15em] text-center hover:bg-gold-500 hover:text-dark-900 transition-all duration-500 luxury-ease">
            BOOK NOW
          </a>
        </div>
      </div>
    </>
  );
}
