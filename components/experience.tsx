"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Backend Engineer (Gen AI Developer)",
      company: "Brillar Singapore",
      type: "Remote, Internship",
      period: "November 2024 - January 2025",
      description:
        "Brillar primarily develops Generative AI applications, including AI agents for text, audio, video, and SQL tasks. I joined as one of three members of the internship team and later, I was welcomed for a full-time developer position.  However, I chose to focus on my upcoming exams and academic responsibilities, so I decided not to continue in the role.",
      responsibilities: [
        "Developed and maintained APIs using FastAPI for scalable AI-driven platforms.",
        "Transformed Jupyter notebooks into production-grade code, ensuring optimized performance for real-world applications.",
        "Collaborated with product-owner and ML researchers to productize AI features for innovative digital products.",
        "Implemented Generative AI concepts (e.g., RAG, Prompt Engineering) and integrated frameworks like Langchain, LangGraph and OpenAI for advanced functionalities (Text, Audio, VIdeo, and SQL Agent).",
      ],
    },
    {
      title: "Data Analyst",
      company: "Magnify Myanmar",
      type: "On-site, Contract",
      period: "August 2023 – April 2024",
      description:
        "This is a social listening company that analyzes and classifies the sentiment of social media posts. I successfully managed one client by automating parts of the workflow using Python. I managed the client independently without the need for a large team and also supported other teams when needed.",
      responsibilities: [
        "Conducted data analysis with Python and PowerBI to derive insights from large datasets.",
        "Developed and maintained dashboards and visualizations to present key findings to stakeholders.",
        "Contributed to Brand Health analysis in the telecom industry, supporting strategic insights and metrics.",
        "Collaborated clients and NLP engineers for better analytical results and reports quality.",
        "Enhanced report automation processes, streamlining operations and improving efficiency.",
        "Prepared comprehensive reports with actionable recommendations to drive business decisions.",
      ],
    },
  ]

  return (
    <section className="py-10">
      <SectionHeading id="experience" title="Work Experience" subtitle="My professional journey" />

      <div className="mt-8 space-y-6">
        {experiences.map((exp, index) => (
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
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} | {exp.type}
                  </p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="italic text-muted-foreground">{exp.description}</p>
                <ul className="space-y-2 list-disc pl-5">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
