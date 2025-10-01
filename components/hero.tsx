"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AnimatedBackground from "./animated-background"

// Mastodon icon component since it's not available in Lucide
const MastodonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.124 5.092.934 10.109 5.641 11.355 2.17.574 4.034.695 5.535.612 2.722-.151 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.129.539c-2.165-.074-4.449-.233-4.799-2.891a5.499 5.499 0 0 1-.048-.745s2.125.520 4.817.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.507.475-6.507zm-4.024 6.709h-2.497V8.469c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.312v3.349h-2.483v-3.349c0-1.536-.602-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.944v6.119H4.832V8.284c0-1.289.328-2.313.987-3.07.679-.758 1.568-1.146 2.677-1.146 1.279 0 2.246.491 2.886 1.474L12 6.585l.618-1.043c.64-.983 1.607-1.474 2.886-1.474 1.109 0 1.998.388 2.677 1.146.659.757.987 1.781.987 3.07v6.304z" />
  </svg>
)

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-40 w-40 md:h-64 md:w-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-background/30 backdrop-blur-sm"
          >
            <Image
              src="/images/profile_pic.jpg"
              alt="Aung Khant Phyo"
              width={256}
              height={256}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left space-y-6 bg-background/30 backdrop-blur-sm p-6 rounded-lg"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight"
            >
              Aung Khant Phyo
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
            >
              Software Engineer & Gen AI Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center md:justify-start space-x-4"
            >
              <Link href="https://github.com/itsakphyo" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/itsakphyo/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://t.me/itsakphyo" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="Telegram">
                  <Send className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://mastodon.social/@itsakphyo" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="Mastodon">
                  <MastodonIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:itsakphyo@gmail.com">
                <Button variant="outline" size="icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <Link href="#about">
                <Button className="rounded-full">Learn More</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
