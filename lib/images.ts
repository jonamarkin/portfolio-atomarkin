import { existsSync } from "node:fs"
import path from "node:path"

/** Server-only: returns `src` if the file exists under public/, else null. */
export function resolveImage(src: string): string | null {
  return existsSync(path.join(process.cwd(), "public", src)) ? src : null
}
