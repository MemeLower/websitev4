import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Marie P. - Künstlerin & Malerin",
  description: "Portfolio der Künstlerin Marie P. - Malerei, Installationen und kreative Werke",
  keywords: "Marie P., Malerei, Kunst, Bilder, Installationen, Acryl, Künstlerin",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
