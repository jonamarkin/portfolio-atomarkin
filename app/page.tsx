import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Jonathan Ato Markin",
      url: "https://atomarkin.com",
      image: "https://atomarkin.com/images/hero-1.jpg",
      jobTitle: "Doctoral Student and Distributed Systems Researcher in Cyber-Physical Systems",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Luleå University of Technology",
      },
      sameAs: ["https://github.com/jonamarkin", "https://linkedin.com/in/atomarkin"],
      knowsAbout: [
        "Distributed systems",
        "Cyber-Physical Systems",
        "Smart Contracts",
        "Blockchain",
        "Reliable infrastructure",
        "Cloud infrastructure",
        "Personal finance software",
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "PlayChale",
      url: "https://playchale.com",
      applicationCategory: "SportsApplication",
      operatingSystem: "Web",
      description:
        "PlayChale is a grassroots sports platform built by Jonathan Ato Markin for finding games, booking pitches, sharing costs, and tracking player stats in Ghana.",
      creator: {
        "@type": "Person",
        name: "Jonathan Ato Markin",
        sameAs: ["https://github.com/jonamarkin", "https://linkedin.com/in/atomarkin"],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Paycycl",
      alternateName: "PayCycl",
      url: "https://paycycl.com",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "Paycycl is a personal finance app built by Jonathan Ato Markin for managing subscriptions, automating group payments, tracking spending, setting budgets, saving goals, and getting financial insights.",
      keywords: "personal finance app, subscription management, group payments, budgeting, saving goals",
      creator: {
        "@type": "Person",
        name: "Jonathan Ato Markin",
        sameAs: ["https://github.com/jonamarkin", "https://linkedin.com/in/atomarkin"],
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
