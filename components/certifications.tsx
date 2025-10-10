"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Certifications() {
  const certifications = [
    {
      title: "AI Agentic Design Patterns with AutoGen",
      issuer: "DeepLearning.AI",
      date: "September 2024",
      url: "https://learn.deeplearning.ai/accomplishments/c6552e63-0374-4e5f-9c43-eac2d2360193",
    },
    {
      title: "AI Agents in LangGraph",
      issuer: "DeepLearning.AI",
      date: "July 2024",
      url: "https://learn.deeplearning.ai/accomplishments/3f2a62e8-38e8-4e63-979b-5ca46ce731ab",
    },
    {
      title: "Deep Learning Specialization by Andrew Ng",
      issuer: "Coursera",
      date: "April 2023",
      url: "https://www.coursera.org/account/accomplishments/specialization/AAG9BSNBZB7S",
    },
    {
      title: "Machine Learning with Python",
      issuer: "freeCodeCamp.org",
      date: "February 2023",
      url: "https://www.freecodecamp.org/certification/fcc9e00d4f7-1b35-4b03-9d2e-f4155322e8f7/machine-learning-with-python-v7",
    },
    {
      title: "CS50's Introduction to Computer Science",
      issuer: "Harvard University",
      date: "January 2023",
      url: "https://certificates.cs50.io/54165bb1-462b-4908-88c9-83068b606c22.pdf",
    },
  ]

  return (
    <section className="py-10">
      <SectionHeading id="certifications" title="Certifications & Courses" subtitle="My continuous learning journey" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <Award className="h-4 w-4" />
                </div>
                <CardTitle className="text-sm md:text-base leading-relaxed">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                  <Link
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View Certificate</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
