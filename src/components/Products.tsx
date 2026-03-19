import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const properties = [
  {
    id: "villa-aurora",
    title: "Villa Aurora",
    description: "A stunning contemporary villa featuring panoramic ocean views, infinity pool, and state-of-the-art smart home integration. Experience the pinnacle of luxury living.",
    image: "https://picsum.photos/seed/villa1/1000/800",
  },
  {
    id: "the-pinnacle",
    title: "The Pinnacle Penthouse",
    description: "Perched above the city skyline, this exclusive penthouse offers unmatched elegance with floor-to-ceiling windows, private elevator access, and a rooftop terrace.",
    image: "https://picsum.photos/seed/penthouse1/1000/800",
  },
  {
    id: "serenity-estate",
    title: "Serenity Estate",
    description: "Nestled in a private enclave, this sprawling estate combines classic architecture with modern amenities, featuring lush gardens, a tennis court, and a guest house.",
    image: "https://picsum.photos/seed/estate1/1000/800",
  }
];

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="properties" className="py-24 md:py-40 px-6 md:px-16 bg-[#0a0a0a] text-white">
      <div className="flex flex-col items-center text-center mb-24">
        <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10">
          <div className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full" />
          <span className="font-display text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)] font-light">Exclusive Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-6">
          Exceptional Properties
        </h2>
        <p className="text-white/60 max-w-2xl text-base md:text-lg font-light">
          Our mission is to drive progress and enhance the lives of our clients by delivering superior real estate experiences that exceed expectations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
        {properties.map((property, index) => {
          const isEven = index % 2 === 0;
          const isHovered = hoveredIndex === index && !isMobile;

          return (
            <motion.div 
              key={property.id} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ 
                y: isHovered ? -10 : 0, 
                boxShadow: isHovered ? "0 20px 50px rgba(212,175,55,0.15)" : (isMobile ? "0 10px 30px rgba(0,0,0,0.3)" : "0 0 0 rgba(212,175,55,0)"),
                borderColor: isHovered ? "rgba(212,175,55,0.4)" : (isMobile ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)")
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-[#141414] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border relative cursor-default`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[260px] md:h-auto relative overflow-hidden">
                <motion.img 
                  src={property.image} 
                  alt={property.title} 
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {isMobile && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
                )}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center">
                <div className="mb-4 md:mb-6">
                  <span className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-[var(--color-gold)] font-semibold">
                    PROPERTY - 0{index + 1}
                  </span>
                  <div className="w-8 h-[1px] bg-[var(--color-gold)] mt-2" />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-serif font-light mb-4 md:mb-6 tracking-tight">
                  {property.title}
                </h3>
                
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 md:mb-10 font-light">
                  {property.description}
                </p>
                
                <Link to={`/property/${property.id}`} className="self-start">
                  <div className="p-[1px] bg-gradient-gold rounded-full inline-block group/btn cursor-pointer">
                    <button className="bg-[var(--color-gold)] text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-mono text-[9px] md:text-xs tracking-widest uppercase flex items-center gap-3 group-hover/btn:bg-black group-hover/btn:text-[var(--color-gold)] transition-colors duration-300">
                      View More
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </button>
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
