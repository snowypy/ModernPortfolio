import Link from 'next/link'
import { Moon } from 'lucide-react'

export function Header() {
  return (
    <header className="py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          awel.studio
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/blog" className="text-sm hover:text-gray-300">
            blog
          </Link>
          <Link href="/projects" className="text-sm hover:text-gray-300">
            projects
          </Link>
          <Link href="/visitors" className="text-sm hover:text-gray-300">
            friends
          </Link>
          <button className="text-sm" aria-label="Toggle theme">
            <Moon className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </header>
  )
}

