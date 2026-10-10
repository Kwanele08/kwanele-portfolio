import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import { projects } from '../data/projects'
import { useEffect } from 'react'

function ProjectDetails() {
  const { slug } = useParams()

  const project = projects.find(
    (project) => project.slug === slug
  )

  useEffect(() => {
  if (project) {
    document.title = `${project.title} | Kwanele Maziya`
  }

  return () => {
    document.title =
      'Kwanele Maziya | AI & Machine Learning Engineer'
  }
}, [project])

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0B0F14] py-32">
        <Container>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-50">
            Project not found.
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block text-sky-400 hover:text-sky-300"
          >
            ← Back to portfolio
          </Link>
        </Container>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <section className="border-b border-slate-800/70 py-24 sm:py-32">
        <Container>
          <Link
            to="/#projects"
            className="text-sm text-slate-400 transition hover:text-sky-400"
          >
            ← Back to portfolio
          </Link>

          <p className="mt-12 font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-sm font-medium text-sky-400 transition hover:text-sky-300"
            >
              View GitHub Repository ↗
            </a>
          )}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-16 space-y-20">
            <section>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
                01 / Problem
                </p>

                <h2 className="mt-4 text-3xl font-bold text-slate-50">
                What problem was I solving?
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                {project.problem}
                </p>
            </section>

            <section>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
                02 / Approach
                </p>

                <h2 className="mt-4 text-3xl font-bold text-slate-50">
                How I approached it
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                {project.approach}
                </p>
            </section>

            <section>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
                03 / My Contribution
                </p>

                <h2 className="mt-4 text-3xl font-bold text-slate-50">
                What I personally implemented
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                {project.contribution}
                </p>
            </section>

            <section>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
                04 / Technical Implementation
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                {project.implementation.map((item) => (
                    <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
                    >
                    <p className="leading-7 text-slate-300">
                        {item}
                    </p>
                    </div>
                ))}
                </div>
            </section>

            <section>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
                05 / Results
                </p>

                <h2 className="mt-4 text-3xl font-bold text-slate-50">
                What the project achieved
                </h2>

                <div className="mt-8 space-y-4">
                {project.results.map((result) => (
                    <div
                    key={result}
                    className="border-l-2 border-sky-400 pl-5 text-slate-300"
                    >
                    {result}
                    </div>
                ))}
                </div>
            </section>

            <section>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
                06 / Key Learnings
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                {project.learnings.map((learning) => (
                    <div
                    key={learning}
                    className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
                    >
                    <p className="leading-7 text-slate-400">
                        {learning}
                    </p>
                    </div>
                ))}
                    </div>
            </section>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default ProjectDetails