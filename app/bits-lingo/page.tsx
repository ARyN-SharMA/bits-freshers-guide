"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { ImportIcon as Translate, Clock, Users, BookOpen } from "lucide-react"

export default function BitsLingoPage() {
  const timeSlots = [
    { hour: "Hour 1", time: "8:00 - 8:50 AM" },
    { hour: "Hour 2", time: "9:00 - 9:50 AM" },
    { hour: "Hour 3", time: "10:00 - 10:50 AM" },
    { hour: "Hour 4", time: "11:00 - 11:50 AM" },
    { hour: "Hour 5", time: "12:00 - 12:50 PM" },
    { hour: "Lunch", time: "12:00 - 1:00 PM" },
    { hour: "Hour 6", time: "2:00 - 2:50 PM" },
    { hour: "Hour 7", time: "3:00 - 3:50 PM" },
    { hour: "Hour 8", time: "4:00 - 4:50 PM" },
  ]

  return (
    <div className="min-h-screen px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center">
              <Translate className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Decoding the BITS Lingo</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the essential terminology and systems used at BITS Pilani before you start course registration.
          </p>
        </div>

        {/* L-P-U System */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BookOpen className="h-6 w-6 text-primary" />
              L-P-U (Lecture-Practical-Units)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground text-lg">
              This is the credit structure of a course. It's the most important set of numbers next to a course title.
              For example, CS F111 Computer Programming is listed with a credit structure of{" "}
              <Badge variant="outline" className="mx-1">
                3 1 4
              </Badge>
              .
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">L</div>
                  <h3 className="font-semibold mb-2">Lecture</h3>
                  <p className="text-sm text-muted-foreground">
                    The first number is the number of lecture hours per week. 3 means three 50-minute lectures.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">P</div>
                  <h3 className="font-semibold mb-2">Practical</h3>
                  <p className="text-sm text-muted-foreground">
                    The second number is the number of practical (lab) hours. A 1 here refers to one lab session,
                    typically 2-3 hours long.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">U</div>
                  <h3 className="font-semibold mb-2">Units</h3>
                  <p className="text-sm text-muted-foreground">
                    The third number is the total credit units for the course. This determines the course's weightage in
                    your GPA.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Section Codes */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="h-6 w-6 text-primary" />
              Section Codes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <Badge variant="outline" className="text-lg px-3 py-1">
                  L1, L2...
                </Badge>
                <h4 className="font-semibold">Lecture Sections</h4>
                <p className="text-sm text-muted-foreground">
                  All students in a given lecture section attend the same class with the same professor.
                </p>
              </div>

              <div className="space-y-3">
                <Badge variant="outline" className="text-lg px-3 py-1">
                  T1, T2...
                </Badge>
                <h4 className="font-semibold">Tutorial Sections</h4>
                <p className="text-sm text-muted-foreground">
                  These are smaller group sessions for problem-solving and doubt-clearing.
                </p>
              </div>

              <div className="space-y-3">
                <Badge variant="outline" className="text-lg px-3 py-1">
                  P1, P2...
                </Badge>
                <h4 className="font-semibold">Practical/Lab Sections</h4>
                <p className="text-sm text-muted-foreground">
                  Hands-on laboratory sessions with equipment and experiments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Slots */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Clock className="h-6 w-6 text-primary" />
              Days & Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground text-lg">
              The BITSian clock runs on its own schedule. Days are abbreviated (M, T, W, Th, F, S), and hours are
              numbered 1 through 9:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {timeSlots.map((slot, index) => (
                <Card
                  key={index}
                  className={`text-center p-4 hover:shadow-md transition-all duration-300 ${
                    slot.hour === "Lunch"
                      ? "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800"
                      : "hover:scale-105"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`font-mono font-bold text-lg mb-1 ${
                      slot.hour === "Lunch" ? "text-orange-600 dark:text-orange-400" : "text-primary"
                    }`}
                  >
                    {slot.hour}
                  </div>
                  <div className="text-sm text-muted-foreground">{slot.time}</div>
                </Card>
              ))}
            </div>

            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <AlertDescription className="text-base">
                <strong>Example:</strong> A class scheduled for{" "}
                <Badge variant="outline" className="mx-1">
                  MW 67
                </Badge>{" "}
                means it happens on Monday from 2:00-3:50 PM and Wednesday from 2:00-3:50 PM.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Instructor Types */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="h-6 w-6 text-primary" />
              Instructor Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-lg">Professor/Faculty</h4>
                  <p className="text-muted-foreground">
                    Primary instructors, listed in ALL CAPS or with standard capitalization. They set the curriculum,
                    create exams, and are ultimately in charge.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-lg">Research Scholar (RS)</h4>
                  <p className="text-muted-foreground">
                    Names followed by (RS) are PhD students. They conduct most tutorials and lab sessions and are
                    critical to your learning experience.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
