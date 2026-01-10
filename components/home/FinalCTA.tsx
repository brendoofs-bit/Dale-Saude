import React from 'react';
import { MessageCircle, Clock, Shield, Star } from 'lucide-react';
import Button from '../UI/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dale-dark to-dale-main relative overflow-hidden text-white text-center">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto relative z-10 px-4">
        <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
          Pronto Para Cuidar da Sua Saúde?
        </h2>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Agende sua consulta agora e seja atendido por especialistas que realmente se importam.
        </p>

        {/* Urgency Counter */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-pulse-slow border border-white/20">
          <Clock size={18} className="text-dale-orange" />
          <span className="font-semibold text-sm">12 horários disponíveis para hoje</span>
        </div>

        <div className="flex justify-center mb-6">
          <Button variant="primary" size="lg" icon={MessageCircle} className="bg-dale-orange hover:bg-[#FF8559] text-white shadow-xl scale-110">
            Agendar Minha Consulta Agora
          </Button>
        </div>

        {/* Micro-copy */}
        <div className="text-sm text-white/80 space-x-4 mb-8">
          <span>✓ Resposta imediata</span>
          <span>✓ Sem compromisso</span>
          <span>✓ Atendimento humanizado</span>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-medium text-white/90">
          <div className="flex items-center gap-2">
            <Shield size={16} />
            Seus dados protegidos
          </div>
          <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-400 fill-current" />
            4.9/5 estrelas
          </div>
          <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
          <div>
            15.000+ pacientes
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;