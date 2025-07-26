"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Calculator, Atom, FlaskConical, Zap, Ruler, BookOpen } from "lucide-react"

export default function DualDegreePage() {
  const getRecommendationStyle = (recommendation: string) => {
    const lower = recommendation.toLowerCase()
    if (
      lower.includes("recommend") ||
      lower.includes("first priority") ||
      lower.includes("prefer him") ||
      lower.includes("demi-god") ||
      lower.includes("amazing")||lower.includes("best")||
      lower.includes("better")||lower.includes("goated")
    ) {
      return "text-green-600 dark:text-green-400 font-semibold"
    }
    if (lower.includes("avoid")) {
      return "text-red-600 dark:text-red-400 font-semibold"
    }
    if (lower.includes("prefer") || lower.includes("good") || lower.includes("decent")||lower.includes("opt")||lower.includes("try")) {
      return "text-blue-600 dark:text-blue-400 font-semibold"
    }
    return "text-yellow-600 dark:text-yellow-400 font-semibold"
  }

  return (
    <div className="min-h-screen px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Group B Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete guide to all 8 compulsory courses for Group B (Dual Degree) students with detailed instructor
            recommendations.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            8 Courses Total
          </Badge>
        </div>

        {/* Mathematics I */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Calculator className="h-6 w-6 text-primary" />
                Mathematics I
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                MATH F111
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <h4 className="text-lg font-semibold">Lecture Sections</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Instructor(s)</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L1</TableCell>
                  <TableCell>Trilok Mathur, Anirudh Singh Rana</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 4 Th 7</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Should be first priority")}>
                    Should be first priority
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L2</TableCell>
                  <TableCell>SHAILESH TRIVEDI, Ashish Tiwari</TableCell>
                  <TableCell>
                    <Badge variant="outline">MWF 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Also a good option")}>Also a good option</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L3</TableCell>
                  <TableCell>Gaurav Dwivedi, Sangita Yadav</TableCell>
                  <TableCell>
                    <Badge variant="outline">T Th F 6</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>First half is good but second half is horrible</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <h4 className="text-lg font-semibold">Tutorial Sections (Selected)</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section(s)</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T4, T5</TableCell>
                  <TableCell>Gaurav Dwivedi</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T6, T7</TableCell>
                  <TableCell>Jitender Kumar</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1, T 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T8, T9</TableCell>
                  <TableCell>Pramod Eyyunni</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T10, T11</TableCell>
                  <TableCell>Rahul Kumar</TableCell>
                  <TableCell>
                    <Badge variant="outline">T 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T 15</TableCell>
                  <TableCell>Devendra Kumar</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1, T 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T2, T3</TableCell>
                  <TableCell>Divyum Sharma</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Teaches well but stict checking")}>Teaches well but strict checking</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T2, T3</TableCell>
                  <TableCell>Divyum Sharma</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Teaches well but stict checking")}>Teaches well but strict checking</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T1, T19</TableCell>
                  <TableCell>Anirudh Singh Rana</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1, W 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Teaches well but Strict Checking")}>
                    Teaches well but Strict Checking
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T13, T24</TableCell>
                  <TableCell>Balram Dubey</TableCell>
                  <TableCell>
                    <Badge variant="outline">Th 1, W 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T16</TableCell>
                  <TableCell>Rakhee</TableCell>
                  <TableCell>
                    <Badge variant="outline">Th 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Thermodynamics */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Atom className="h-6 w-6 text-primary" />
                Thermodynamics
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                BITS F111
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <h4 className="text-lg font-semibold">Lecture Sections</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L4</TableCell>
                  <TableCell>Amit Jain</TableCell>
                  <TableCell>
                    <Badge variant="outline">T Th F 6</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer him as he solves PYQs during the lecture")}>
                    Prefer him as he solves PYQs during the lecture
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L1</TableCell>
                  <TableCell>Manoj Kumar Soni</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 3 T 8</Badge>
                  </TableCell>
                  <TableCell
                    className={getRecommendationStyle("Sir is also goated, the coursebook is co-authored by him")}
                  >
                    Sir is also goated, the coursebook is co-authored by him
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L3</TableCell>
                  <TableCell>SACHIN ULHASRAO BELGAMWAR</TableCell>
                  <TableCell>
                    <Badge variant="outline">T Th F 3</Badge>
                  </TableCell>
                  <TableCell
                    className={getRecommendationStyle(
                      "Teaches well, but you might take some time to get used to his accent",
                    )}
                  >
                    Teaches well, but you might take some time to get used to his accent
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <h4 className="text-lg font-semibold">Tutorial Sections (Selected)</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section(s)</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T7, T9</TableCell>
                  <TableCell>Arpan Das</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, T 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Try and opt for him,he is a demi-god")}>
                    Try and opt for him, he is a demi-god
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T8, T21</TableCell>
                  <TableCell>Paritosh Shukla</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, W 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("His explanation is good")}>
                    His explanation is good
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T3, T25</TableCell>
                  <TableCell>Sachin Ulhasrao Belgamwar</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, W 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("")}>
                    His explanation is also good, but you may have problem with his accent
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T4, T11</TableCell>
                  <TableCell>Priya Christina S</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, T 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid her at any cost")}>
                    Avoid her at any cost
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* General Chemistry */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FlaskConical className="h-6 w-6 text-primary" />
                General Chemistry
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                CHEM F111
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <AlertDescription>
                <strong>No Choice for Lectures,</strong> all the teachers are same in both the lectures.
              </AlertDescription>
            </Alert>

            <h4 className="text-lg font-semibold">Tutorial Sections</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T5</TableCell>
                  <TableCell>Pritam Kumar Jana</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T7, T9</TableCell>
                  <TableCell>Saumi Ray</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, W 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T11</TableCell>
                  <TableCell>Prashant U Manohar</TableCell>
                  <TableCell>
                    <Badge variant="outline">W 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T8</TableCell>
                  <TableCell>Indresh Kumar</TableCell>
                  <TableCell>
                    <Badge variant="outline">W 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T3, T13</TableCell>
                  <TableCell>Partha Sarathi Addy</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, W 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Electrical Sciences */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="h-6 w-6 text-primary" />
                Electrical Sciences
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                EEE F111
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <AlertDescription>
                <strong>No idea about the Lecturers,</strong> we had a completely different set of profs.
              </AlertDescription>
            </Alert>

            <h4 className="text-lg font-semibold">Tutorial Sections</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T6, T12</TableCell>
                  <TableCell>Puneet Mishra</TableCell>
                  <TableCell>
                    <Badge variant="outline">T 1, Th 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer him")}>Prefer him</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T5</TableCell>
                  <TableCell>Rajneesh Kumar</TableCell>
                  <TableCell>
                    <Badge variant="outline">T 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Chemistry Laboratory */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FlaskConical className="h-6 w-6 text-primary" />
                Chemistry Laboratory
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                CHEM F110
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section(s)</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P3, P19</TableCell>
                  <TableCell>Paritosh Shukla</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 67, Th 67</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Opt for his section as he is lenient")}>
                    Opt for his section as he is lenient
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P11</TableCell>
                  <TableCell>Prashant U Manohar</TableCell>
                  <TableCell>
                    <Badge variant="outline">S 67</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("He is also a good choice")}>
                    He is also a good choice
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P1 - P24</TableCell>
                  <TableCell>Various RS</TableCell>
                  <TableCell>
                    <Badge variant="outline">Various</Badge>
                  </TableCell>
                  <TableCell
                    className={getRecommendationStyle("Try and go for RS (they generally grade well and are lenient)")}
                  >
                    Try and go for RS (they generally grade well and are lenient)
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P22</TableCell>
                  <TableCell>BHARTI KHUNGAR</TableCell>
                  <TableCell>
                    <Badge variant="outline">W 34</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P4, P20</TableCell>
                  <TableCell>I R Laskar</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 89, Th 89</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Physics Laboratory */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Atom className="h-6 w-6 text-primary" />
                Physics Laboratory
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                PHY F110
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <AlertDescription className="text-base">
                <strong>Lite course, choose any as per your timing.</strong> Research Scholars (RS) are usually more
                lenient with grading.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Engineering Graphics */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Ruler className="h-6 w-6 text-primary" />
                Engineering Graphics
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                BITS F110
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <AlertDescription>
                <strong>Lectures:</strong> Choose any; You won't go anyways.
              </AlertDescription>
            </Alert>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P1, P8</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 67, MW 89</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("For our batch RS of P1 and P8 were good")}>
                    For our batch RS of P1 and P8 were good
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P2-P7, P9-P14</TableCell>
                  <TableCell>
                    <Badge variant="outline">Various</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("You can choose any, isn't a huge issue")}>
                    You can choose any, isn't a huge issue
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Mechanics, Oscillations & Waves */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BookOpen className="h-6 w-6 text-primary" />
                Mechanics, Oscillations & Waves
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                PHY F111
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <h4 className="text-lg font-semibold">Lecture Sections</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Instructor(s)</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L1</TableCell>
                  <TableCell>KAUSHAR VAIDYA, Vaidya Rishikesh D</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 4 Th 7</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Rishikesh's sir lectures are amazing and innovative")}>
                    Rishikesh's sir lectures are amazing and innovative
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L2</TableCell>
                  <TableCell>Niladri Sarkar, Tapomoy Guha Sarkar</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 6 Th 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("This section is also a decent option")}>
                    This section is also a decent option
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <h4 className="text-lg font-semibold">Tutorial Sections</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section(s)</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T4, T8</TableCell>
                  <TableCell>Kaushar Vaidya</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, Th 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T3, T11</TableCell>
                  <TableCell>Vaidya Rishikesh D</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, Th 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T6, T9</TableCell>
                  <TableCell>Madhukar Mishra</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, Th 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Prefer")}>Prefer</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T7, T13</TableCell>
                  <TableCell>Sandipan Dutta</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 1, Th 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid him , he explains poorly")}>
                    Avoid him, he explains poorly
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
