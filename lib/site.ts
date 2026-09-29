export const profile = {
  name: "Jonathan Ato Markin",
  shortName: "Ato Markin",
  role: "PhD Student",
  field: "Cyber-Physical Systems",
  affiliation: "Luleå University of Technology",
  since: "Since January 2026",
  location: "Luleå, Sweden",
  email: "jonamarkin@gmail.com",
  github: "https://github.com/jonamarkin",
  linkedin: "https://linkedin.com/in/atomarkin",
  devto: "https://dev.to/jonamarkin",
}

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "blog", label: "Writing" },
]

/**
 * Image slots. Files live in public/; a slot whose file is missing renders a
 * neutral placeholder instead.
 */
export const images = {
  hero: [{ src: "/images/hero-1.jpg", alt: "Portrait of Jonathan Ato Markin" }] as {
    src: string
    alt: string
    caption?: string
  }[],
}

export const heroBullets = [
  "Distributed systems & coordination",
  "Reliability & performance",
  "Smart contracts & blockchain",
  "HPC-cloud convergence",
]

export const focusAreas = [
  {
    title: "Distributed Systems",
    description: "Coordination, performance, and reliability across networked services.",
  },
  {
    title: "Cyber-Physical Systems",
    description: "Doctoral research at Luleå University of Technology since January 2026.",
  },
  {
    title: "Reliable Infrastructure",
    description: "Built on years designing backend platforms and cloud-native services.",
  },
  {
    title: "Useful Products",
    description: "Building practical tools like Paycycl for personal finance and global users.",
  },
]

