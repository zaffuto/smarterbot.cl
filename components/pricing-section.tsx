"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Check, Star, Wrench, Clock, Bot, Smartphone, Calendar } from "lucide-react"

export default function PricingSection() {
  const handlePlanClick = () => {
    window.open("http://app.smarterbot.cl", "_blank")
  }

  const handleDemoClick = () => {
    window.open("https://wa.me/56979540471", "_blank")
  }

  const services = [
    {
      name: "Automatización por tarea",
      subtitle: "Una conexión entre apps o procesos",
      price: "$35.000",
      period: "CLP",
      icon: Wrench,
      features: [
        "Google Forms → Gmail → Sheets",
        "Zapier o N8N",
        "Implementación en 90 minutos",
        "Resumen final del trabajo",
        "Pago por transferencia en Chile",
      ],
      popular: false,
      example: "ej: Google Forms → Gmail → Sheets",
    },
    {
      name: "Hora técnica programador",
      subtitle: "Te ayudamos a crear, revisar o escalar",
      price: "$35.000",
      period: "CLP / hora",
      icon: Clock,
      features: [
        "Automatizaciones con N8N o Zapier",
        "Revisión de procesos existentes",
        "Escalamiento de automatizaciones",
        "Soporte técnico directo",
        "Consultoría especializada",
      ],
      popular: true,
      example: "Perfecto si ya usas estas herramientas",
    },
    {
      name: "Asistente digital personalizado",
      subtitle: "Atención vía WhatsApp o correo",
      price: "$60.000",
      period: "CLP / semana",
      icon: Bot,
      features: [
        "Atención por WhatsApp",
        "Seguimiento de tareas",
        "Gestión de correos",
        "Tareas administrativas simples",
        "Respuesta en horario laboral",
      ],
      popular: false,
      example: "Secretaria virtual digital",
    },
  ]

  return (
    <section id="planes" className="py-16 md:py-24 px-4 md:px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Precios claros</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Desde $35.000 CLP (1 hora y media). Planes por semana o por mes con seguimiento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full ${service.popular ? "border-purple-500 border-2 scale-105" : "border-white/10"} bg-black/50 backdrop-blur-sm`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <service.icon className="w-12 h-12 text-purple-500" />
                  </div>
                  <CardTitle className="text-white text-xl mb-1">{service.name}</CardTitle>
                  <p className="text-gray-400 text-sm">{service.subtitle}</p>
                  <p className="text-purple-400 text-xs italic">{service.example}</p>

                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl md:text-4xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-1 text-sm">{service.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 ${
                      service.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                    onClick={handlePlanClick}
                  >
                    Contratar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Calendar className="w-6 h-6 text-blue-400 mr-2" />
              Calendario + WhatsApp sin bot
            </h3>
            <p className="text-gray-400 mb-4">
              Agenda visible, formulario simple y WhatsApp manual de respuesta automática
            </p>
            <div className="text-2xl font-bold text-white mb-2">$35.000 CLP</div>
            <p className="text-purple-400 text-sm">/ implementación</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Smartphone className="w-6 h-6 text-green-400 mr-2" />
              App para Android con AppSheet
            </h3>
            <p className="text-gray-400 mb-4">
              Apps internas para gestión, inventario, clientes. APK directo sin Play Store
            </p>
            <div className="text-2xl font-bold text-white mb-2">desde $45.000</div>
            <p className="text-purple-400 text-sm">CLP</p>
          </div>
        </motion.div>

        {/* How we work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6">¿Cómo lo hacemos?</h3>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">1</span>
              </div>
              <p className="text-gray-300 text-sm">Nos contás qué querés automatizar o resolver</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">2</span>
              </div>
              <p className="text-gray-300 text-sm">Te proponemos la mejor opción: Zapier, N8N o Claude</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">3</span>
              </div>
              <p className="text-gray-300 text-sm">Lo hacemos en máximo 90 minutos (si es simple)</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">4</span>
              </div>
              <p className="text-gray-300 text-sm">Te entregamos todo funcionando</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 mt-8"
            onClick={handleDemoClick}
          >
            Agenda una llamada de 15 minutos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
