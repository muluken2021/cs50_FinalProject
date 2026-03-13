import React from 'react';
import { Apple, PlayCircle, TrendingUp, Users, Search, MoreHorizontal } from 'lucide-react';

const GroceryHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden px-6 py-12 lg:py-20 font-sans">
      
      {/* 1. Header Badges */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6 relative z-20">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 shadow-2xl">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-tr from-gray-600 to-gray-400" />
            ))}
          </div>
          <p className="text-sm font-medium text-gray-300">Trusted by 21,000+ people</p>
        </div>

        {/* 2. Main Headlines */}
        <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
          Manage Your Daily Grocery <br /> 
          <span className="text-gray-400">Tasks with Ease</span>
        </h1>
        
        <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
          Grocery shopping doesn't have to be a hassle. With our simple task manager, you can plan, 
          organize, and tick off your grocery list without stress.
        </p>

        {/* 3. CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="flex items-center bg-white text-black px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all transform hover:-translate-y-1">
            <Apple className="mr-2 h-6 w-6 fill-current" />
            <div className="text-left leading-tight">
              <p className="text-[10px] uppercase font-bold">Download on the</p>
              <p className="text-lg font-bold">App Store</p>
            </div>
          </button>
          <button className="flex items-center bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-2xl hover:bg-zinc-800 transition-all transform hover:-translate-y-1">
            <PlayCircle className="mr-2 h-6 w-6 fill-current" />
            <div className="text-left leading-tight">
              <p className="text-[10px] uppercase font-bold">Download on the</p>
              <p className="text-lg font-bold">Google Play</p>
            </div>
          </button>
        </div>
      </div>

      {/* 4. Visual Elements & Mockup Area */}
      <div className="relative mt-24 max-w-6xl mx-auto h-[600px] flex justify-center">
        
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating Element: Salaries (Left) */}
        <div className="absolute left-4 top-10 hidden lg:block bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl -rotate-6 animate-float">
          <p className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-widest">$ Total Salaries</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-white">$517k</span>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-lg font-bold">+20%</span>
          </div>
        </div>

        {/* Central Phone Mockup */}
        <div className="relative z-10 w-72 h-[550px] bg-zinc-800 rounded-[3.5rem] border-[8px] border-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden outline outline-1 outline-white/10">
           {/* Simple UI Mockup Placeholder */}
           <div className="w-full h-full bg-[#121212] p-4 flex flex-col gap-4">
              <div className="flex justify-between items-center px-2 pt-2">
                <div className="w-10 h-10 rounded-full bg-zinc-800" />
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center"><Search size={16}/></div>
              </div>
              <div className="h-32 w-full bg-zinc-800/50 rounded-2xl border border-white/5" />
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map(i => <div key={i} className="aspect-square bg-zinc-800 rounded-xl" />)}
              </div>
              <div className="mt-auto h-20 w-full bg-zinc-800/50 rounded-2xl" />
           </div>
        </div>

        {/* Floating Element: Percentage (Top Right) */}
        <div className="absolute right-4 top-20 hidden lg:flex items-center gap-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-8 py-5 rounded-full shadow-2xl rotate-12 animate-float-delayed">
          <div className="bg-indigo-600 p-3 rounded-full text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            <Users size={24} />
          </div>
          <span className="text-4xl font-bold text-white">350.49%</span>
        </div>

        {/* Floating Element: Goal Card (Bottom Right) */}
        <div className="absolute right-0 bottom-10 hidden lg:block bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl max-w-[300px]">
           <div className="h-1.5 w-12 bg-indigo-500 rounded-full mb-4" />
           <h4 className="text-2xl font-bold mb-3 text-white">Goal-Based Savings</h4>
           <p className="text-sm text-gray-400 leading-relaxed">
             Empowering you to take charge of your financial future with intuitive tools and personalized insights.
           </p>
        </div>
      </div>
    </section>
  );
};

export default GroceryHero;