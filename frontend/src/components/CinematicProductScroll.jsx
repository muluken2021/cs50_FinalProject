import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Shield, Zap, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CinematicProductScroll = () => {
  const mainContainer = useRef(null);
  const productRef = useRef(null);
  const landingZoneRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // THE ANIMATION: 
      // We animate the product from its start position to its "Landing Zone"
      // based on the scroll progress of the entire page.
      gsap.to(productRef.current, {
        // Move to the exact position of the Landing Zone div
        x: () => {
          const zone = landingZoneRef.current.getBoundingClientRect();
          const product = productRef.current.getBoundingClientRect();
          return zone.left - product.left + (zone.width / 2) - (product.width / 2);
        },
        y: () => {
          // Calculate the vertical distance between sections
          return window.innerHeight * 1.2; 
        },
        rotationZ: 25,
        rotationY: 180,
        scale: 0.7,
        ease: "none", // Keeps movement perfectly synced with the scroll wheel
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // Lower scrub for more immediate, "non-hidden" response
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainContainer} className="relative bg-[#0f0f0f] text-white">
      
      {/* THE PRODUCT - Absolute, not Fixed */}
      {/* This ensures it moves WITH the page but at its own calculated speed */}
      <div 
        ref={productRef}
        className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[450px] pointer-events-none will-change-transform"
      >
        <img 
          src="https://purepng.com/public/uploads/large/purepng.com-spritespritesoft-drinkpetcan-1411529831459czqyi.png" 
          alt="Product" 
          className="w-full h-auto drop-shadow-[0_50px_50px_rgba(255,255,255,0.1)]"
        />
      </div>

      {/* SECTION 1: HERO */}
      <section className="h-screen flex items-center justify-center relative border-b border-white/5">
        <div className="text-center z-10 max-w-4xl px-6">
          <h1 className="text-[10vw] font-black italic tracking-tighter leading-none mb-6">
            VELOCITY
          </h1>
          <p className="text-gray-400 text-xl font-medium tracking-wide uppercase">
            Designed for the Speed of Light
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
          <p className="text-xs font-bold tracking-[0.3em] uppercase">Scroll to move</p>
        </div>
      </section>

      {/* SPACER SECTION - Ensures the product has "travel distance" while scrolling */}
      <section className="h-[50vh] flex items-center justify-center">
         <h2 className="text-white/5 text-[15vw] font-bold select-none">AERODYNAMIC</h2>
      </section>

      {/* SECTION 2: SHOWCASE / LANDING */}
      <section className="min-h-screen flex items-center py-32 px-10 bg-white text-black rounded-t-[60px]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* THE LANDING ZONE - The product will fly into this specific spot */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div 
              ref={landingZoneRef}
              className="w-[400px] h-[400px] rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center"
            >
              <div className="text-gray-300 text-sm font-bold uppercase tracking-widest">Product Dock</div>
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-bold rounded-full">
              <Zap size={14} fill="currentColor" /> NEW RELEASE
            </div>
            <h2 className="text-6xl font-black tracking-tight">Technical Precision.</h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Every curve, every material, and every stitch is engineered to provide a 
              seamless transition from movement to static comfort.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-gray-100 rounded-3xl hover:border-black transition-colors">
                <Shield className="mb-3" />
                <h4 className="font-bold">Max Protection</h4>
                <p className="text-sm text-gray-400">Reinforced carbon fiber chassis.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-3xl hover:border-black transition-colors">
                <Star className="mb-3" />
                <h4 className="font-bold">5-Star Rated</h4>
                <p className="text-sm text-gray-400">Chosen by 50,000+ athletes.</p>
              </div>
            </div>

            <button className="w-full py-5 bg-black text-white rounded-2xl font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
              Get Yours Now <ShoppingBag size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER SPACER */}
      <section className="h-[30vh] bg-white"></section>
    </div>
  );
};

export default CinematicProductScroll;