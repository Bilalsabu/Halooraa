import { ArrowDownRight, Play } from 'lucide-react';

export default function Showroom() {
  return (
    <section className="bg-[var(--color-black)] text-white py-24 md:py-40 px-6 md:px-16 relative overflow-hidden border-t border-white/10">
      <div className="flex items-center gap-3 mb-16 border-t border-white/10 pt-8">
        <div className="w-1.5 h-1.5 bg-gradient-gold rotate-45" />
        <span className="font-display text-[10px] md:text-xs tracking-[0.3em] uppercase font-light text-gradient-gold">Showroom</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        <div className="md:col-span-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.2]">
            A place where <span className="italic text-gradient-gold">precision</span> and <span className="italic text-gradient-gold">creativity</span> connect.
          </h2>
        </div>
        
        <div className="md:col-span-4 flex justify-center my-12 md:my-0">
          <div className="w-full aspect-video md:aspect-[3/4] max-w-md overflow-hidden relative group cursor-pointer border border-white/10 group-hover:border-[var(--color-gold)] transition-colors duration-500">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Showroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-[var(--color-gold)] border border-[var(--color-gold)]/50 transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col md:items-end text-left md:text-right">
          <span className="font-display text-[10px] md:text-xs tracking-[0.3em] uppercase text-gradient-gold mb-4 font-light">Address</span>
          <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
            Orbital 25 Business Park, Unit 11<br />
            Watford WD18 9DA, UK
          </p>
          <div className="p-[1px] bg-gradient-gold rounded-full inline-block group cursor-pointer">
            <button className="bg-[var(--color-black)] text-[var(--color-gold)] px-6 py-4 rounded-full font-mono text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-3 group-hover:bg-transparent group-hover:text-black transition-colors">
              <ArrowDownRight className="w-4 h-4" />
              Showroom
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
