import { Github, ExternalLink } from "lucide-react"

interface Project {
  name: string
  description: string
  repoUrl?: string
  liveUrl?: string
  isPrivate?: boolean
}

const projects: Project[] = [
  {
    name: "Civicchain",
    description:
      "CivicChain is a next-generation civic identity and payment platform combining blockchain security with trusted government services. Built on the Cardano blockchain and powered by Hyperledger Identus, CivicChain delivers self-sovereign identity (SSI) solutions that put citizens in control of their data while ensuring compliance and transparency.",
    repoUrl: "https://github.com/Civicchain2/Civicchain",
    liveUrl: "https://civicchain-topaz.vercel.app/",
  },
  {
    name: "Medikey",
    description:
      "MediKey is a decentralized healthcare records management system built on the Nostr protocol and Bitcoin Lightning Network. It enables patients to control their medical data while allowing secure, permissioned access for healthcare providers.",
    repoUrl: "https://github.com/medikey/medikey",
    liveUrl: "https://medikey-azure.vercel.app/",
  },
  {
    name: "Stratos",
    description:
      "Stratos is a football community that gives players the stage to shine, fans the power to fuel futures, and clubs the clarity to discover greatness. A cutting-edge platform for connecting the soccer ecosystem.",
    isPrivate: true,
    liveUrl: "https://stratos-nu.vercel.app/",
  },
  {
    name: "LinkedIn Book Landing",
    description:
      "Unlinked2LinkedIn is a web application that presents a comprehensive guide designed to help beginners grow their LinkedIn presence and engagement. The guidebook walks users through the steps to transform a basic (or unlinked) LinkedIn profile into one that attracts connections, engagement, and professional opportunities.",
    repoUrl: "https://github.com/devfoma/linkedin-book-landing",
    liveUrl: "https://unlinked2linkedin.vercel.app/",
  },
  {
    name: "Markme",
    description:
      "An innovative mobile application built for educators to make student attendance, grade them, and view their records all in one place.",
    isPrivate: true,
  },
]

export function ProjectsHighlight() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Top Projects</h2>
        <p className="text-muted-foreground text-lg">
          A selection of my recent work showcasing full-stack development and design expertise.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 slide-in-stagger">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-lg border border-border bg-card p-6 sm:p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
          >
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{project.name}</h3>
                {project.isPrivate && (
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    Private Project
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  <Github size={18} />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  <span>Live Site</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
