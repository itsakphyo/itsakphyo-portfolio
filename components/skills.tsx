"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "TypeScript"],
    },
    {
      name: "Frameworks & CLoud",
      skills: ["FastAPI", "LangGraph", "OpenAI", "React", "Google Cloud Platform", "Docker", "PostgreSQL", "ChromaDB"],
    },
    {
      name: "Machine Learning & Deep Learning",
      skills: ["Gradient Boosting Models", "Decision Trees", "Sequential Models", "LSTM", "RNN", "GRU"],
    },
  ]

  return (
    <section className="py-10">
      <SectionHeading id="skills" title="Skills" subtitle="Technologies I work with" />

      <div className="mt-8 space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg md:text-xl font-medium">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="px-3 py-1 text-xs md:text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
