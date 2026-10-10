import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const focusAreas = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Software Engineering',
  'AI Research',
  'Intelligent Systems',
]

function About() {
  return (
    <section
      id="about"
      className="border-b border-slate-800/70 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          label="About"
          title="Engineering intelligent systems with practical impact."
          description="My work sits at the intersection of artificial intelligence, software engineering, and applied research."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="space-y-6 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              I’m a Computer Science and Engineering student focused on
              artificial intelligence, machine learning, and software
              development. I enjoy turning technical ideas into working
              systems that address real-world problems.
            </p>

            <p>
              My projects span deep learning research, machine-learning
              applications, developer tools, secure software systems, and
              computer vision. I’m particularly interested in building
              intelligent systems that are not only technically sound, but
              also useful, measurable, and well engineered.
            </p>

            <p>
              Alongside AI and machine learning, I continue to strengthen my
              software-engineering foundations through Python, C++, Java,
              frontend development, version control, and system design.
            </p>
          </div>

          <div>
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
              Areas of Focus
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-900/70"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About