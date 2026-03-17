import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';

const AnimatedWord = ({ children }: { children: string; key?: React.Key }) => {
  const isGold = children.includes("legacy") || children.includes("elegance");
  
  return (
    <motion.span
      className={`inline-block mr-[0.25em] cursor-default transition-colors duration-300 ${isGold ? 'text-gradient-gold' : ''}`}
      variants={{
        hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
        visible: { opacity: 1, filter: "blur(0px)", y: 0 }
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, color: isGold ? undefined : "var(--color-gold)" }}
    >
      {children}
    </motion.span>
  );
};

const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.h2 
      className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-[1.4] italic ${className || ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
      transition={{ staggerChildren: 0.04 }}
    >
      {words.map((word, i) => (
        <AnimatedWord key={i}>{word}</AnimatedWord>
      ))}
    </motion.h2>
  );
};

export default function About() {
  const text1 = "At Haloora, we believe a home is more than a space—it is a statement of legacy, elegance, and refined living. Every residence we create is a seamless blend of architectural brilliance, modern innovation, and enduring craftsmanship.";

  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-16 flex flex-col items-center text-center bg-[var(--color-black)] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-3 mb-12"
      >
        <div className="w-1.5 h-1.5 bg-gradient-gold rotate-45" />
        <span className="font-display text-[10px] md:text-xs tracking-[0.3em] uppercase font-light text-gradient-gold">About Haloora</span>
      </motion.div>
      
      <div className="max-w-4xl mb-16 space-y-8">
        <AnimatedText text={text1} className="text-white" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="p-[1px] bg-gradient-gold rounded-full inline-block group cursor-pointer"
      >
        <button className="bg-[var(--color-black)] text-[var(--color-gold)] px-6 py-4 rounded-full font-mono text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-3 group-hover:bg-transparent group-hover:text-black transition-colors">
          <ArrowDownRight className="w-4 h-4" />
          Who we are
        </button>
      </motion.div>
    </section>
  );
}
