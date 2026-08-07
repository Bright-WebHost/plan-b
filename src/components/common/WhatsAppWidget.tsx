import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, ShieldCheck } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSend = () => {
    const text = encodeURIComponent(msg || 'Hello PLAN B Team! I would like to inquire about your verified services.');
    window.open(`https://wa.me/18004837839?text=${text}`, '_blank');
    setIsOpen(false);
    setMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 bg-[#FAF8F5] border border-[#E2DDD5] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#5A5A40] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  PL
                </div>
                <div>
                  <h4 className="font-bold text-sm">PLAN B Support Hive</h4>
                  <p className="text-xs text-[#FAF8F5]/80 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online • Instant Concierge
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#F5F2ED] space-y-3 text-xs text-[#1A1A1A]">
              <div className="bg-white p-3 rounded-xl rounded-tl-none max-w-[85%] border border-[#E2DDD5] space-y-1">
                <p className="font-bold text-[#5A5A40]">PLAN B Concierge</p>
                <p>Hello! How can we assist you today with partner selection or project quotation?</p>
                <span className="text-[10px] text-[#68665E] block text-right">Just now</span>
              </div>

              <div className="pt-2">
                <input
                  type="text"
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                  placeholder="Type message or question..."
                  className="w-full bg-white border border-[#E2DDD5] rounded-xl px-3 py-2 text-[#1A1A1A] placeholder-[#8A8678] focus:outline-none focus:border-[#5A5A40] text-xs mb-2"
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="w-full py-2 bg-[#5A5A40] hover:bg-[#4A4A33] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" /> Start WhatsApp Chat
                </button>
              </div>

              <p className="text-[10px] text-[#68665E] text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#5A5A40]" /> Direct encrypted WhatsApp connection
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center justify-center shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all group relative"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-[#0c0e12] animate-bounce"></span>
        <MessageSquare className="w-7 h-7 text-black group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
