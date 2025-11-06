"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timers: Array<ReturnType<typeof setTimeout>> = []
    let cancelled = false

    const visibilityTimer = setTimeout(() => {
      if (cancelled) return
      setIsVisible(true)

      const tooltipShowTimer = setTimeout(() => {
        if (cancelled) return
        setShowTooltip(true)

        const tooltipHideTimer = setTimeout(() => {
          if (cancelled) return
          setShowTooltip(false)
        }, 5000)

        timers.push(tooltipHideTimer)
      }, 1000)

      timers.push(tooltipShowTimer)
    }, 3000)

    timers.push(visibilityTimer)

    return () => {
      cancelled = true
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=56979540471", "_blank")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="absolute bottom-16 right-0 mb-2 mr-2"
              >
                <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg max-w-xs relative">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <p className="text-sm font-medium">Automatizo tu tarea en 90 min</p>
                  <p className="text-xs text-gray-600">$35.000 CLP • Precio fijo</p>
                  <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
            <Button
              onClick={handleWhatsAppClick}
              className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
            >
              <MessageCircle className="w-7 h-7" />
            </Button>

            {/* Pulse animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-green-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
