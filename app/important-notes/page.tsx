"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, HelpCircle, Clock, Target } from "lucide-react"

export default function ImportantNotesPage() {
  return (
    <div className="min-h-screen px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Important Notes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Critical information about "Tentative" schedules and "TBA" sections that every fresher must know.
          </p>
        </div>

        {/* Tentative Clause */}
        <Card className="border-2 border-yellow-200 dark:border-yellow-800 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-yellow-700 dark:text-yellow-400">
              <Clock className="h-6 w-6" />
              The "Tentative" Clause
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <AlertTriangle className="h-5 w-5" />
              <AlertDescription className="text-base">
                <strong>⚠️ Critical Warning:</strong> Treat this guide as a 90% solution. It is designed for strategic
                planning before registration day. However, last-minute changes to instructors, timings, and even room
                numbers are common.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">What Can Change:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      •
                    </Badge>
                    Instructor assignments
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      •
                    </Badge>
                    Class timings and days
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      •
                    </Badge>
                    Room numbers and venues
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      •
                    </Badge>
                    Section availability
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      •
                    </Badge>
                    Tutorial/Lab groupings
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Your Strategy:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 bg-green-100 dark:bg-green-900">
                      ✓
                    </Badge>
                    Use this guide for pre-planning
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 bg-green-100 dark:bg-green-900">
                      ✓
                    </Badge>
                    Have backup options ready
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 bg-green-100 dark:bg-green-900">
                      ✓
                    </Badge>
                    Check ERP on registration day
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 bg-green-100 dark:bg-green-900">
                      ✓
                    </Badge>
                    Stay flexible with choices
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 bg-green-100 dark:bg-green-900">
                      ✓
                    </Badge>
                    Verify final information on ERP
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <AlertDescription>
                <strong>Pro Tip:</strong> The final, definitive information will only be available on the live
                registration portal (ERP). Always cross-check before making your final selections.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* TBA Gamble */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-700 dark:text-blue-400">
              <HelpCircle className="h-6 w-6" />
              The "TBA" Gamble
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-lg mb-4">
                You will frequently see sections where the instructor is listed as{" "}
                <Badge variant="secondary" className="mx-1 text-base px-3 py-1">
                  TBA by DEPT.
                </Badge>
              </p>
              <p className="text-muted-foreground">
                <strong>"TBA"</strong> stands for <strong>"To Be Announced"</strong> - meaning the department hasn't
                assigned an instructor yet.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-red-700 dark:text-red-400">Risk</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Unknown instructor quality</li>
                    <li>• Could be inexperienced</li>
                    <li>• Unpredictable teaching style</li>
                    <li>• No prior student feedback</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-700 dark:text-green-400">Opportunity</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Lower demand = easier to get</li>
                    <li>• Better scheduling flexibility</li>
                    <li>• Might get a great new instructor</li>
                    <li>• Less competition for slots</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-purple-700 dark:text-purple-400">Strategy</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use as last resort</li>
                    <li>• Good for resolving clashes</li>
                    <li>• Keep as backup option</li>
                    <li>• Check for updates regularly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950">
              <AlertDescription>
                <strong>Strategic Advice:</strong> Use TBA sections as a last resort to resolve unavoidable clashes.
                Sometimes they turn out to be hidden gems, but it's always a gamble. Have a backup plan ready!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Registration Day Tips */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Target className="h-6 w-6 text-primary" />
              Registration Day Survival Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">Do's ✓</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 bg-green-100 dark:bg-green-900">
                      1
                    </Badge>
                    <div>
                      <p className="font-medium">Log in early</p>
                      <p className="text-sm text-muted-foreground">Be ready 15 minutes before registration opens</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 bg-green-100 dark:bg-green-900">
                      2
                    </Badge>
                    <div>
                      <p className="font-medium">Have multiple plans</p>
                      <p className="text-sm text-muted-foreground">Primary, secondary, and emergency backup options</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 bg-green-100 dark:bg-green-900">
                      3
                    </Badge>
                    <div>
                      <p className="font-medium">Check for updates</p>
                      <p className="text-sm text-muted-foreground">Refresh the page to see latest changes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 bg-green-100 dark:bg-green-900">
                      4
                    </Badge>
                    <div>
                      <p className="font-medium">Stay calm</p>
                      <p className="text-sm text-muted-foreground">Don't panic if your first choice is full</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">Don'ts ✗</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 bg-red-100 dark:bg-red-900">
                      1
                    </Badge>
                    <div>
                      <p className="font-medium">Don't wait till last minute</p>
                      <p className="text-sm text-muted-foreground">Popular sections fill up quickly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 bg-red-100 dark:bg-red-900">
                      2
                    </Badge>
                    <div>
                      <p className="font-medium">Don't rely on one plan</p>
                      <p className="text-sm text-muted-foreground">Always have alternatives ready</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 bg-red-100 dark:bg-red-900">
                      3
                    </Badge>
                    <div>
                      <p className="font-medium">Don't ignore TBA sections</p>
                      <p className="text-sm text-muted-foreground">They might be your only option for good timings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 bg-red-100 dark:bg-red-900">
                      4
                    </Badge>
                    <div>
                      <p className="font-medium">Don't forget to save</p>
                      <p className="text-sm text-muted-foreground">Confirm your selections before logging out</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
