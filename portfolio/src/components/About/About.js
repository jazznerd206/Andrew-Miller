import React from 'react';
import './styles.css';
import Resume from '../../Documents/Resume.pdf';

function About() {
    return (
        <div className="bio-container">
            <div className="flex-row">
                <div className="bio-title">
                    about me
                </div>
            </div>
            <div className="flex-row">
                <div className="bio-image">

                </div>
                <div className="bio-content">
                    <p>I believe in delivering meaningful, impactful technology paired with simple, clean code.</p>
                    <p>I have always searched for ways to enhance existing processes or otherwise streamline production and impact quality. This built a passion for technology, first as a user, now as a developer.</p>
                    <p>I seek opportunities and challenges to improve myself and assist and ally with others to approach real world problems with innovative solutions. </p>
                </div>
            </div>
            <div className="flex-row header-content">
                <a
                    href={Resume} type="application/pdf" without rel="noopener noreferrer" target="_blank"
                >
                    Resume
                </a>
                <a
                    href="#projects"
                >
                    Projects
                </a>
                <a
                    href="/contact"
                >
                    Contact me!
                </a>
            </div>
        </div>
    )
}

export default About
