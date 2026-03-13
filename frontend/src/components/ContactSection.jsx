import React from 'react';
import { Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Side: Form */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-500 mb-8">Contact us for a custom delivery quote.</p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="First name" 
                className="flex-1 bg-gray-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#E2FF00] transition-all"
              />
              <input 
                type="text" 
                placeholder="Last name" 
                className="flex-1 bg-gray-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#E2FF00] transition-all"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-gray-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#E2FF00] transition-all"
            />
            <textarea 
              placeholder="Enter your message" 
              rows="5"
              className="w-full bg-gray-100 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#E2FF00] transition-all resize-none"
            />
            <button className="bg-[#94D82D] text-white px-10 py-3 rounded-xl font-bold hover:brightness-105 transition-all active:scale-95 shadow-lg shadow-green-100">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Info Cards */}
        <div className="lg:w-[450px] space-y-6">
          {/* Address Card */}
          <div className="border border-gray-100 rounded-[24px] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">MyWay Auto Transport</h3>
            <p className="text-gray-500 font-medium">P.O Box 78 Hinckley, Ohio 44233</p>
          </div>

          {/* Business Hours Card */}
          <div className="border border-gray-100 rounded-[24px] p-8 shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900">Business hours</h3>
              <div className="text-right space-y-4">
                <div>
                  <p className="text-sm font-bold text-gray-800">Monday through Friday</p>
                  <p className="text-sm text-gray-400">8:00am – 9:00pm</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Saturday, Sunday</p>
                  <p className="text-sm text-gray-400">9:00am – 6:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="border border-gray-100 rounded-full px-8 py-5 shadow-sm flex items-center justify-between group hover:border-[#E2FF00] transition-colors cursor-pointer">
            <span className="text-sm text-gray-400 font-medium">Toll Free Phone</span>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-400" />
              <span className="text-lg font-bold text-gray-900">(844) 416-2544</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;