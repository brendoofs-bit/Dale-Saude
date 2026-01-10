import React from 'react';
import { MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import Button from '../UI/Button';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dale-bg to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dale-dark mb-16">
          Agendar Sua Consulta é Simples Assim
        </h2>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-200 z-0">
             <div className="h-full bg-dale-main w-0 animate-[progress_3s_ease-out_forwards]"></div>
          </div>

          {/* Card 1 */}
          <div className="relative z-10 bg-white p-8 rounded-2xl shadow-subtle hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-dale-light rounded-full flex items-center justify-center mx-auto mb-6 text-dale-main border-4 border-white shadow-sm">
              <MessageSquare size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-dale-dark">1. Envie uma Mensagem</h3>
            <p className="text-dale-gray text-sm leading-relaxed">
              Clique no botão WhatsApp e nos conte o que você precisa. Sem formulários complicados.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative z-10 bg-white p-8 rounded-2xl shadow-subtle hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-dale-light rounded-full flex items-center justify-center mx-auto mb-6 text-dale-main border-4 border-white shadow-sm">
              <Calendar size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-dale-dark">2. Escolha o Melhor Horário</h3>
            <p className="text-dale-gray text-sm leading-relaxed">
              Nossa equipe responde rapidamente com horários disponíveis que se encaixam na sua rotina.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative z-10 bg-white p-8 rounded-2xl shadow-subtle hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-dale-light rounded-full flex items-center justify-center mx-auto mb-6 text-dale-main border-4 border-white shadow-sm">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-dale-dark">3. Pronto! Está Agendado</h3>
            <p className="text-dale-gray text-sm leading-relaxed">
              Confirmação instantânea e lembrete automático antes da consulta.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Button variant="primary" size="lg">
            Começar Agendamento
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes progress {
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;