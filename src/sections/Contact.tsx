import Container from '../components/Container'

function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-slate-800/70 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I&apos;m interested in opportunities related to artificial
            intelligence, machine learning, software engineering, and
            intelligent systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:neleziya08@gmail.com"
              className="rounded-lg bg-sky-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Kwanele08"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/knmaziya"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact