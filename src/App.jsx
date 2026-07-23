import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import Stats from './components/Stats';
import Process from './components/Process';
import Testimonial from './components/Testimonial';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <Stats />
      <Process />
      <Testimonial />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
