export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} Jonathan Ato Markin. All rights reserved.</p>
          <p className="text-xs mt-2 opacity-80">Built with Next.js, Tailwind CSS, and deployed on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
