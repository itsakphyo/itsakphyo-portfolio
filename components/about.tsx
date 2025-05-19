"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { MapPin, Phone, Mail } from "lucide-react"

export default function About() {
  return (
    <section className="py-10">
      <SectionHeading id="about" title="About Me" subtitle="Get to know me better" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-4"
        >
          <p className="text-lg leading-relaxed">
            I'm Aung Khant Phyo, a Computing graduate (pending official graduation) from the University of Greenwich. I
            started in mechatronics but shifted to computer science after discovering the power of IT during the
            COVID-19 lockdown.
          </p>
          <p className="text-lg leading-relaxed">
            Since then, I've studied data analysis, programming and machine learning. I've worked as a data analyst and
            backend engineer. I'm especially enthusiastic about how large language models (LLMs) can contribute to
            global solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
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
        </motion.div>
      </div>
    </section>
  )
}
