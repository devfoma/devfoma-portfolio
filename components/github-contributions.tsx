"use client"

import { useEffect, useState } from "react"
import { Github } from "lucide-react"

interface ContributionData {
  totalContributions: number
  repositories: Array<{
    name: string
    description: string
    url: string
    stars: number
    language: string
  }>
}

export function GitHubContributions() {
  const [data, setData] = useState<ContributionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch("https://api.github.com/users/devfoma")
        if (!response.ok) throw new Error("Failed to fetch GitHub data")

        const userData = await response.json()

        const reposResponse = await fetch("https://api.github.com/users/devfoma/repos?per_page=6&sort=stars")
        if (!reposResponse.ok) throw new Error("Failed to fetch repositories")

        const repos = await reposResponse.json()

        setData({
          totalContributions: userData.public_repos,
          repositories: repos.map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description provided",
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || "Unknown",
          })),
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  if (loading) {
    return (
      <section id="github" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-foreground flex items-center gap-2">
              <Github className="text-primary-medium" /> GitHub Contributions
            </h2>
            <p className="text-foreground/60">Loading contributions...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error || !data) {
    return (
      <section id="github" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-card rounded-lg p-8 border border-border">
          <p className="text-foreground/60">
            Unable to load GitHub contributions. Visit my profile directly:{" "}
            <a
              href="https://github.com/devfoma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-medium hover:underline"
            >
              github.com/devfoma
            </a>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-12 animate-fade-in-up">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-foreground flex items-center gap-2">
            <Github className="text-primary-medium" /> Recent Projects
          </h2>
          <p className="text-foreground/60">{data.totalContributions} public repositories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-medium transition-colors">
                    {repo.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm bg-primary-lightest text-primary-dark rounded-full px-2 py-1">
                    ⭐ {repo.stars}
                  </div>
                </div>
                <p className="text-foreground/60 text-sm line-clamp-2">{repo.description}</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xs font-mono bg-primary-lightest text-primary-dark rounded px-2 py-1">
                    {repo.language}
                  </span>
                  <span className="text-primary-medium group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-8">
          <a
            href="https://github.com/devfoma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-medium text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
          >
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
