import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';

export default function Process() {
  const steps = [
    { n: "01", title: "Consultation", desc: "Share your vision with our concierge team. We listen to every desire, every dream." },
    { n: "02", title: "Curation", desc: "Our experts craft a bespoke itinerary, selecting only the finest experiences and accommodations." },
    { n: "03", title: "Confirmation", desc: "Review every detail of your journey. Adjust until it exceeds your expectations." },
    { n: "04", title: "Experience", desc: "Embark on a journey beyond imagination, with 24/7 concierge support at every moment." },
  ];

  return (
    <section id="membership" className="py-28 md:py-40 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-20 md:mb-24">
            <p className="text-gold-500 text-[11px] tracking-[.5em] mb-5 font-light">THE JOURNEY</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              How It <span className="italic text-gold-500">Works</span></h2>
            <div className="w-16 h-px bg-gold-500/40 mx-auto mt-8" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * .12}>
              <div className="group relative text-center md:text-left">
                <div className="font-display text-5xl md:text-6xl font-medium text-gold-500/10 group-hover:text-gold-500/25 transition-colors duration-500 mb-4">{s.n}</div>
                <h3 className="font-display text-xl font-medium mb-3 group-hover:text-gold-500 transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-6 lg:-right-8 text-gold-500/20">
                  <SvgIcon name="arrowR" size={20} /></div>}
              </div>
            </FadeIn>))}
        </div>
      </div>
    </section>
  );
}
