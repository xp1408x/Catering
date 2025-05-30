import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, CalendarDays, Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-black">
      {/* HERO PRINCIPAL */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[75vh] min-h-[550px] flex items-center justify-center text-center text-yellow-100 overflow-hidden bg-black"
      >
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10"></div>
        <div className="z-10 p-6 max-w-3xl relative">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-yellow-300"
          >
            Black Lion
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-8 drop-shadow-md font-semibold text-yellow-100"
          >
            ¡Ahora servimos brunch!<br />
            Ven y prueba nuestras opciones deliciosas y reserva tu próxima visita.
          </motion.p>
          <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold py-3 px-8 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Link to="/contacto">Reservar Mesa</Link>
          </Button>
        </div>
      </motion.section>

      {/* SECCIÓN DE SERVICIOS */}
      <section className="py-16 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text-gold"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden shadow-xl h-full flex flex-col bg-brand-black border-brand-gold">
            <CardHeader>
              <CardTitle className="text-brand-gold">Eventos Sociales</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-yellow-100">Catering para bodas, fiestas privadas y celebraciones especiales.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden shadow-xl h-full flex flex-col bg-brand-black border-brand-gold">
            <CardHeader>
              <CardTitle className="text-brand-gold">Eventos Corporativos</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-yellow-100">Soluciones para empresas, reuniones, conferencias y workplace dining.</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden shadow-xl h-full flex flex-col bg-brand-black border-brand-gold">
            <CardHeader>
              <CardTitle className="text-brand-gold">Experiencias Exclusivas</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-yellow-100">Chef privado, food truck y menús personalizados para tu evento.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECCIÓN DE RESERVA DESTACADA */}
      <section className="py-16 bg-gradient-to-br from-brand-black via-black to-brand-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-brand-gold"
        >
          Haz tu Reserva para Brunch
        </motion.h2>
        <p className="text-xl text-yellow-100 mb-8">Únete hoy mismo y disfruta de una experiencia culinaria única.</p>
        <Button asChild size="lg" className="bg-brand-gold hover:bg-yellow-400 text-black font-semibold py-3 px-8 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <Link to="/contacto">Reservar Ahora</Link>
        </Button>
      </section>

      {/* SECCIÓN DE CATERING */}
      <section className="py-16 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text-gold"
        >
          Catering para tu Evento
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-brand-gold mb-4">Auténticos Sabores, Servicio Perfecto</h3>
            <p className="text-yellow-100 mb-4 leading-relaxed">
              Eleva tu evento con el catering de Black Lion, llevando la diversidad y riqueza de la cocina internacional y mexicana a tu celebración.
            </p>
            <Button asChild variant="outline" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-colors duration-300">
              <Link to="/servicios">Solicitar Catering</Link>
            </Button>
          </div>
          <div>
            <img className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg" alt="Catering Black Lion - platillos y montaje elegante" src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92" />
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PEDIDO ONLINE */}
      <section className="py-16 bg-brand-black text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-brand-gold"
        >
          Ordena Online
        </motion.h2>
        <p className="text-xl text-yellow-100 mb-8">Disfruta tus platillos favoritos desde casa. ¡Rápido y fácil!</p>
        <Button asChild size="lg" className="bg-brand-gold hover:bg-yellow-400 text-black font-semibold py-3 px-8 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <a href="#" target="_blank" rel="noopener noreferrer">Ordenar Ahora</a>
        </Button>
      </section>

      {/* SECCIÓN DE TESTIMONIOS */}
      <section className="py-16 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text-gold"
        >
          Opiniones de Nuestros Clientes
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden shadow-xl h-full flex flex-col bg-brand-black border-brand-gold">
            <CardContent className="flex-grow flex flex-col items-center justify-center">
              <p className="text-yellow-100 italic mb-4">“¡El brunch de Black Lion es espectacular! El servicio y la comida, de primera.”</p>
              <span className="font-bold text-brand-gold">Laura S.</span>
            </CardContent>
          </Card>
          <Card className="overflow-hidden shadow-xl h-full flex flex-col bg-brand-black border-brand-gold">
            <CardContent className="flex-grow flex flex-col items-center justify-center">
              <p className="text-yellow-100 italic mb-4">“Contratamos el catering para nuestra boda y fue un éxito total. ¡Repetiremos!”</p>
              <span className="font-bold text-brand-gold">Carlos y Ana</span>
            </CardContent>
          </Card>
          <Card className="overflow-hidden shadow-xl h-full flex flex-col bg-brand-black border-brand-gold">
            <CardContent className="flex-grow flex flex-col items-center justify-center">
              <p className="text-yellow-100 italic mb-4">“Excelente atención y platillos deliciosos para nuestro evento corporativo.”</p>
              <span className="font-bold text-brand-gold">Tech Solutions</span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SECCIÓN DE UBICACIÓN Y CONTACTO */}
      <section className="py-16 bg-gradient-to-br from-brand-black via-black to-brand-black">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-brand-gold mb-6">Visítanos</h3>
            <p className="text-yellow-100 mb-2">167 4500 South Frontage Rd, Murray, UT 84107</p>
            <p className="text-yellow-100 mb-2">Brunch: Miércoles a Sábado 8 AM - 2 PM</p>
            <p className="text-yellow-100 mb-2">Teléfono: <a href="tel:+1234567890" className="hover:text-brand-gold transition-colors">+1 (23) 456-7890</a></p>
            <p className="text-yellow-100 mb-6">Email: <a href="mailto:info@blacklion.com" className="hover:text-brand-gold transition-colors">info@blacklion.com</a></p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-gold hover:text-yellow-400 transition-colors p-2 rounded-full bg-black hover:bg-yellow-900">Facebook</a>
              <a href="#" className="text-brand-gold hover:text-yellow-400 transition-colors p-2 rounded-full bg-black hover:bg-yellow-900">Instagram</a>
              <a href="#" className="text-brand-gold hover:text-yellow-400 transition-colors p-2 rounded-full bg-black hover:bg-yellow-900">Google</a>
            </div>
          </div>
          <div>
            <img className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg" alt="Ubicación Black Lion" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" />
          </div>
        </div>
      </section>

      {/* SECCIÓN DE NEWSLETTER */}
      <section className="py-16 container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-brand-gold"
        >
          Suscríbete a Nuestro Newsletter
        </motion.h2>
        <p className="text-xl text-yellow-100 mb-8">Recibe novedades, promociones y eventos exclusivos de Black Lion.</p>
        <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 justify-center">
          <input type="email" placeholder="Tu correo electrónico" className="flex-1 px-4 py-3 rounded-lg border border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold bg-black text-yellow-100 placeholder-yellow-300" />
          <Button type="submit" className="bg-brand-gold hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg">Suscribirse</Button>
        </form>
      </section>

      {/* SECCIÓN DE GALERÍA */}
      <section className="py-16 container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-brand-gold"
        >
          Galería de Fotos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92" alt="Plato gourmet 1" className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Plato gourmet 2" className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1468971050039-be99497410af" alt="Plato gourmet 3" className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1676493165033-ec8e2a6ed594" alt="Plato gourmet 4" className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1683030247118-d7e41c07a712" alt="Plato gourmet 5" className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1496510513741-2a816b70c0b5" alt="Plato gourmet 6" className="rounded-lg shadow-lg object-cover w-full h-64" />
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS DETALLADOS */}
      <section className="py-16 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text-gold"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-yellow-100 max-w-3xl mx-auto mb-10 text-center"
        >
          Explora nuestra gama de servicios diseñados para hacer de tu evento una experiencia culinaria inolvidable. Los precios son referenciales y pueden variar según tus necesidades específicas.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí se insertan las tarjetas de servicios, adaptadas a negro y dorado */}
          {/* ... Tarjetas generadas dinámicamente ... */}
        </div>
      </section>

      {/* SECCIÓN DE VALORES */}
      <section className="py-16 container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 gradient-text-gold"
        >
          Nuestros Valores
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-brand-gold"
          >
            <span className="block mx-auto mb-4">
              {/* Icono de chef dorado */}
              <svg width="48" height="48" fill="none" stroke="#FFD700" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7.03 2 3 6.03 3 11c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4 0-4.97-4.03-9-9-9z"/><circle cx="12" cy="17" r="3"/></svg>
            </span>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Calidad Suprema</h3>
            <p className="text-yellow-100 text-sm">Seleccionamos los mejores ingredientes y cuidamos cada detalle en la preparación.</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-black p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-brand-gold"
          >
            <span className="block mx-auto mb-4">
              {/* Icono de apretón de manos dorado */}
              <svg width="48" height="48" fill="none" stroke="#FFD700" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17l5 5 7-7-5-5-7 7z"/><path d="M14 7l7 7-7 7-7-7 7-7z"/></svg>
            </span>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Servicio Personalizado</h3>
            <p className="text-yellow-100 text-sm">Nos adaptamos a tus necesidades para ofrecerte una experiencia única y a medida.</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-black p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-brand-gold"
          >
            <span className="block mx-auto mb-4">
              {/* Icono de hoja dorada */}
              <svg width="48" height="48" fill="none" stroke="#FFD700" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7.03 2 3 6.03 3 11c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4 0-4.97-4.03-9-9-9z"/><path d="M12 17c-2.21 0-4-1.79-4-4"/></svg>
            </span>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Compromiso Fresco</h3>
            <p className="text-yellow-100 text-sm">Priorizamos productos locales y de temporada para garantizar frescura y sabor.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
