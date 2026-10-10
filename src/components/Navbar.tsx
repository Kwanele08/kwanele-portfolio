import { useState } from 'react'
import Container from './Container'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-[#0B0F14]/85 backdrop-blur-md">
      <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-sky-400 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-950"
      >
        Skip to main content
      </a>
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-slate-50"
          onClick={closeMenu}
        >
          KM<span className="text-sky-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 transition hover:text-sky-400"
          >
            Contact
          </a>

          <a
            href="/Kwanele-Maziya-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-sky-400 px-4 py-2 text-sm font-medium text-sky-400 transition hover:bg-sky-400 hover:text-slate-950"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
          
        >
          <span
            className={`h-0.5 w-6 bg-slate-200 transition ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-slate-200 transition ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-slate-200 transition ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </Container>

      {menuOpen && (
        <nav 
        id="mobile-navigation"
        className="border-t border-slate-800 bg-[#0B0F14] md:hidden">
          <Container className="flex flex-col py-6">
            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm text-slate-300 transition hover:text-sky-400"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm text-slate-300 transition hover:text-sky-400"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm text-slate-300 transition hover:text-sky-400"
            >
              Skills
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm text-slate-300 transition hover:text-sky-400"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm text-slate-300 transition hover:text-sky-400"
            >
              Contact
            </a>

            <a
              href="/Kwanele-Maziya-CV.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-5 inline-flex w-fit rounded-lg border border-sky-400 px-4 py-2 text-sm font-medium text-sky-400 transition hover:bg-sky-400 hover:text-slate-950"
            >
              Resume
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}

export default Navbar