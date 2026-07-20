import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';

export default function Features() {
  const items = [
    { icon: 'plane', title: "Private Aviation",
      desc: "Access the world's most exclusive fleet of private jets. Every flight tailored to your preferences.",
      img: "https://picsum.photos/seed/private-jet-gold/800/1000.jpg" },
    { icon: 'castle', title: "Exclusive Retreats",
      desc: "Handpicked sanctuaries — from overwater villas in the Maldives to châteaux in the French countryside.",
      img: "https://picsum.photos/seed/maldives-overwater/800/1000.jpg" },
    { icon: 'compass', title: "Bespoke Itineraries",
      desc: "Every journey uniquely crafted by our concierge team. Cultural immersions and moments that take your breath away.",
      img: "https://picsum.photos/seed/kyoto-garden-path/800/1000.jpg" },
  ];

  return (
    <section id="experiences" className="py-32 lg:py-48 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <FadeIn>
          <div className="text-center mb-20 md:mb-28">
            <p className="text-gold-500 text-[11px] tracking-[.5em] mb-5 font-light">OUR DISTINCTION</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              Unmatched <span className="italic text-gold-500">Luxury</span></h2>
            <div className="w-16 h-px bg-gold-500/40 mx-auto mt-8" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((f, i) => (
            <FadeIn key={i} delay={i * .12}>
              <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer border border-white/[0.05] hover:border-gold-500/20 transition-all duration-700 luxury-ease">
                <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover img-zoom scale-105" />

                <div className="glass-overlay absolute inset-0 flex flex-col justify-end p-8 lg:p-10">

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 luxury-ease">
                    <div className="w-12 h-12 border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-5 group-hover:border-gold-500/30 group-hover:bg-gold-500/10 transition-all duration-500">
                      <SvgIcon name={f.icon} size={20} className="text-gold-300" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-light text-white mb-2 group-hover:text-gold-300 transition-colors duration-500">{f.title}</h3>
                  </div>

                  <div className="reveal-text">
                    <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">{f.desc}</p>
                    <a href="#book" className="inline-flex items-center gap-2 text-gold-500 text-[12px] tracking-[.15em] font-medium group/link">
                      EXPLORE <SvgIcon name="arrowR" size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>

                </div>
              </div>
            </FadeIn>))}
        </div>
      </div>
    </section>
  );
}
