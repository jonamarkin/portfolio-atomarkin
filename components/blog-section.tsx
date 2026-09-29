import { Button } from "@/components/ui/button"
import { Section, SectionHeading } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { PostArt } from "@/components/figures/post-art"
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
                <div className="flex aspect-[5/4] flex-col justify-between sm:aspect-[4/5] rounded-[6px] bg-well p-5 transition-colors duration-300 group-hover:bg-[#efefef]">
                  <div className="flex justify-between text-[10.5px] text-mute">
                    <span>{post.platform}</span>
                    <span>{post.topic}</span>
                  </div>
                  <div className="flex flex-1 items-center py-5">
                    <PostArt topic={post.topic} />
                  </div>
                  <h3 className="text-[15px] leading-[1.3] tracking-[-0.02em] text-balance">{post.title}</h3>
                </div>
                <p className="mt-3 line-clamp-2 text-[11.5px] leading-[1.6] text-mute">{post.description}</p>
                <div className="mt-2.5 flex items-end justify-between gap-4">
                  <p className="text-[11px] text-ink">
                    <time dateTime={post.date}>{formatDay(post.date)}</time>
                    <span className="text-mute">
                      {" · "}
                      {post.readMinutes ? `${post.readMinutes} min read` : "Talk & code"}
                    </span>
                  </p>
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
