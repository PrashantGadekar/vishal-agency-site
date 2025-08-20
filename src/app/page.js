'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import IntroducingUs from '../components/IntroducingUs';
import Testimonials from '../components/Testimonials';
import WhyWorkWithUs from '../components/WhyWorkWithUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <IntroducingUs />
      <Services />
      {/* <Portfolio /> */}
      <Testimonials />
      <About />
      <WhyWorkWithUs />
      <Contact />
      <Footer />
    </main>
  );
}
