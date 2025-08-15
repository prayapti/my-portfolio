"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi, I am Prayapti"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400 mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Full Stack Developer & AI Enthusiast
          </h2>

          <p className="text-lg text-gray-300 mb-8">passionate about creating innovative tech solutions</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/prayapti" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/prayapti-patil"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:prayaptipatil@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img.jpg-zISxuRw0tyAvgx9jirmnbEAP7jNHsj.jpeg"
              alt="Prayapti Patil"
              className="w-80 h-80 object-cover object-center rounded-full border-4 border-blue-400 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
