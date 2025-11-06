"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Smartphone, Clock, Wrench, Bot } from "lucide-react"
import { openAppWithToken } from "@/lib/app-links"

export default function ServicesSection() {
  const openApp = (token: string) => () => openAppWithToken(token)

  const services = [
    {
      icon: Wrench,
      title: "Conectamos tus herramientas",
      description: "Tu formulario se conecta con tu email y tu planilla. Automático.",
      example: "Ejemplo: Google Forms → Gmail → Sheets",
      price: "$35.000",
      time: "90 minutos",
      popular: true,
    },
    {
      icon: Calendar,
      title: "Agenda que funciona",
      description: "Link para agendar + confirmación por WhatsApp. Sin bots, respuesta real.",
      example: "Ejemplo: Calendly + WhatsApp manual",
      price: "$35.000",
      time: "90 minutos",
      popular: true,
    },
    {
      icon: Smartphone,
      title: "App para tu negocio",
      description: "App simple para inventario, clientes o pedidos. Se instala directo en el teléfono.",
      example: "Ejemplo: App de inventario con Google Sheets",
      price: "$45.000",
      time: "2-3 horas",
      popular: false,
    },
    {
      icon: Bot,
      title: "Asistente por WhatsApp",
      description: "Alguien real responde por vos. Agenda, consultas, seguimiento.",
      example: "Ejemplo: Secretaria virtual por WhatsApp",
      price: "$60.000",
      time: "por semana",
      popular: false,
    },
    {
      icon: Clock,
      title: "Te ayudamos por hora",
      description: "¿Ya tenés algo armado? Te ayudamos a mejorarlo o escalarlo.",
      example: "Ejemplo: Revisar tu automatización actual",
      price: "$35.000",
      time: "por hora",
      popular: false,
    },
  ]

  return (
    <section id="servicios" className="py-12 md:py-20 px-4 md:px-6 bg-black/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">¿Qué automatizamos?</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Tareas puntuales. Precio fijo. Máximo 90 minutos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border ${
                service.popular ? "border-green-500/50 ring-2 ring-green-500/20" : "border-white/10"
              } hover:border-green-500/50 transition-colors group relative`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Más pedido
                </div>
              )}

              <service.icon className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{service.description}</p>
              <p className="text-green-400 text-xs italic mb-4">{service.example}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="text-white font-bold text-lg">{service.price}</div>
                <div className="text-gray-400 text-sm">{service.time}</div>
              </div>

              <Button
                className={`w-full ${
                  service.popular
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-white/10 hover:bg-green-600 text-white"
                }`}
                onClick={openApp(`services-card-${index}`)}
              >
                Automatizar ahora
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">¿Tenés una tarea que querés automatizar?</h3>
          <p className="text-gray-300 text-lg mb-6">
            Contanos qué necesitás. Te decimos si se puede hacer en 90 minutos por $35.000.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg"
            onClick={openApp("services-main-cta")}
          >
            Automatizar mi tarea en 90 minutos, $35.000
          </Button>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">¿Cómo trabajamos?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Nos contás</h4>
              <p className="text-gray-400 text-sm">Qué querés automatizar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Te confirmamos</h4>
              <p className="text-gray-400 text-sm">Si se puede hacer en 90 min</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Lo hacemos</h4>
              <p className="text-gray-400 text-sm">Máximo 90 minutos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">4</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Pagás $35.000</h4>
              <p className="text-gray-400 text-sm">Una sola vez, listo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
