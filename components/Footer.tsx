import React from 'react';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dale-footer text-gray-300 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-dale-main rounded-full flex items-center justify-center text-white font-bold text-xl">D</div>
              <span className="text-2xl font-heading font-bold text-white tracking-tight">
                Dale<span className="text-dale-main">Saúde</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Cuidado médico de qualidade com a praticidade que você merece. Tecnologia e humanização para sua saúde.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-dale-main transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-dale-main transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-dale-main transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-dale-main transition-colors">Home</a></li>
              <li><a href="#especialidades" className="hover:text-dale-main transition-colors">Especialidades</a></li>
              <li><a href="#" className="hover:text-dale-main transition-colors">Nossos Médicos</a></li>
              <li><a href="#diferenciais" className="hover:text-dale-main transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-dale-main transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-dale-main transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Principais Áreas</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-dale-main transition-colors">Clínica Geral</a></li>
              <li><a href="#" className="hover:text-dale-main transition-colors">Cardiologia</a></li>
              <li><a href="#" className="hover:text-dale-main transition-colors">Pediatria</a></li>
              <li><a href="#" className="hover:text-dale-main transition-colors">Ortopedia</a></li>
              <li><a href="#" className="hover:text-dale-main transition-colors">Neurologia</a></li>
              <li><a href="#" className="hover:text-dale-main transition-colors font-medium text-dale-main mt-2 block">[+] Ver todas</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-dale-main" />
                <span>WhatsApp: (XX) XXXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-dale-main" />
                <span>Telefone: (XX) XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-dale-main" />
                <a href="mailto:contato@dalesaude.com" className="hover:text-white">contato@dalesaude.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-dale-main mt-1" />
                <span>Rua da Saúde, 123 - Centro<br/>Cidade/UF - CEP 00000-000</span>
              </li>
            </ul>
            <div className="mt-6 text-xs text-gray-500">
              Horário: Seg-Sex 8h-18h | Sáb 8h-12h
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Dale Saúde. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;