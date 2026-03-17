import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Building2, Layout, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '#about', icon: Info },
  { name: 'Properties', path: '#properties', icon: Building2 },
  { name: 'Projects', path: '#projects', icon: Layout },
  { name: 'Testimonials', path: '#testimonials', icon: MessageSquare },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScrollEnd = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if we are at the bottom (with a 20px buffer)
      if (windowHeight + scrollTop >= documentHeight - 20) {
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScrollEnd);
    return () => window.removeEventListener('scroll', handleScrollEnd);
  }, []);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/${id}`;
      return;
    }
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants = {
    initial: { opacity: 0, scale: 0.95, y: 30, x: '-50%' },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      x: '-50%',
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20, 
      x: '-50%',
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 }
  };

  return (
    <>
      {/* Thinner Trigger Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center bg-black/40 border border-white/10 backdrop-blur-xl text-white px-4 py-2 w-[240px] justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full transition-all duration-300 hover:border-[var(--color-gold)]/30">
        <div className="w-5 h-5 flex items-center justify-center border border-[var(--color-gold)]/30 rounded-full">
          <div className="w-1.5 h-1.5 bg-gradient-gold rounded-full" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/70">Menu</span>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--color-gold)] hover:scale-110 transition-transform p-1.5 rounded-full bg-white/5 hover:bg-white/10"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Liquid Glass Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[50]"
            />

            {/* Menu Content */}
            <motion.div 
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed bottom-20 left-1/2 z-[55] w-[92%] max-w-[400px] max-h-[80vh] overflow-hidden rounded-[2.5rem] border border-white/20 shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
            >
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[40px]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[var(--color-gold)]/5" />
              
              {/* Animated "Liquid" Blobs */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--color-gold)]/10 blur-[80px] rounded-full pointer-events-none"
              />
              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  x: [0, -30, 0],
                  y: [0, 30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"
              />

              <div className="relative p-6 md:p-8 flex flex-col gap-2 overflow-y-auto max-h-[80vh] scrollbar-hide">
                <motion.div variants={itemVariants} className="mb-4 flex justify-between items-center">
                  <span className="font-serif italic text-xl text-white/90">Navigation</span>
                  <div className="h-[1px] flex-grow mx-4 bg-white/10" />
                </motion.div>

                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={itemVariants}
                  >
                    <button
                      onClick={() => link.path.startsWith('#') ? handleScroll(link.path) : setIsOpen(false)}
                      className="w-full group flex items-center justify-between p-3 md:p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors">
                          <link.icon className="w-5 h-5 text-white/40 group-hover:text-[var(--color-gold)] transition-colors" />
                        </div>
                        <span className="font-mono text-xs tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
                          {link.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[var(--color-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </button>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="mt-4 pt-6 border-t border-white/10 flex justify-between items-center">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">© 2026 Haloora</p>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
