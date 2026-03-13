import React from 'react';
import { ChevronDown } from 'lucide-react';

const PortfolioGrid = () => {
  const projects = [
    { id: 1, title: 'Mobile App Mockup', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800' },
    { id: 2, title: 'Iphone Black', img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800' },
    { id: 3, title: 'Business Cards', img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800' },
    { id: 4, title: 'Street Banner', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800' },
    { id: 5, title: 'Logo Signage', img: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=800' },
    { id: 6, title: 'Apparel Design', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800' },
    { id: 7, title: 'Dark Stationery', img: 'https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=800' },
    { id: 8, title: 'Exhibition Stand', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800' },
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Weitere Arbeiten
          </h2>
          <div className="h-6 w-[1px] bg-gray-200 hidden md:block"></div>
          <p className="text-gray-400 font-medium">
            Screenshots und Mockups aus aktuellen Projekten.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative cursor-pointer overflow-hidden rounded-[24px] bg-gray-100 aspect-[4/3]"
            >
              {/* Image with hover zoom */}
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 px-8 py-3 bg-gray-50 border border-gray-100 rounded-full font-bold text-gray-800 hover:bg-gray-100 transition-all active:scale-95 shadow-sm">
            Mehr anzeigen <ChevronDown size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PortfolioGrid;