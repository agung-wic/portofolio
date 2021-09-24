import React from 'react'
import Separator from '../../common/separator'
import { SkillsData } from '../../data/skill'
import SkillCard from './skill-card'
import './skill.css'

function Skill() {
    const data = SkillsData
    return (
        <div className='skill'>
            <Separator />
            <label className='section-title'>Skills</label>
            <div className='skill-container'>
                {data.map((item)=>{
                    return(
                        <div className='skill-section'>
                            <label className='skill-section-title'>{item.type}</label>
                            <div className='skill-list'>
                                {item.list.map((skill)=>{
                                    return(
                                        <SkillCard skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Skill
