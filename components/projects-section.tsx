import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "ToggleFox - Enterprise Feature Flag System",
      description:
        "Production-grade feature flag system with Clean Architecture and 95%+ test coverage. Deployed resilient microservices with Prometheus monitoring and CI/CD pipelines.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Prometheus"],
      githubUrl: "https://github.com/jonamarkin/togglefox",
      liveUrl: "#",
    },
    {
      title: "Bookstore Microservices Application",
      description:
        "Fault-tolerant microservices with async messaging achieving 99.9% uptime under load. Built with comprehensive testing using Testcontainers.",
      technologies: ["Spring Boot", "RabbitMQ", "Testcontainers", "Docker", "Microservices"],
      githubUrl: "https://github.com/jonamarkin/bookstore-microservices",
      liveUrl: "#",
    },
    {
      title: "Order Processing Application",
      description:
        "Containerized Go backend with REST APIs using Domain-Driven Design. Architected with Docker Compose for local development and multi-service orchestration.",
      technologies: ["Go", "Gin", "Docker", "DDD", "REST API", "Docker Compose"],
      githubUrl: "https://github.com/jonamarkin/e-commerce-order-processing",
      liveUrl: "#",
    },
    {
      title: "FastMap: Real-Time IoT Anomaly Detection with Redis's Multi-Model Database",
      description:
        "A real-time anomaly detection platform for large-scale sensor networks. It provides a live map-based dashboard where operators can monitor thousands of IoT sensors at a glance.",
      technologies: ["Redis", "Python", "FastAPI", "Docker", "CI/CD", "HTML", "CSS", "Tailwind CSS"],
      githubUrl: "https://github.com/jonamarkin/fastmap-redis-challenge",
      liveUrl: "#",
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-balance leading-tight">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-serif leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl !== "#" && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
