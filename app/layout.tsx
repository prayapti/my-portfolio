import type React from "react"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "Prayapti Patil - Full Stack Developer",
  description:
    "Portfolio of Prayapti Patil - IT Engineering Student specializing in AI/SaaS and Full-Stack Development",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
