"use client"

import { motion } from "framer-motion"
import { Quote, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const handleContactClick = () => {
    window.open("https://wa.me/56979540471", "_blank")
  }

  const testimonials = [
    {
      text: "Me conectó WhatsApp con mi agenda de Google en 90 minutos. Ahora cuando alguien agenda, me llega confirmación automática. Nada de bots, todo real.",
      author: "María González",
      business: "Nutricionista",
      location: "Santiago",
      service: "Agenda + WhatsApp",
      result: "7 citas agendadas en 3 días",
    },
    {
      text: "Ahora mis formularios de contacto van directo a mi Drive ordenados por fecha. No toco nada y tengo todo organizado.",
      author: "Carlos Mendoza",
      business: "Consultor freelance",
      location: "Valparaíso",
      service: "Automatización",
      result: "0 minutos perdidos organizando leads",
    },
    {
      text: "Me armó una app simple para el inventario que se conecta con mi planilla de Google. La instalé en el teléfono y listo.",
      author: "Ana Rodríguez",
      business: "Tienda de ropa",
      location: "Concepción",
      service: "App móvil",
      result: "Control de stock en tiempo real",
    },
    {
      text: "Tengo una persona real que responde por WhatsApp cuando no puedo. Agenda citas, responde consultas básicas.",
      author: "Pedro Silva",
      business: "Dentista",
      location: "La Serena",
      service: "Asistente virtual",
      result: "No pierdo más pacientes por no responder",
    },
  ]

  return (
    <section id="casos" className="py-16 md:py-24 px-4 md:px-6 bg-black/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Casos reales de Chile</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Clientes que ya tienen sus procesos automatizados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-colors"
            >
              <div className="flex items-start mb-4">
                <Quote className="w-6 h-6 text-green-400 mr-2 flex-shrink-0 mt-1" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                <span aria-hidden="true">&ldquo;</span>
                {testimonial.text}
                <span aria-hidden="true">&rdquo;</span>
              </p>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.author}</p>
                    <p className="text-gray-400 text-xs">
                      {testimonial.business} • {testimonial.location}
                    </p>
                  </div>
                  <span className="inline-block bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                    {testimonial.service}
                  </span>
                </div>
                <div className="bg-green-500/10 rounded-lg p-3 mt-3">
                  <p className="text-green-400 text-xs font-medium">Resultado:</p>
                  <p className="text-green-300 text-sm">{testimonial.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿Querés automatizar algo en tu negocio?</h3>
          <p className="text-gray-300 text-lg mb-6">
            Contanos qué necesitás y te decimos si se puede hacer (y cuánto cuesta)
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8" onClick={handleContactClick}>
            <MessageCircle className="mr-2 h-5 w-5" />
            Consultar por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
