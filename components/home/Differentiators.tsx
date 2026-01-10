import React from 'react';
import { Check } from 'lucide-react';
import Button from '../UI/Button';

const Differentiators: React.FC = () => {
  const items = [
    {
      title: "Agendamento Instantâneo via WhatsApp",
      desc: "Sem ligações intermináveis ou espera. Agende quando quiser, de onde estiver."
    },
    {
      title: "Equipe Médica Continuamente Atualizada",
      desc: "Profissionais especialistas com formação nas melhores instituições do país."
    },
    {
      title: "Atendimento Humanizado e Acolhedor",
      desc: "Você não é um número. Cada paciente recebe atenção personalizada."
    },
    {
      title: "Infraestrutura Moderna e Confortável",
      desc: "Instalações preparadas para oferecer o melhor em conforto e tecnologia."
    },
    {
      title: "Localização Estratégica e Acessível",
      desc: "Fácil acesso, estacionamento e transporte público nas proximidades."
    },
    {
      title: "Prontuário Digital Seguro",
      desc: "Seu histórico médico sempre acessível, com total privacidade e segurança."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-dale-light/30">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00A86B 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image */}
          <div className="w-full lg:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                 alt="Recepção da clínica Dale Saúde" 
                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="font-bold text-lg">Ambiente Moderno</p>
                 <p className="text-sm opacity-90">Pensado para o seu bem-estar</p>
               </div>
             </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dale-dark mb-8">
              Por Que Escolher a Dale Saúde?
            </h2>

            <div className="space-y-8">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-dale-light text-dale-main flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dale-text text-lg group-hover:text-dale-main transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-dale-gray text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="primary">
                Conhecer Nossa Estrutura
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Differentiators;