import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, Menu } from 'lucide-react';

const CinematicHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        {/* Using the YouTube video background */}
        <iframe 
          className="w-full h-[120%] -top-[10%] absolute object-cover opacity-60 pointer-events-none"
          src="https://www.youtube.com/embed/kb1dXcf3QQs?autoplay=1&mute=1&controls=0&loop=1&playlist=kb1dXcf3QQs&rel=0&showinfo=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>
      
      {/* 2. Navigation Bar */}
      <nav className="relative z-50 flex items-center justify-between px-10 py-8 text-white">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black tracking-tighter">imk</span>
          <span className="text-[10px] uppercase tracking-widest opacity-60">avocats • advocates</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-sm font-semibold tracking-wide">
          <button className="flex items-center gap-1 group">
            Areas of practice <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button className="hover:opacity-70 transition-opacity">Team</button>
          <button className="hover:opacity-70 transition-opacity">Firm</button>
        </div>

        <div className="flex items-center gap-8 text-sm font-bold">
          <button className="hover:text-cyan-400 transition-colors">FR</button>
          <button className="flex items-center gap-2 hover:opacity-70">
            <Search size={18} /> Search
          </button>
          <button className="flex items-center gap-2 group">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" /> Menu
          </button>
        </div>
      </nav>

      {/* 3. Hero Content */}
      <main className="relative z-10 h-[calc(100vh-100px)] flex flex-col justify-end px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Side: Short Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-3 text-white/80 text-lg leading-relaxed border-l border-white/20 pl-6"
          >
            Behind the letters IMK you will find a boutique law firm that specializes in litigation and dispute resolution.
          </motion.div>

          {/* Right Side: Main Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-9"
          >
            <h1 className="text-white text-[7vw] lg:text-[120px] font-medium leading-[0.9] tracking-tight">
              Get us thinking <br /> 
              <span className="flex items-center">
                for you<span className="w-3 h-3 bg-cyan-400 rounded-full ml-4 mt-8" />
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 right-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white"
        >
          <ChevronDown size={20} />
        </motion.div>
      </main>
    </div>
  );
};

export default CinematicHero;