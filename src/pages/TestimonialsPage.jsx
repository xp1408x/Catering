import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
	{
		name: 'Laura y Miguel S.',
		event: 'Boda - 120 invitados',
		imageAlt: 'Pareja de recién casados sonriendo y brindando en la recepción de su boda, con decoración elegante en tonos rojos y blancos.',
		imageDesc: 'Smiling newlyweds toasting at their wedding reception, elegant red and white decor.',
		quote: '¡Catering Ana superó todas nuestras expectativas! La comida fue exquisita, la presentación impecable y el servicio increíble. Nuestros invitados no paran de hablar de lo delicioso que estuvo todo. ¡Gracias por hacer nuestro día aún más especial!',
		rating: 5,
	},
	{
		name: 'TechGlobal Solutions',
		event: 'Evento Corporativo - 80 personas',
		imageAlt: 'Grupo de profesionales de negocios disfrutando de un coffee break bien servido en un evento corporativo, con bocadillos y café.',
		imageDesc: 'Business professionals enjoying a well-catered coffee break at a corporate event, with snacks and coffee.',
		quote: 'Contratamos a Catering Ana para nuestro evento anual y fue un acierto total. Profesionalismo, puntualidad y una calidad gastronómica excepcional. El coffee break y el almuerzo fueron perfectos. Definitivamente los volveremos a llamar.',
		rating: 5,
	},
	{
		name: 'Familia Rodríguez',
		event: 'Cumpleaños 50 - 60 invitados',
		imageAlt: 'Familia grande y feliz reunida alrededor de una mesa de cumpleaños llena de comida deliciosa de catering, con globos y decoraciones festivas.',
		imageDesc: 'Large happy family gathered around a birthday table full of delicious catered food, festive balloons and decorations.',
		quote: 'La comida de Catering Ana fue el alma de la fiesta. Variedad, sabor y una atención al detalle que nos dejó impresionados. Desde los canapés hasta el postre, todo fue de primera. ¡Altamente recomendados!',
		rating: 5,
	},
	{
		name: 'Elena P.',
		event: 'Cena Privada - 15 invitados',
		imageAlt: 'Mesa elegantemente puesta para una cena privada íntima, con velas, flores y platos gourmet servidos.',
		imageDesc: 'Elegantly set table for an intimate private dinner, with candles, flowers, and gourmet dishes served.',
		quote: 'Quería una cena especial para un grupo pequeño y Ana diseñó un menú degustación espectacular. Cada plato era una obra de arte y una explosión de sabor. Una experiencia gourmet en casa. ¡Maravilloso!',
		rating: 4,
	},
];

const TestimonialsPage = () => {
	return (
		<div className="bg-gradient-to-br from-brand-red-light via-white to-brand-red-light py-12 md:py-20 px-4 sm:px-6 lg:px-8">
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
						Lo que Dicen Nuestros Clientes
					</motion.h1>
					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-xl text-gray-700 max-w-3xl mx-auto"
					>
						La satisfacción de nuestros clientes es nuestra mayor recompensa. Descubre por qué Black Lion es la elección preferida para eventos inolvidables.
					</motion.p>
				</section>

				<div className="grid md:grid-cols-2 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col overflow-hidden border-l-4 border-brand-red">
								<CardHeader className="bg-gradient-to-r from-brand-red to-red-500 text-white p-6">
									<div className="flex items-center space-x-4">
										<div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0">
											<img className="w-full h-full object-cover" alt={testimonial.imageAlt} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
										</div>
										<div>
											<CardTitle className="text-2xl drop-shadow-sm">{testimonial.name}</CardTitle>
											<p className="text-sm text-red-100">{testimonial.event}</p>
										</div>
									</div>
								</CardHeader>
								<CardContent className="p-6 flex-grow flex flex-col">
									<Quote className="w-8 h-8 text-brand-red opacity-30 mb-2" />
									<blockquote className="text-gray-700 italic leading-relaxed mb-6 text-lg flex-grow">
										"{testimonial.quote}"
									</blockquote>
									<div className="flex items-center justify-end mt-auto pt-4 border-t border-gray-200">
										{Array(testimonial.rating).fill(0).map((_, i) => (
											<Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
										))}
										{Array(5 - testimonial.rating).fill(0).map((_, i) => (
											<Star key={i} className="w-6 h-6 text-gray-300" />
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default TestimonialsPage;
