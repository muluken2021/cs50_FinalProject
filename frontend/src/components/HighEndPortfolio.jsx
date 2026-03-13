import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const HighEndPortfolio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    { id: 1, title: 'Project One', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800' },
    { id: 2, title: 'Project Two', img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800' },
    { id: 3, title: 'Project Three', img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800' },
    { id: 4, title: 'Project Four', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800' },
  ];

  useEffect(() => {
    // 1. Initial State: Set cards to be invisible and slightly lower
    gsap.set(cardsRef.current, { 
      opacity: 0, 
      y: 100,
      rotationX: -15, // Slight 3D tilt
      transformOrigin: "top center"
    });

    // 2. The Animation
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.2,
      ease: "power4.out", // A smooth, professional deceleration
      stagger: 0.2, // This creates the "one after another" effect
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Starts when the top of the section hits 80% of the viewport
        toggleActions: "play none none none", // Plays once and stays
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with individual text reveal */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight overflow-hidden">
            <span className="inline-block animate-slide-up">Unsere Arbeiten</span>
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => cardsRef.current[index] = el} // Assign each card to the ref array
              className="group relative cursor-pointer rounded-[24px] overflow-hidden bg-gray-100 aspect-[4/3] shadow-lg shadow-black/5"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighEndPortfolio;