"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import Image from "next/image"

export default function Education() {
  const educationData = [
    {
      institution: "University of Greenwich",
      location: "London, United Kingdom",
      degree: "Bachelor of Science (Honours) in Computing",
      period: "June 2024 – April 2025",
      honor: "First Class Honours",
      icon: <GraduationCap className="h-5 w-5" />,
      certificate: "/images/certificate.png",
    },
    {
      institution: "University of the People",
      location: "Pasadena, California",
      degree: "Associate of Science in Computer Science",
      period: "Dec 2022 – April 2024",
      honor: "Cumulative GPA: 3.42",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      institution: "University of Technology (Yatanarpon Cyber City)",
      location: "Mandalay, Myanmar",
      degree: "Bachelor of Engineering in Mechanical Precision and Automation",
      period: "Dec 2015 – March 2020",
      note: "Completed four years of a six-year program (suspended due to covid-19)",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ]

  return (
    <section className="py-10">
      <SectionHeading id="education" title="Education" subtitle="My academic background" />

      <div className="mt-8 space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="h-10 w-10 min-w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {edu.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg md:text-xl">{edu.institution}</CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground">{edu.location}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm md:text-base font-medium">{edu.degree}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{edu.period}</p>
                {edu.honor && (
                  <p className="text-xs md:text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    {edu.honor}
                  </p>
                )}
                {edu.note && <p className="text-xs md:text-sm italic">{edu.note}</p>}
                {edu.certificate && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium mb-3 text-muted-foreground">Certificate</h4>
                    <div className="relative w-full max-w-xs md:max-w-sm mx-auto">
                      <Image
                        src={edu.certificate}
                        alt={`${edu.institution} Certificate`}
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-lg border object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
