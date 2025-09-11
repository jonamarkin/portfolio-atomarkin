"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar } from "lucide-react"

export function BlogSection() {
  const [selectedTopic, setSelectedTopic] = useState("All")

  const blogPosts = [
    {
      title: "Harnessing Testcontainers for Reliable Integration Tests",
      platform: "GitHub",
      url: "https://github.com/jonamarkin/testcontainers-talk",
      date: "2025-07-07",
      topic: "Testing",
      description:
        "Strategies for writing stable, reproducible integration tests using Testcontainers and Dockerized environments in Spring Boot applications.",
    },
    {
      title: "FastMap: Real-Time IoT Anomaly Detection with Redis's Multi-Model Database",
      platform: "Dev.to",
      url: "https://dev.to/jonamarkin/fastmap-real-time-iot-anomaly-detection-with-rediss-multi-model-database-3bg5",
      date: "2025-08-10",
      topic: "IoT",
      description:
        "Developing FastMap, a real-time anomaly detection platform for large-scale sensor networks using Redis's multi-model capabilities.",
    },
    {
      title: "Local Development, Remote Data: Accessing Fly.io PostgreSQL from Your Java API",
      platform: "Dev.to",
      url: "https://dev.to/jonamarkin/local-development-remote-data-accessing-flyio-postgresql-from-your-java-api-2jb5",
      date: "2025-01-26",
      topic: "Databases",
      description:
        "A guide to connecting local Java applications to remote PostgreSQL databases hosted on Fly.io for seamless development workflows.",
    },
    {
      title: "Spring Boot Basics: Crafting Your First Application",
      platform: "Dev.to",
      url: "https://dev.to/jonamarkin/spring-boot-basics-crafting-your-first-application-4kf3",
      date: "2024-06-15",
      topic: "Spring Boot",
      description:
        "A beginner-friendly introduction to building your first Spring Boot application, covering setup, configuration, and essential features.",
    }
    
  ]

  const topics = ["All", ...Array.from(new Set(blogPosts.map((post) => post.topic)))]

  const filteredPosts = selectedTopic === "All" ? blogPosts : blogPosts.filter((post) => post.topic === selectedTopic)

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">Latest Articles</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {topics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.platform}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {post.topic}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-balance leading-tight">{post.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-serif leading-relaxed text-sm">{post.description}</p>

                  <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Article
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
