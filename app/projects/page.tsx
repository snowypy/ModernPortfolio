'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SuperStudy from '@/public/superstudy.png';
import Vandal from '@/public/vandal.png';

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  tags: string[];
}

function ProjectCard({ href, imageSrc, altText, title, description, tags }: ProjectCardProps) {
  const [hoverStyle, setHoverStyle] = useState({});

  interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}
  interface CardElement extends HTMLDivElement {}

  const handleMouseMove = (e: MouseMoveEvent, card: CardElement) => {
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setHoverStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setHoverStyle({});
  };

  return (
    <Link href={href} className="group block w-full sm:w-1/2 px-4 mb-8">
      <div
        className="bg-zinc-900 rounded-lg p-4 transition-transform duration-300"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        onMouseLeave={handleMouseLeave}
        style={{
          ...hoverStyle,
          transition: 'transform 0.2s ease',
        }}
      >
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white font-mono">{title}</h3>
        <p className="text-gray-400 text-sm font-mono">{description}</p>
        <div className="flex space-x-2 mt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-[#1f1f1f] text-white text-xs px-3 py-1 rounded-md font-mono"
            >
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function MoreProjects() {
  return (
    <section className="mb-16">
      <h2 className="text-gray-300 mb-6 text-sm font-mono">More projects</h2>
      <div className="flex flex-wrap -mx-4 mb-8">
        
        <ProjectCard
          href="/projects/vandal"
          imageSrc={Vandal.src}
          altText="Vandal Screenshot"
          title="Vandal"
          description="A Player and Staff core for Minecraft"
          tags={['Java', 'Kotlin']}
        />

        <ProjectCard
          href="/projects/superstudy"
          imageSrc={SuperStudy.src}
          altText="SuperStudy Screenshot"
          title="SuperStudy"
          description="A Flashcards tool for helping students."
          tags={['Kotlin']}
        />

        {/* Add more project cards :) */}

      </div>

      <Link
        href="/"
        className="text-gray-400 hover:text-white inline-flex items-center transition-colors duration-200 text-sm font-mono"
      >
        Back to home →
      </Link>
    </section>
  );
}