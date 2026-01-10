import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, User } from 'lucide-react';
import Button from './UI/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Sobre Nós', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-dale-main rounded-full flex items-center justify-center text-white font-bold text-xl">
            D
          </div>
          <span className={`text-2xl font-heading font-bold tracking-tight ${isScrolled ? 'text-dale-dark' : 'text-dale-dark'}`}>
            Dale<span className="text-dale-main">Saúde</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-dale-gray hover:text-dale-main font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="secondary" size="sm" icon={Phone}>
            Agendar Agora
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-dale-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 md:hidden flex flex-col gap-4 border-t border-gray-100">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-dale-text font-medium text-lg py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" fullWidth icon={Phone} className="mt-4">
            Agendar Consulta
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;