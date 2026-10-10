import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/experience'
import { education } from '../data/education'
import { leadership } from '../data/leadership'

function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-slate-800/70 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          label="Experience & Education"
          title="Building technical depth through real-world work and academic progression."
          description="A combination of product experience, software-focused study, and leadership involvement."
        />

        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
              Experience
            </p>

            <div className="mt-8 space-y-10">
              {experiences.map((experience) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="border-l border-slate-800 pl-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-slate-400">
                        {experience.company}
                      </p>
                    </div>

                    <span className="font-mono text-sm text-slate-500">
                      {experience.period}
                    </span>
                  </div>

                  <p className="mt-5 leading-7 text-slate-400">
                    {experience.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 leading-7 text-slate-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-14">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
                Education
              </p>

              <div className="mt-8 space-y-8">
                {education.map((item) => (
                  <article
                    key={`${item.qualification}-${item.institution}`}
                    className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      {item.period}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-slate-100">
                      {item.qualification}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.institution}
                    </p>

                    <p className="mt-4 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
                Leadership & Activities
              </p>

              <div className="mt-8">
                {leadership.map((item) => (
                  <article
                    key={item.organization}
                    className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      {item.period}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-slate-100">
                      {item.organization}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.institution}
                    </p>

                    <p className="mt-4 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience