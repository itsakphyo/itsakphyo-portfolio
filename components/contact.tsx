"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

// Mastodon icon component since it's not available in Lucide
const MastodonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.124 5.092.934 10.109 5.641 11.355 2.17.574 4.034.695 5.535.612 2.722-.151 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.129.539c-2.165-.074-4.449-.233-4.799-2.891a5.499 5.499 0 0 1-.048-.745s2.125.520 4.817.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.507.475-6.507zm-4.024 6.709h-2.497V8.469c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.312v3.349h-2.483v-3.349c0-1.536-.602-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.944v6.119H4.832V8.284c0-1.289.328-2.313.987-3.07.679-.758 1.568-1.146 2.677-1.146 1.279 0 2.246.491 2.886 1.474L12 6.585l.618-1.043c.64-.983 1.607-1.474 2.886-1.474 1.109 0 1.998.388 2.677 1.146.659.757.987 1.781.987 3.07v6.304z"/>
  </svg>
)

export default function Contact() {
  return (
    <section className="py-10">
      <SectionHeading id="contact" title="Contact Me" subtitle="Let's get in touch" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base">Bangkok, Thailand</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base">(+66) 62 965 2927</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base">itsakphyo@gmail.com</span>
            </div>
          </div>

          <div className="flex space-x-4">
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
            <Link href="https://mastodon.social/@itsakphyo" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" aria-label="Mastodon">
                <MastodonIcon className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:itsakphyo@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" aria-label="Mail">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-6">
              <h3 className="text-lg md:text-xl font-medium">Let's Work Together</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                I'm currently available for freelance work, consulting, and full-time positions.
              </p>
              <Link href="mailto:itsakphyo@gmail.com">
                <Button size="lg" className="mt-4">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
