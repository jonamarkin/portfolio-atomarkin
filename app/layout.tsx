import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Lato } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})

const description =
  "Portfolio of Jonathan Ato Markin, a distributed systems researcher and PhD candidate in Cyber-Physical Systems at Luleå University of Technology, building resilient infrastructure and products including Paycycl."

export const metadata: Metadata = {
  title: "Jonathan Ato Markin - Distributed Systems Researcher",
  description,
  keywords: [
    "Jonathan Ato Markin",
    "distributed systems researcher",
    "PhD Cyber-Physical Systems",
    "Luleå University of Technology",
    "distributed systems",
    "cyber-physical systems",
    "cloud infrastructure",
    "Paycycl",
    "personal finance app",
  ],
  authors: [{ name: "Jonathan Ato Markin" }],
  creator: "Jonathan Ato Markin",
  openGraph: {
    title: "Jonathan Ato Markin - Distributed Systems Researcher",
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jonathan Ato Markin - Distributed Systems Researcher",
    description,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${montserrat.variable} ${lato.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
