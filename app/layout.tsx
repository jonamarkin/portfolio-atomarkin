import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const description =
  "Portfolio of Jonathan Ato Markin, a distributed systems researcher and doctoral student in Cyber-Physical Systems at Luleå University of Technology, building resilient infrastructure and products including Paycycl."

export const metadata: Metadata = {
  metadataBase: new URL("https://atomarkin.com"),
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/writing/rss.xml", title: "Writing — Jonathan Ato Markin" }] },
  },
  title: {
    default: "Jonathan Ato Markin - Distributed Systems Researcher",
    template: "%s — Jonathan Ato Markin",
  },
  description,
  keywords: [
    "Jonathan Ato Markin",
    "distributed systems researcher",
    "doctoral student Cyber-Physical Systems",
    "Luleå University of Technology",
    "distributed systems",
    "cyber-physical systems",
    "smart contracts",
    "blockchain",
    "cloud infrastructure",
    "Paycycl",
    "personal finance app",
    "PlayChale",
  ],
  authors: [{ name: "Jonathan Ato Markin" }],
  creator: "Jonathan Ato Markin",
  openGraph: {
    title: "Jonathan Ato Markin - Distributed Systems Researcher",
    description,
    type: "website",
    url: "/",
    siteName: "Jonathan Ato Markin",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Ato Markin - Distributed Systems Researcher",
    description,
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Lets scroll-reveal hide content only when JS is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
