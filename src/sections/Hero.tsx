import profileImage from '../assets/images/profile/kwanele-profile.png'
import Container from '../components/Container'
import Button from '../components/Button'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/70"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.10),_transparent_35%)]" />

      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
            AI / Machine Learning Engineer
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Kwanele Maziya
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl">
            Building intelligent systems that combine machine learning,
            computer vision, and software engineering to solve real-world
            problems.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#projects">
              View My Work
            </Button>

            <Button
              href="/Kwanele-Maziya-CV.pdf"
              variant="secondary"
              external
            >
              View CV
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
            <a
              href="https://github.com/Kwanele08"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/knmaziya"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:neleziya08@gmail.com"
              className="transition hover:text-sky-400"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-sky-400/10 blur-2xl" />

            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 sm:max-w-sm">
              <img
                src={profileImage}
                  alt="Kwanele Maziya"
                  className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero