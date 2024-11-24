'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Friend {
  blinkyUrl: string
  personalSiteUrl: string
}

const friends: Friend[] = [
  {
    blinkyUrl: "https://github.com/snowypy/ModernPortfolio/blob/master/public/badges/snowy.png?raw=true",
    personalSiteUrl: "https://snowyjs.lol",
  },
  {
    blinkyUrl: "",
    personalSiteUrl: "https://nopox.dev",
  },
]

export default function Blinkies() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Friends</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {friends.map((friend, index) => (
          <motion.a
            key={index}
            href={friend.personalSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <img
              src={friend.blinkyUrl}
              alt={`Blinky for ${friend.personalSiteUrl}`}
              className="w-full h-auto shadow-lg"
              style={{ borderRadius: 0 }}
            />
          </motion.a>
        ))}
      </div>
    </main>
  )
}