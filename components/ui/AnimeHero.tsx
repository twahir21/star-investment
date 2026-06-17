import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    topText: string;
    title: React.ReactNode; 
    description: string;
}

const AnimatedHero: React.FC<HeroSectionProps> = ({ topText, title, description }) => {
  return (
    <section className="relative py-30 bg-zinc-950 text-white border-b border-zinc-900 overflow-hidden">
      
      {/* 1. Base Dim Dot Grid (Always visible in the background) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* 2. Isolated Moving Orb Container */}
      {/* We move the coordinate tracking into a single 600x600 wrapper so everything stays perfectly concentric */}
      <motion.div
        className="absolute w-[600px] h-[600px] pointer-events-none"
        style={{ top: '-10%', left: '-10%' }} // Starting offset context
        animate={{
          x: ['0vw', '65vw', '15vw', '70vw', '30vw', '0vw'],
          y: ['0vh', '45vh', '15vh', '40vh', '10vh', '0vh'],
        }}
        transition={{
          duration: 25, 
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* The Soft Glow Aura (Perfectly centered) */}
        <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-[120px]" />
        
        {/* The Illuminated Dots (Masked locally to this 600x600 square) */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#fff_2px,transparent_2px)] bg-size-[24px_24px] opacity-90 rounded-full"
          style={{
            maskImage: 'radial-gradient(circle 300px at center, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle 300px at center, black 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* 3. Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-zinc-500 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            {topText}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-6 mb-6">
            {title}
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;