"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export interface BlogPost {
  id: string
  title: string
  description: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web2 Applications",
    description: "Exploring best practices for creating robust blockchain-based applications",
    excerpt:
      "Learn Why I Ditched YouTube Embed for Mux + Next Video in my Next.js Landing Page",
    date: "August 8, 2025",
    category: "Web2",
    readTime: "2 min read",
    content: `
## Why I Ditched YouTube Embed for Mux + Next Video in my Next.js Landing Page

Mux is a really great tool, I just created a sales landing page for Sylvia Mmesoma Amechi new book. 'unlinked to linkedin'

check it out here: https://unlinked2linkedin.vercel.app/

While building the landing page using Next.js, I ran into a blocker:
I had a powerful testimonial video ready to go, but the Youtube embed code I intended to use was pure HTML, and it just wouldn’t play nice with my Next.js setup.

Instead of forcing it (or compromising on performance), I explored a better approach:
Mux for high-performance video streaming
Next Video for a seamless developer experience in Next.js
The result?
 ✅ Clean, responsive video playback
 ✅ No YouTube branding or slowdowns
 ✅ Fully integrated with the React component tree

This combo gave me full control over the design and user experience, and made the final landing page faster, sharper, and more professional.
If you're building in Next.js and need to embed video without the HTML headache, Mux + Next Video are honestly a game changer. 

Aside the seemless integration it provides, I love the fact that I can track the data of the viewers and see any error they face while playing the video.`,
  },
]

const categoryColors: Record<string, string> = {
  Web3: "bg-blue-900/30 text-primary-light border-primary-light/50",
  Development: "bg-purple-900/30 text-purple-300 border-purple-300/50",
  Blockchain: "bg-cyan-900/30 text-cyan-300 border-cyan-300/50",
  React: "bg-blue-900/30 text-blue-300 border-blue-300/50",
}

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Sharing insights on web development, blockchain technology, and building scalable applications.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 slide-in-stagger">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="group hover:border-primary-light/50 transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur hover:bg-card/80 border border-border/50 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <Badge variant="outline" className={categoryColors[post.category] || "bg-primary-dark/30"}>
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary-light transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary-light" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12 text-center">
          <Link
            href="#blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-medium hover:bg-primary-light text-white rounded-lg transition-colors font-medium"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
