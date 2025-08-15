import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Briefcase } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      category: "Certifications",
      icon: Award,
      items: ["Cisco Cybersecurity Essentials certification", "Salesforce AI Associate credential"],
    },
    {
      category: "Virtual Experience Programs",
      icon: Briefcase,
      items: [
        "J.P. Morgan virtual experience program",
        "Goldman Sachs virtual experience program",
        "Tata virtual experience program",
      ],
    },
    {
      category: "Leadership & Mentoring",
      icon: Users,
      items: [
        "Mentored juniors as an Academic Instructor, improving their academic outcomes",
        "Core Contributor at Industry Institute Interaction Team (IIIT), T&P Cell",
      ],
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Achievements & <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{achievement.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievement.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Recognition & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Consistently recognized for academic excellence, leadership, and technical skills. Actively contributing
                to the tech community through mentoring and industry collaboration, while continuously expanding
                expertise through professional certifications and hands-on experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
