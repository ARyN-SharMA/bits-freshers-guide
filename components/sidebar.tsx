"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  School,
  ImportIcon as Translate,
  AlertTriangle,
  User,
  Users,
  Target,
  Moon,
  Sun,
  Menu,
  X,
  Home,
  Sparkles,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: "Introduction", href: "/", icon: Home, color: "text-blue-500" },
    { name: "BITS Lingo", href: "/bits-lingo", icon: Translate, color: "text-emerald-500" },
    { name: "Important Notes", href: "/important-notes", icon: AlertTriangle, color: "text-amber-500" },
    { name: "Group A", href: "/single-degree", icon: User, color: "text-purple-500" },
    { name: "Group B", href: "/dual-degree", icon: Users, color: "text-pink-500" },
    { name: "Strategy", href: "/timetable-strategy", icon: Target, color: "text-cyan-500" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-6 left-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="glass-effect hover-glow shadow-lg"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Desktop collapse button */}
      <div className="hidden lg:block fixed top-6 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleCollapse}
          className="glass-effect hover-glow shadow-lg bg-transparent"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 z-50 h-full glass-card border-r-0
        transform transition-all duration-500 ease-out custom-scrollbar
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${isCollapsed ? "lg:w-16" : "lg:w-64"}
        w-64
        lg:static lg:transform-none
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`p-4 border-b border-border/10 ${isCollapsed ? "lg:p-2" : ""}`}>
            {!isCollapsed && (
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-chart-1 to-chart-2 rounded-2xl flex items-center justify-center animate-float">
                    <School className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-chart-4 to-chart-5 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-lg text-gradient">BITS Guide</h1>
                  <p className="text-xs text-muted-foreground">Fresher's 2025-26</p>
                </div>
              </div>
            )}

            {isCollapsed && (
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary via-chart-1 to-chart-2 rounded-xl flex items-center justify-center">
                    <School className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Theme toggle */}
            <Button
              variant="outline"
              onClick={toggleTheme}
              className={`${
                isCollapsed ? "w-10 h-10 p-0 justify-center" : "w-full justify-start gap-3 h-10"
              } glass-effect hover-glow group bg-transparent`}
            >
              {mounted && theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4 text-amber-500 group-hover:rotate-180 transition-transform duration-500" />
                  {!isCollapsed && <span className="font-medium">Light Mode</span>}
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-indigo-500 group-hover:rotate-12 transition-transform duration-500" />
                  {!isCollapsed && <span className="font-medium">Dark Mode</span>}
                </>
              )}
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-2 py-4">
            <nav className="space-y-2">
              {navigation.map((item, index) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      group flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl
                      transition-all duration-300 ease-out relative overflow-hidden
                      ${
                        isActive
                          ? "bg-gradient-to-r from-primary to-chart-1 text-white shadow-lg shadow-primary/25"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }
                      ${isCollapsed ? "justify-center" : ""}
                    `}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <div className="relative">
                      <Icon
                        className={`w-4 h-4 transition-all duration-300 ${
                          isActive ? "text-white scale-110" : `${item.color} group-hover:scale-110`
                        }`}
                      />
                      {isActive && (
                        <div className="absolute inset-0 animate-pulse-slow">
                          <Icon className="w-4 h-4 text-white/50" />
                        </div>
                      )}
                    </div>
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 relative">
                          {item.name}
                          {isActive && (
                            <div className="absolute inset-0 animate-pulse-slow text-white/30">{item.name}</div>
                          )}
                        </span>
                        {isActive && <Zap className="w-3 h-3 text-white animate-pulse" />}
                      </>
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-chart-1/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </Link>
                )
              })}
            </nav>
          </ScrollArea>

          {/* Footer */}
          {!isCollapsed && (
            <div className="p-4 border-t border-border/10">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-chart-1 to-chart-2 rounded-full animate-pulse" />
                  <div
                    className="w-2 h-2 bg-gradient-to-r from-chart-2 to-chart-3 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="w-2 h-2 bg-gradient-to-r from-chart-3 to-chart-4 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
                <p className="text-xs text-muted-foreground font-medium">Compiled by Seniors</p>
                <p className="text-xs text-muted-foreground">I Semester 2025-26</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
