import React from 'react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Sorry, page not found!</h1>
          <p className="text-slate-500 leading-relaxed">
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
          </p>
        </div>

        {/* 404 Illustration Area */}
        <div className="relative py-12 flex flex-col items-center">
          <span className="text-[12rem] font-black text-emerald-500/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">404</span>
          {/* <div className="relative z-10 w-64 h-64 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100"> */}
            {/* You would place your 404 character image here */}
            {/* <span className="text-8xl">🧐</span> */}
          {/* </div> */}
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          className="bg-[#1e293b] text-white font-bold py-4 px-10 rounded-xl hover:bg-black transition-all shadow-lg"
        >
          Go to home
        </button>
      </div>
    </div>
  );
}