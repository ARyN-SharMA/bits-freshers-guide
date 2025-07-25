import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BITS Fresher's Guide 2025-26 | Unofficial Course Registration Guide",
  description:
    "Complete guide for BITS Pilani first-year students with course recommendations, instructor insights, and timetable strategies for I Semester 2025-26.",
  keywords: "BITS Pilani, fresher guide, course registration, timetable, single degree, dual degree, BITS lingo",
  authors: [{ name: "BITS Seniors" }],
  openGraph: {
    title: "BITS Fresher's Guide 2025-26",
    description: "Your complete roadmap to conquering first-year courses at BITS Pilani",
    type: "website",
  },
    generator: 'v0.dev'
}

import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'