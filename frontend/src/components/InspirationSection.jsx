import React from 'react';

const articles = [
  {
    id: 1,
    title: "9 alternative photographic processes every photographer should try",
    author: "Michael Leski",
    readTime: "15 Min read",
    image: "/api/placeholder/400/300", // Replace with your image
    tag: "Inspiration",
  },
  {
    id: 2,
    title: "How to master headshot photography: expert tips from Ivan Weiss",
    author: "Michael Leski",
    readTime: "8 Min read",
    image: "/api/placeholder/400/300", // Replace with your image
    tag: "Inspiration",
  },
  {
    id: 3,
    title: "How to shoot golden hour, blue hour and twilight photos",
    author: "Michael Leski",
    readTime: "13 Min read",
    image: "/api/placeholder/400/300", // Replace with your image
    tag: "Inspiration",
  },
];

const InspirationSection = () => {
  return (
    <section className="bg-[#e5e5e5] p-8 md:p-16 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 border-b border-gray-300 pb-4">
          <h2 className="text-5xl font-serif font-bold text-gray-900">Inspiration</h2>
          <a href="#" className="flex items-center text-sm font-medium hover:underline transition-all">
            View more <span className="ml-1">→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="overflow-hidden rounded-xl mb-4 bg-gray-200 aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Metadata */}
              <div className="space-y-2">
                <p className="text-xs text-gray-600 font-medium">
                  By {article.author} • {article.readTime}
                </p>
                <h3 className="text-xl font-semibold leading-tight text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                  {article.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </h3>
                
                {/* Tag Button */}
                <div className="pt-2">
                  <span className="px-3 py-1 text-xs border border-gray-400 rounded-md text-gray-700 bg-transparent hover:bg-white transition-colors">
                    {article.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;