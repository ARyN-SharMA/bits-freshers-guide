"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { useState, useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Listen for sidebar collapse state changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false) // Close mobile sidebar on desktop
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="flex min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className="flex-1 transition-all duration-300 ease-in-out lg:ml-0">
              <div className="animate-fade-in-up">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
