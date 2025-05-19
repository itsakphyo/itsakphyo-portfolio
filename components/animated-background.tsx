"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const dimensionsRef = useRef({ width: 0, height: 0 })
  const animationRef = useRef<number>(0)
  const { resolvedTheme } = useTheme() // Use resolvedTheme instead of theme

  // Initialize particles and handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const width = canvasRef.current.parentElement.clientWidth
        const height = canvasRef.current.parentElement.clientHeight

        // Update canvas dimensions
        canvasRef.current.width = width
        canvasRef.current.height = height
        dimensionsRef.current = { width, height }

        // Create particles based on screen size
        const particleCount = Math.floor((width * height) / 10000)
        const newParticles: Particle[] = []

        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.3,
          })
        }

        particlesRef.current = newParticles
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      const { width, height } = dimensionsRef.current
      const mousePosition = mouseRef.current
      const particles = particlesRef.current

      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x > width || p.x < 0) p.speedX *= -1
        if (p.y > height || p.y < 0) p.speedY *= -1

        // Mouse interaction - gentle attraction
        const dx = mousePosition.x - p.x
        const dy = mousePosition.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (100 - distance) / 500
          p.speedX += forceDirectionX * force
          p.speedY += forceDirectionY * force
        }

        // Speed limit
        const maxSpeed = 1.5
        const currentSpeed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
        if (currentSpeed > maxSpeed) {
          p.speedX = (p.speedX / currentSpeed) * maxSpeed
          p.speedY = (p.speedY / currentSpeed) * maxSpeed
        }

        // Draw particle
        const particleColor =
          resolvedTheme === "dark"
            ? "rgba(255, 255, 255, " + p.opacity + ")" // White in dark mode
            : "rgba(0, 0, 0, " + p.opacity + ")" // Black in light mode
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Connect particles that are close to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            // Draw connection line with opacity based on distance
            const opacity = (1 - distance / 100) * 0.5
            const lineColor =
              resolvedTheme === "dark"
                ? "rgba(255, 255, 255, " + opacity + ")" // White in dark mode
                : "rgba(0, 0, 0, " + opacity + ")" // Black in light mode

            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [resolvedTheme]) // Use resolvedTheme instead of theme

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
