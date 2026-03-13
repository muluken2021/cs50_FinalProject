import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OverlapScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.panel');

    panels.forEach((panel, i) => {
      // Create the overlap pinning
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });

      // Add a scale-down effect to the content inside the card 
      // as the NEXT card comes up to cover it.
      if (i < panels.length - 1) {
        gsap.to(panel.querySelector('.panel-content'), {
          scale: 0.9,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: panels[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050505] pb-[100vh]">
      
      {/* SECTION 1 */}
      <section className="panel h-screen w-full flex items-center justify-center">
        <div className="panel-content w-full max-w-7xl h-[80vh] mx-auto bg-[#111] rounded-[48px] border border-white/5 flex items-center justify-center p-12 shadow-2xl">
          <div className="text-center">
            <h2 className="text-white text-7xl font-black tracking-tighter">THE VISION.</h2>
            <p className="text-gray-500 mt-4 text-xl uppercase tracking-[0.2em]">Scroll to reveal</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="panel h-screen w-full flex items-center justify-center">
        <div className="panel-content w-full max-w-7xl h-[80vh] mx-auto bg-[#1a1a1a] rounded-[48px] border border-white/10 flex items-center justify-center p-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 gap-12 items-center">
             <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=800" className="w-full h-full object-cover" alt="Work" />
             </div>
             <div className="space-y-6">
                <h3 className="text-white text-5xl font-bold">Refined Assets.</h3>
                <p className="text-gray-400 text-lg">We build cinematic 3D assets designed to give your brand a premium feel.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE FEATURE CARD */}
      <section className="panel h-screen w-full flex items-center justify-center">
        <div className="panel-content w-full max-w-7xl h-[80vh] mx-auto bg-[#E2FF00] rounded-[48px] flex flex-col items-center justify-center p-12 shadow-[0_-30px_60px_rgba(0,0,0,0.6)]">
          <h2 className="text-black text-[8vw] font-black italic tracking-tighter leading-none">3D ANIMATION</h2>
          <p className="text-black/60 text-xl font-bold mt-4 uppercase">High-End Motion Graphics</p>
          <button className="mt-10 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
            Start Creating
          </button>
        </div>
      </section>

      {/* SECTION 4: CONTACT CARD */}
      <section className="panel h-screen w-full flex items-center justify-center">
        <div className="panel-content w-full max-w-7xl h-[80vh] mx-auto bg-white rounded-[48px] flex items-center justify-center p-12 shadow-[0_-30px_60px_rgba(0,0,0,0.7)]">
          <div className="text-center">
            <h2 className="text-black text-6xl font-black mb-8">Ready to Refract?</h2>
            <div className="flex gap-4 justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">FB</div>
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">IG</div>
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">TW</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OverlapScroll;