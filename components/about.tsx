export function About() {
  return (
    <section id="about" className="bg-background border-t border-border py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div className="space-y-6">
            <div className="flex justify-center md:justify-start mb-8">
              <img
                src="/images/ai-20robotics.png"
                alt="Foma Avatar"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary-light shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <h2 className="text-4xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Hey 👋, I'm Foma! <br /> <br /> A fullstack blockchain developer building on the decentralized ecosystem (web 3) and
              traditional systems (web 2). <br /> <br /> I'm passionate about solving problems and building things through code.
              Programming isn't just my profession, it's my passion.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I love exploring new technologies, writing elegant code, and crafting innovative solutions. Based in
              Lagos, Nigeria, I'm open to remote work worldwide and excited about building products that create real
              value. Very flexible with time zone communications.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary-light">50+</p>
                <p className="text-foreground/60">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-light">100k+</p>
                <p className="text-foreground/60">Total Contributions</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary-light transition-colors">
              <p className="text-sm font-semibold text-primary-light mb-2">Frontend</p>
              <p className="text-foreground/70">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary-light transition-colors">
              <p className="text-sm font-semibold text-primary-light mb-2">Blockchain & Web3</p>
              <p className="text-foreground/70">Smart Contracts, Web3 Integration, Decentralized Apps</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary-light transition-colors">
              <p className="text-sm font-semibold text-primary-light mb-2">Backend & Tools</p>
              <p className="text-foreground/70">Express, GraphQL, PostgreSQL, Firebase, Git</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary-light transition-colors">
              <p className="text-sm font-semibold text-primary-light mb-2">Languages</p>
              <p className="text-foreground/70">JavaScript, Python, Rust, Bash, Solidity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
