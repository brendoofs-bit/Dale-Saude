import React from 'react';
import { Stethoscope, Heart, Brain, Baby, Activity, FlaskConical, ArrowRight } from 'lucide-react';

const specialties = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    desc: "Atendimento completo para diagnóstico, prevenção e tratamento."
  },
  {
    icon: Heart,
    title: "Cardiologia",
    desc: "Cuidado especializado para saúde do seu coração."
  },
  {
    icon: Brain,
    title: "Neurologia",
    desc: "Tratamento de condições neurológicas com tecnologia avançada."
  },
  {
    icon: Baby,
    title: "Pediatria",
    desc: "Cuidado dedicado para saúde e desenvolvimento infantil."
  },
  {
    icon: Activity, // Used for Orthopedics metaphor
    title: "Ortopedia",
    desc: "Tratamento de lesões e condições musculoesqueléticas."
  },
  {
    icon: FlaskConical,
    title: "Exames Laboratoriais",
    desc: "Diagnósticos precisos com resultados rápidos."
  }
];

const Specialties: React.FC = () => {
  return (
    <section id="especialidades" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dale-dark mb-4">
            Especialidades Médicas Disponíveis
          </h2>
          <p className="text-dale-gray text-lg">
            Equipe completa de especialistas prontos para cuidar de você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <div 
              key={index}
              className="group p-8 border border-gray-100 rounded-xl hover:border-dale-main hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
            >
              <div className="w-12 h-12 mb-6 text-dale-main bg-dale-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-dale-dark mb-2 group-hover:text-dale-main transition-colors">
                {item.title}
              </h3>
              <p className="text-dale-gray text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-dale-main font-semibold hover:text-dale-dark transition-colors">
            Ver Todas as Especialidades
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialties;