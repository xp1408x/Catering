import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, HeartHandshake, Leaf } from 'lucide-react';

const AboutUsPage = () => {
  const teamMembers = [
    { name: 'Ana García', role: 'Chef Principal y Fundadora', imagePlaceholder: 'Portrait of Ana Garcia, smiling chef with chef hat', bio: 'Con más de 15 años de experiencia en alta cocina, Ana lidera nuestro equipo con pasión y creatividad, asegurando que cada plato sea una obra maestra.' },
    { name: 'Luis Pérez', role: 'Jefe de Operaciones', imagePlaceholder: 'Professional portrait of Luis Perez in a suit', bio: 'Luis se encarga de que cada evento se desarrolle sin contratiempos, coordinando la logística y el servicio para una experiencia impecable.' },
    { name: 'Sofía Rodríguez', role: 'Especialista en Repostería', imagePlaceholder: 'Sofia Rodriguez, pastry chef, decorating a colorful cake', bio: 'Sofía crea postres que no solo deleitan el paladar, sino que también son visualmente espectaculares, añadiendo un toque dulce a cada celebración.' },
  ];

  return (
    <div className="bg-brand-lightgray min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        {/* Header Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-extrabold mb-4 gradient-text"
          >
            Sobre Black Lion
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Nuestra pasión es crear experiencias culinarias excepcionales que conviertan tus eventos en momentos inolvidables. Black Lion es sinónimo de excelencia y creatividad en cada detalle.
          </motion.p>
        </section>

        {/* Our Story Section */}
        <section className="mb-16 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-brand-red mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Black Lion nació del sueño de nuestra fundadora de compartir su amor por la gastronomía y crear momentos especiales a través de la comida. Desde nuestros humildes comienzos en una pequeña cocina, hemos crecido gracias a la confianza de nuestros clientes y nuestro compromiso inquebrantable con la calidad.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada evento es una nueva oportunidad para innovar y superar expectativas. Nos enorgullece combinar técnicas culinarias tradicionales con toques modernos, utilizando siempre los ingredientes más frescos y de temporada.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img  className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg" alt="Chef Ana carefully plating a dish in a professional kitchen" src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92" />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-brand-red mb-10">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <ChefHat size={48} className="text-brand-red mx-auto mb-4" />, title: 'Calidad Suprema', description: 'Seleccionamos los mejores ingredientes y cuidamos cada detalle en la preparación.' },
              { icon: <HeartHandshake size={48} className="text-brand-red mx-auto mb-4" />, title: 'Servicio Personalizado', description: 'Nos adaptamos a tus necesidades para ofrecerte una experiencia única y a medida.' },
              { icon: <Leaf size={48} className="text-brand-red mx-auto mb-4" />, title: 'Compromiso Fresco', description: 'Priorizamos productos locales y de temporada para garantizar frescura y sabor.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {value.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center text-brand-red mb-12">Nuestro Equipo Culinario</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden text-center p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <img  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" alt={teamMembers[0].name} src="https://images.unsplash.com/photo-1576267422695-a6a97a0e4661" />
                <h3 className="text-xl font-semibold text-brand-red mb-1">{teamMembers[0].name}</h3>
                <p className="text-sm text-gray-500 mb-3">{teamMembers[0].role}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{teamMembers[0].bio}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.30 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden text-center p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <img  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" alt={teamMembers[1].name} src="https://images.unsplash.com/photo-1590402494610-2c378a9114c6" />
                <h3 className="text-xl font-semibold text-brand-red mb-1">{teamMembers[1].name}</h3>
                <p className="text-sm text-gray-500 mb-3">{teamMembers[1].role}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{teamMembers[1].bio}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden text-center p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <img  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" alt={teamMembers[2].name} src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" />
                <h3 className="text-xl font-semibold text-brand-red mb-1">{teamMembers[2].name}</h3>
                <p className="text-sm text-gray-500 mb-3">{teamMembers[2].role}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{teamMembers[2].bio}</p>
              </motion.div>
            
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
