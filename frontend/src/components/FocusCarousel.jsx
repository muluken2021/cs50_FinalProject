import React, { useRef, useState, useEffect } from 'react';

const FocusCarousel = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2); // Start with center item

  const items = [
    { id: 1, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { id: 2, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
    { id: 3, img: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800" }, // The "Center" Hero
    { id: 4, img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" },
    { id: 5, img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800" },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;
    
    // Find which item is closest to the center
    const cardWidth = 320 + 32; // width + gap
    const index = Math.round((center - container.offsetWidth / 2) / cardWidth);
    
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Branding Header */}
      <div className="mb-16 opacity-80 uppercase tracking-[0.3em] text-white text-xs font-bold">
        Affinity <span className="opacity-50">by</span> Canva
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-8 overflow-x-auto px-[35vw] no-scrollbar snap-x snap-mandatory h-[700px]"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isNeighbor = Math.abs(index - activeIndex) === 1;

          return (
            <div 
              key={item.id}
              className={`flex-none snap-center transition-all duration-700 ease-out overflow-hidden rounded-xl shadow-2xl
                ${isActive ? 'w-[450px] h-[650px] z-20 opacity-100' : ''}
                ${isNeighbor ? 'w-[320px] h-[480px] z-10 opacity-60' : ''}
                ${!isActive && !isNeighbor ? 'w-[200px] h-[300px] z-0 opacity-30' : ''}
              `}
            >
              <img 
                src={item.img} 
                alt="" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          );
        })}
      </div>

      {/* Subtle interaction tip */}
      <div className="mt-12 text-zinc-600 font-mono text-[10px] tracking-widest uppercase">
        Drag or Scroll to Explore
      </div>
    </div>
  );
};

export default FocusCarousel;