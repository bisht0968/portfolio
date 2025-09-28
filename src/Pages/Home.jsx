import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import WorkingProcess from '../components/WrokingProcess/WorkingProcess'
import Connect from '../components/Connect/Connect'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
        <div className="home-section">
            <div className='home-container'>
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <About />
                <WorkingProcess />
                <Connect />
                <Footer />
            </div>
        </div>
    )
}
