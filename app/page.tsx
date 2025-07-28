"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  School,
  User,
  Users,
  Target,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  BookOpen,
  Zap,
  Star,
  Rocket,
  Trophy,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/80" />

      <div className="relative z-10 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Hero Header */}
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary via-chart-1 to-chart-2 rounded-3xl flex items-center justify-center animate-float shadow-2xl shadow-primary/25">
                  <School className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-chart-4 to-chart-5 rounded-2xl flex items-center justify-center animate-pulse-slow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-chart-2 to-chart-3 rounded-xl flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-gradient">The </span>
                <br />
                <span className="text-foreground">Fresher's Guide</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your complete roadmap to conquering first-year courses at{" "}
                <span className="text-gradient-secondary font-semibold">B.I.T.S. Pilani</span>
                <br />
                <Badge variant="outline" className="mt-2 text-lg px-4 py-1 glass-effect">
                  I Semester 2025-26
                </Badge>
              </p>
            </div>

            <Alert className="max-w-4xl mx-auto glass-card border-amber-200/50 dark:border-amber-800/50">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <AlertDescription className="text-base">
                <strong className="text-amber-600 dark:text-amber-400">⚠️ Important:</strong> This guide is based on the
                "Tentative Timetable for I Semester 2025-26". All information is for planning purposes and subject to
                change. Always verify with the official registration portal.
              </AlertDescription>
            </Alert>
          </div>

          {/* Introduction Card */}
          <Card className="glass-card hover-lift border-2 border-primary/20 animate-slide-in-left">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-4 text-3xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <span className="text-gradient">Your Academic Journey Starts Here</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Welcome to B.I.T.S. Pilani!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You've made it to one of India's premier institutions. The next few years will be transformative,
                    challenging, and incredibly rewarding. But first, you need to master your first major challenge:
                    <strong className="text-primary"> course registration</strong>.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">The BITSian Way</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This system teaches you strategic thinking, quick decision-making, and adaptability. Consider it
                    your first lesson in the <strong className="text-primary">BITSian problem-solving approach</strong>.
                  </p>
                </div>
              </div>

              <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <AlertDescription className="text-blue-700 dark:text-blue-300">
                  <strong>This guide is your secret weapon</strong> — insider knowledge, strategic advice, and
                  hard-earned wisdom that usually takes semesters to acquire.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card hover-lift group border-2 border-purple-200/50 dark:border-purple-800/50 animate-slide-in-left">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gradient text-xl">Group A</span>
                    <span className="text-sm text-muted-foreground">(Single Degree)</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-3">9 Courses</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete breakdown with instructor insights, strategic recommendations, and insider tips for single
                    degree students(Group A).
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <span className="text-muted-foreground">Mathematics, Thermodynamics, Computer Programming</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full" />
                    <span className="text-muted-foreground">Chemistry, Biology, Physics Labs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full" />
                    <span className="text-muted-foreground">Workshop Practice, Technical Writing, General Biology</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/single-degree">
                    <Button className="w-full group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 h-12">
                      <Trophy className="mr-2 h-4 w-4" />
                      Explore Group A Guide
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift group border-2 border-cyan-200/50 dark:border-cyan-800/50 animate-slide-in-right">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gradient-secondary text-xl">Group B</span>
                    <span className="text-sm text-muted-foreground">(Dual Degree, Chemical, Manu., Civil)</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-secondary mb-3">8 Courses</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized recommendations tailored for course requirements of dual degree, Chemical, Civil and Manufacturing students(Group B).
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                    <span className="text-muted-foreground">Mathematics, MeOW, General Chemistry</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
                    <span className="text-muted-foreground">Electrical Sciences, Engineering Graphics</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                    <span className="text-muted-foreground">Thermodynamics, Laboratory Work</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/dual-degree">
                    <Button className="w-full group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 h-12">
                      <Zap className="mr-2 h-4 w-4" />
                      Explore Group B Guide
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Guide */}
          <Card className="glass-card border-2 border-emerald-200/50 dark:border-emerald-800/50 hover-lift animate-slide-in-up">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-4 text-3xl">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <span className="text-gradient">Your Roadmap to Success</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                      </div>
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">Master the Basics</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-11">
                      Start with BITS Lingo to understand L-P-U systems, time slots, and section codes.
                    </p>
                    <div className="pl-11">
                      <Link href="/bits-lingo">
                        <Button variant="outline" size="sm" className="glass-effect hover-glow bg-transparent">
                          Learn the Lingo
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        2
                      </div>
                      <h4 className="font-semibold text-amber-600 dark:text-amber-400">Know the Risks</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-11">
                      Understand "Tentative" schedules and "TBA" sections to avoid registration day surprises.
                    </p>
                    <div className="pl-11">
                      <Link href="/important-notes">
                        <Button variant="outline" size="sm" className="glass-effect hover-glow bg-transparent">
                          Important Notes
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        3
                      </div>
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">Choose Your Path</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-11">
                      Navigate to Group A (Single Degree) or Group B (Dual Degree) for program-specific recommendations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        4
                      </div>
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Study Details</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-11">
                      Review comprehensive instructor recommendations, timings, and strategic advice.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        5
                      </div>
                      <h4 className="font-semibold text-cyan-600 dark:text-cyan-400">Build Strategy</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-11">
                      Use our battle-tested timetable building process for registration success.
                    </p>
                    <div className="pl-11">
                      <Link href="/timetable-strategy">
                        <Button variant="outline" size="sm" className="glass-effect hover-glow bg-transparent">
                          Master Strategy
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        6
                      </div>
                      <h4 className="font-semibold text-rose-600 dark:text-rose-400">Execute & Adapt</h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-11">
                      Follow your plan while staying flexible for last-minute changes and opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <Card className="glass-card border-2 border-primary/20">
            <CardContent className="py-8">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-chart-1 to-chart-2 rounded-2xl flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gradient mb-2">Compiled by Your Seniors</h3>
                  <p className="text-muted-foreground mb-4">With love and experience</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Divyam Dangayach (2024A2PS1254P)",
                    "Aryan Sharma (2024B5PS1065P)",
                    "Hitesh Tiwari (2024B3PS0944P)",
                    "Pragyan Gupta (2024B4PS0984P)",
                    "Tushar Raghwani (2024B4PS0976P)",
                    "Lakshya Gupta (2024A1PS0255)",
                    "Shreyansh Mishra (2024B3PS0947)",
                  ].map((compiler, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="glass-effect hover-glow transition-all duration-300"
                    >
                      {compiler}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
