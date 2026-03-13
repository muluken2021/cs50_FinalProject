import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AppleEarbudsHero = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-red-500/30">
      {/* --- Top Hero Section --- */}
      <section className="relative max-w-7xl mx-auto px-8 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10 space-y-8">
          <div className="space-y-2">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-[0.9]">
              Earbuds
            </h1>
            <h2 className="text-7xl md:text-8xl font-bold tracking-tight text-[#b23b3b] leading-[0.9]">
              Apple
            </h2>
          </div>
          
          <p className="max-w-xs text-gray-400 text-sm leading-relaxed">
            Apple Earbuds Deliver Premium Sound, Sleek Design, And Seamless Device Integration.
          </p>

          <div className="flex items-center gap-2">
            <button className="bg-[#d1d5db] text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors">
              Shop Now
            </button>
            <button className="p-3 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Content: Earbuds Images */}
        <div className="relative h-[600px] md:h-[800px] w-full flex items-center justify-center lg:justify-end">
        
        {/* The "Main" Large Earbud (Top Right) */}
       

        {/* The Secondary Staggered Earbud (Middle Left) 
            I've added this back in because the original design uses two to create depth */}
        <img 
            src="https://helios-i.mashable.com/imagery/articles/04CuQaxPerTX75RYIdfXRH5/images-10.fill.size_2000x2000.v1623361661.png" 
            alt="AirPod Bottom" 
            className="absolute bottom-10 left-0 md:left-10 w-[300px] md:w-[450px] lg:w-[500px] object-contain opacity-90 blur-[2px] md:blur-none drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)] animate-float-delayed z-10"
        />

        {/* Slider Pagination Dots - Shifted lower to stay out of the image's way */}
        <div className="absolute bottom-0 right-0 flex gap-2 z-30">
            <div className="w-3 h-3 rounded-full bg-[#b23b3b] shadow-[0_0_10px_rgba(178,59,59,0.5)]" />
            {[1, 2, 3].map((i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer" />
            ))}
        </div>
        </div>
      </section>

      {/* --- Bottom Feature Section --- */}
      <section className="max-w-7xl mx-auto px-8 py-20 border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-medium mb-12">Noise Cancellation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Feature Card with Image */}
          <div className="relative group rounded-3xl overflow-hidden aspect-video bg-zinc-900">
            <img 
              src="/api/placeholder/800/500" 
              alt="Noise Cancellation Feature" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20">
              <ArrowUpRight size={20} />
            </button>
          </div>

          {/* Large Background Text / Logo Area */}
          <div className="relative flex flex-col justify-center">
            {/* Apple Logo SVG Placeholder */}
            <div className="mb-6 opacity-30">
              <div className="w-12 h-14 bg-gray-400 rounded-b-full relative">
                <div className="absolute -top-2 right-0 w-6 h-6 bg-gray-400 rounded-full" />
              </div>
            </div>
            <h3 className="text-6xl md:text-8xl font-bold text-white/10 leading-none select-none">
              Superior Noise<br />Technology
            </h3>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite -3s; }
      `}</style>
    </div>
  );
};

export default AppleEarbudsHero;