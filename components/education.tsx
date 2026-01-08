export function Education() {
  const educationList = [
    {
      school: "Chukwuemeka Odumegwu Ojukwu University",
      degree: "B.sc Computer Science",
      duration: "October 2022 - October 2026",
      location: "Anambra State",
      logo: "/images/image.png",
    },
    {
      school: "Web3bridge",
      degree: "Web 2 Advanced, Frontend Development",
      duration: "August 2024 - November 2024",
      logo: "/images/image.png",
    },
    {
      school: "Women in DeFi",
      degree: "Intro to Blockchain 2.0, Decentralized Finance",
      duration: "July 2024 - August 2024",
      logo: undefined,
    },
    {
      school: "BOTVAD Schools",
      degree: "High School Diploma",
      duration: "September 2015 - October 2021",
      logo: undefined,
    },
  ]

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>
      <div className="space-y-6">
        {educationList.map((edu, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            {edu.logo && (
              <img
                src={edu.logo || "/placeholder.svg"}
                alt={edu.school}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0 bg-accent/10"
              />
            )}
            <div className={edu.logo ? "flex-1 border-l-2 border-accent pl-6 py-2" : "flex-1 py-2"}>
              <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-accent font-medium">{edu.school}</p>
              <p className="text-foreground/60 text-sm">
                {edu.duration} {edu.location && `• ${edu.location}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
