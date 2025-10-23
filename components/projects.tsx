"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Youtube, ExternalLink  } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: 'Text Data Collection Platform (for "guided-back" translation)',
      description:
        "As part of my final year project, I developed a comprehensive translation platform with sophisticated role-based access control, featuring three distinct user types (Freelancer, QA Member, Admin) each with dedicated dashboards and permissions. Implemented a complete workflow system where Admins create translation jobs, Freelancers complete tasks, and QA Members perform quality assessment with acceptance metrics tracking. Built robust authentication with JWT, email verification, and role-specific password management flows. The platform includes an advanced appeal system allowing freelancers to challenge rejected translations with documentation upload capability. Database schema leverages SQLAlchemy ORM with efficient relationship mapping between users, tasks, and languages. Features multi-language system localization (English, Burmese, and regional dialects) to support linguistic diversity in Myanmar.",
      techStack: ["Python", "TypeScript", "FastAPI", "PostgreSQL", "React"],
      links: [
        {
          type: "demo",
          url: "https://youtu.be/7jabVNqLNj8",
          icon: <Youtube className="h-4 w-4 mr-2" />,
          label: "Watch Demo",
        },
        {
          type: "github",
          url: "https://github.com/itsakphyo/myanlang-translation-platform",
          icon: <Github className="h-4 w-4 mr-2" />,
          label: "View Code",
        },
      ],
    },
    {
      title: 'AI-Powered Telegram Bot with RAG Pipeline',
      description:
        "Developed an intelligent Telegram assistant leveraging Google Cloud Vertex AI with Retrieval-Augmented Generation (RAG) for contextual responses. Built on FastAPI with clean architecture, the bot automatically syncs knowledge from Google Drive documents, processes queries through Gemini 1.5 Flash model, and delivers personalized answers. Features production-ready webhook integration, automated document corpus management, containerized Cloud Run deployment, and comprehensive monitoring with structured logging and health endpoints.",
      techStack: ["Python", "FastAPI", "Vertex AI", "RAG", "Gemini 1.5", "Docker", "Cloud Run", "Google Drive API"],
      links: [
        {
          type: "demo",
          url: "https://t.me/itsakphyo_bot",
          icon: <FontAwesomeIcon icon={faTelegram} className="h-4 w-4 mr-2" />,
          label: "Try Bot",
        },
        {
          type: "github",
          url: "https://github.com/itsakphyo/itsakphyo-bot",
          icon: <Github className="h-4 w-4 mr-2" />,
          label: "View Code",
        },
      ],
    },
    {
      title: "Let's Share – Full-Stack Clean Architecture Demo",
      description:
        "Demonstrated professional-grade full-stack development with a clean, enterprise-style architecture emphasizing scalability, maintainability, and testability. The project implements a layered backend using FastAPI, SQLAlchemy, and PostgreSQL, following repository and service patterns with dependency injection, async data handling, and JWT-based authentication. The frontend, built with React and TypeScript, adopts a modular architecture with Zustand state management, custom hooks, and a dedicated API service layer for clean separation of concerns.",
      techStack: ["Python", "FastAPI", "SQLAlchemy (Async)", "PostgreSQL", "React 19", "TypeScript", "Zustand", "Axios"],
      links: [
        {
          type: "github",
          url: "https://github.com/itsakphyo/lets_share",
          icon: <Github  className="h-4 w-4 mr-2" />,
          label: "View Code",
        },
      ],
    },
    {
      title: "Fact Checker — Chrome Extension with AI-Powered Backend",
      description:
        "Built a browser extension with a FastAPI backend that allows users to fact-check selected text or images directly from any webpage. The backend leverages Google Gemini, a large language model (LLM), for real-time claim verification, web search, and OCR-based image analysis. Includes multilingual support via Google Cloud Translate and is containerized with Docker for easy deployment.",
      techStack: ["JavaScript", "Python", "FastAPI", "Docker", "Google Gemini", "Google Cloud Translate", "Google Cloud Platform"],
      links: [
        {
          type: "demo",
          url: "https://chromewebstore.google.com/detail/fact-checker/fkljeknlglobikhccghfkjdbgoeboiip",
          icon: <ExternalLink  className="h-4 w-4 mr-2" />,
          label: "View Extension",
        },
        {
          type: "github",
          url: "https://github.com/itsakphyo/fact-checker-server",
          icon: <Github  className="h-4 w-4 mr-2" />,
          label: "View Code",
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
      title: 'fMRI Brain Activity Classification for Music Genre Prediction',
      description:
        "Developed a comprehensive machine learning pipeline to classify fMRI brain activity data and predict music genres based on neural responses in the auditory cortex. Implemented end-to-end workflow through three structured Jupyter notebooks covering exploratory data analysis, systematic model comparison, and final model training. Processed 22,036 brain activity features from blood-oxygenation level measurements across 160 training samples spanning five music genres (Ambient, Country, Heavy Metal, Rock, Classical). Applied advanced feature engineering with SelectKBest feature selection, PCA dimensionality reduction, and statistical significance testing. Conducted comprehensive model evaluation comparing 9+ ML algorithms including Random Forest, XGBoost, LightGBM, and SVM with cross-validation and hyperparameter optimization. Built robust data preprocessing pipeline handling feature scaling, problematic feature identification, and proper CSV data loading without headers. Achieved systematic model performance tracking with metadata persistence and confidence scoring for final predictions on 40 test samples.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "XGBoost", "LightGBM"],
      links: [
        {
          type: "github",
          url: "https://github.com/itsakphyo/classifying-the-brain-on-music",
          icon: <Github className="h-4 w-4 mr-2" />,
          label: "View Code",
        },
        {
          type: "kaggle",
          url: "https://www.kaggle.com/competitions/classifying-the-brain-on-music/overview",
          icon: <ExternalLink className="h-4 w-4 mr-2" />,
          label: "Kaggle",
        },
      ],
    },
    {
      title: 'Football Total Goals Predictor with CatBoost ML',
      description:
        "Developed an advanced machine learning system to predict total goals in football matches using CatBoost regression and comprehensive betting odds analysis. Built end-to-end prediction pipeline processing historical match data from 9+ European leagues including Premier League, Bundesliga, La Liga, Serie A, and Championship divisions. Implemented sophisticated feature engineering creating 16 derived features from betting odds (PSH, PSD, PSA) through polynomial transformations, geometric combinations, and complex mathematical interactions. Designed robust data preprocessing workflow handling multi-league CSV imports with encoding detection, target variable creation (FTHG + FTAG), and outlier filtering for matches with ≤8 total goals. Constructed modular Python architecture with separate modules for preprocessing, feature engineering, model training, and interactive prediction capabilities. Achieved systematic model evaluation using Mean Absolute Error (MAE) with train/validation/test splits and implemented real-time single-match prediction interface with probability distribution visualization using matplotlib and scipy. Deployed configurable YAML-based hyperparameter management and integrated Poetry dependency management for reproducible development environment.",
      techStack: ["Python", "CatBoost", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Scipy", "Poetry", "YAML"],
      links: [
        {
          type: "github",
          url: "https://github.com/itsakphyo/bet",
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
                <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs md:text-base text-justify">{project.description}</p>
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
