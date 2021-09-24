import React from 'react'
import { ProjectData } from '../../data/project'
import './project.css'
import ProjectCard from './project-card'
import Separator from '../../common/separator'

function Project() {
    const data = ProjectData
    return (
        <div className="project">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    )
}

export default Project
