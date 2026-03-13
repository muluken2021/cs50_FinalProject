import React from 'react';

const BlogCard = ({ date, title, views, likes, shares, authorImg, mainImg, isLarge }) => (
  <div className={`group cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}>
    <div className="relative h-full flex flex-col">
      {/* Image Container */}
      <div className={`${isLarge ? 'h-full' : 'h-48'} overflow-hidden relative`}>
        <img 
          src={mainImg || "/api/placeholder/800/600"} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Author Floating Badge */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg">
          <img src={authorImg || "/api/placeholder/40/40"} alt="Author" className="w-full h-full object-cover" />
        </div>
        
        {/* Overlay for Large Post */}
        {isLarge && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />}
      </div>

      {/* Content */}
      <div className={`${isLarge ? 'absolute bottom-0 left-0 p-8 text-white' : 'p-6 flex-grow'}`}>
        <p className={`text-xs font-bold mb-3 ${isLarge ? 'text-gray-300' : 'text-gray-400'}`}>{date}</p>
        <h3 className={`font-black tracking-tight leading-tight group-hover:text-emerald-500 transition-colors ${isLarge ? 'text-3xl mb-6' : 'text-lg mb-4 text-slate-900'}`}>
          {title}
        </h3>
        
        {/* Metrics */}
        <div className={`flex items-center gap-4 text-[10px] font-bold ${isLarge ? 'text-gray-300' : 'text-slate-400'}`}>
          <span className="flex items-center gap-1">💬 {views}</span>
          <span className="flex items-center gap-1">👁️ {likes}</span>
          <span className="flex items-center gap-1">🔗 {shares}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function BlogSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-4xl font-black text-slate-900">Blog</h2>
          
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
            
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 cursor-pointer">
              <span className="text-gray-400">Sort By:</span>
              <span>Latest</span>
              <span className="text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <BlogCard 
            isLarge
            date="13 Mar 2026"
            title="The Future of Renewable Energy: Innovations and Challenges Ahead"
            views="1.95k" likes="9.91k" shares="9.12k"
            mainImg="https://images.unsplash.com/photo-1466611653911-95282fc3656b"
          />
          <BlogCard 
            date="12 Mar 2026"
            title="Exploring the Impact of AI on Modern Software..."
            views="9.12k" likes="1.95k" shares="6.98k"
            mainImg="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          />
          <BlogCard 
            date="11 Mar 2026"
            title="Climate Change and Its Effects on Global Food Security"
            views="6.98k" likes="9.12k" shares="8.49k"
            mainImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
          />
          
          {/* Bottom Row */}
          <BlogCard 
            date="10 Mar 2026"
            title="The Rise of Remote Work: Benefits, Challenges, and Future..."
            views="8.49k" likes="6.98k" shares="2.03k"
            mainImg="https://images.unsplash.com/photo-1587560699334-cc4ff634909a"
          />
          <BlogCard 
            date="09 Mar 2026"
            title="Understanding Blockchain: Beyond the Hype"
            views="2.03k" likes="8.49k" shares="3.36k"
            mainImg="https://images.unsplash.com/photo-1639762681485-074b7f938ba0"
          />
          <BlogCard 
            date="08 Mar 2026"
            title="Mental Health in the Digital Age: Navigating Social Media"
            views="3.36k" likes="2.03k" shares="8.4k"
            mainImg="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
          />
          <BlogCard 
            date="07 Mar 2026"
            title="Sustainable Fashion: How the Industry is Going Green"
            views="8.4k" likes="3.36k" shares="9k"
            mainImg="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
          />
        </div>
      </div>
    </section>
  );
}