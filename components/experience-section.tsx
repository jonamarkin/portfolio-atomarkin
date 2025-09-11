import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "HPC-Cloud Researcher & Engineer",
      company: "University of Pisa",
      location: "Pisa, Italy",
      period: "Oct. 2024 - Present",
      description: "Architecting distributed compute infrastructure for AI models using MPI on HPC clusters.",
      technologies: ["MPI", "PyTorch", "FastFlow", "HPC", "C++", "mpiP", "Slurm", "Python" ],
    },
    {
      title: "Software Engineer",
      company: "Union Systems Global",
      location: "Accra, Ghana",
      period: "Jun. 2019 - Dec. 2023",
      description: "Developed scalable core backend services and integrations for web and mobile banking platforms.",
      technologies: ["Java", "Spring", "PostgreSQL", "REST APIs", "CI/CD"],
    },
    {
      title: "Engineer: API & Platforms",
      company: "BRIJ Fintech Ghana Limited",
      location: "Accra, Ghana",
      period: "Oct. 2021 - Jan. 2023",
      description: "Owned design and maintenance of frontend and backend microservices for payments and forex.",
      technologies: ["Java", "Spring Boot", "VueJS", "Vault", "OpenAPI", "Microservices"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">Professional Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold">{exp.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 font-serif leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
