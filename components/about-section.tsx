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
                    Experienced software engineer with a strong track record of
                    building scalable systems and expertise in enterprise system
                    design. Currently pursuing advanced research in HPC,
                    Distributed Systems & Cyber-Physical Systems.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 font-serif">
                    Passionate about clean & sclalable architecture, performance
                    optimization, and building fault-tolerant systems that
                    scale.
                  </p>
                  <p className="text-lg leading-relaxed font-serif">
                    I enjoy sharing knowledge through tech blogs and
                    contributing to open-source projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
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
