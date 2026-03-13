import React from 'react';
import { ChevronDown } from 'lucide-react';

const LuxuryCarHero = () => {
  return (
    <div className="relative min-h-screen bg-[#05070a] text-white overflow-hidden font-sans">
      
      {/* 1. Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-40 z-10">
        
        {/* Top Header Text */}
        <div className="text-center mb-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
            Drive Luxury<br />
            <span className="text-gray-400">Onwords</span>
          </h1>
        </div>

        <div className="relative flex flex-col items-center">
          
          {/* 2. Left Floating Widget: Power Reserve */}
          <div className="absolute left-0 top-10 hidden lg:block bg-zinc-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-48 shadow-2xl">
            <p className="text-gray-400 text-xs font-semibold mb-4 uppercase tracking-widest">Power Reserve</p>
            <div className="relative flex items-center justify-center">
              {/* Simple SVG Gauge */}
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-zinc-800" />
                <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="4" fill="transparent" 
                        strokeDasharray="314" strokeDashoffset="100" className="text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
                <span className="text-2xl font-bold">180</span>
                <span className="text-[10px] text-gray-500">Km/h</span>
              </div>
            </div>
            <p className="mt-4 text-[10px] font-bold text-gray-300 tracking-[0.2em] text-center">UNINTERRUPTED</p>
          </div>

          {/* 3. Right Floating Text */}
          <div className="absolute right-0 top-20 hidden lg:block max-w-[240px]">
            <p className="text-gray-400 text-sm leading-relaxed text-right">
              Elevate your fashion journey with Hilly Loom, where luxury meets personalized style and seamless shopping.
            </p>
          </div>

          {/* 4. Central Car Image & Glow */}
          <div className="relative mt-12 w-full max-w-4xl group">
            {/* The Blue Glow behind the car */}
            <div className="absolute inset-0 bg-blue-600/30 blur-[120px] rounded-full scale-75 group-hover:bg-blue-500/40 transition-colors duration-700" />
            
            <img 
              src="https://purepng.com/public/uploads/large/purepng.com-jaguar-f-type-luxury-sports-blue-carcarvehicletransportjaguarsports-carluxury-car-961524650478iiwe2.png" 
              alt="Luxury Car" 
              className="relative z-10 w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* 5. The Glassmorphism Search Bar */}
          <div className="absolute bottom-[-40px] z-20 flex flex-wrap items-center bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl w-full max-w-3xl">
            <div className="flex-1 grid grid-cols-3 gap-4 px-6">
              <div className="flex items-center justify-between text-sm cursor-pointer hover:text-lime-400 transition-colors">
                <span className="text-gray-400">Brand</span> <ChevronDown size={14} />
              </div>
              <div className="flex items-center justify-between text-sm cursor-pointer hover:text-lime-400 transition-colors border-x border-white/5 px-4">
                <span className="text-gray-400">Model</span> <ChevronDown size={14} />
              </div>
              <div className="flex items-center justify-between text-sm cursor-pointer hover:text-lime-400 transition-colors">
                <span className="text-gray-400">Type</span> <ChevronDown size={14} />
              </div>
            </div>
            <button className="bg-[#a3e635] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#bef264] transition-all transform active:scale-95">
              Get Start
              </button>
            </div>
          </div>
        </div>
      

      {/* 6. Bottom Logo Bar */}
      <div className="absolute bottom-0 w-full bg-zinc-950/80 backdrop-blur-md border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Replace with actual brand icons/SVGs */}
          {['Mercedes', 'Tesla', 'Mitsubishi', 'BMW', 'Cupra', 'Rolls Royce', 'Toyota', 'VW'].map((brand) => (
            <div key={brand} className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center text-[8px] font-bold">
              {brand[0]}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LuxuryCarHero;