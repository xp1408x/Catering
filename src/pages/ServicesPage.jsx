
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Utensils, Cake, GlassWater, Truck, CheckCircle, Building } from 'lucide-react';

const servicesData = [
  {
    icon: <Utensils className="w-12 h-12 text-brand-red mb-4" />,
    title: 'Catering para Bodas',
    description: 'Creamos menús elegantes y personalizados para el día más especial. Desde aperitivos hasta el pastel, cuidamos cada detalle.',
    priceRange: '$75 - $150 por persona',
    features: ['Menús Degustación', 'Estaciones de Comida Temáticas', 'Barra Libre Premium', 'Servicio Completo de Camareros'],
    imageAlt: 'Mesa de recepción de boda elegantemente decorada con arreglos florales rojos y blancos y comida gourmet servida en platos finos.',
    imageDesc: 'Elegant wedding reception table with red and white floral arrangements, gourmet food on fine china.'
  },
  {
    icon: <Building className="w-12 h-12 text-brand-red mb-4" />,
    title: 'Eventos Corporativos',
    description: 'Soluciones gastronómicas para reuniones, conferencias y celebraciones empresariales. Impresiona a tus clientes y empleados.',
    priceRange: '$40 - $90 por persona',
    features: ['Desayunos de Trabajo', 'Coffee Breaks', 'Almuerzos Ejecutivos', 'Cenas de Gala Corporativas'],
    imageAlt: 'Configuración de catering profesional en un evento corporativo moderno, con una variedad de canapés y bebidas, y gente de negocios conversando en el fondo.',
    imageDesc: 'Professional catering setup at a modern corporate event, variety of canapés and drinks, business people conversing.'
  },
  {
    icon: <Cake className="w-12 h-12 text-brand-red mb-4" />,
    title: 'Celebraciones Privadas',
    description: 'Cumpleaños, aniversarios, reuniones familiares. Hacemos de tu celebración un evento memorable con sabores exquisitos.',
    priceRange: '$50 - $100 por persona',
    features: ['Menús Personalizados', 'Buffets Temáticos', 'Opciones Infantiles', 'Mesas de Postres'],
    imageAlt: 'Mesa de postres colorida y festiva en una celebración privada, con un pastel decorado, cupcakes y otras delicias.',
    imageDesc: 'Colorful and festive dessert table at a private celebration, decorated cake, cupcakes, and other treats.'
  },
  {
    icon: <GlassWater className="w-12 h-12 text-brand-red mb-4" />,
    title: 'Menús Personalizados',
    description: 'Trabajamos contigo para diseñar un menú único que refleje tu estilo y satisfaga tus preferencias y las de tus invitados.',
    priceRange: 'Consultar (variable)',
    features: ['Adaptado a Dietas Especiales', 'Ingredientes de Temporada', 'Cocina Internacional y Local', 'Asesoramiento Gastronómico'],
    imageAlt: 'Chef sonriente discutiendo opciones de menú con un cliente en una cocina luminosa, con ingredientes frescos sobre la encimera.',
    imageDesc: 'Smiling chef discussing menu options with a client in a bright kitchen, fresh ingredients on counter.'
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-brand-red mb-4" />,
    title: 'Opciones Vegetarianas/Veganas',
    description: 'Deliciosas y creativas propuestas para dietas basadas en plantas, llenas de sabor y con la mejor presentación.',
    priceRange: '$55 - $110 por persona',
    features: ['Platos Principales Innovadores', 'Variedad de Entrantes y Guarniciones', 'Postres Veganos Gourmet', 'Ingredientes Orgánicos Disponibles'],
    imageAlt: 'Plato de catering vegano vibrante y apetitoso, mostrando una variedad de verduras coloridas, granos y proteínas vegetales.',
    imageDesc: 'Vibrant and appetizing vegan catering platter, showcasing colorful vegetables, grains, and plant-based proteins.'
  },
  {
    icon: <Truck className="w-12 h-12 text-brand-red mb-4" />,
    title: 'Servicio a Domicilio (Grandes Pedidos)',
    description: 'Llevamos la calidad de Catering Ana a tu hogar o locación para grupos grandes, con opciones de entrega y montaje.',
    priceRange: '$30 - $70 por persona (mínimo de pedido aplicable)',
    features: ['Entrega Puntual', 'Presentación Impecable', 'Opciones de Buffet para Montar', 'Ideal para Reuniones Familiares Grandes'],
    imageAlt: 'Contenedores de comida de catering cuidadosamente empaquetados listos para la entrega, con el logo de Catering Ana visible.',
    imageDesc: 'Neatly packed catering food containers ready for delivery, Catering Ana logo visible.'
  },
];

const ServicesPage = () => {
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
            Nuestros Servicios de Catering
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Explora nuestra gama de servicios diseñados para hacer de tu evento una experiencia culinaria inolvidable. Los precios son referenciales y pueden variar según tus necesidades específicas.
          </motion.p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 border-transparent hover:border-brand-red">
                <div className="relative">
                    <img  className="w-full h-56 object-cover" alt={service.imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                    <div className="absolute top-4 left-4 bg-gradient-to-br from-brand-red to-red-500 text-white p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                        {service.icon}
                    </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl text-brand-red">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 pt-1">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold text-gray-700 mb-2">Características Destacadas:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <p className="text-lg font-semibold text-brand-red">{service.priceRange}</p>
                  <p className="text-xs text-gray-500">(Precio referencial en USD, sujeto a cambios)</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-semibold transition-colors duration-300">
                    <Link to="/contacto">Solicitar Cotización</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
