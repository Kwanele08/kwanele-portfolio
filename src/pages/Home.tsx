import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Certifications from '../sections/Certifications'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    document.title =
      'Kwanele Maziya | AI & Machine Learning Engineer'
  }, [])
  return (
    <>
      <Navbar />

      <main 
      id='main-content'
      className="bg-[#0B0F14]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default Home