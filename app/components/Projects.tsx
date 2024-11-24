import { Card } from './Card'

export function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-light-gray">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="Task Manager API">
          <p className="text-light-gray mb-4">
            A RESTful API built with Spring Boot and Kotlin, featuring user authentication and task management.
          </p>
          <a href="#" className="text-accent-red hover:underline">View Project</a>
        </Card>
        <Card title="Android Weather App">
          <p className="text-light-gray mb-4">
            A sleek weather application developed in Kotlin, utilizing modern Android development practices.
          </p>
          <a href="#" className="text-accent-red hover:underline">View Project</a>
        </Card>
        <Card title="Java Chess Engine">
          <p className="text-light-gray mb-4">
            A robust chess engine implemented in Java, featuring AI opponents with varying difficulty levels.
          </p>
          <a href="#" className="text-accent-red hover:underline">View Project</a>
        </Card>
      </div>
    </section>
  )
}

