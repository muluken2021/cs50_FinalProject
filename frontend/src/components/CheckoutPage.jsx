import React, { useState } from 'react';

const InputField = ({ label, placeholder }) => (
  <div className="space-y-2">
    <input
      type="text"
      placeholder={placeholder}
      className="w-full h-14 px-5 border border-gray-100 rounded-xl bg-white text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:outline-none transition-colors shadow-sm"
    />
  </div>
);

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-slate-500 font-medium">Professional plan is right for you.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Section: Billing & Payment */}
        <div className="lg:col-span-2 bg-[#fcfcfc] border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Billing Address */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Billing address</h3>
              <div className="space-y-4">
                <InputField placeholder="Person name" />
                <InputField placeholder="Phone number" />
                <InputField placeholder="Email" />
                <InputField placeholder="Address" />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Payment method</h3>
              
              <div className="space-y-4">
                {/* Paypal Option */}
                <div 
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-5 rounded-2xl border cursor-pointer flex justify-between items-center transition-all ${paymentMethod === 'paypal' ? 'border-emerald-500 bg-white shadow-md' : 'border-gray-100 bg-white hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-emerald-500' : 'border-gray-200'}`}>
                      {paymentMethod === 'paypal' && <div className="w-3 h-3 bg-emerald-500 rounded-full" />}
                    </div>
                    <span className="font-bold text-slate-900">Paypal</span>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-5" />
                </div>

                {/* Card Option */}
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-slate-900 bg-white shadow-lg' : 'border-gray-100 bg-white'}`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                       <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <span className="font-bold text-slate-900">Credit / debit</span>
                    </div>
                    <div className="flex gap-2">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                       <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                    </div>
                  </div>
                  
                  {/* Card Selector Dropdown */}
                  <div className="relative">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest absolute -top-2 left-3 bg-white px-1">Card</p>
                    <div className="w-full p-4 border border-gray-100 rounded-xl flex justify-between items-center text-sm font-medium text-slate-700">
                      <span>**** **** **** 1212 - Jimmy Holland</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  
                  <button className="mt-6 flex items-center gap-2 text-emerald-500 font-bold text-sm hover:opacity-70 transition-opacity">
                    <span className="text-lg">+</span> Add card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Summary */}
        <div className="bg-[#fcfcfc] border border-gray-100 rounded-3xl p-10 space-y-8 shadow-sm h-fit">
          <h3 className="text-xl font-bold text-slate-900">Summary</h3>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Subscription</span>
              <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Premium</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Billed monthly</span>
              <div className="w-10 h-5 bg-emerald-500 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </div>

          <div className="text-center py-6 border-t border-dashed border-gray-200">
            <div className="flex justify-center items-start gap-1">
              <span className="text-2xl font-black text-slate-900 mt-1">$</span>
              <span className="text-6xl font-black text-slate-900 tracking-tighter">9.99</span>
              <span className="text-slate-400 font-medium mt-8 text-sm">/ mo</span>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <div className="flex justify-between font-bold text-slate-900">
              <span>Total billed</span>
              <span>$9.99*</span>
            </div>
            <p className="text-[10px] text-slate-400 italic">* Plus applicable taxes</p>
          </div>

          <div className="space-y-4 pt-4">
            <button className="w-full bg-[#1e293b] text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-md">
              Upgrade plan
            </button>
            
            <div className="flex flex-col items-center gap-2">
               <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-wider">
                 <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Secure credit card payment
               </div>
               <p className="text-[10px] text-slate-400">This is a secure 128-bit SSL encrypted payment</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}