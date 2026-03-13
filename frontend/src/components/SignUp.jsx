import React, { useState } from 'react';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-[440px] w-full space-y-8">
        
        {/* Header */}
        <div className="text-left space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Create your account
          </h1>
          <p className="text-slate-500 font-medium">
            Already have an account? <a href="#" className="text-[#10b981] hover:underline">Sign in</a>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name Input */}
          <div className="relative">
            <div className="absolute -top-3 left-4 px-2 bg-white z-10">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full name</label>
            </div>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-14 px-5 border border-gray-200 rounded-xl text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:outline-none transition-colors"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="absolute -top-3 left-4 px-2 bg-white z-10">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email address</label>
            </div>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full h-14 px-5 border border-gray-200 rounded-xl text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:outline-none transition-colors"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute -top-3 left-4 px-2 bg-white z-10">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="6+ characters"
              className="w-full h-14 px-5 border border-gray-200 rounded-xl text-slate-900 placeholder:text-slate-300 focus:border-slate-900 focus:outline-none transition-colors"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>

          <button className="w-full bg-[#1e293b] text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-sm">
            Create account
          </button>
        </form>

        {/* Terms Disclaimer */}
        <p className="text-center text-xs text-slate-400 px-4">
          By creating an account, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>

        {/* Divider */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-dashed border-gray-200"></div>
          <span className="flex-shrink mx-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Or</span>
          <div className="flex-grow border-t border-dashed border-gray-200"></div>
        </div>

        {/* Social Logins */}
        <div className="flex justify-center gap-8">
          <button className="hover:opacity-70 transition-opacity">
            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" className="w-6 h-6" alt="Google" />
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-60.86 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
        </div>

      </div>
    </div>
  );
}