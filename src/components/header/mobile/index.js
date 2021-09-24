import React from 'react'
import './mobile.css'

function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="fi fi-rr-chart-pyramid"></i>
            </div>
            <div className="mobile-options">
                <div className='mobile-option'>
                    <a href="#project">
                        <i class="fi fi-rr-comment-info option-icon"></i>Project
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#skills">
                        <i class="fi fi-rr-file-ai option-icon"></i>Skills
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#work">
                        <i class="fi fi-rr-billiard option-icon"></i>Work
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#contact">
                        <i class="fi fi-rr-pyramid option-icon"></i>Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
