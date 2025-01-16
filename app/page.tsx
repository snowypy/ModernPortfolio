import { Hero } from './components/hero'
import { TechStack } from './components/tech-stack'
import { RecentProjects } from './components/recent-projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <RecentProjects />
    </main>
  )
}