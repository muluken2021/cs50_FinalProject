import React, { useState } from 'react';

const VideoTabs = () => {
  const [activeTab, setActiveTab] = useState('Vector');

  const tabs = [
    { id: 'Vector', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { id: 'Pixel', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 'Layout', video: 'https://www.w3schools.com/html/movie.mp4' },
    { id: 'Customized', video: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4' },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center py-20 px-4 text-center">
      {/* Text Content */}
      <div className="max-w-3xl mb-12">
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
          Rearrange panels and mix and match your favorite tools to build custom studios. 
          You can save multiple setups, switch between them in a click.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="inline-flex p-1 bg-zinc-900/50 border border-zinc-800 rounded-full mb-12 backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-[#b8d8be] text-black shadow-lg shadow-emerald-900/20'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tab.id}
          </button>
        ))}
      </div>

      {/* Video Display Area */}
      <div className="w-full max-w-6xl rounded-[32px] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl relative group">
        {tabs.map((tab) => (
          <div 
            key={tab.id}
            className={`transition-opacity duration-700 ${activeTab === tab.id ? 'opacity-100 block' : 'opacity-0 hidden'}`}
          >
            {activeTab === tab.id && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              >
                <source src={tab.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
        
        {/* Soft UI overlay to mimic the Affinity app frame */}
        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[32px]" />
      </div>
    </div>
  );
};

export default VideoTabs;