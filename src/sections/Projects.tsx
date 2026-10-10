import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-slate-800/70 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          label="Selected Work"
          title="Projects built around real technical problems."
          description="A selection of work spanning deep learning, applied machine learning, developer tools, cybersecurity, and intelligent systems."
        />

        <div className="mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects