// src/components/DownloadCleo.js
import React from 'react';
import { Apple, Play } from 'lucide-react'; // Icon library like lucide-react

const DownloadQR = () => {
    
    // Tailwind Class Helpers
    const textBase = "text-zinc-900 dark:text-zinc-100";
    const textMuted = "text-zinc-600 dark:text-zinc-400";
    const bgBase = "bg-white dark:bg-zinc-950";
    const bgButton = "bg-zinc-100 dark:bg-zinc-800";
    const bgButtonHover = "hover:bg-zinc-200 dark:hover:bg-zinc-700";
    
    return (
        <section className={`py-24 px-8 ${bgBase} font-sans`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                
                {/* Left Side: Call to Action */}
                <div className="flex-1 space-y-12 text-center lg:text-left">
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                        Get Cleo for free now.
                    </h2>
                    
                    {/* App Store / Google Play Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                        <StoreButton icon={<Apple />} label="App Store" />
                        <StoreButton icon={<Play />} label="Google Play" />
                    </div>
                </div>

                {/* Right Side: QR Code Visual */}
                <div className="relative">
                    {/* A soft glowing effect behind the QR code */}
                    <div className="absolute inset-10 bg-black/5 dark:bg-white/10 blur-3xl rounded-full"></div>
                    
                    <div className="relative bg-white dark:bg-zinc-900 p-4 rounded-[40px] shadow-2xl border dark:border-zinc-800 rotate-[-12deg] hover:rotate-0 transition-transform duration-300 ease-out">
                        <img 
                            src="https://img.freepik.com/premium-vector/qr-code-isolated-transparent-background_389832-976.jpg?w=1480" // Replace with the actual image path
                            alt="Scan to Download Cleo App" 
                            className="w-[280px] h-[280px] object-contain rounded-[32px]"
                            // Optional: apply a filter for dark mode if the original doesn't match perfectly
                            style={{ filter: 'dark:invert(0.1) dark:brightness(0.9) dark:contrast(1.1)' }} 
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

// Sub-component for app store buttons
const StoreButton = ({ icon, label }) => {
    return (
        <button className={`flex items-center gap-3 px-8 py-4 bg-gray-100 dark:bg-zinc-800 rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all group`}>
            <span className="text-gray-900 dark:text-white scale-110">
                {icon}
            </span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
                {label}
            </span>
        </button>
    )
}

export default DownloadQR;