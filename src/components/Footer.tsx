import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-[var(--color-black)] text-white py-24 md:py-40 px-6 md:px-16 flex flex-col items-center text-center relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80" 
          alt="Footer background" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-1.5 bg-gradient-gold rotate-45" />
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase font-semibold text-gradient-gold">Get in touch</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] mb-16">
          Ready to find your <span className="italic text-gradient-gold">dream</span> home?
        </h2>
        
        <div 
          onClick={() => setIsModalOpen(true)}
          className="p-[1px] bg-gradient-gold rounded-full inline-block group cursor-pointer mb-32"
        >
          <button className="bg-[var(--color-black)] text-[var(--color-gold)] px-8 py-5 rounded-full font-mono text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-3 group-hover:bg-transparent group-hover:text-black transition-colors">
            Contact us
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-left border-t border-white/10 pt-16">
          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-gradient-gold font-semibold">Contact</h3>
            <a href="mailto:info@haloora.co.uk" className="text-sm md:text-base hover:text-[var(--color-gold)] transition-colors">info@haloora.co.uk</a>
            <a href="tel:+4401923606248" className="text-sm md:text-base hover:text-[var(--color-gold)] transition-colors">+44 (0) 1923 606 248</a>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-gradient-gold font-semibold">Address</h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Orbital 25 Business Park, Unit 11<br />
              Watford WD18 9DA, UK
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-gradient-gold font-semibold">Social</h3>
            <a href="#" className="text-sm md:text-base hover:text-[var(--color-gold)] transition-colors">Instagram</a>
            <a href="#" className="text-sm md:text-base hover:text-[var(--color-gold)] transition-colors">LinkedIn</a>
            <a href="#" className="text-sm md:text-base hover:text-[var(--color-gold)] transition-colors">Pinterest</a>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-gradient-gold font-semibold">Legal</h3>
            <a href="#" className="text-sm md:text-base hover:text-[var(--color-gold)] transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm md:text-base hover:text-[var(--color-gold)] transition-colors">Terms & Conditions</a>
            <p className="text-sm md:text-base text-white/40 mt-auto">© Haloora 2026</p>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Get in Touch"
      />
    </footer>
  );
}
