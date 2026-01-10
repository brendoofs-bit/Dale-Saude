import React from 'react';
import { MessageCircle, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from '../UI/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-dale-light/50 via-white to-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-[0.05] pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-dale-orange px-4 py-2 rounded-full text-sm font-semibold">
              <Clock size={16} />
              <span>Agende em menos de 2 minutos</span>
            </div>

            <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-dale-dark leading-tight">
              Cuidado Médico de Qualidade <br />
              <span className="text-dale-main">Quando Você Precisa.</span> <br />
              Onde Você Está.
            </h1>

            <p className="text-xl text-dale-gray font-light max-w-lg">
              Agendamento rápido via WhatsApp • Equipe especializada • Atendimento humanizado
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" icon={MessageCircle} className="animate-pulse-slow">
                Agendar Consulta Agora
              </Button>
              <Button variant="outline" size="lg" icon={ArrowRight}>
                Ver Especialidades
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 text-sm text-dale-gray font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-dale-main" />
                Resposta em até 5 minutos
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-dale-main" />
                Sem burocracia
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-dale-main" />
                Horários flexíveis
              </span>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center">
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                  alt="Médica sorrindo atendendo paciente"
                  className="w-full max-w-[500px] h-auto object-cover" 
                />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-10 -left-6 z-20 bg-white p-4 rounded-xl shadow-subtle flex items-center gap-3 animate-float">
                <div className="bg-dale-light p-2 rounded-full text-dale-main">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-dale-gray">Confiança Médica</p>
                  <p className="font-bold text-dale-dark">Certificada</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;