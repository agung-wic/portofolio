import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello World! I am<br />
                    <span className="info-name">Agung Wicaksono.</span>
                    <br />I am very interested in Web Development 
                    <br />and Machine Learning field.
                </div>
                <div className="about-image">
                    <img src={require("../../../assets/profile.png").default} className="picture" />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
