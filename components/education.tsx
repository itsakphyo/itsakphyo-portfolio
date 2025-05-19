"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      institution: "University of Greenwich",
      location: "London, United Kingdom",
      degree: "Bachelor of Science (Honours) in Computing",
      period: "June 2024 – April 2025",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      institution: "University of the People",
      location: "Pasadena, California",
      degree: "Associate of Science in Computer Science",
      period: "Dec 2022 – April 2024",
      gpa: "Cumulative GPA: 3.42",
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
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {edu.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{edu.institution}</CardTitle>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                {edu.gpa && <p className="text-sm">{edu.gpa}</p>}
                {edu.note && <p className="text-sm italic">{edu.note}</p>}
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Award className="h-5 w-5" />
              </div>
              <CardTitle>Honors List</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                University of the People: Recognized for achieving a CGPA between 3.00 and 3.49 for Term-5 of the
                2023-2024 academic year.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
