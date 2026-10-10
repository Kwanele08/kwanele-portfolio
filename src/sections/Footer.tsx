import Container from '../components/Container'

function Footer() {
  return (
    <footer className="py-8">
      <Container className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          KM<span className="text-sky-400">.</span>
        </p>

        <p>
          Designed & built by Kwanele Maziya
        </p>

        <p>
          © {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  )
}

export default Footer