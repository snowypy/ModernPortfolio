'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from './components/header'

export default function Custom404() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-screen-sm mx-auto px-4">
        <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Oops! Page not found
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              href="/" 
              className="mt-8 inline-block bg-white text-black px-6 py-2 rounded-full font-mono text-sm hover:bg-gray-300 transition-colors duration-200"
            >
              Go back home
            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

