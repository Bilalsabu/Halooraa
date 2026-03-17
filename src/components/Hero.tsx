import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center p-6 md:p-12 text-white overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/VKAKbueezMk?autoplay=1&mute=1&loop=1&playlist=VKAKbueezMk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="absolute top-0 left-0 w-full p-6 md:p-12 z-20 flex justify-center md:justify-between items-center md:items-start">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-4xl font-serif tracking-[0.1em] text-gradient-gold leading-none mb-1.5 md:mb-2">HALOORA</h1>
          <div className="flex items-center w-full gap-2 md:gap-3">
            <div className="h-[0.5px] flex-grow bg-[var(--color-gold)]/50" />
            <span className="font-display text-[8px] md:text-[11px] tracking-[0.5em] uppercase font-light text-[var(--color-gold)]">Estates</span>
            <div className="h-[0.5px] flex-grow bg-[var(--color-gold)]/50" />
          </div>
        </div>
        <button className="hidden md:flex font-display text-[8px] md:text-xs tracking-[0.2em] uppercase font-light items-center gap-1 md:gap-2 text-white bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_4px_24px_rgba(255,255,255,0.1)] px-3 py-1.5 md:px-6 md:py-3 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 active:scale-95">
          <span>Book Private Viewing</span>
          <ArrowUpRight className="w-2.5 h-2.5 md:w-4 md:h-4" />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] mb-8">
          Where <span className="italic text-gradient-gold">Elegance</span> Meets Timeless Living.
        </h2>
        
        <button className="flex md:hidden font-display text-[9px] tracking-[0.2em] uppercase font-light items-center gap-1.5 text-white bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_4px_24px_rgba(255,255,255,0.1)] px-5 py-2.5 rounded-full hover:bg-white/20 hover:border-white/30 transition-all duration-300 active:scale-95">
          <span>Book Private Viewing</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}
