import { useState, useEffect, useRef } from 'react';

export function useScrollAnim(opts = {}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.unobserve(el); }
    }, { threshold: opts.threshold || 0.15, rootMargin: opts.margin || '-60px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

export function FadeIn({ children, direction = 'up', delay = 0, className = '', threshold }) {
  const [ref, vis] = useScrollAnim({ threshold });
  const cls = { up: 'anim-up', left: 'anim-left', right: 'anim-right', scale: 'anim-scale', fade: 'anim-fade' }[direction] || 'anim-up';
  return (
    <div ref={ref} className={`${cls} ${vis ? 'is-visible' : ''} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
