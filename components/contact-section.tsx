import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"

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
                  I'm always interested in research collaborations, distributed systems discussions, and thoughtful
                  product ideas that turn infrastructure into something people can actually use.
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

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Luleå, Sweden</span>
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
                    <h4 className="font-semibold mb-2">PhD Research</h4>
                    <p className="text-sm text-muted-foreground font-serif">
                      Researching distributed systems in Cyber-Physical Systems at Luleå University of Technology.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Product Building</h4>
                    <p className="text-sm text-muted-foreground font-serif">
                      Building practical tools like Paycycl for personal finance, personal use, and global users.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Interests</h4>
                    <p className="text-sm text-muted-foreground font-serif">
                      Distributed systems, reliable infrastructure, cyber-physical systems, performance, and
                      cloud-native architecture.
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
