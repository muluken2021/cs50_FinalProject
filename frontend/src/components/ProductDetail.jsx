import React, { useState } from 'react';

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('9');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">
          <a href="/" className="hover:text-slate-900">Home</a>
          <span>•</span>
          <a href="/shop" className="hover:text-slate-900">Shop</a>
          <span>•</span>
          <span className="text-slate-900">Classic Leather Loafers</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Product Gallery */}
          <div className="space-y-6">
            <div className="aspect-square rounded-3xl overflow-hidden bg-emerald-50 relative">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
                alt="Main Product" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-black/20 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold">
                1/8
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="aspect-square rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:border-emerald-500 transition-colors">
                  <img src={`/api/placeholder/150/150`} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Purchase Details */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">New • In Stock</span>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Classic Leather Loafers</h1>
              <div className="flex items-center gap-2">
                <div className="flex text-orange-400 text-sm">★★★★☆</div>
                <span className="text-xs text-slate-400 font-bold">(9.12k reviews)</span>
              </div>
            </div>

            <h2 className="text-3xl font-black text-slate-900">$97.14</h2>
            <p className="text-slate-500 leading-relaxed max-w-md">
              Featuring the original ripple design inspired by Japanese bullet trains, 
              letting you push your style full-speed ahead.
            </p>

            <div className="space-y-6 border-y border-dashed border-gray-200 py-8">
              {/* Color Selector */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">Color</span>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white ring-2 ring-blue-500 cursor-pointer" />
                  <div className="w-6 h-6 rounded-full bg-pink-300 border-2 border-white cursor-pointer" />
                </div>
              </div>

              {/* Size Selector */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">Size</span>
                <select className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-sm font-bold focus:outline-none">
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                </select>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">Quantity</span>
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-100">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-lg">-</button>
                  <span className="px-4 font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-lg">+</button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-orange-400 text-white font-black py-4 rounded-xl hover:bg-orange-500 transition-all shadow-lg flex items-center justify-center gap-2">
                🛒 Add to cart
              </button>
              <button className="flex-1 bg-[#1e293b] text-white font-black py-4 rounded-xl hover:bg-black transition-all shadow-lg">
                Buy now
              </button>
            </div>
          </div>
        </div>

        {/* 3. Features Trust Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-gray-100 mb-24">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">✓</div>
            <h4 className="font-bold text-slate-900">100% original</h4>
            <p className="text-xs text-slate-400">Chocolate bar candy canes ice cream toffee cookie halvah.</p>
          </div>
          {/* ... Repeat for 10 days replacement and Year warranty ... */}
        </div>

        {/* 4. Reviews Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-8 border-b border-gray-100 pb-4">
            <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-4">Description</button>
            <button className="text-slate-400 font-bold pb-4">Reviews (8)</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="text-center lg:text-left space-y-4">
              <p className="text-slate-400 font-bold uppercase tracking-wider text-xs">Average rating</p>
              <h2 className="text-6xl font-black text-slate-900">3.7/5</h2>
              <div className="flex justify-center lg:justify-start text-orange-400 text-xl">★★★★☆</div>
              <p className="text-xs text-slate-400">(9.12k reviews)</p>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              {/* Individual Review Example */}
              <div className="flex gap-6 py-8 border-b border-gray-50 last:border-none">
                <img src="/api/placeholder/48/48" className="w-12 h-12 rounded-full" alt="User" />
                <div className="space-y-2">
                  <h5 className="font-bold text-slate-900">Jayvion Simon <span className="text-xs text-slate-400 font-normal ml-2">13 Mar 2026</span></h5>
                  <div className="text-orange-400 text-xs">★★★★☆</div>
                  <p className="text-slate-500 text-sm leading-relaxed">The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}