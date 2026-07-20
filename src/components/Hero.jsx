import { SvgIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://picsum.photos/seed/luxury-ocean-yacht/1920/1080.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/30 to-dark-900" />
      </div>

      <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-28 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
        <span className="text-[9px] tracking-[.3em] text-gold-500/50" style={{ writingMode: 'vertical-lr' }}>LUXURY VOYAGE</span>
        <div className="w-px h-28 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <p className="hero-anim hd1 text-gold-500 text-[11px] md:text-xs tracking-[.5em] mb-8 font-light">
          EST. 2009 · ULTRA-LUXURY TRAVEL</p>
        <h1 className="hero-anim hd2 font-display text-[3.2rem] md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8">
          Beyond Ordinary<br /><span className="italic gold-shimmer">Travel</span>
        </h1>
        <p className="hero-anim hd3 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light leading-relaxed">
          Curating extraordinary journeys for the world's most discerning travelers. Where every detail is meticulously crafted.</p>
        <div className="hero-anim hd4">
          <a href="#book" className="inline-flex items-center gap-3 px-12 py-4 bg-gold-500 text-dark-900 text-sm tracking-[.2em] font-medium hover:bg-gold-300 transition-all duration-500 group btn-shine btn-glow luxury-ease">
            BEGIN YOUR JOURNEY
            <SvgIcon name="arrowR" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <div className="hero-anim hd5 absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="scroll-bounce flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[.3em] text-gray-600">SCROLL</span>
          <SvgIcon name="chevD" size={16} className="text-gold-500/60" />
        </div>
      </div>
    </section>
  );
}
