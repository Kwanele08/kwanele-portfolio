import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-slate-800/70 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          label="Skills"
          title="Technical foundations across AI and software engineering."
          description="A practical toolkit built through projects, research, and software development."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-100">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills