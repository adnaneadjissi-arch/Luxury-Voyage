import { SvgIcon } from './Icons';
import { FadeIn } from '../hooks';

export default function Testimonial() {
  return (
    <section className="py-28 md:py-40 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative">
        <FadeIn>
          <SvgIcon name="quote" size={48} className="text-gold-500/20 mx-auto mb-10" />
        </FadeIn>
        <FadeIn delay={.1}>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.1rem] font-medium leading-relaxed italic text-gray-200 mb-12">
            "Luxury Voyage transformed what could have been a simple vacation into the most profound travel experience of our lives. Every moment was poetry in motion."
          </blockquote>
        </FadeIn>
        <FadeIn delay={.2}>
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => <SvgIcon key={i} name="star" size={15} className="text-gold-500" fill />)}
          </div>
        </FadeIn>
        <FadeIn delay={.25}>
          <p className="text-white text-sm tracking-[.12em]">ALEXANDRA & JAMES HARRINGTON</p>
          <p className="text-gray-600 text-[11px] tracking-[.2em] mt-1.5">MEMBERS SINCE 2016</p>
        </FadeIn>
      </div>
    </section>
  );
}
