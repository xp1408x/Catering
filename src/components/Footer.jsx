import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, ChefHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-brand-gold py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <ChefHat className="w-10 h-10 mr-3 text-brand-gold" />
              <h3 className="text-2xl font-bold text-brand-gold">Black Lion</h3>
            </Link>
            <p className="text-sm text-yellow-100">
              Ofreciendo experiencias culinarias inolvidables para tus eventos más especiales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/acerca-de" className="hover:text-yellow-200 transition-colors">Acerca de Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-yellow-200 transition-colors">Nuestros Servicios</Link></li>
              <li><Link to="/galeria" className="hover:text-yellow-200 transition-colors">Galería</Link></li>
              <li><Link to="/contacto" className="hover:text-yellow-200 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-100 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-yellow-100 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-yellow-100 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-yellow-100 hover:text-white transition-colors"><Youtube size={24} /></a>
            </div>
            <p className="mt-4 text-sm text-yellow-200">
              Email: <a href="mailto:info@cateringana.com" className="hover:underline">info@cateringana.com</a>
            </p>
            <p className="text-sm text-yellow-200">
              Teléfono: <a href="tel:+1234567890" className="hover:underline">+1 (23) 456-7890</a>
            </p>
          </div>
        </div>

        <div className="border-t border-brand-gold pt-8 text-center text-sm text-yellow-100">
          <p>&copy; {new Date().getFullYear()} Black Lion. Todos los derechos reservados.</p>
          <p>Diseñado con ❤️ por Demis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
