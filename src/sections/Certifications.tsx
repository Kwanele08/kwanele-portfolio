import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <section className="border-b border-slate-800/70 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          label="Certifications"
          title="Credentials that support my technical and problem-solving foundation."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-slate-700"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
                {certification.issuer}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-slate-100">
                {certification.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {certification.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Certifications