import React, { useRef, useState, useEffect } from 'react';

const FocusCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const items = [
    { id: 1, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { id: 2, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
    { id: 3, img: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800" },
    { id: 4, img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" },
    { id: 5, img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800" },
  ];

  // Precision Scroll Detection Logic
const handleScroll = () => {
  const container = scrollRef.current;
  if (!container) return;

  const cards = Array.from(container.children); // FIXED
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  let closestIndex = 0;
  let minDistance = Infinity;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;

    const distance = Math.abs(containerCenter - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = index;
    }
  });

  setActiveIndex(closestIndex);
};

  // 3D Hover/Tilt Effect Logic
  const handleMouseMove = (e, isActive) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div className="bg-[#050505] min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 font-sans">
      {/* Required CSS for hiding scrollbars and smooth snapping */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .perspective-container { perspective: 1200px; }
      `}</style>

      {/* Header */}
      <div className="mb-16 flex flex-col items-center">
        <div className="opacity-80 uppercase tracking-[0.4em] text-white text-[10px] font-bold">
          Affinity <span className="opacity-40">by</span> Canva
        </div>
        <div className="w-12 h-px bg-white/20 mt-4" />
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-6 overflow-x-auto px-[30vw] md:px-[40vw] no-scrollbar snap-x snap-mandatory h-[700px] w-full"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isNeighbor = Math.abs(index - activeIndex) === 1;

          return (
            <div 
              key={item.id}
              onMouseMove={(e) => handleMouseMove(e, isActive)}
              onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
              className={`
                flex-none snap-center transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] 
                relative overflow-hidden group cursor-pointer
                ${isActive ? 'w-[320px] md:w-[480px] h-[450px] md:h-[650px] z-20 opacity-100 rounded-[40px]' : ''}
                ${isNeighbor ? 'w-[200px] md:w-[320px] h-[300px] md:h-[480px] z-10 opacity-40 blur-[1px] rounded-[30px]' : ''}
                ${!isActive && !isNeighbor ? 'w-[150px] md:w-[200px] h-[200px] md:h-[300px] z-0 opacity-10 blur-[4px] rounded-[20px]' : ''}
              `}
              style={{
                transform: isActive 
                  ? `rotateY(${mousePos.x * 20}deg) rotateX(${mousePos.y * -20}deg) scale(1.02)` 
                  : 'scale(1)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Gloss Layer */}
              <div className={`absolute inset-0 z-10 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              
              <img 
                src={item.img} 
                alt="" 
                className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? 'scale-105 group-hover:scale-110' : 'scale-100 grayscale'}`}
              />

              {/* Text Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-10 flex flex-col justify-end transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h3 className="text-white text-3xl font-serif font-bold italic">Project {item.id}</h3>
                <p className="text-white/60 text-xs mt-2 font-mono tracking-widest uppercase">Explore Case Study</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Bar */}
      <div className="mt-12 flex gap-3">
        {items.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-10 bg-white' : 'w-2 bg-white/20'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default FocusCarousel;