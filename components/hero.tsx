import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="animate-fade-in-up space-y-8">
        <div className="text-center justify-center items-center">
          <h1 className="text-5xl md:text-7xl mb-4 font-bold text-foreground leading-tight">
            Hi, I am <span className="text-primary-light">Foma 👋</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60  font-light">
            Building Products & Giving Value. <br />
            I am a Software Engineer who loves writing code, fixing bugs and making
            magic.
          </p>
        </div>

        <div className="flex flex-row sm:flex-row md:flex-row gap-4 pt-8">
          <Link
            href="#github-contributions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-medium border-2 border-primary-medium text-white rounded-full hover:bg-primary-light transition-all hover:gap-3 font-medium"
          >
            View My Work <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-medium text-primary-light rounded-full hover:bg-primary-medium/10 transition-colors font-medium"
          >
            Get In Touch
          </Link>
        </div>

        <div className="flex gap-6 pt-8">
          <Link
            href="https://github.com/devfoma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary-light transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/devfoma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary-light transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:faithamarachi860@gmail.com"
            className="text-foreground/60 hover:text-primary-light transition-colors"
          >
            <Mail size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
