import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';
import BookingForm from './BookingForm';

export default function CTASection() {
  return (
    <section id="book" className="relative py-36 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-[2px]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] border border-gold-500/5 rounded-full" />
        <div className="absolute w-[350px] h-[350px] border border-gold-500/5 rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-gold-500 text-[11px] tracking-[.5em] mb-6 font-light">READY TO EMBARK?</p>
        </FadeIn>
        <FadeIn delay={.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
            Your Next Chapter <span className="italic text-gold-500">Awaits</span></h2>
        </FadeIn>
        <FadeIn delay={.2}>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-14 font-light leading-relaxed">
            Let our concierge team design a journey that transcends the ordinary. Your story deserves the extraordinary.</p>
        </FadeIn>
      </div>

      <div className="relative z-10 mt-4 px-6">
        <BookingForm />
      </div>

      <div className="relative z-10 text-center mt-12">
        <FadeIn delay={.3}>
          <a href="tel:+18005551234" className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white text-sm tracking-[.15em] font-light hover:border-gold-500 hover:text-gold-500 transition-all duration-500 luxury-ease">
            <SvgIcon name="phone" size={15} /> CALL US
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
