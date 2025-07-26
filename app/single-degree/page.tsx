"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { User, BookOpen, FlaskConical, Code, Wrench, FileText, Calculator, Atom, Microscope } from "lucide-react"

export default function SingleDegreePage() {
  const getRecommendationStyle = (recommendation: string) => {
    const lower = recommendation.toLowerCase()
    if (
      lower.includes("recommend") ||
      lower.includes("first priority") ||
      lower.includes("prefer him") ||
      lower.includes("demi-god")||lower.includes("best")||
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Group A Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete guide to all 9 compulsory courses for Group A (Single Degree) students with detailed instructor
            recommendations.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            9 Courses Total
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
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid, The first half is great but second half is horrrible</TableCell>
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
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L2</TableCell>
                  <TableCell>Navin Singh</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 6 T 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("No idea about him, he did not teach in our batch")}>
                    No idea about him, he did not teach in our batch
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
                  <TableCell className={getRecommendationStyle("His explanation is good")}>
                    His explanation is also good
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

        {/* Computer Programming */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Code className="h-6 w-6 text-primary" />
                Computer Programming
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                CS F111
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
                  <TableCell>BHARAT RICHHARIYA, Gopal Singh Phartiyal</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 2 T7</Badge>
                  </TableCell>
                  <TableCell
                    className={getRecommendationStyle("Bharat sir's lectures are better among the two options")}
                  >
                    Bharat sir's lectures are better among the two options
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L2</TableCell>
                  <TableCell>Amit Dua, Vinti Agarwal</TableCell>
                  <TableCell>
                    <Badge variant="outline">T Th F 2</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("This option is a decent second")}>
                    This option is a decent second
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <AlertDescription>
                <strong>Practical sections P1-P15:</strong> Choose any, doesn't matter much for programming labs.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Chemistry Laboratory */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
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

        {/* Biology Laboratory */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Microscope className="h-6 w-6 text-primary" />
                Biology Laboratory
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                BIO F110
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
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
                  <TableCell className="font-medium">P5</TableCell>
                  <TableCell>Himadri Sharma</TableCell>
                  <TableCell>
                    <Badge variant="outline">S 12</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Recommended")}>Recommended</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P11</TableCell>
                  <TableCell>Ritu Jangir</TableCell>
                  <TableCell>
                    <Badge variant="outline">Th 89</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Recommended")}>Recommended</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P12</TableCell>
                  <TableCell>Shilpi Garg</TableCell>
                  <TableCell>
                    <Badge variant="outline">W 67</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Recommended")}>Recommended</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P13</TableCell>
                  <TableCell>Mukul Joshi</TableCell>
                  <TableCell>
                    <Badge variant="outline">W 89</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Recommended")}>Recommended</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P3</TableCell>
                  <TableCell>JITENDRA PANWAR</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 67</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Recommended")}>Recommended</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P1</TableCell>
                  <TableCell>Meghana Tare</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 67</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid her at any cost")}>
                    Avoid her at any cost
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Physics Laboratory */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-right">
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

        {/* General Biology */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BookOpen className="h-6 w-6 text-primary" />
                General Biology
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                BIO F111
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <AlertDescription>
                <strong>Lectures are same in both sections.</strong> Focus on tutorial selection.
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
                  <TableCell>Prabhat Nath Jha</TableCell>
                  <TableCell>
                    <Badge variant="outline">T 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Recommended")}>Recommended</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T11</TableCell>
                  <TableCell>Rajdeep Chowdhury</TableCell>
                  <TableCell>
                    <Badge variant="outline">Th 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Recommended")}>Recommended</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T7, T13</TableCell>
                  <TableCell>Syamantak Majumder</TableCell>
                  <TableCell>
                    <Badge variant="outline">T 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Recommended")}>Recommended</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T3, T6</TableCell>
                  <TableCell>B Vani</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1, T 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
                 <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T9, T12</TableCell>
                  <TableCell>Sudeshna Mukherjee</TableCell>
                  <TableCell>
                    <Badge variant="outline">T 9, Th 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>
                    Avoid
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T10</TableCell>
                  <TableCell>Vishal Saxena</TableCell>
                  <TableCell>
                    <Badge variant="outline">Th 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">T2</TableCell>
                  <TableCell>Sandhya Marathe</TableCell>
                  <TableCell>
                    <Badge variant="outline">M 1</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid")}>Avoid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Workshop Practice */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Wrench className="h-6 w-6 text-primary" />
                Workshop Practice
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                ME F112
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <AlertDescription>
                <strong>Choose any lecture as per your timing, you won't go to classes.</strong> Focus on practical
                session timings.
              </AlertDescription>
            </Alert>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section(s)</TableHead>
                  <TableHead>Timings</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P2, P4, P7</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 678, M 678, W 678</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Standard Slots")}>Standard Slots</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">P1, P3, P5, P6</TableCell>
                  <TableCell>
                    <Badge variant="outline">F 123, M 123, Th 123, W 123</Badge>
                  </TableCell>
                  <TableCell
                    className={getRecommendationStyle("Avoid the morning slots because you might miss some sessions")}
                  >
                    Avoid the morning slots because you might miss some sessions
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Technical Report Writing */}
        <Card className="border-2 hover:shadow-xl transition-all duration-300 animate-slide-in-left">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-6 w-6 text-primary" />
                Technical Report Writing
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                BITS F112
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
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
                  <TableCell className="font-medium">L6</TableCell>
                  <TableCell>Pushp Lata</TableCell>
                  <TableCell>
                    <Badge variant="outline">T Th 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("This section is the best among all")}>
                    This section is the best among all
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L1</TableCell>
                  <TableCell>VIRENDRA S NIRBAN</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 2</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Decent")}>Decent</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L2</TableCell>
                  <TableCell>Chintalapalli Vijayakumar</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 8</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Decent")}>Decent</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L4</TableCell>
                  <TableCell>Shriya Raina</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Decent")}>Decent</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L5</TableCell>
                  <TableCell>Susan Haris R</TableCell>
                  <TableCell>
                    <Badge variant="outline">T Th 6</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Decent")}>Decent</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">L3</TableCell>
                  <TableCell>Devika</TableCell>
                  <TableCell>
                    <Badge variant="outline">MW 9</Badge>
                  </TableCell>
                  <TableCell className={getRecommendationStyle("Avoid Devika")}>Avoid Devika</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
