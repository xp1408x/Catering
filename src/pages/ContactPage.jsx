
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Share2, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend or email service
    console.log('Form data submitted:', formData);
    toast({
      title: "Consulta Enviada",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      variant: "default", // "default" is white, "destructive" is red
    });
    setFormData({ name: '', email: '', phone: '', eventDate: '', guests: '', message: '' });
  };

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
            Contáctanos
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            ¿Listo para planificar tu próximo evento o tienes alguna pregunta? Estamos aquí para ayudarte. Completa el formulario o contáctanos directamente.
          </motion.p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-10 rounded-xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-brand-red mb-8">Envíanos tu Consulta</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Nombre Completo</Label>
                  <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Tu Nombre" required className="mt-1 border-red-200 focus:border-brand-red focus:ring-brand-red" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Correo Electrónico</Label>
                  <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="mt-1 border-red-200 focus:border-brand-red focus:ring-brand-red" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-gray-700">Teléfono</Label>
                  <Input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (123) 456-7890" className="mt-1 border-red-200 focus:border-brand-red focus:ring-brand-red" />
                </div>
                 <div>
                  <Label htmlFor="eventDate" className="text-gray-700">Fecha del Evento (aprox.)</Label>
                  <Input type="date" id="eventDate" value={formData.eventDate} onChange={handleChange} className="mt-1 border-red-200 focus:border-brand-red focus:ring-brand-red" />
                </div>
              </div>
               <div>
                  <Label htmlFor="guests" className="text-gray-700">Número de Invitados (aprox.)</Label>
                  <Input type="number" id="guests" value={formData.guests} onChange={handleChange} placeholder="Ej: 50" className="mt-1 border-red-200 focus:border-brand-red focus:ring-brand-red" />
                </div>
              <div>
                <Label htmlFor="message" className="text-gray-700">Mensaje</Label>
                <Textarea id="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Cuéntanos sobre tu evento..." required className="mt-1 border-red-200 focus:border-brand-red focus:ring-brand-red" />
              </div>
              <div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Send className="mr-2 h-5 w-5" /> Enviar Consulta
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-brand-red mb-6">Información de Contacto</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-red mr-4 mt-1 flex-shrink-0" />
                  <span>Calle Ficticia 123, Ciudad Ejemplo, CP 08000</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-brand-red mr-4 flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-brand-red transition-colors">+1 (23) 456-7890</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-brand-red mr-4 flex-shrink-0" />
                  <a href="mailto:info@cateringana.com" className="hover:text-brand-red transition-colors">info@cateringana.com</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-brand-red mb-6">Horario de Atención</h3>
              <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Sábados: 10:00 AM - 2:00 PM (con cita previa)</p>
              <p className="text-gray-700">Domingos: Cerrado</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-brand-red mb-6">Síguenos en Redes</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-brand-red hover:text-red-700 transition-colors p-2 rounded-full bg-red-100 hover:bg-red-200">
                  <Share2 className="w-6 h-6" /> Facebook
                </a>
                 <a href="#" className="text-brand-red hover:text-red-700 transition-colors p-2 rounded-full bg-red-100 hover:bg-red-200">
                  <Share2 className="w-6 h-6" /> Instagram
                </a>
                 <a href="#" className="text-brand-red hover:text-red-700 transition-colors p-2 rounded-full bg-red-100 hover:bg-red-200">
                  <Share2 className="w-6 h-6" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
