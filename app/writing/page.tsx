import type { Metadata } from "next"
import { Container, DotTag } from "@/components/section"
import { WritingList } from "@/components/writing-list"
import { getAllWriting } from "@/lib/writing"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing by Jonathan Ato Markin on distributed systems, engineering, research, and the things around them.",
  alternates: { canonical: "/writing" },
}

export default function WritingPage() {
  const entries = getAllWriting()

  return (
    <main className="pt-16 pb-28 lg:pt-24 lg:pb-36">
      <Container className="max-w-[920px]">
        <DotTag>Writing</DotTag>
        <h1 className="mt-5 max-w-[640px] text-[clamp(2rem,1.3rem+2.4vw,3rem)] leading-[1.1] tracking-[-0.035em] text-balance">
          Notes on distributed systems, <span className="text-faint">engineering, and everything around them.</span>
        </h1>
        <div className="mt-14">
          <WritingList entries={entries} />
        </div>
      </Container>
    </main>
  )
}
