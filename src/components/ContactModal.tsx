import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ContactModal({ isOpen, onClose, title = "Inquire About Property" }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
          >
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[var(--color-gold)]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="w-10 h-10 text-[var(--color-gold)]" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">Message Sent</h3>
                  <p className="text-white/60">Thank you for your interest. Our team will contact you shortly to arrange your private viewing.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-1.5 bg-gradient-gold rotate-45" />
                    <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-gradient-gold">Contact Us</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 tracking-tight">{title}</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 ml-4">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors resize-none"
                        placeholder="I am interested in this property..."
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-gold text-black font-mono text-xs tracking-[0.2em] uppercase py-5 rounded-full hover:opacity-90 transition-opacity active:scale-[0.98]"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
