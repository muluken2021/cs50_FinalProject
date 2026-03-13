import React, { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset link requested for:', email);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-[440px] w-full text-center space-y-8">
        
        {/* 1. Icon Section */}
        <div className="flex justify-center">
          <div className="relative w-20 h-20 bg-[#10b981] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
            {/* Lock Handle (simplified CSS) */}
            <div className="absolute top-2 w-8 h-8 border-4 border-yellow-400 rounded-full" style={{ clipPath: 'inset(0 0 50% 0)' }}></div>
            <span className="text-white text-4xl font-black">?</span>
          </div>
        </div>

        {/* 2. Title & Description */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Forgot your password?
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Please enter the email address associated with your account and we'll email you a link to reset your password.
          </p>
        </div>

        {/* 3. Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="relative group">
            {/* The Border Box */}
            <div className="absolute -top-3 left-4 px-2 bg-white z-10">
              <label className="text-sm font-bold text-slate-900">Email address</label>
            </div>
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              required
              className="w-full h-14 px-5 border-2 border-slate-900 rounded-xl text-slate-600 placeholder:text-slate-300 focus:outline-none focus:ring-0"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1e293b] text-white font-bold py-4 rounded-xl hover:bg-black transition-colors"
          >
            Send request
          </button>
        </form>

        {/* 4. Footer Link */}
        <button className="flex items-center justify-center gap-2 text-slate-900 font-bold hover:opacity-70 transition-opacity w-full">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Return to sign in
        </button>
      </div>
    </div>
  );
}