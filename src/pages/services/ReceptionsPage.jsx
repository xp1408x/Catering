import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, PartyPopper, Sandwich } from 'lucide-react';

const ReceptionsPage = () => {
  return (
    <div className="bg-gradient-to-br from-red-50 via-white to-rose-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <section className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-extrabold mb-4 gradient-text"
          >
            Recepciones con Estilo y Sabor
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Black Lion transforma tus recepciones en eventos memorables, combinando una gastronomía exquisita con un servicio impecable para cualquier tipo de celebración.
          </motion.p>
        </section>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
           <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-xl order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-brand-red mb-6">Celebra Cada Ocasión</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ya sea un aniversario, un bautizo, una reunión familiar o cualquier motivo para celebrar, ofrecemos soluciones de catering adaptadas a tus necesidades:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <PartyPopper className="w-6 h-6 text-brand-red mr-3 mt-1 shrink-0" />
                <span>Canapés y bocadillos gourmet perfectos para socializar y disfrutar.</span>
              </li>
              <li className="flex items-start">
                <Sandwich className="w-6 h-6 text-brand-red mr-3 mt-1 shrink-0" />
                <span>Buffets variados y estaciones de comida interactivas que deleitan a todos los paladares.</span>
              </li>
              <li className="flex items-start">
                <Users className="w-6 h-6 text-brand-red mr-3 mt-1 shrink-0" />
                <span>Servicio de coctelería y bebidas para complementar la experiencia gastronómica.</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Nos enfocamos en crear un ambiente acogedor y elegante, donde tus invitados se sientan especiales y disfruten de cada momento.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <img  
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl" 
              alt="Gente disfrutando de una recepción con canapés y bebidas coloridas" 
              src="https://images.unsplash.com/photo-1524703909558-f04f6cbc403a" />
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center py-10 bg-brand-red-light rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-brand-red mb-4">¿Planeando una recepción especial?</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Deja que Catering Ana se encargue de la comida y bebida para que tú solo te preocupes por disfrutar. Contáctanos para explorar opciones.
          </p>
          <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-3 px-8 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Link to="/contacto">Cotizar mi Recepción</Link>
          </Button>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ReceptionsPage;
