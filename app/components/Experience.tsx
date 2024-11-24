import { Card } from './Card'

export function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-light-gray">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Junior Java Developer">
          <p className="text-light-purple mb-2">TechCorp Inc. | Summer 2023</p>
          <ul className="list-disc list-inside text-light-gray">
            <li>Developed and maintained Java-based applications</li>
            <li>Collaborated with senior developers on large-scale projects</li>
            <li>Implemented unit tests to ensure code quality</li>
          </ul>
        </Card>
        <Card title="Kotlin Intern">
          <p className="text-light-purple mb-2">MobileSoft Solutions | Spring 2023</p>
          <ul className="list-disc list-inside text-light-gray">
            <li>Assisted in developing Android applications using Kotlin</li>
            <li>Learned and applied best practices in mobile app development</li>
            <li>Participated in code reviews and team meetings</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

