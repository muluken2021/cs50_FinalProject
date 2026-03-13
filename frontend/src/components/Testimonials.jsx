import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const reviews = [
    { id: 1, name: "Jemaine Kunziger", text: "Super freundlich, hat unsere Webseite im am 13. Mai angefangen und fertig gestellt am 17. Mai...", date: "vor 6 Monaten" },
    { id: 2, name: "Jan. B", text: "Wibify haben wir 2024 entdeckt und sind sehr zufrieden. Ein junger, engagierter Entwickler...", date: "vor 7 Monaten" },
    { id: 3, name: "Car Company V.Binkay", text: "Unsere Website und das Buchungssystem wurden von Wibify entwickelt. Wir sind mehr als zufrieden...", date: "vor 7 Monaten" },
    { id: 4, name: "Max Mustermann", text: "Hervorragende Arbeit! Die Kommunikation war reibungslos und das Design ist Weltklasse.", date: "vor 1 Monat" },
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto relative group">
        
        {/* Navigation Buttons - Hidden on mobile, shown on hover on desktop */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-xl hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-xl hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
        >
          <ChevronRight size={24} />
        </button>

        {/* The Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="min-w-[100%] md:min-w-[45%] lg:min-w-[32%] snap-start bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFC107" className="text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed font-medium mb-8">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mb-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 leading-none mb-1">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-gray-400 font-medium">
                  Auf Google ansehen <ExternalLink size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Indicator Dots */}
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {reviews.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-200" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;