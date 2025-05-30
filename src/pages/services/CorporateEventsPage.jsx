import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Coffee, Users2 } from 'lucide-react';

const CorporateEventsPage = () => {
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
            Catering para Eventos Corporativos Exitosos
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            En Black Lion, ofrecemos soluciones gastronómicas profesionales y elegantes para tus eventos corporativos, diseñadas para impresionar a tus clientes y motivar a tu equipo.
          </motion.p>
        </section>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img  
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl" 
              alt="Reunión de negocios con un coffee break elegante y bien servido" 
              src="https://images.unsplash.com/photo-1468971050039-be99497410af" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-brand-red mb-6">Impulsa tu Negocio con Sabor</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Entendemos la importancia de proyectar una imagen profesional. Ofrecemos una variedad de servicios para tus necesidades corporativas:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <Coffee className="w-6 h-6 text-brand-red mr-3 mt-1 shrink-0" />
                <span>Coffee breaks energizantes y desayunos de trabajo para empezar el día con buen pie.</span>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-6 h-6 text-brand-red mr-3 mt-1 shrink-0" />
                <span>Almuerzos ejecutivos y comidas de negocios que facilitan el networking y la colaboración.</span>
              </li>
              <li className="flex items-start">
                <Users2 className="w-6 h-6 text-brand-red mr-3 mt-1 shrink-0" />
                <span>Cenas de gala y eventos de lanzamiento de productos con menús sofisticados y servicio de primera.</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Nuestro equipo se encarga de la logística y el servicio para que puedas concentrarte en tus objetivos de negocio.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center py-10 bg-brand-red-light rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-brand-red mb-4">¿Buscas un catering corporativo de confianza?</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Contáctanos para discutir tus requerimientos. En Catering Manuel estamos listos para ayudarte a que tu próximo evento corporativo sea un éxito rotundo.
          </p>
          <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-3 px-8 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Link to="/contacto">Consultar Servicios Corporativos</Link>
          </Button>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default CorporateEventsPage;
