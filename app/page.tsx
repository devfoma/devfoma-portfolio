import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { GitHubContributions } from "@/components/github-contributions"
import { About } from "@/components/about"
import { ProjectsHighlight } from "@/components/projects-highlight"
import { WorkExperience } from "@/components/work-experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ProjectsHighlight />
      <WorkExperience />
      <GitHubContributions />
      <Contact />
      <Footer />
    </main>
  )
}
