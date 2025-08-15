"use client"
import { useState } from "react"

export function About() {
  const [activeTab, setActiveTab] = useState("Languages")

  const skillsData = {
    Languages: [
      { name: "Java", color: "bg-orange-500", icon: "☕" },
      { name: "Python", color: "bg-blue-500", icon: "🐍" },
      { name: "JavaScript", color: "bg-yellow-500", icon: "JS" },
    ],
    "Web Technologies": [
      { name: "React.js", color: "bg-cyan-500", icon: "⚛️" },
      { name: "Node.js", color: "bg-green-600", icon: "🟢" },
      { name: "Express.js", color: "bg-gray-700", icon: "EX" },
      { name: "HTML", color: "bg-orange-600", icon: "H5" },
      { name: "CSS", color: "bg-blue-600", icon: "C3" },
      { name: "Bootstrap", color: "bg-purple-600", icon: "B" },
      { name: "Material UI", color: "bg-blue-400", icon: "M" },
    ],
    "Databases & Tools": [
      { name: "MongoDB", color: "bg-green-500", icon: "🍃" },
      { name: "MySQL", color: "bg-blue-500", icon: "🐬" },
      { name: "Git", color: "bg-red-500", icon: "📝" },
      { name: "GitHub", color: "bg-gray-800", icon: "🐙" },
      { name: "Docker", color: "bg-blue-400", icon: "🐳" },
      { name: "VS Code", color: "bg-blue-600", icon: "💻" },
    ],
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background and technical expertise
          </p>
        </div>

        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate Full-Stack Developer and Problem Solver, currently pursuing my B.E. in Information
              Technology (2027). I specialize in building scalable web applications with React.js, Node.js, Express, and
              MongoDB, and I'm expanding my expertise into Cloud Computing, DevOps, and AI-powered solutions. I thrive
              on creating high-performance, user-centric products, contributing to open-source projects, and solving
              complex problems through clean, efficient code.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary text-center">Technical Skills</h3>

            {/* Tab buttons */}
            <div className="flex justify-center">
              <div className="bg-card rounded-lg p-1 border border-border">
                {Object.keys(skillsData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills grid with scroll */}
            <div className="overflow-x-auto">
              <div className="flex gap-6 pb-4 min-w-max justify-center">
                {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center space-y-3 min-w-[120px] group cursor-pointer">
                    <div
                      className={`w-20 h-20 ${skill.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      {skill.icon}
                    </div>
                    <span className="font-bold text-foreground text-center text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
