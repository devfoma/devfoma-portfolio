export function WorkExperience() {
  const experiences = [
    {
      company: "SMAIR Foundation",
      position: "Development Intern",
      duration: "May 2025 - Present",
      location: "Lagos State, Nigeria",
      description:
        "Contributing to development projects while building professional experience in the foundation sector.",
      logo: "/images/smair-20foundation-20logo.png",
      type: "work",
    },
    {
      company: "GDG on Campus COOU",
      position: "Partnerships and Operations Lead",
      duration: "December 2025 - Present",
      location: "Anambra State, Nigeria",
      description:
        "Leading partnerships and operational initiatives for Google Developer Group on Campus at Chukwuemeka Odumegwu Ojukwu University.",
      logo: "/images/gdg.jpg",
      type: "work",
    },
    {
      company: "Jadtek IT Solutions",
      position: "Frontend Developer",
      duration: "January 2024 - Present",
      location: "Lagos State, Nigeria",
      description:
        "Building responsive and user-friendly web applications using modern frontend technologies and best practices.",
      logo: "/images/jadtek.png",
      type: "work",
    },
  ]

  const education = [
    {
      school: "Chukwuemeka Odumegwu Ojukwu University",
      degree: "B.sc Computer Science",
      duration: "October 2022 - October 2026",
      location: "Anambra State",
      logo: "/images/coou.png",
    },
    {
      school: "Web3bridge",
      degree: "Web 2 Advanced, Frontend Development",
      duration: "August 2024 - November 2024",
      logo: "/images/web3bridge.png",
    },
    {
      school: "Women in DeFi",
      degree: "Intro to Blockchain 2.0, Decentralized Finance",
      duration: "July 2024 - August 2024",
      logo: "/images/women-20in-20defi.jpg",
    },
  ]

  return (
    <section id="work-experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-aut">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-12">Work Experience</h2>
        <div className="space-y-8 slide-in-stagger">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex gap-6 p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-colors bg-card/50 hover:bg-card/80"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center overflow-hidden border border-border/50">
                  <img
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    Current
                  </span>
                </div>
                <p className="text-foreground/60 text-sm mb-3">
                  {exp.duration} • {exp.location}
                </p>
                <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-foreground mb-12">Education</h2>
        <div className="space-y-6 slide-in-stagger">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="flex gap-6 p-6 rounded-lg border border-border/50 hover:border-accent/30 transition-colors bg-card/50 hover:bg-card/80"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center overflow-hidden border border-border/50">
                  <img
                    src={edu.logo || "/placeholder.svg"}
                    alt={edu.school}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-accent font-medium">{edu.school}</p>
                  </div>
                </div>
                <p className="text-foreground/60 text-sm">
                  {edu.duration} {edu.location && `• ${edu.location}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