export const skillGroups = [
  { label: "Languages", skills: ["Java", "Python", "Go", "C++", "JavaScript", "TypeScript"] },
  { label: "Systems & Research", skills: ["Distributed Systems", "Cyber-Physical Systems", "HPC"] },
  { label: "Frameworks", skills: ["Spring Boot", "React", "Vue", "Node.js", "PyTorch"] },
  { label: "Cloud & Infra", skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"] },
  { label: "Data & Messaging", skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ"] },
]

export type Experience = {
  title: string
  company: string
  /** Label used on the career trace */
  short: string
  location: string
  start: string // YYYY-MM
  end: string | null // YYYY-MM, null = present
  description: string
  technologies: string[]
}

const experienceData: Experience[] = [
  {
    title: "Doctoral Student",
    company: "Luleå University of Technology",
    short: "LTU",
    location: "Luleå, Norrbotten County, Sweden",
    start: "2026-01",
    end: null,
    description:
      "Researching distributed systems for cyber-physical environments, with interests spanning reliable infrastructure, smart contracts, and blockchain systems.",
    technologies: ["Distributed Systems", "Cyber-Physical Systems", "Smart Contracts", "Blockchain", "HPC", "Reliability"],
  },
  {
    title: "HPC-Cloud Researcher",
    company: "Università di Pisa",
    short: "Univ. of Pisa",
    location: "Pisa, Tuscany, Italy",
    start: "2024-10",
    end: "2025-10",
    description:
      "Designed and developed prototypes and tools for workflows, I/O, HPC-cloud convergence, and distributed computing.",
    technologies: ["Scientific Computing", "Cloud Computing", "Distributed Computing", "HPC", "I/O", "Workflows"],
  },
  {
    title: "Software Engineer",
    company: "Union Systems Global",
    short: "Union Systems",
    location: "Accra, Ghana",
    start: "2019-06",
    end: "2023-12",
    description: "Developed scalable core backend services and integrations for web and mobile banking platforms.",
    technologies: ["Java", "Spring", "PostgreSQL", "REST APIs", "CI/CD"],
  },
  {
    title: "Engineer: API & Platforms",
    company: "BRIJ Fintech Ghana Limited",
    short: "BRIJ Fintech",
    location: "Accra, Ghana",
    start: "2021-10",
    end: "2023-01",
    description: "Owned design and maintenance of frontend and backend microservices for payments and forex.",
    technologies: ["Java", "Spring Boot", "VueJS", "Vault", "OpenAPI", "Microservices"],
  },
]

// Most recent first: ongoing roles on top, then by end date
export const experiences = [...experienceData].sort((a, b) => (b.end ?? "9999").localeCompare(a.end ?? "9999"))

export type Project = {
  name: string
  tagline: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  liveLabel?: string
  /** Screenshot, for live products */
  image?: string
  /** Top-level files and language split, for GitHub projects */
  repo?: { files: [name: string, dir: boolean][]; languages: [name: string, pct: number][] }
}

export const projects: Project[] = [
  {
    name: "Paycycl",
    tagline: "Personal Finance App",
    description:
      "A personal finance web app I built for personal use and global users to manage subscriptions, automate group payments, track spending, set budgets, save toward goals, and surface financial insights.",
    technologies: ["Nuxt", "Vue", "Tailwind CSS", "Finance", "Subscriptions", "Group Payments"],
    liveUrl: "https://paycycl.com",
    liveLabel: "Visit Paycycl",
    image: "/images/work/paycycl.jpg",
  },
  {
    name: "PlayChale",
    tagline: "Grassroots Sports Platform",
    description:
      "A platform for grassroots sport in Ghana: find games near you, book pitches, share costs with your squad, and build a verified sports profile with every stat tracked.",
    technologies: ["Nuxt", "Vue", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL"],
    liveUrl: "https://playchale.com",
    liveLabel: "Visit PlayChale",
    image: "/images/work/playchale.jpg",
  },
  {
    name: "ToggleFox",
    tagline: "Enterprise Feature Flag System",
    description:
      "Production-grade feature flag system with Clean Architecture and 95%+ test coverage. Deployed resilient microservices with Prometheus monitoring and CI/CD pipelines.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Prometheus"],
    githubUrl: "https://github.com/jonamarkin/togglefox",
    repo: {
      files: [["infrastructure", true], ["togglefox-service", true], ["docker-compose.yml", false], ["Dockerfile", false], ["LICENSE", false], ["Makefile", false], ["pom.xml", false], ["README.md", false]],
      languages: [["Java", 91.1], ["Makefile", 8.3], ["Dockerfile", 0.6]],
    },
  },
  {
    name: "Bookstore",
    tagline: "Microservices Application",
    description:
      "Fault-tolerant microservices with async messaging achieving 99.9% uptime under load. Built with comprehensive testing using Testcontainers.",
    technologies: ["Spring Boot", "RabbitMQ", "Testcontainers", "Docker", "Microservices"],
    githubUrl: "https://github.com/jonamarkin/bookstore-microservices",
    repo: {
      files: [[".github", true], ["api-gateway", true], ["bookstore-webapp", true], ["catalog-service", true], ["deployment", true], ["notification-service", true], ["order-service", true], ["mvnw", false], ["pom.xml", false], ["README.md", false], ["Taskfile.yml", false]],
      languages: [["Java", 96.6], ["HTML", 3.4]],
    },
  },
  {
    name: "Order Processing",
    tagline: "Go Backend Application",
    description:
      "Containerized Go backend with REST APIs using Domain-Driven Design. Architected with Docker Compose for local development and multi-service orchestration.",
    technologies: ["Go", "Gin", "Docker", "DDD", "REST API", "Docker Compose"],
    githubUrl: "https://github.com/jonamarkin/e-commerce-order-processing",
    repo: {
      files: [["cmd", true], ["docs", true], ["internal", true], ["migrations", true], ["docker-compose.yml", false], ["Dockerfile.orderservice", false], ["Dockerfile.inventoryservice", false], ["go.mod", false], ["go.sum", false], ["README.md", false]],
      languages: [["Go", 97.3], ["PLpgSQL", 2.7]],
    },
  },
  {
    name: "FastMap",
    tagline: "Real-Time IoT Anomaly Detection with Redis's Multi-Model Database",
    description:
      "A real-time anomaly detection platform for large-scale sensor networks. It provides a live map-based dashboard where operators can monitor thousands of IoT sensors at a glance.",
    technologies: ["Redis", "Python", "FastAPI", "Docker", "CI/CD", "HTML", "CSS", "Tailwind CSS"],
    githubUrl: "https://github.com/jonamarkin/fastmap-redis-challenge",
    repo: {
      files: [["templates", true], ["anomaly_detector.py", false], ["app.py", false], ["config.py", false], ["LICENSE", false], ["README.md", false], ["requirements.txt", false], ["sensor_simulator.py", false]],
      languages: [["HTML", 84.8], ["Python", 15.2]],
    },
  },
]

export type Post = {
  title: string
  description: string
  platform: string
  url: string
  date: string // YYYY-MM-DD
  topic: string
}

const postData: Post[] = [
  {
    title: "Harnessing Testcontainers for Reliable Integration Tests",
    description:
      "Strategies for writing stable, reproducible integration tests using Testcontainers and Dockerized environments in Spring Boot applications.",
    platform: "GitHub",
    url: "https://github.com/jonamarkin/testcontainers-talk",
    date: "2025-07-07",
    topic: "Testing",
  },
  {
    title: "FastMap: Real-Time IoT Anomaly Detection with Redis's Multi-Model Database",
    description:
      "Developing FastMap, a real-time anomaly detection platform for large-scale sensor networks using Redis's multi-model capabilities.",
    platform: "Dev.to",
    url: "https://dev.to/jonamarkin/fastmap-real-time-iot-anomaly-detection-with-rediss-multi-model-database-3bg5",
    date: "2025-08-10",
    topic: "IoT",
  },
  {
    title: "Local Development, Remote Data: Accessing Fly.io PostgreSQL from Your Java API",
    description:
      "A guide to connecting local Java applications to remote PostgreSQL databases hosted on Fly.io for seamless development workflows.",
    platform: "Dev.to",
    url: "https://dev.to/jonamarkin/local-development-remote-data-accessing-flyio-postgresql-from-your-java-api-2jb5",
    date: "2025-01-26",
    topic: "Databases",
  },
  {
    title: "Spring Boot Basics: Crafting Your First Application",
    description:
      "A beginner-friendly introduction to building your first Spring Boot application, covering setup, configuration, and essential features.",
    platform: "Dev.to",
    url: "https://dev.to/jonamarkin/spring-boot-basics-crafting-your-first-application-4kf3",
    date: "2024-06-15",
    topic: "Spring Boot",
  },
]

export const posts = [...postData].sort((a, b) => b.date.localeCompare(a.date))

const monthFmt = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" })
const dayFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })

export function formatMonth(ym: string | null) {
  return ym ? monthFmt.format(new Date(`${ym}-01T00:00:00Z`)) : "Present"
}

export function formatDay(ymd: string) {
  return dayFmt.format(new Date(`${ymd}T00:00:00Z`))
}

/** Months since year 0, for laying spans on a time axis. `null` means now. */
export function monthIndex(ym: string | null) {
  if (!ym) {
    const now = new Date()
    return now.getUTCFullYear() * 12 + now.getUTCMonth()
  }
  const [y, m] = ym.split("-").map(Number)
  return y * 12 + (m - 1)
}

export function formatDuration(start: string, end: string | null) {
  const months = monthIndex(end) - monthIndex(start) + 1
  const y = Math.floor(months / 12)
  const m = months % 12
  return [y ? `${y}y` : "", m ? `${m}m` : ""].filter(Boolean).join(" ") || "1m"
}
