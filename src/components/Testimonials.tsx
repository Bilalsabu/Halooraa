import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const STORIES = [
  {
    id: 1,
    name: "Vaidas Vileikis",
    role: "Founder, Name Architects",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "Unrivaled customer service, cutting edge design and quality. Haloora is firmly lodged in our list of preferred suppliers of glazing products."
  },
  {
    id: 2,
    name: "Eleanor Sterling",
    role: "Director, Sterling Interiors",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "The attention to detail in their architectural solutions is simply unmatched. They don't just build structures; they create living art pieces."
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "CEO, Thorne Developments",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    quote: "Working with Haloora Estates has transformed our projects. Their ability to blend modern aesthetics with timeless durability is a game-changer."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextStory = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % STORIES.length);
  }, []);

  const prevStory = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextStory, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextStory]);

  const currentStory = STORIES[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-40 px-6 md:px-16 border-t border-white/10 bg-[var(--color-black)] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-gradient-gold rotate-45" />
          <span className="font-display text-[10px] md:text-xs tracking-[0.3em] uppercase font-light text-gradient-gold">Client Stories</span>
        </div>
        
        <div className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/60 font-semibold flex items-center gap-4">
          <div className="w-12 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              key={currentIndex}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0 bg-gradient-gold"
            />
          </div>
          <span>{String(currentIndex + 1).padStart(2, '0')} / {String(STORIES.length).padStart(2, '0')}</span>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={prevStory}
            className="p-[1px] bg-gradient-gold rounded-full inline-block group cursor-pointer transition-transform active:scale-95"
            aria-label="Previous story"
          >
            <div className="w-12 h-12 bg-[var(--color-black)] rounded-full flex items-center justify-center group-hover:bg-transparent group-hover:text-black transition-colors text-[var(--color-gold)]">
              <ArrowLeft className="w-4 h-4" />
            </div>
          </button>
          <button 
            onClick={nextStory}
            className="p-[1px] bg-gradient-gold rounded-full inline-block group cursor-pointer transition-transform active:scale-95"
            aria-label="Next story"
          >
            <div className="w-12 h-12 bg-[var(--color-black)] rounded-full flex items-center justify-center group-hover:bg-transparent group-hover:text-black transition-colors text-[var(--color-gold)]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-2 md:col-start-1 flex items-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full max-w-[160px] aspect-[3/4]"
              >
                <img 
                  src={currentStory.image} 
                  alt={currentStory.name} 
                  className="w-full h-full object-cover grayscale border border-white/10" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
            
            <div className="md:col-span-8 md:col-start-4 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.3] mb-12 relative text-white"
              >
                <span className="absolute -left-8 md:-left-12 top-0 text-4xl md:text-6xl text-[var(--color-gold)]/40 font-serif">"</span>
                {currentStory.quote}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lg md:text-xl font-medium mb-2 text-white">{currentStory.name}</p>
                <p className="font-display text-[10px] md:text-xs tracking-widest uppercase text-gradient-gold font-semibold">{currentStory.role}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-24 flex justify-end">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-widest uppercase border-t border-white/10 pt-4 font-semibold text-white/60"
        >
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 object-contain grayscale opacity-60" />
          <span>Google review score: <span className="text-gradient-gold">5.0</span> of 5</span>
        </motion.div>
      </div>
    </section>
  );
}
