import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Awel's Portfolio",
  description: 'My simple portfolio website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="max-w-screen-sm mx-auto px-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

