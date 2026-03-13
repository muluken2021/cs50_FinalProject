import React from 'react';

// Data structure for the three plans
const plans = [
  {
    title: "Standard",
    price: "69",
    color: "bg-teal-300",
    tech: [<span className="text-yellow-600">JS <span className="text-gray-400 font-normal">(only)</span></span>],
    isFeatured: false,
    topFeatures: ["One end products", "12 months updates", "6 months of support", "One-time payments"],
    bottomFeatures: [
      { text: "One-time payments", active: true },
      { text: "Lifetime perpetual license.", active: true },
      { text: "JavaScript version", active: true },
      { text: "TypeScript version", active: false },
      { text: "Design resources (Figma)", active: false },
      { text: "Commercial applications", active: false },
    ]
  },
  {
    title: "Plus",
    price: "129",
    color: "bg-purple-400",
    tech: [<span className="text-yellow-600">JS</span>, <span className="text-blue-600">TS</span>, "🎨"],
    isFeatured: true, // This one gets the dark button
    topFeatures: ["One end products", "12 months updates", "6 months of support", "One-time payments"],
    bottomFeatures: [
      { text: "One-time payments", active: true },
      { text: "Lifetime perpetual license.", active: true },
      { text: "JavaScript version", active: true },
      { text: "TypeScript version", active: true },
      { text: "Design resources (Figma)", active: true },
      { text: "Commercial applications", active: false },
    ]
  },
  {
    title: "Extended",
    price: "599",
    color: "bg-orange-300",
    tech: [<span className="text-yellow-600">JS</span>, <span className="text-blue-600">TS</span>, "🎨"],
    isFeatured: false,
    topFeatures: ["One end products", "12 months updates", "6 months of support", "One-time payments"],
    bottomFeatures: [
      { text: "One-time payments", active: true },
      { text: "Lifetime perpetual license.", active: true },
      { text: "JavaScript version", active: true },
      { text: "TypeScript version", active: true },
      { text: "Design resources (Figma)", active: true },
      { text: "Commercial applications", active: true },
    ]
  }
];

const FeatureItem = ({ text, active }) => (
  <li className={`flex items-start text-sm ${active ? 'text-slate-700' : 'text-slate-300 line-through'}`}>
    <span className="mr-3 mt-1">
      {active ? (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <span className="text-xs font-bold px-0.5">✕</span>
      )}
    </span>
    {text}
  </li>
);

export default function PricingSection() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Header Section */}
      <header className=" pt-24 pb-16 px-6 text-center">
        <p className="text-gray-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Plans</p>
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Transparent <span className="text-gray-400 opacity-50 font-medium">pricing</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
          Choose from flexible pricing options designed to fit your business needs and budget with no hidden fees.
        </p>
      </header>

      {/* 2. Pricing Grid Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 relative">
          
          {/* Decorative 'X' Markers on Top Border */}
          <div className="absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10 text-gray-300 bg-white px-1">✕</div>
          <div className="absolute top-0 left-2/3 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10 text-gray-300 bg-white px-1">✕</div>

          {plans.map((plan, idx) => (
            <div key={idx} className="flex flex-col p-10 md:p-14 border-b md:border-b-0 md:border-r border-dashed border-gray-200 last:border-r-0">
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>
                  <div className={`h-1.5 w-9 mt-1.5 rounded-full ${plan.color}`} />
                </div>
                <div className="text-4xl font-black text-slate-900 tracking-tighter">
                  <span className="text-2xl font-bold mr-0.5">$</span>{plan.price}
                </div>
              </div>

              {/* Tech Stack Icons */}
              <div className="flex items-center gap-3 mt-6 mb-10 text-sm font-bold uppercase tracking-wider">
                {plan.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>

              {/* Upper Features */}
              <ul className="space-y-4 mb-8">
                {plan.topFeatures.map((f, i) => <FeatureItem key={i} text={f} active={true} />)}
              </ul>

              {/* Dashed Separator */}
              <div className="border-t border-dashed border-gray-200 w-full mb-8" />

              {/* Lower Features (The checklist) */}
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.bottomFeatures.map((f, i) => (
                  <FeatureItem key={i} text={f.text} active={f.active} />
                ))}
              </ul>

              {/* Action Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-sm ${
                  plan.isFeatured 
                    ? 'bg-[#1e293b] text-white hover:bg-black hover:shadow-lg' 
                    : 'bg-white text-[#1e293b] border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}