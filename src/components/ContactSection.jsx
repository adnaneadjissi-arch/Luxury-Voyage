import ContactForm from './ContactForm';
import { FadeIn } from '../hooks';

export default function ContactSection() {
  return (
    <section className="py-28 md:py-36 bg-dark-800 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14 md:mb-16">
            <p className="text-gold-500 text-[11px] tracking-[.5em] mb-5 font-light">GET IN TOUCH</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
              Have a <span className="italic text-gold-500">Question?</span></h2>
            <p className="text-gray-500 text-sm mt-5 max-w-md mx-auto">
              For general inquiries not related to a specific booking, send us a message directly.</p>
          </div>
        </FadeIn>
        <ContactForm />
      </div>
    </section>
  );
}
