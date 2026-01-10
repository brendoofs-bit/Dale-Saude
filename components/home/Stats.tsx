import React, { useEffect, useState, useRef } from 'react';
import { Users, Star, Clock, Stethoscope } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const endValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isDecimal = value.includes('.');
  const suffix = value.replace(/[0-9.]/g, '');
  const prefix = value.match(/^[^0-9]*/) || '';

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setDisplayValue(endValue);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6" style={{ transitionDelay: `${delay}ms` }}>
      <div className="mb-4 p-4 bg-dale-light rounded-full text-dale-main">
        {icon}
      </div>
      <h3 className="text-4xl lg:text-5xl font-bold text-dale-dark mb-2">
        {prefix}{isDecimal ? displayValue.toFixed(1) : Math.floor(displayValue)}{suffix}
      </h3>
      <p className="text-dale-gray font-medium">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem 
            icon={<Users size={32} />} 
            value="15.000+" 
            label="Pacientes Atendidos" 
            delay={0}
          />
          <StatItem 
            icon={<Star size={32} />} 
            value="4.9/5.0" 
            label="Avaliação Média" 
            delay={100}
          />
          <StatItem 
            icon={<Clock size={32} />} 
            value="< 2min" 
            label="Tempo Médio de Agendamento" 
            delay={200}
          />
          <StatItem 
            icon={<Stethoscope size={32} />} 
            value="20+" 
            label="Especialistas" 
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;