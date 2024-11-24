'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const technologies = [
  {
    name: 'Java',
    iconPath: '/stack/java.svg',
  },
  {
    name: 'Kotlin',
    iconPath: '/stack/kotlin.svg',
  },
  {
    name: 'Python',
    iconPath: '/stack/python.svg',
  },
  {
    name: 'Node.js',
    iconPath: '/stack/nodejs.svg',
  },
  {
    name: 'MongoDB',
    iconPath: '/stack/mongodb.svg',
  },
  {
    name: 'SQLite',
    iconPath: '/stack/sqlite.svg',
  },
  {
    name: 'Gradle',
    iconPath: '/stack/gradle.svg',
  },
  {
    name: 'Git',
    iconPath: '/stack/git.svg',
  },
]

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="mb-16">
      <h2 className="text-gray-300 mb-6 text-sm">current tech stack:</h2>
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center justify-center p-2 aspect-square cursor-pointer"
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="w-10 h-10 mb-2">
              <img
                src={tech.iconPath}
                alt={tech.name}
                className={`w-full h-full transition-colors duration-300 ${hoveredTech === tech.name ? '' : 'filter grayscale'}`}
              />
            </div>
            <span className="text-sm text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}