import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/95 backdrop-blur-md border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-primary-medium">
              foma
            </Link>
            <p className="text-foreground/60 mt-2">Building digital experiences with code and creativity</p>
          </div>

          <div className="flex gap-8 text-foreground/60">
            <Link href="#about" className="hover:text-primary-medium transition-colors">
              About
            </Link>
            <Link href="#work" className="hover:text-primary-medium transition-colors">
              Work
            </Link>
            <Link href="#contact" className="hover:text-primary-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60">
          <p>&copy; {currentYear} Foma. All rights reserved. Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
