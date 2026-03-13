import React from 'react';
import { Search, ListFilter, ChevronDown } from 'lucide-react';
const products = [
  {
    id: 1,
    name: "Chic Ballet Flats",
    price: 25.18,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
    badge: "SALE",
    colors: ["#8B5CF6"]
  },
  {
    id: 2,
    name: "Cozy Winter Boots",
    price: 76.24,
    oldPrice: 76.24,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800",
    colors: ["#EF4444", "#3B82F6"]
  },
  {
    id: 3,
    name: "Beach Sandals",
    price: 64.55,
    oldPrice: 64.55,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800",
    colors: ["#F9A8D4", "#10B981", "#F59E0B"],
    extraColors: 2
  },
  {
    id: 4,
    name: "Durable Work Boots",
    price: 93.68,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800",
    colors: ["#FBBF24", "#8B5CF6"]
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F3F4F6]">
        {product.badge && (
          <span className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold text-white rounded ${product.badge === 'SALE' ? 'bg-orange-500' : 'bg-cyan-500'}`}>
            {product.badge}
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            {product.colors.map((color, i) => (
              <span 
                key={i} 
                className="w-4 h-4 rounded-full border border-gray-200" 
                style={{ backgroundColor: color }}
              />
            ))}
            {product.extraColors && (
              <span className="text-xs text-gray-500 ml-1">+{product.extraColors}</span>
            )}
          </div>
          
          <div className="flex gap-2 items-center">
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
            )}
            <span className="text-sm font-bold text-gray-900">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Product() {
  return (
    <div className="min-h-screen bg-white p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Shop</h1>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/50"
            />
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <button className="flex items-center gap-2 hover:text-black">
              Filters <ListFilter className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 hover:text-black">
              Sort by: <span className="text-black">Featured</span> <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}