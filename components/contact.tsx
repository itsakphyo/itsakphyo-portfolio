"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

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
          <h3 className="text-xl font-medium">Get In Touch</h3>
          <p className="text-muted-foreground">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Bangkok, Thailand</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>(+66) 62 965 2927</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>itsakphyo@gmail.com</span>
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-6">
              <h3 className="text-xl font-medium">Let's Work Together</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance work, consulting, and full-time positions. Feel free to reach out
                if you have any questions or would like to collaborate!
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
