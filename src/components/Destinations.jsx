import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';

export default function Destinations() {
  const dests = [
    { name: "Santorini", country: "Greece", img: "https://picsum.photos/seed/santorini-white/800/1000.jpg" },
    { name: "Kyoto", country: "Japan", img: "https://picsum.photos/seed/kyoto-bamboo/800/1000.jpg" },
    { name: "St. Moritz", country: "Switzerland", img: "https://picsum.photos/seed/swiss-alps-snow/800/1000.jpg" },
  ];

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
            <a href="#book" className="inline-flex items-center gap-2 text-gold-500 text-[12px] tracking-[.15em] group shrink-0">
              VIEW ALL <SvgIcon name="arrowR" size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {dests.map((d, i) => (
            <FadeIn key={i} delay={i * .15}>
              <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover img-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-2">
                    <SvgIcon name="mapPin" size={13} className="text-gold-500" />
                    <span className="text-gold-500 text-[11px] tracking-[.25em]">{d.country.toUpperCase()}</span>
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-medium text-white mb-5 group-hover:text-gold-300 transition-colors duration-300">
                    {d.name}</h3>
                  <div className="overflow-hidden">
                    <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <span className="inline-flex items-center gap-2 text-white text-[12px] tracking-[.15em]">
                        DISCOVER <SvgIcon name="arrowR" size={14} /></span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/20 transition-all duration-500 pointer-events-none" />
              </div>
            </FadeIn>))}
        </div>
      </div>
    </section>
  );
}
