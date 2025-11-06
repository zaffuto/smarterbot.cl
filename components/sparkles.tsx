"use client"

import { useEffect, useRef, useState } from "react"
import { useMousePosition } from "@/lib/hooks/use-mouse-position"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

type ParticleConfig = {
  minSize: number
  maxSize: number
  particleColor: string
}

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    private config: ParticleConfig
  ) {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.size = Math.random() * (this.config.maxSize - this.config.minSize) + this.config.minSize
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
  }

  update(mousePosition: { x: number; y: number }) {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > this.canvas.width) this.x = 0
    if (this.x < 0) this.x = this.canvas.width
    if (this.y > this.canvas.height) this.y = 0
    if (this.y < 0) this.y = this.canvas.height

    const dx = mousePosition.x - this.x
    const dy = mousePosition.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance < 100) {
      const angle = Math.atan2(dy, dx)
      this.x -= Math.cos(angle) * 1
      this.y -= Math.sin(angle) * 1
    }
  }

  draw() {
    this.ctx.fillStyle = this.config.particleColor
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.fill()
  }
}

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className = "h-full w-full",
  particleColor = "#FFFFFF",
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition()
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const mousePositionRef = useRef(mousePosition)

  useEffect(() => {
    mousePositionRef.current = mousePosition
  }, [mousePosition])

  useEffect(() => {
    if (typeof window === "undefined") return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const rafId = requestAnimationFrame(updateDimensions)

    const particleConfig: ParticleConfig = { minSize, maxSize, particleColor }

    const init = () => {
      particles = []
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle(canvas, ctx, particleConfig))
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(mousePositionRef.current)
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      if (typeof window === "undefined") return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      cancelAnimationFrame(rafId)
    }
  }, [maxSize, minSize, particleColor, particleDensity])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background,
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  )
}
