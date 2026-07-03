import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const skills = [
    "Java",
    "Python",
    "Go",
    "C++",
    "JavaScript",
    "TypeScript",
    "Distributed Systems",
    "Cyber-Physical Systems",
    "HPC",
    "Spring Boot",
    "React",
    "Vue",
    "Node.js",
    "PyTorch",
    "AWS",
    "GCP",
    "Azure",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Kafka",
    "RabbitMQ",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6 font-serif">
                    I am a distributed systems researcher and doctoral student
                    in Cyber-Physical Systems at Luleå University of Technology
                    in Sweden, where I started my PhD in January 2026.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 font-serif">
                    My work is increasingly focused on distributed systems,
                    performance, coordination, and reliability, building on my
                    background designing backend platforms and cloud-native
                    services.
                  </p>
                  <p className="text-lg leading-relaxed font-serif">
                    In my free time, I still like to build useful products like
                    {" "}
                    <a
                      href="https://paycycl.com"
                      target="_blank"
                      rel="noopener"
                      className="font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Paycycl
                    </a>
                    , a personal finance app created for my own use and
                    for people managing money globally.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Research & Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
