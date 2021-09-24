import React from 'react'
import About from './about'
import Project from './project'
import Skill from './skill'
import Work from './work'
import Contact from './contact'
import './body.css'

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="skills">
                <Skill />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
