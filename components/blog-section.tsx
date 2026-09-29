import { Button } from "@/components/ui/button"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { formatDay, posts, profile } from "@/lib/site"

export function BlogSection() {
  return (
    <Section id="blog">
      <Reveal>
        <SectionHeading
          tag="Writing"
          title="Latest Articles"
          aside={
            <Button asChild arrow size="sm" className="rounded-full px-4">
              <a href={profile.devto} target="_blank" rel="noopener noreferrer">
                All articles
              </a>
            </Button>
          }
        />
      </Reveal>

      <ul className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post, i) => (
          <li key={post.url}>
            <Reveal delay={i * 80}>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="flex aspect-[4/5] flex-col justify-between rounded-[6px] bg-well p-5 transition-colors duration-300 group-hover:bg-[#efefef]">
                  <div className="flex justify-between text-[10.5px] text-mute">
                    <span>{post.platform}</span>
                    <span>{post.topic}</span>
                  </div>
                  <h3 className="text-[16px] leading-[1.3] tracking-[-0.02em] text-balance">{post.title}</h3>
                </div>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11.5px]">{post.topic}</p>
                    <p className="mt-0.5 text-[11.5px] text-mute">
                      <time dateTime={post.date}>{formatDay(post.date)}</time>
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="text-[13px] text-mute transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  >
                    ↗
                  </span>
                </div>
                <span className="sr-only">Read on {post.platform} (opens in a new tab)</span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
