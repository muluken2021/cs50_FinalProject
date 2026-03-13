import React from 'react';

// Icon data with positioning
// Percentages are relative to the center of the container
const icons = [
  { id: 1, char: "⚡", top: "15%", left: "75%", color: "bg-yellow-50" },
  { id: 2, char: "⚛️", top: "70%", left: "20%", color: "bg-blue-50" },
  { id: 3, char: "🔥", top: "20%", left: "25%", color: "bg-orange-50" },
  { id: 4, char: "M", top: "75%", left: "75%", color: "bg-indigo-50" },
  { id: 5, char: "S", top: "40%", left: "85%", color: "bg-red-50" },
  { id: 6, char: "G", top: "40%", left: "10%", color: "bg-emerald-50" },
];

export default function IntegrationSection() {
  return (
    <section className="bg-white min-h-[600px] flex flex-col md:flex-row items-center px-12 py-20 overflow-hidden">
      
      {/* Left Text Content */}
      <div className="md:w-5/12 space-y-6">
        <p className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase">Integrations</p>
        <h2 className="text-5xl font-extrabold text-slate-900 leading-[1.1]">
          Robust integration <br /> 
          <span className="text-gray-300">framework</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
          A comprehensive suite of integrations offers diverse functionalities.
        </p>
        <div className="text-gray-400 italic text-xs space-y-1 pt-4">
          <p>* Only includes authentication methods.</p>
          <p>* Database not included.</p>
        </div>
      </div>

      {/* Right Static Graphic */}
      <div className="md:w-7/12 relative flex items-center justify-center h-[500px] w-full">
        
        {/* Background Decorative Diagonals */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[150%] h-[1px] bg-slate-900 rotate-45 absolute" />
          <div className="w-[150%] h-[1px] bg-slate-900 -rotate-45 absolute" />
        </div>

        {/* Orbital Circles (Visual only) */}
        <div className="absolute border border-dashed border-slate-300 rounded-full w-[280px] h-[280px]" />
        <div className="absolute border border-dashed border-slate-300 rounded-full w-[480px] h-[480px]" />

        {/* Central Logo */}
        <div className="relative z-10 bg-white p-5 rounded-3xl shadow-2xl border border-white/50">
          <div className="w-14 h-14 bg-[#00A36C] rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-inner">
            M
          </div>
        </div>

        {/* Manually Placed Icons */}
        {icons.map((icon) => (
          <div
            key={icon.id}
            className={`absolute flex items-center justify-center w-12 h-12 rounded-full shadow-lg border border-white bg-white z-20 text-lg`}
            style={{ top: icon.top, left: icon.left }}
          >
            {icon.char}
          </div>
        ))}

        {/* Small "nodes" on the lines (the tiny dots in your image) */}
        <div className="absolute top-[30%] left-[60%] w-2 h-2 bg-purple-300 rounded-full opacity-60" />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 bg-orange-300 rounded-full opacity-60" />
      </div>

    </section>
  );
}