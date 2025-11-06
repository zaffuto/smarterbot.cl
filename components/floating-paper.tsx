"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [papers, setPapers] = useState<
    Array<{
      initialX: number
      initialY: number
      pathX: number[]
      pathY: number[]
      duration: number
    }>
  >([])

  useEffect(() => {
    if (typeof window === "undefined") return

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const rafId = requestAnimationFrame(updateDimensions)
    window.addEventListener("resize", updateDimensions)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const rafId = requestAnimationFrame(() => {
      setPapers(
        Array.from({ length: count }).map(() => ({
          initialX: Math.random(),
          initialY: Math.random(),
          pathX: [Math.random(), Math.random(), Math.random()],
          pathY: [Math.random(), Math.random(), Math.random()],
          duration: 20 + Math.random() * 10,
        }))
      )
    })

    return () => cancelAnimationFrame(rafId)
  }, [count])

  return (
    <div className="relative w-full h-full">
      {papers.map((paper, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: paper.initialX * dimensions.width,
            y: paper.initialY * dimensions.height,
          }}
          animate={{
            x: paper.pathX.map((value) => value * dimensions.width),
            y: paper.pathY.map((value) => value * dimensions.height),
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: paper.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            <FileText className="w-8 h-8 text-purple-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
