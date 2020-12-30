import React from 'react';
import './styles.css';
import Resume from '../../Documents/ResumeCurrent.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Zoom, Fade, Bounce } from 'react-reveal';

function About() {
    return (
        <div className="bio-container">
            <div className="flex-row">
                
                <Bounce bottom cascade>
                    <div className="bio-title">
                        about me
                    </div>
                </Bounce>
                
            </div>
            <div className="flex-row">
                {/* <div className="bio-image">

                </div> */}
                <div className="bio-content">
                    <Fade bottom>
                        <p>I believe in delivering meaningful, impactful technology paired with simple, clean code.</p>
                    </Fade>
                    <Fade bottom>
                        <p>I have always searched for ways to enhance existing processes or otherwise streamline production and impact quality. This built a passion for technology, first as a user, now as a developer.</p>
                    </Fade>
                    <Fade bottom>
                        <p className="dark-text">I seek opportunities and challenges to improve myself and assist and ally with others to approach real world problems with innovative solutions. </p>
                    </Fade>
                </div>
            </div>
            <Bounce left>
                <div className="flex-row about-content">
                    <a
                        href={Resume} type="application/pdf" rel="noopener noreferrer" target="_blank"
                    >
                        Resume
                    </a>
                    <AnchorLink
                        href="#projects"
                    >
                        Projects
                    </AnchorLink>
                    <a
                        href="/contact"
                    >
                        Contact me!
                    </a>
                </div>
            </Bounce>
        </div>
    )
}

export default About
