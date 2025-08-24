"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { MapPin, Phone, Mail } from "lucide-react"

export default function About() {
  return (
    <section className="py-10">
      <SectionHeading id="about" title="About Me" subtitle="Get to know me better" />

      <div className="mt-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-base md:text-lg leading-relaxed text-justify">
            I'm Aung Khant Phyo, a Computing graduate from the University of Greenwich.
            I started in mechatronics but shifted to computer science after discovering
            the power of IT during the COVID-19 lockdown.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Since then, I've developed skills in data analysis using Python and PowerBI,
            and have experience in machine learning with frameworks like TensorFlow and PyTorch.
            I've worked as a data analyst for a social listening company and as a backend engineer
            for a Gen AI application development company. I'm especially enthusiastic about
            solving global challenges with information technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
