import React from 'react';

export default function BlogPostDetail() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <div className="relative h-[450px] w-full overflow-hidden">
        {/* Abstract Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
          alt="Climate Change" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <div className="max-w-5xl mx-auto w-full space-y-8">
            <h1 className="text-5xl font-black text-white leading-tight max-w-2xl tracking-tight">
              Climate Change and Its Effects on Global Food Security
            </h1>
            
            <div className="flex items-center justify-between">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg">
                  <img src="/api/placeholder/48/48" alt="Deja Brady" className="w-full h-full object-cover" />
                </div>
                <div className="text-white">
                  <p className="font-bold text-lg">Deja Brady</p>
                  <p className="text-sm opacity-80">11 Mar 2026</p>
                </div>
              </div>

              {/* Share Button */}
              <button className="w-12 h-12 bg-[#10b981] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Navigation Bar (Breadcrumbs) */}
      <div className="border-b border-gray-100 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm font-bold text-slate-400">
          <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
          <span>•</span>
          <a href="/blog" className="hover:text-slate-900 transition-colors">Blog</a>
          <span>•</span>
          <span className="text-slate-900">Climate Change and Its Effects on Global Food Security</span>
        </div>
      </div>

      {/* 3. Article Content */}
      <article className="max-w-5xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed text-xl mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          {/* Additional Content Areas */}
          <div className="h-4 bg-gray-50 rounded-full w-full mb-4" />
          <div className="h-4 bg-gray-50 rounded-full w-5/6 mb-4" />
          <div className="h-4 bg-gray-50 rounded-full w-4/6" />
        </div>
      </article>
    </div>
  );
}