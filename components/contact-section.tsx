"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/56979540471", "_blank")
  }

  return (
    <section id="contacto" className="py-12 md:py-20 px-4 md:px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Automatizo tu tarea en 90 minutos
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            <strong className="text-green-400">$35.000 CLP.</strong> Contanos qué querés automatizar y lo hacemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Información de contacto</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Dirección</p>
                  <p className="text-gray-400">Conde del Maule 4364, Estación Central</p>
                  <p className="text-gray-400">Depto #26, Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">smarterbotcl@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-gray-400">+56 979 540 471</p>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8234567890123!2d-70.6891234567890!3d-33.4567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a1234567890%3A0x1234567890abcdef!2sConde%20del%20Maule%204364%2C%20Estaci%C3%B3n%20Central%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px]"
              />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/10 h-full"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Automatizar mi tarea en 90 minutos, $35.000
            </h3>
            <p className="text-gray-400 mb-6">
              Contanos qué querés automatizar. Te decimos si se puede hacer y lo hacemos.
            </p>

            <div className="space-y-4 mb-6">
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Automatizar mi tarea ahora
              </Button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Respuesta en menos de 2 horas</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Precio fijo $35.000 CLP</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Máximo 90 minutos de trabajo</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Te explico cómo funciona</span>
              </div>
            </div>

            <div className="bg-green-500/10 rounded-lg border border-green-500/20 p-4 mb-6">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Horarios de atención
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p className="text-green-400 font-medium mt-2">WhatsApp: Respuesta en máximo 2 horas</p>
              </div>
            </div>

            <div className="bg-blue-500/10 rounded-lg border border-blue-500/20 p-4">
              <h4 className="text-white font-semibold mb-2">Ejemplos de tareas que automatizamos:</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Formulario → Email → Planilla</li>
                <li>• Agenda → Confirmación WhatsApp</li>
                <li>• Pedidos → Notificación automática</li>
                <li>• Contactos → Base de datos</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
