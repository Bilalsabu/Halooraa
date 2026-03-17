import { useState } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  { name: 'Rusty House', tags: ['HALOORA WINDOW', 'HALOORA X VERTICAL (STRUCTURAL GLAZING)', 'HALOORA X SLIDING DOOR'], img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Rosewood Pilates Studio', tags: ['HALOORA X SLIDING DOOR', 'HALOORA GLASS SKYLIGHT / RIDGELIGHT'], img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Beulah Walk', tags: ['HALOORA X VERTICAL (STRUCTURAL GLAZING)', 'HALOORA SLIDING DOOR', 'HALOORA WINDOW'], img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Berkeley Road', tags: ['HALOORA X SLIDING DOOR', 'HALOORA SLIDING DOOR'], img: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-40 px-6 md:px-16 border-t border-white/10 bg-[var(--color-black)]">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-1.5 h-1.5 bg-gradient-gold rotate-45" />
        <span className="font-display text-[10px] md:text-xs tracking-[0.3em] uppercase font-light text-gradient-gold">Featured Projects</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight leading-[1.2] max-w-2xl text-white">
          Each project tells its own story of <span className="italic text-gradient-gold">collaboration</span> and <span className="italic text-gradient-gold">precision</span>.
        </h2>
        <div className="p-[1px] bg-gradient-gold rounded-full inline-block group cursor-pointer shrink-0">
          <button className="bg-[var(--color-black)] text-[var(--color-gold)] px-6 py-4 rounded-full font-mono text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-3 group-hover:bg-transparent group-hover:text-black transition-colors">
            <ArrowDownRight className="w-4 h-4" />
            View projects
          </button>
        </div>
      </div>

      <div className="border-t border-white/10">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative border-b border-white/10 py-8 flex flex-col cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <h3 className={`font-serif text-2xl md:text-3xl font-light transition-all duration-300 w-full md:w-1/3 ${hoveredIndex === idx ? 'text-[var(--color-gold)] translate-x-2' : 'text-white/40'}`}>
                {project.name}
              </h3>
              
              <div className="flex flex-wrap gap-2 w-full md:w-1/2">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className={`border rounded-full px-3 py-1 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${hoveredIndex === idx ? 'text-[var(--color-gold)] border-[var(--color-gold)]' : 'text-white/40 border-white/20'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`hidden md:flex w-8 justify-end transition-colors duration-300 ${hoveredIndex === idx ? 'text-[var(--color-gold)]' : 'text-white/20'}`}>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredIndex === idx ? '-rotate-45' : ''}`} />
              </div>
            </div>

            {/* Mobile Accordion Image Reveal */}
            <div className={`md:hidden grid transition-all duration-500 ease-in-out ${hoveredIndex === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="mt-8 w-full aspect-[16/9] overflow-hidden border border-white/10 group-hover:border-[var(--color-gold)] transition-colors duration-500">
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                </div>
              </div>
            </div>

            {/* Desktop Pop-out Image Reveal on Hover */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: 0, y: "-50%", x: 20 }}
                  animate={{ opacity: 1, scale: 1.1, rotate: -3, y: "-60%", x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 0, y: "-50%", x: 20 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className="hidden md:block absolute right-[5%] top-1/2 w-[400px] lg:w-[500px] aspect-[16/9] pointer-events-none z-50 rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.9)] border border-white/20"
                >
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
