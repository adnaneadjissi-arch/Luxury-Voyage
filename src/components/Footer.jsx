import { SvgIcon } from './Icons';

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-900 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-16 md:py-20 grid md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-gold-500 rotate-45 flex items-center justify-center">
                <div className="w-3 h-3 bg-gold-500" /></div>
              <span className="text-sm tracking-[.3em] font-light text-white">LUXURY VOYAGE</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Crafting extraordinary travel experiences for the world's most discerning clients since 2009.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[11px] tracking-[.25em] text-gold-500 mb-6">EXPLORE</h4>
            <ul className="space-y-3">
              {['Destinations', 'Experiences', 'Private Aviation', 'Bespoke Itineraries', 'Membership'].map(l => (
                <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-gold-500 transition-colors duration-300">{l}</a></li>))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[.25em] text-gold-500 mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Press', 'Contact'].map(l => (
                <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-gold-500 transition-colors duration-300">{l}</a></li>))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[.25em] text-gold-500 mb-6">CONTACT</h4>
            <ul className="space-y-4">
              <li><a href="tel:+18005551234" className="flex items-center gap-3 text-gray-500 text-sm hover:text-gold-500 transition-colors duration-300">
                <SvgIcon name="phone" size={15} className="text-gold-500/50" />+1 (800) 555-1234</a></li>
              <li><a href="mailto:concierge@luxuryvoyage.com" className="flex items-center gap-3 text-gray-500 text-sm hover:text-gold-500 transition-colors duration-300">
                <SvgIcon name="mail" size={15} className="text-gold-500/50" />concierge@luxuryvoyage.com</a></li>
            </ul>
          </div>
        </div>
        <div className="py-8 border-t border-dark-500/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-[11px] tracking-[.15em]">© 2024 LUXURY VOYAGE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Preferences'].map(l => (
              <a key={l} href="#" className="text-gray-600 text-[11px] hover:text-gold-500 transition-colors duration-300 tracking-wider">{l.toUpperCase()}</a>))}
          </div>
        </div>
      </div>
    </footer>
  );
}
