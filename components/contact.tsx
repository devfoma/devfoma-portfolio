import { Mail, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-primary-medium rounded-2xl p-12 md:p-16 text-white space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-xl text-white/80 max-w-2xl">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 pt-8">
          <Link
            href="mailto:faithamarachi860@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a0e27] rounded-lg hover:bg-primary-lightest transition-colors font-semibold"
          >
            Send an Email <Mail size={20} />
          </Link>
          <Link
            href="https://github.com/devfoma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
          >
            Visit GitHub <Github size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
          <Link href="mailto:faithamarachi860@gmail.com" className="group">
            <p className="text-sm text-white/60 mb-2">Email</p>
            <p className="text-lg font-semibold group-hover:text-primary-lightest transition-colors flex items-center gap-2">
              faithamarachi860@gmail.com{" "}
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </Link>
          <Link href="https://github.com/devfoma" target="_blank" rel="noopener noreferrer" className="group">
            <p className="text-sm text-white/60 mb-2">GitHub</p>
            <p className="text-lg font-semibold group-hover:text-primary-lightest transition-colors flex items-center gap-2">
              github.com/devfoma{" "}
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </Link>
          <Link href="https://linkedin.com/in/devfoma" target="_blank" rel="noopener noreferrer" className="group">
            <p className="text-sm text-white/60 mb-2">LinkedIn</p>
            <p className="text-lg font-semibold group-hover:text-primary-lightest transition-colors flex items-center gap-2">
              Faith Amarachi <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
