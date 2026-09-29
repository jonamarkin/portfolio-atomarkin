/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Posts and fonts are read from disk; make sure deployed functions include them
    outputFileTracingIncludes: {
      "/writing/**/*": ["./content/writing/**/*", "./node_modules/geist/dist/fonts/**/*.ttf"],
      "/opengraph-image": ["./node_modules/geist/dist/fonts/**/*.ttf", "./public/images/hero-1.jpg"],
    },
  },
}

export default nextConfig
