"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-medium">
          Devfoma
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-foreground/70 hover:text-primary-light transition-colors">
            About
          </Link>
          <Link href="#work-experience" className="text-foreground/70 hover:text-primary-light transition-colors">
            Work
          </Link>
          <Link href="/blog" className="text-foreground/70 hover:text-primary-light transition-colors">
            Blog
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 bg-white text-[#0a0e27] rounded-full hover:bg-foreground transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-forground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 border-b border-border">
          <nav className="flex flex-col gap-4 px-4 py-4">
            <Link href="#about" className="text-foreground/70 hover:text-primary-light transition-colors">
              About
            </Link>
            <Link href="#work-experience" className="text-foreground/70 hover:text-primary-light transition-colors">
              Work
            </Link>
            <Link href="/blog" className="text-foreground/70 hover:text-primary-light transition-colors">
              Blog
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2 bg-white text-[#0a0e27] rounded-full hover:bg-foreground transition-colors font-medium w-fit"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
