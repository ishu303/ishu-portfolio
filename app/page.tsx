import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatIDo from '@/components/WhatIDo'
import Stats from '@/components/Stats'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Hackathons from '@/components/Hackathons'
import Experience from '@/components/Experience'
import Vision from '@/components/Vision'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <WhatIDo />
      <div className="divider" />
      <Stats />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Hackathons />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Vision />
      <Footer />
    </main>
  )
}
