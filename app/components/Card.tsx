import { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-medium-blue rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-4 text-light-gray">{title}</h3>
      {children}
    </div>
  )
}