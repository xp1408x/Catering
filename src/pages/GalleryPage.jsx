
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const GalleryPage = () => {
  return (
    <div className="bg-brand-lightgray py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <section className="text-center mb-16">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-extrabold mb-4 gradient-text"
          >
            Galería Gastronómica
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Inspírate con una muestra de nuestras creaciones culinarias, presentaciones de platos, mesas decoradas y momentos destacados en eventos anteriores.
          </motion.p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Plato de aperitivo gourmet"
                    src="https://images.unsplash.com/photo-1696608330350-85e582c1f41f" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Aperitivos Creativos</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.10 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Pastel de boda elegante"
                    src="https://images.unsplash.com/photo-1609357871650-96ae6d79503b" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Pasteles de Ensueño</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Buffet en evento corporativo"
                    src="https://images.unsplash.com/photo-1594790631814-a851152eb137" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Buffets Abundantes</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.20 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Plato de frutas coloridas"
                    src="https://images.unsplash.com/photo-1597693159609-feb3f8eff579" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Frescura Natural</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Mesas decoradas en recepción exterior"
                    src="https://images.unsplash.com/photo-1702944051718-919fe7f52bf8" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Ambientes Mágicos</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.30 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Plato principal sofisticado"
                    src="https://images.unsplash.com/photo-1513772457252-c0417654a2a0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Alta Cocina</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Mesa de postres temática"
                    src="https://images.unsplash.com/photo-1613067532415-90df85362423" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Dulces Tentaciones</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.40 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Chefs preparando comida"
                    src="https://images.unsplash.com/photo-1495743642890-694d94aec369" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Pasión en la Cocina</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 bg-white">
                <div className="relative">
                  <img  
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Invitados disfrutando del catering"
                    src="https://images.unsplash.com/photo-1653449195776-ffb5c38bc539" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">Momentos Felices</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default GalleryPage;
