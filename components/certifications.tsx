import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Brain } from "lucide-react"

export function Certifications() {
  const certificationCategories = [
    {
      title: "Virtual Experience Programs",
      icon: Building2,
      description: "Industry simulation programs from Forage",
      certifications: [
        {
          name: "J.P. Morgan Software Engineering",
          issuer: "Forage",
          year: "2024",
          skills: ["React.js", "Python", "Git"],
        },
        {
          name: "Goldman Sachs Engineering",
          issuer: "Forage",
          year: "2024",
          skills: ["Password Security", "Cryptography"],
        },
        {
          name: "Tata Data Visualization",
          issuer: "Forage",
          year: "2024",
          skills: ["Data Analysis", "Tableau", "Business Intelligence"],
        },
      ],
    },
    {
      title: "AI & Technology",
      icon: Brain,
      description: "Artificial Intelligence and emerging technologies",
      certifications: [
        {
          name: "Salesforce AI Associate",
          issuer: "Salesforce",
          year: "2024",
          skills: ["AI Fundamentals", "Machine Learning", "Salesforce Platform"],
        },
        {
          name: "Cisco Cybersecurity Essentials",
          issuer: "Cisco",
          year: "2024",
          skills: ["Network Security", "Threat Analysis", "Risk Management"],
        },
      ],
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and virtual experience programs that showcase my commitment to continuous
            learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificationCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-background border-accent/20 hover:border-accent/40 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="p-4 bg-card rounded-lg border border-accent/10">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-primary">{cert.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Issued by {cert.issuer}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
