import { useState } from 'react';
import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';
import Modal from './Modal';

const items = [
  {
    icon: 'plane', title: "Private Aviation",
    desc: "Access the world's most exclusive fleet of private jets. Every flight tailored to your preferences.",
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80",
    details: {
      intro: "Skip the terminal entirely. Our private aviation desk arranges door-to-door travel on a curated fleet, from light jets for short regional hops to long-range aircraft for intercontinental journeys.",
      highlights: [
        "Fleet access: light jets, midsize, and long-range heavy jets",
        "Flexible scheduling — depart within hours of confirmation",
        "Dedicated cabin crew and bespoke in-flight catering",
        "Ground transfers coordinated on both ends of the journey",
      ],
    },
  },
  {
    icon: 'castle', title: "Exclusive Retreats",
    desc: "Handpicked sanctuaries — from overwater villas in the Maldives to châteaux in the French countryside.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    details: {
      intro: "We personally vet every property in our retreat collection. Each one is chosen for privacy, service quality, and a sense of place you won't find in a standard booking engine.",
      highlights: [
        "Private villas, overwater bungalows, and historic châteaux",
        "Dedicated villa staff: chef, housekeeper, and butler on request",
        "Pre-arrival provisioning tailored to your preferences",
        "Flexible check-in/check-out around your itinerary",
      ],
    },
  },
  {
    icon: 'compass', title: "Bespoke Itineraries",
    desc: "Every journey uniquely crafted by our concierge team. Cultural immersions and moments that take your breath away.",
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80",
    details: {
      intro: "No two itineraries we design are alike. Our concierge team builds each journey around your pace, interests, and the experiences that matter most to you.",
      highlights: [
        "One-on-one planning session with a dedicated travel designer",
        "Private guides and skip-the-line cultural access",
        "Multi-destination routing handled end-to-end",
        "24/7 on-trip support if plans need to shift",
      ],
    },
  },
];

export default function Features() {
  const [active, setActive] = useState(null);

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
              <button
                onClick={() => setActive(f)}
                className="group relative aspect-[3/4] w-full overflow-hidden cursor-pointer border border-white/[0.05] hover:border-gold-500/20 transition-all duration-700 luxury-ease text-left"
              >
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
                    <span className="inline-flex items-center gap-2 text-gold-500 text-[12px] tracking-[.15em] font-medium group/link">
                      EXPLORE <SvgIcon name="arrowR" size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>

                </div>
              </button>
            </FadeIn>))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <>
            <img src={active.img} alt={active.title} className="w-full h-56 sm:h-72 object-cover" />
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border border-gold-500/30 bg-gold-500/10 flex items-center justify-center">
                  <SvgIcon name={active.icon} size={18} className="text-gold-300" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-medium text-white">{active.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{active.details.intro}</p>
              <ul className="space-y-3 mb-8">
                {active.details.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <SvgIcon name="check" size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    {h}
                  </li>))}
              </ul>
              <a href="#book" onClick={() => setActive(null)}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-gold-500 text-dark-900 text-sm tracking-[.15em] font-medium hover:bg-gold-300 transition-all duration-500 btn-shine luxury-ease">
                ENQUIRE ABOUT THIS <SvgIcon name="arrowR" size={15} />
              </a>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
