import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-6 md:px-8 py-8 space-y-2 max-w-4xl lg:max-w-6xl">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
