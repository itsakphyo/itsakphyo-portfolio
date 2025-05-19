"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Youtube } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: 'Text Data Collection Platform (for "guided-back" translation)',
      description:
        "As part of my final year project, I developed a text data collection platform designed for three user roles: Admin, Freelancer, and Data Quality Assurance Member. Each role has specific features and permissions tailored to their responsibilities. Due to the ongoing academic review, the source code and full documentation remain confidential. However, a demo video is available that highlights the platform's main features and shows how each user role interacts with the system.",
      techStack: ["Python", "TypeScript", "FastAPI", "PostgreSQL", "React"],
      links: [
        {
          type: "demo",
          url: "https://youtu.be/7jabVNqLNj8",
          icon: <Youtube className="h-4 w-4 mr-2" />,
          label: "Watch Demo",
        },
      ],
    },
    {
      title: "Chatbot that answer with your own Doc",
      description:
        "Built a chatbot that helps users find information from their documents using text-to-vector conversion and Retrieval-Augmented Generation (RAG). Users can upload PDF or TXT files, which are processed and stored in a vector database, enabling fast and accurate responses to their queries.",
      techStack: ["Python", "LangChain", "ChromaDB", "OpenAI", "Streamlit UI"],
      links: [
        {
          type: "github",
          url: "https://github.com/itsakphyo/first-rag",
          icon: <Github className="h-4 w-4 mr-2" />,
          label: "View Code",
        },
      ],
    },
    {
      title: "Thai Visa Assistance Chatbot with RAG",
      description:
        "Developed (backend-only) chatbot to assist with visa-related inquiries, using text-to-vector conversion and Retrieval-Augmented Generation (RAG) for accurate document retrieval. The system uses a local LLM with Ollama and ChromaDB vector database to provide fast, reliable responses, offering an efficient tool for visa applicants.",
      techStack: ["Python", "LangChain", "Ollama", "Hugging Face", "ChromaDB", "OpenAI"],
      links: [
        {
          type: "github",
          url: "https://github.com/itsakphyo/visa-assistance",
          icon: <Github className="h-4 w-4 mr-2" />,
          label: "View Code",
        },
      ],
    },
  ]

  return (
    <section className="py-10">
      <SectionHeading id="projects" title="Projects" subtitle="What I've built" />

      <div className="mt-8 grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      {link.icon}
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
