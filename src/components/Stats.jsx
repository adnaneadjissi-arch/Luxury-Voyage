import { useState, useEffect } from 'react';
import { useScrollAnim, FadeIn } from '../hooks';

function AnimatedNumber({ value, suffix = '' }) {
  const [ref, vis] = useScrollAnim({ threshold: .3 });
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (!vis) return;
    const numeric = parseInt(value);
    if (isNaN(numeric)) return;
    const dur = 1800; const st = performance.now();
    const animate = (now) => {
      const p = Math.min((now - st) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setNum(Math.floor(eased * numeric));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [vis, value]);

  const display = isNaN(parseInt(value)) ? value : num + suffix;
  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  const data = [
    { val: "15", suf: "+", label: "Years of Excellence" },
    { val: "200", suf: "+", label: "Curated Destinations" },
    { val: "98", suf: "%", label: "Client Satisfaction" },
    { val: "24/7", suf: "", label: "Concierge Service" },
  ];

  return (
    <section className="py-20 md:py-28 bg-dark-900 border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {data.map((s, i) => (
            <FadeIn key={i} delay={i * .08}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-gold-500 mb-3">
                  <AnimatedNumber value={s.val} suffix={s.suf} />
                </div>
                <div className="text-gray-500 text-[11px] md:text-xs tracking-[.2em] uppercase">{s.label}</div>
              </div>
            </FadeIn>))}
        </div>
      </div>
    </section>
  );
}
