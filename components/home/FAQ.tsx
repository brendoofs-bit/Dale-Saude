import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
  {
    q: "Como funciona o agendamento pelo WhatsApp?",
    a: "É muito simples! Clique em qualquer botão 'Agendar' no site. Você será direcionado para nosso WhatsApp oficial. Basta enviar um 'Olá' e nossa assistente virtual ou atendente irá guiar você para escolher a especialidade, data e horário."
  },
  {
    q: "Quanto tempo demora para receber resposta?",
    a: "Normalmente em até 5 minutos durante horário comercial (Seg-Sex 8h-18h). Fora desse horário, sua mensagem fica na fila de prioridade para o próximo dia útil."
  },
  {
    q: "Posso usar meu plano de saúde?",
    a: "Aceitamos diversos convênios e planos de saúde, além de oferecer opções acessíveis para consultas particulares. Entre em contato para consultar a lista atualizada de parceiros."
  },
  {
    q: "Preciso levar algum documento?",
    a: "Sim, traga um documento oficial com foto (RG/CNH) e a carteirinha do convênio (se aplicável). Caso tenha exames anteriores, é recomendável trazê-los."
  },
  {
    q: "Vocês atendem urgências?",
    a: "Somos uma clínica de consultas agendadas e pequenos procedimentos. Para emergências com risco de vida, recomendamos procurar um Pronto Socorro Hospitalar imediatamente."
  },
  {
    q: "Como faço para remarcar ou cancelar?",
    a: "Basta enviar uma mensagem no mesmo WhatsApp de agendamento com pelo menos 24 horas de antecedência."
  },
  {
    q: "Os médicos são especializados?",
    a: "Sim, todos os nossos médicos possuem RQE (Registro de Qualificação de Especialista) ativo e passam por criterioso processo de seleção."
  },
  {
    q: "Qual o tempo médio de consulta?",
    a: "Prezamos pela qualidade. Nossas consultas duram o tempo necessário para um atendimento completo, geralmente entre 30 a 60 minutos dependendo da especialidade."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-dale-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-dale-dark mb-12 text-center">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg' : 'shadow-sm'}`}
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-dale-main' : 'text-dale-text'}`}>
                  {item.q}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-dale-main' : 'text-gray-400'}`}>
                   {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-dale-gray leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;