"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle, Clock, Users, Lightbulb, Star } from "lucide-react"

export default function TimetableStrategyPage() {
  return (
    <div className="min-h-screen px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Timetable Strategy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building Your Perfect Schedule - A battle-tested, step-by-step process for course registration success.
          </p>
        </div>

        {/* Introduction */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Lightbulb className="h-6 w-6 text-primary" />
              The Art of Timetable Building
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 mb-6">
              <AlertDescription className="text-base">
                <strong>Building a good timetable is an art form.</strong> It's a game of priorities, trade-offs, and
                quick thinking. Here is a battle-tested, step-by-step process that has helped countless BITSians create
                their ideal schedules.
              </AlertDescription>
            </Alert>

            <p className="text-muted-foreground leading-relaxed">
              Your timetable isn't just a schedule—it's the framework that will define your entire semester experience.
              The difference between a well-planned timetable and a hastily thrown-together one can mean the difference
              between academic success and constant struggle.
            </p>
          </CardContent>
        </Card>

        {/* Step-by-Step Guide */}
        <div className="space-y-6">
          {/* Step 1 */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                Prioritize Your Must-Haves
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Go through this guide and identify the 1-2 courses where the instructor matters most to you. For many,
                this will be BITS F111 Thermodynamics or a specific MATH F111 tutorial. These are your{" "}
                <strong>non-negotiables</strong>.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">
                  Examples of High-Priority Courses:
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    • <strong>BITS F111 Thermodynamics</strong> - Instructor quality varies significantly
                  </li>
                  <li>
                    • <strong>MATH F111 Tutorials</strong> - Some tutors are much better than others
                  </li>
                  <li>
                    • <strong>CS F111 Computer Programming</strong> - Foundation course for many branches
                  </li>
                  <li>
                    • <strong>Any course with limited good sections</strong>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                Anchor Your Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                On registration day, your first move should be to secure the lecture, tutorial, or lab sections for your
                priority courses. These choices become the <strong>"anchors"</strong> of your timetable. Everything else
                will now have to fit around them.
              </p>

              <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
                <Clock className="h-4 w-4" />
                <AlertDescription>
                  <strong>Pro Tip:</strong> Log in 15 minutes early and have your priority sections ready to select.
                  Popular instructors fill up within minutes of registration opening.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                Build Around the Anchors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                With your anchors in place, start filling in the rest of your compulsory courses. Begin with courses
                that have fewer sections and are therefore less flexible. Leave the most flexible courses, like the CHEM
                F110 lab with its 24 sections, for last.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">Fill First (Less Flexible):</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Courses with few good instructors</li>
                    <li>• Limited section availability</li>
                    <li>• Courses with specific timing constraints</li>
                    <li>• High-demand sections</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">Fill Last (More Flexible):</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Lab courses with many sections</li>
                    <li>• Courses where instructor doesn't matter much</li>
                    <li>• TBA sections (as backup)</li>
                    <li>• Workshop/practical courses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                Optimize and Review
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Once you have a clash-free timetable, take a moment to review it holistically. This is where you
                transform a functional schedule into an optimal one.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">Look for Breaks</h4>
                  <p className="text-sm text-muted-foreground">
                    Do you have a long, awkward gap in the middle of the day? Can you shift a tutorial to consolidate
                    your free time? Aim for meaningful breaks, not scattered gaps.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">Consider Your Energy</h4>
                  <p className="text-sm text-muted-foreground">
                    Are you a morning person or a night owl? A schedule packed with 8 AMs might be a disaster if you're
                    not naturally an early riser. Plan according to your natural rhythm.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-600 dark:text-red-400">The "Free Day" Myth</h4>
                  <p className="text-sm text-muted-foreground">
                    Some students try to stack all their classes on four days to get a "free day." While tempting, this
                    often leads to incredibly hectic and exhausting days. A more balanced schedule is usually more
                    sustainable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Tips */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Star className="h-6 w-6 text-primary" />
              Pro Tips for Registration Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">Before Registration</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Create Multiple Plans</p>
                      <p className="text-sm text-muted-foreground">
                        Have Plan A, B, and C ready with different instructor combinations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Test Your Internet</p>
                      <p className="text-sm text-muted-foreground">
                        Ensure stable connection and have backup options ready
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Know Your Priorities</p>
                      <p className="text-sm text-muted-foreground">Rank courses by importance and flexibility</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">During Registration</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Stay Calm</p>
                      <p className="text-sm text-muted-foreground">
                        Don't panic if your first choice is full - move to Plan B
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Work Systematically</p>
                      <p className="text-sm text-muted-foreground">
                        Follow your planned order - anchors first, flexible courses last
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Double-Check Everything</p>
                      <p className="text-sm text-muted-foreground">
                        Verify timings and save your selections before logging out
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Message */}
        <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 hover:shadow-xl transition-all duration-300 animate-slide-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="h-6 w-6 text-primary" />A Final Word from Your Seniors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <AlertDescription className="text-base">
                You now have the data, the strategies, and the insider knowledge to build a great first-semester
                timetable. Remember that the "perfect" schedule is a myth. The goal is to find the best fit for your
                personal learning style, your study habits, and your sleep schedule.
              </AlertDescription>
            </Alert>

            <p className="text-muted-foreground leading-relaxed">
              The registration process will be fast and maybe a little stressful, but you are prepared for it. Have your
              ideal timetable ready, but also have one or two backup plans in case your preferred section fills up. Stay
              calm, be flexible, and make your choices confidently.
            </p>

            <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <AlertDescription className="text-base space-y-2">
                <p>
                  <strong>This semester is the start of an incredible journey.</strong> Work hard, ask for help when you
                  need it, and don't forget to enjoy the ride.
                </p>
                <p className="font-semibold text-green-700 dark:text-green-400">Good luck, and welcome to B.I.T.S.!</p>
              </AlertDescription>
            </Alert>

            <div className="text-center pt-4">
              <Badge variant="secondary" className="text-lg px-6 py-3">
                <Star className="w-4 h-4 mr-2" />
                You've got this! 🎓
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
