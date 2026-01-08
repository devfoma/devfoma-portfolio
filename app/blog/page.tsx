"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Blog } from "@/components/blog"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Blog />
      <Footer />
    </main>
  )
}
