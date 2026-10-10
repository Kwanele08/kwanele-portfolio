import type { Project } from '../types/project'
import { Link } from 'react-router-dom'

type ProjectCardProps = {
  project: Project
  reverse?: boolean
}

function ProjectCard({
  project,
  reverse = false,
}: ProjectCardProps) {
  return (
    <article
      className={`grid items-center gap-8 border-t border-slate-800 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
        <div className="flex aspect-[16/10] items-center justify-center">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>

      <div>
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
          {String(project.id).padStart(2, '0')} / Featured Project
        </p>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-slate-500">
          {project.category}
        </p>

        <p className="mt-6 max-w-xl leading-8 text-slate-400">
          {project.description}
        </p>

        {project.metric && (
          <div className="mt-7">
            <p className="text-3xl font-bold text-slate-50">
              {project.metric}
            </p>

            <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
              {project.metricLabel}
            </p>
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-5">
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm font-medium text-sky-200 transition hover:text-sky-400"
          >
            View Case Study →
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-400 transition hover:text-sky-400"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard