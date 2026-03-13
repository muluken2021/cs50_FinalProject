import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Send, Youtube, Disc, Instagram, Facebook, 
  ChevronDown, ChevronLeft, Paperclip, Smile, 
  Home as HomeIcon, MessageSquare 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const KittlChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('home'); // 'home' or 'chat'
  const [message, setMessage] = useState("");
  const scrollRef = useRef(null);

  // Mock data for the chat
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can we help you today?", sender: "bot", time: "10:00 AM" },
  ]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, view]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: message, sender: "user", time: "Just now" }]);
    setMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Thanks for reaching out! One of our team members will be with you shortly.", 
        sender: "bot", 
        time: "Just now" 
      }]);
    }, 1000);
  };

  const links = [
    { label: "Send us a message", icon: <Send size={18} />, action: () => setView('chat') },
    { label: "Watch us on YouTube", icon: <Youtube size={18} />, action: () => {} },
    { label: "Join us in Discord", icon: <Disc size={18} />, action: () => {} },
    { label: "Follow us on Instagram", icon: <Instagram size={18} />, action: () => {} },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end font-sans z-50">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[380px] h-[600px] bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* VIEW: HOME */}
            {view === 'home' && (
              <>
                <div className="bg-[#E2FF00] p-8 relative shrink-0">
                  <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-black/70 hover:text-black"><X size={20} /></button>
                  <div className="flex justify-between items-start mb-8">
                    <h1 className="text-3xl font-black italic tracking-tighter">Kittl</h1>
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#E2FF00] overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Support" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">Hello there 👋<br />How can we help?</h2>
                </div>

                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                  {links.map((link, idx) => (
                    <button 
                      key={idx} 
                      onClick={link.action}
                      className="w-full flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <span className="font-semibold text-gray-800">{link.label}</span>
                      <span className="text-gray-400 group-hover:text-black transition-colors">
                        <ChevronDown className="-rotate-90" size={18} />
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* VIEW: CHAT */}
            {view === 'chat' && (
              <>
                <div className="bg-[#E2FF00] p-4 flex items-center gap-3 shrink-0">
                  <button onClick={() => setView('home')} className="p-1 hover:bg-black/5 rounded-full transition-colors">
                    <ChevronLeft size={24} />
                  </button>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">Support Team</h3>
                    <p className="text-xs text-black/60 font-medium">Typically replies in a few minutes</p>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="ml-auto text-black/70 hover:text-black"><X size={20} /></button>
                </div>

                <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                        msg.sender === 'user' 
                        ? 'bg-black text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                      }`}>
                        {msg.text}
                        <div className={`text-[10px] mt-1 opacity-50 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                          {msg.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 bg-white flex items-center gap-2">
                  <button type="button" className="text-gray-400 hover:text-gray-600"><Paperclip size={20} /></button>
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a message..."
                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#E2FF00]"
                  />
                  <button type="submit" className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                    <Send size={16} />
                  </button>
                </form>
              </>
            )}

            {/* Bottom Nav (Persistent) */}
            <div className="flex border-t border-gray-100 p-2 bg-white shrink-0">
              <button 
                onClick={() => setView('home')}
                className={`flex-1 py-2 flex flex-col items-center gap-1 transition-colors ${view === 'home' ? 'text-black font-bold' : 'text-gray-400'}`}
              >
                <HomeIcon size={20} fill={view === 'home' ? "currentColor" : "none"} />
                <span className="text-[10px]">Home</span>
              </button>
              <button 
                onClick={() => setView('chat')}
                className={`flex-1 py-2 flex flex-col items-center gap-1 transition-colors ${view === 'chat' ? 'text-black font-bold' : 'text-gray-400'}`}
              >
                <MessageSquare size={20} fill={view === 'chat' ? "currentColor" : "none"} />
                <span className="text-[10px]">Messages</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#E2FF00] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform active:scale-95 group"
      >
        {isOpen ? <ChevronDown size={28} /> : <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />}
      </button>
    </div>
  );
};

export default KittlChat;