import React, { useRef } from 'react';

const AffinityCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: "01",
      title: "Quantum Lab Interface",
      category: "UI/UX DESIGN",
      color: "bg-[#0a192f]", // Dark Navy
      img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "02",
      title: "Studio Architrave",
      category: "BRANDING",
      color: "bg-[#1c1c1c]", // Graphite
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    }
    , {
      id: "03",
      title: "Studio Architrave",
      category: "BRANDING",
      color: "bg-[#1c1c1c]", // Graphite
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    },
     {
      id: "04",
      title: "Studio Architrave",
      category: "BRANDING",
      color: "bg-[#1c1c1c]", // Graphite
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] py-20 px-4 md:px-12">
      {/* Navigation Header */}
      <div className="flex justify-between items-center max-w-7xl mx-auto mb-10">
        <h2 className="text-white font-serif text-3xl italic">Work.</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
            ←
          </button>
          <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
            →
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10"
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`flex-none w-[90vw] md:w-[750px] aspect-[16/9] md:aspect-[21/12] rounded-[40px] snap-center overflow-hidden relative group cursor-pointer ${project.color}`}
          >
            {/* Background Image with Zoom Effect */}
            <img 
              src={project.img} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="px-4 py-1 rounded-full border border-white/20 text-[10px] tracking-widest text-white uppercase backdrop-blur-md">
                  {project.category}
                </span>
                <span className="text-white/30 font-mono text-2xl">{project.id}</span>
              </div>

              <div className="max-w-md">
                <h3 className="text-white text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-white group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium border-b border-white/40 pb-1">View Project</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffinityCarousel;