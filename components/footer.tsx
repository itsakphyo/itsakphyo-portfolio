import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">© {currentYear} Aung Khant Phyo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
