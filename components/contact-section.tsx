import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground font-serif leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborating on exciting projects, or sharing
                  insights about software engineering and distributed systems.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <a
                      href="mailto:jonamarkin@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      jonamarkin@gmail.com
                    </a>
                  </div>

{/*                   <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">+393286870969</span>
                  </div> */}

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Pisa, Italy</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/jonamarkin" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linkedin.com/in/atomarkin" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Research & Development</h4>
                    <p className="text-sm text-muted-foreground font-serif">
                      Working on distributed compute infrastructure for AI models at the University of Pisa, focusing on
                      HPC-Cloud integration.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Open Source</h4>
                    <p className="text-sm text-muted-foreground font-serif">
                      Contributing to enterprise-grade tools and sharing knowledge through technical articles and
                      conference talks.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Interests</h4>
                    <p className="text-sm text-muted-foreground font-serif">
                      Distributed systems, cloud-native architectures, performance optimization, and developer tooling.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
