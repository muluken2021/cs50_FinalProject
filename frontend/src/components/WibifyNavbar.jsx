import React, { useState } from 'react';
import { ChevronDown, Moon, ExternalLink } from 'lucide-react';

const WibifyNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { 
      label: 'Leistungen', 
      links: [
        { title: 'Webdesign & UI/UX', desc: 'Conversion-optimierte Websites' },
        { title: 'Webentwicklung', desc: 'Next.js, React, TypeScript' },
        { title: 'SEO-Optimierung', desc: 'Bessere Google Rankings' }
      ] 
    },
    { label: 'Blog', links: [] },
    { label: 'Standorte', links: [] },
    { label: 'Referenzen' },
    { label: 'Preise' },
    { label: 'FAQ' },
    { label: 'Über mich' },
  ];

  return (
    <div className="fixed top-6 left-0 w-full px-4 z-[1000] font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 flex items-center justify-between px-8 py-3 relative">
        
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-black italic tracking-tighter text-black">Wibify</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <div 
              key={item.label}
              className="relative py-2 group"
              onMouseEnter={() => item.links && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[14px] font-medium text-gray-600 hover:text-black transition-colors">
                {item.label}
                {item.links && <ChevronDown size={14} className={`mt-0.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </button>

              {/* Specific Wibify Dropdown Style */}
              {item.links && item.links.length > 0 && activeDropdown === item.label && (
                <div className="absolute top-[calc(100%+10px)] left-[-20px] w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.links.map((link) => (
                    <a key={link.title} href="#" className="block px-5 py-3 hover:bg-gray-50 transition-colors group/item">
                      <p className="text-[14px] font-bold text-gray-900">{link.title}</p>
                      <p className="text-[12px] text-gray-400 font-medium">{link.desc}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="bg-[#111] text-white px-6 py-2.5 rounded-2xl font-bold text-[14px] hover:bg-black transition-all active:scale-95">
            Angebot
          </button>
          
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Moon size={20} />
          </button>

          {/* Language / Flag */}
          <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-100 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="https://flagcdn.com/w40/de.png" 
              alt="DE" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WibifyNavbar;