import { useState } from 'react';
import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';
import Modal from './Modal';

const dests = [
  {
    name: "Santorini", country: "Greece",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80",
    overview: "Whitewashed cliffside villages overlooking the Aegean caldera. Best visited April–October for warm days and legendary sunsets over Oia.",
    hotels: ["Katikies Santorini", "Grace Hotel Santorini", "Canaves Oia Epitome"],
  },
  {
    name: "Kyoto", country: "Japan",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    overview: "Japan's former imperial capital, home to over a thousand temples, bamboo groves, and traditional ryokan culture. Spring cherry blossoms and autumn foliage draw the biggest crowds.",
    hotels: ["Hoshinoya Kyoto", "The Ritz-Carlton Kyoto", "Tawaraya Ryokan"],
  },
  {
    name: "St. Moritz", country: "Switzerland",
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
    overview: "An alpine resort town synonymous with winter glamour — skiing, glacier views, and a storied grand-hotel tradition. Equally scenic in summer for hiking and lake activities.",
    hotels: ["Badrutt's Palace Hotel", "Kulm Hotel St. Moritz", "Suvretta House"],
  },
  {
    name: "Bangkok", country: "Thailand",
    img: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1200&q=80",
    overview: "A city of gilded temples, riverside skyline views, and world-class dining that spans street food to Michelin-starred tasting menus. A natural gateway to the rest of Southeast Asia.",
    hotels: ["Mandarin Oriental Bangkok", "The Peninsula Bangkok", "The Siam Hotel"],
  },
];

export default function Destinations() {
  const [active, setActive] = useState(null);

  return (
    <section id="destinations" className="py-28 md:py-40 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
            <div>
              <p className="text-gold-500 text-[11px] tracking-[.5em] mb-5 font-light">CURATED COLLECTION</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                Iconic <span className="italic text-gold-500">Destinations</span></h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {dests.map((d, i) => (
            <FadeIn key={i} delay={i * .1}>
              <button
                onClick={() => setActive(d)}
                className="group relative aspect-[3/4] w-full overflow-hidden cursor-pointer text-left"
              >
                <img src={d.img} alt={d.name} className="w-full h-full object-cover img-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <SvgIcon name="mapPin" size={13} className="text-gold-500" />
                    <span className="text-gold-500 text-[11px] tracking-[.25em]">{d.country.toUpperCase()}</span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-medium text-white mb-4 group-hover:text-gold-300 transition-colors duration-300">
                    {d.name}</h3>
                  <div className="overflow-hidden">
                    <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <span className="inline-flex items-center gap-2 text-white text-[12px] tracking-[.15em]">
                        DISCOVER <SvgIcon name="arrowR" size={14} /></span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/20 transition-all duration-500 pointer-events-none" />
              </button>
            </FadeIn>))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <>
            <img src={active.img} alt={active.name} className="w-full h-56 sm:h-72 object-cover" />
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-3">
                <SvgIcon name="mapPin" size={14} className="text-gold-500" />
                <span className="text-gold-500 text-[11px] tracking-[.25em]">{active.country.toUpperCase()}</span>
              </div>
              <h3 className="font-display text-3xl font-medium text-white mb-4">{active.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{active.overview}</p>

              <p className="text-gold-500 text-[11px] tracking-[.2em] mb-3">SUGGESTED STAYS</p>
              <ul className="space-y-2.5 mb-8">
                {active.hotels.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <SvgIcon name="star" size={14} className="text-gold-500 mt-0.5 shrink-0" fill />
                    {h}
                  </li>))}
              </ul>

              <a href="#book" onClick={() => setActive(null)}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-gold-500 text-dark-900 text-sm tracking-[.15em] font-medium hover:bg-gold-300 transition-all duration-500 btn-shine luxury-ease">
                PLAN THIS TRIP <SvgIcon name="arrowR" size={15} />
              </a>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
