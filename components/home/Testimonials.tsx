import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    text: "Agendei pelo WhatsApp em menos de 1 minuto! O atendimento foi excepcional, me senti muito acolhida. Recomendo de olhos fechados.",
    role: "Clínica Geral",
    date: "Dezembro 2024",
    stars: 5
  },
  {
    name: "Carlos Oliveira",
    text: "Precisava urgente de um cardiologista e consegui consulta para o mesmo dia. Dr. João é excelente, muito atencioso.",
    role: "Cardiologia",
    date: "Janeiro 2025",
    stars: 5
  },
  {
    name: "Ana Costa",
    text: "Finalmente uma clínica que respeita meu tempo! Sem espera absurda e médicos realmente preparados.",
    role: "Ortopedia",
    date: "Janeiro 2025",
    stars: 5
  },
  {
    name: "Pedro Santos",
    text: "A estrutura é fantástica e a equipe da recepção muito educada. A pediatra foi um amor com meu filho.",
    role: "Pediatria",
    date: "Fevereiro 2025",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (testimonials.length - (window.innerWidth >= 1024 ? 2 : 0)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    // Logic to show slices. For simplicity in this demo, we'll map all but control visibility with classes or simple mapping
    // A robust solution uses a carousel library like Swiper or Embla. 
    // Here we will implement a simple logic: Show 3 (if desktop) starting from activeIndex, looping.
    return testimonials;
  };

  return (
    <section id="depoimentos" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center text-dale-dark mb-16">
          O Que Nossos Pacientes Dizem
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ 
              transform: `translateX(-${activeIndex * (100 / (window.innerWidth >= 1024 ? 3 : 1))}%)` 
            }}
          >
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="w-full min-w-full md:min-w-[50%] lg:min-w-[calc(33.333%-20px)] bg-white border border-gray-100 p-8 rounded-2xl shadow-subtle hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                
                <div className="mb-6 relative">
                  <Quote size={24} className="text-dale-light absolute -top-2 -left-2 transform -scale-x-100" />
                  <p className="text-dale-gray italic relative z-10 pl-6">"{t.text}"</p>
                </div>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-dale-light flex items-center justify-center font-bold text-dale-main">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-dale-dark text-sm">{t.name}</h4>
                    <p className="text-xs text-dale-gray">{t.role} • {t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => {
            // Adjust dots based on breakpoints if needed, but simple map is fine for now
             if (idx > testimonials.length - (window.innerWidth >= 1024 ? 3 : 1)) return null;
             return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-dale-main' : 'w-2 bg-gray-300 hover:bg-dale-main/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;