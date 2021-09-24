import React from 'react'
import './contact.css'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me in any of platform</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={require("../../../assets/resume.pdf").default}>
                        <i class="fi fi-rr-coffee"></i>
                        Download Resume
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact
