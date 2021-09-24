import React from 'react'
import './web.css'

function Web() {
    return (
        <div className="web">
            <div className='web-option'>
                <a href="#project">
                    <i class="fi fi-rr-comment-info option-icon"></i>Project
                </a>
            </div>
            <div className='web-option'>
                <a href="#skills">
                    <i class="fi fi-rr-file-ai option-icon"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href="#work">
                    <i class="fi fi-rr-billiard option-icon"></i>Work
                </a>
            </div>
            <div className='web-option'>
                <a href="#contact">
                    <i class="fi fi-rr-pyramid option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web
