import React from 'react';

const KittlHero = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-8xl mx-auto bg-[#111214] rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center p-12 lg:p-20 gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-white">
          <h2 className="text-5xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-8">
            Go further, faster. Start creating with Kittl.
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
            We put creativity at your fingertips. Design stunning visuals effortlessly—no matter if you're an experienced designer or just starting out.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#E2FF00] transition-colors duration-300">
            Generate Your First Design
          </button>
        </div>

        {/* Right Image Grid (Masonry Style) */}
        <div className="flex-1 w-full grid grid-cols-3 gap-4 h-[500px]">
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="h-2/3 bg-gray-800 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1558191053-8edcb01e1da3?auto=format&fit=crop&q=80" alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="h-1/3 bg-gray-800 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80" alt="Design" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 2 (Tall Middle) */}
          <div className="space-y-4 pt-8">
             <div className="h-[20%] bg-gray-800 rounded-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1620987278429-ca181da4db8a?auto=format&fit=crop&q=80" alt="Art" className="w-full h-full object-cover" />
             </div>
             <div className="h-[60%] bg-gray-800 rounded-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80" alt="Shoe" className="w-full h-full object-cover" />
             </div>
             <div className="h-[20%] bg-gray-800 rounded-2xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80" alt="Gadget" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <div className="h-1/2 bg-gray-800 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1525904097882-44f598356241?auto=format&fit=crop&q=80" alt="Fragrance" className="w-full h-full object-cover" />
            </div>
            <div className="h-1/2 bg-gray-800 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1597484662317-9bd773ef1587?auto=format&fit=crop&q=80" alt="Fashion" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KittlHero;