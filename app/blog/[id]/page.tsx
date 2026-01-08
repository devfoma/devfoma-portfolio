"use client"

import { blogPosts } from "@/components/blog"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { notFound, usePathname } from "next/navigation"

const categoryColors: Record<string, string> = {
  Web3: "bg-blue-900/30 text-primary-light border-primary-light/50",
  Development: "bg-purple-900/30 text-purple-300 border-purple-300/50",
  Blockchain: "bg-cyan-900/30 text-cyan-300 border-cyan-300/50",
  React: "bg-blue-900/30 text-blue-300 border-blue-300/50",
}

export default function BlogPage() {
  const pathname = usePathname()
  const postId = pathname.split("/").pop()

  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-primary-light hover:text-primary-medium transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        {/* Post Header */}
        <article className="prose prose-invert max-w-none">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className={categoryColors[post.category] || "bg-primary-dark/30"}>
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">{post.title}</h1>

            <p className="text-lg text-muted-foreground mb-6">{post.description}</p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="mt-12 text-base leading-relaxed text-muted-foreground prose-headings:text-foreground prose-headings:font-bold prose-a:text-primary-light prose-code:bg-primary-dark/20 prose-code:text-primary-light prose-code:px-2 prose-code:py-1 prose-code:rounded whitespace-pre-wrap">
            {post.content?.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-6 my-2">
                    {paragraph.replace("- ", "")}
                  </li>
                )
              }
              if (paragraph.trim() === "") {
                return <br key={index} />
              }
              return (
                <p key={index} className="my-4">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Other Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.id !== postId)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                  <div className="p-4 rounded-lg border border-border/50 hover:border-primary-light/50 hover:bg-card/50 transition-all">
                    <h4 className="font-semibold text-foreground group-hover:text-primary-light transition-colors mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
