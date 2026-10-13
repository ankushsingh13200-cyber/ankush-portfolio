import React from 'react'
import Nav from './components/Nav'
import Hero3D from './components/Hero3D'
import Gallery from './components/Gallery'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Hero3D />
        <section id="projects"><Gallery /></section>
        <section id="case-studies"><CaseStudies /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="site-footer">© {new Date().getFullYear()} Ankush — Creative Portfolio</footer>
    </div>
  )
}
