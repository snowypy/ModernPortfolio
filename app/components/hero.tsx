'use client'

import Image from 'next/image'
import { useState } from 'react'
import awel from '@/public/awel.gif'
import banner from '@/public/banner.gif'

const waveAnimation = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
`

export function Hero() {
  const [isWaving, setIsWaving] = useState(false)

  return (
    <section className="mb-16">
      <style jsx>{waveAnimation}</style>
      <div className="relative w-full h-[150px] rounded-lg overflow-hidden mb-8">
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs py-1 px-2 rounded-md z-10">
          {new Date().toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: 'numeric', hour12: true })}
        </div>
        <Image
          src={banner}
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex items-start gap-4">
        <Image
          src={awel}
          alt="Profile"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold mb-2">
            Hey, I'm Awel (ayy-well)  
            <span 
              className="inline-block cursor-pointer transition-transform ml-1"
              style={{ animation: isWaving ? 'wave 2.5s infinite' : 'none' }}
              onMouseEnter={() => setIsWaving(true)}
              onMouseLeave={() => setIsWaving(false)}
            >
              👋
            </span>
          </h1>
          <p className="flex items-center gap-2 mb-4 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-gray-400">Available for work</span>
          </p>
          <p className="text-gray-300 mb-4 text-sm">
            I'm currently learning backend development and based in Houston, Texas.
          </p>
          <p className="text-gray-300 text-sm">
            I spend a lot of time studying and playing basketball, on top of this I do enjoy coding open source projects.
          </p>
        </div>
      </div>
    </section>
  )
}

