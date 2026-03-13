import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X, Sparkles, Layout, PenTool, Box } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { 
      label: 'Templates', 
      hasDropdown: true,
      content: (
        <div className="grid grid-cols-3 gap-8 p-6 w-[600px]">
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Popular</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-black cursor-pointer"><Layout size={16}/> Logos</li>
              <li className="flex items-center gap-2 hover:text-black cursor-pointer"><PenTool size={16}/> T-Shirts</li>
              <li className="flex items-center gap-2 hover:text-black cursor-pointer"><Box size={16}/> Posters</li>
            </ul>
          </div>
          <div className="col-span-2 bg-gray-50 rounded-xl p-4">
            <div className="aspect-video bg-[#E2FF00] rounded-lg flex items-center justify-center font-bold italic text-xl">
              New: AI Editor
            </div>
            <p className="mt-2 text-sm text-gray-600 font-medium">Create designs 10x faster with our new Copilot.</p>
          </div>
        </div>
      )
    },
    { label: 'Tools', hasDropdown: true },
    { label: 'Learn', hasDropdown: false },
    { label: 'Pricing', hasDropdown: false },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-[100] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo & Links */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-black italic tracking-tighter">Kittl</a>
            
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative group py-5"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-black transition-colors">
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
                  </button>

                  {/* Mega Menu Dropdown */}
                  {item.hasDropdown && activeDropdown === item.label && item.content && (
                    <div className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors md:block hidden">
              <Search size={20} />
            </button>
            <button className="px-4 py-2 text-[15px] font-semibold text-gray-700 hover:text-black transition-colors">
              Log in
            </button>
            <button className="px-5 py-2.5 bg-black text-white text-[15px] font-bold rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-black/10">
              <Sparkles size={16} fill="#E2FF00" className="text-[#E2FF00]" />
              Join Kittl
            </button>
            
            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          {menuItems.map((item) => (
            <a key={item.label} href="#" className="block text-lg font-semibold text-gray-800 py-2 border-b border-gray-50">
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full py-3 font-bold border border-gray-200 rounded-xl">Log in</button>
            <button className="w-full py-3 font-bold bg-[#E2FF00] rounded-xl">Join Kittl</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;