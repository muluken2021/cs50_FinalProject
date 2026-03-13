import React, { useState } from 'react';
import { MousePointer2 } from 'lucide-react';

const MockupFeature = () => {
  const [selectedMockup, setSelectedMockup] = useState(2); // Index of the active mockup

  const mockups = [
    { id: 1, url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=200' },
    { id: 2, url: 'https://images.unsplash.com/photo-1556656793-062ff98782ee?q=80&w=200' },
    { id: 3, url: 'https://images.unsplash.com/photo-1523206489230-c012c745c89f?q=80&w=200' },
    { id: 4, url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=200' },
    { id: 5, url: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=200' },
  ];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            A Mockup That Matches Your Vision
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Our mockup tool gives you the flexibility to repurpose your designs for a variety of projects. 
            At Kittl, you're not limited to creating just one design—you can save your mockup to your 
            download album and easily integrate it into other projects.
          </p>
          <button className="bg-black text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-gray-800 transition-all active:scale-95">
            Start designing now
          </button>
        </div>

        {/* Right Interaction Visual */}
        <div className="flex-1 relative w-full max-w-[540px]">
          {/* Main Mockup Canvas */}
          <div className="relative bg-[#222] aspect-square rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
            <div className="relative w-full h-full rotate-[-15deg] group">
              {/* Phone Image */}
              <img 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800" 
                alt="Phone Mockup" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              
              {/* Overlay Graphic (The Blue Design) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[65%] h-[75%] bg-[#0258FE] border-2 border-cyan-400 relative">
                  {/* Transform Handles */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-cyan-400" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-cyan-400" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-cyan-400" />
                  
                  {/* Simulated Design Text */}
                  <div className="p-4 text-white font-black text-xs uppercase leading-none">
                    Summer Collection 2026
                  </div>
                  
                  {/* The Cursor Pointer */}
                  <div className="absolute -bottom-6 -right-6 text-black drop-shadow-md">
                    <MousePointer2 fill="currentColor" size={32} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Color Picker Badge */}
            <div className="absolute top-10 left-10 bg-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="w-8 h-8 bg-[#0258FE] rounded-md" />
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Mockup color</p>
                <p className="text-xs font-mono font-bold">0258FE</p>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Selector */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white flex gap-2">
            {mockups.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setSelectedMockup(idx)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedMockup === idx ? 'border-cyan-500 scale-110' : 'border-transparent opacity-60'
                }`}
              >
                <img src={m.url} alt="option" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MockupFeature;