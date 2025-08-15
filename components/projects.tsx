import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Quick-Gen AI",
      description:
        "Engineered and deployed a production-grade AI-powered SaaS platform with real-time text/content generation, secure authentication, and dynamic pricing for monetization.",
      image: "/quick-gen-ai-dashboard.png",
      technologies: ["React", "Node.js", "PostgreSQL", "AI SDK"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prayapti",
    },
    {
      title: "StoxPro",
      description:
        "Engineered a high-fidelity trading simulation platform inspired by Zerodha, enabling real-time portfolio, order, and holdings management with responsive UI.",
      image: "/stock-trading-simulator-dashboard.png",
      technologies: ["React.js", "Material UI", "Bootstrap", "Jest"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/prayapti",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-work-sans">Featured Projects</h2>
          <p className="text-white max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-primary mb-3 font-work-sans">{project.title}</CardTitle>
                <p className="text-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
