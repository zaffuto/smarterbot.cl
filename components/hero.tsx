"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"
import { openAppWithToken } from "@/lib/app-links"

export default function Hero() {
  const handleContactClick = () => {
    openAppWithToken("hero-automatizar")
  }

  const handleServicesClick = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={8} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-6">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">90 minutos • $35.000 CLP</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Automatizo tu tarea
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                  {" "}
                  en 90 minutos
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed">
                <strong className="text-white">$35.000 CLP.</strong> Conectamos tus herramientas, automatizamos tu
                proceso.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Formularios que van a tu email, agendas que confirman por WhatsApp, planillas que se actualizan solas.{" "}
                <strong className="text-white">Pagás una vez y listo.</strong>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 text-lg py-6"
                onClick={handleContactClick}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Automatizar mi tarea ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-green-500 hover:bg-green-500/20 bg-transparent"
                onClick={handleServicesClick}
              >
                <Clock className="mr-2 h-5 w-5" />
                Ver ejemplos
              </Button>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-green-500/10 rounded-xl p-6 border border-green-500/20"
            >
              <h3 className="text-white font-bold text-lg mb-3">¿Qué incluye?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Máximo 90 minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Precio fijo $35.000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Te explico cómo funciona</span>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400">90min</div>
                <div className="text-sm text-gray-400">Máximo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400">$35k</div>
                <div className="text-sm text-gray-400">Precio fijo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400">1 vez</div>
                <div className="text-sm text-gray-400">Pagás</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative lg:block hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Bot Animation */}
              <div className="relative z-10">
                <RoboAnimation />
              </div>

              {/* Floating Feature Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <MessageCircle className="w-6 h-6 text-green-400 mb-2" />
                <p className="text-white text-sm font-medium">WhatsApp</p>
                <p className="text-gray-400 text-xs">Automático</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute top-32 -right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <Clock className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-white text-sm font-medium">90 min</p>
                <p className="text-gray-400 text-xs">Máximo</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
                <p className="text-white text-sm font-medium">$35.000</p>
                <p className="text-gray-400 text-xs">Precio fijo</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
