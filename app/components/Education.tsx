import { Card } from './Card'

export function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-light-gray">Education</h2>
      <Card title="Houston Tech High School">
        <p className="text-light-purple mb-2">Graduated 2023</p>
        <ul className="list-disc list-inside text-light-gray">
          <li>Advanced Placement Computer Science</li>
          <li>Robotics Club President</li>
          <li>National Honor Society Member</li>
        </ul>
      </Card>
    </section>
  )
}

