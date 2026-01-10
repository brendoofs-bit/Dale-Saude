import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip */}
      <div 
        className={`mb-2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-dale-dark transition-opacity duration-300 ${showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        Clique para agendar via WhatsApp
      </div>

      {/* Button */}
      <a 
        href="#"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 flex items-center gap-2 group animate-bounce-subtle"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Agendar via WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="font-bold hidden group-hover:block pr-2">Agendar</span>
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75"></span>
      </a>
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppFloat;