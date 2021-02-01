import React from 'react';
import './styles.css';
import Image from '../../public/images/HEADSHOT.jpeg'
import Resume from '../../Documents/ResumeCurrent.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Fade, Bounce } from 'react-reveal';

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
                <Fade left>
                    <div className="bio-image">
                        <img src={Image}></img>
                    </div>
                </Fade>
                <div className="bio-content">
                    <Fade right>
                        <p>I am a full stack web developer with a passion for modern and emerging web technologies. I believe in delivering meaningful, impactful technology driven by simple, clean code.</p>
                    </Fade>
                    <Fade right>
                        <p>When I'm not behind the keyboard, I can most often be found anywhere I can play golf, taking care of my foster dogs, or letting my creative side loose with a guitar and a trumpet.</p>
                    </Fade>
                </div>
            </div>
            <div className="flex-row text-fancify">
                <div>
                    <Fade bottom>
                        <p className="dark-text">I am currently seeking opportunities and challenges to improve myself and assist and ally with others to approach real world problems with innovative solutions.</p>
                    </Fade>
                </div>
            </div>
            
            <div className="about-content flex-row">
                <Bounce right>
                    <div className="">
                        <a
                            href={Resume} type="application/pdf" rel="noopener noreferrer" target="_blank"
                        >
                            Resume
                        </a>
                    </div>
                </Bounce>
                <Bounce bottom>

                    <AnchorLink
                        href="#projects"
                    >
                        Projects
                    </AnchorLink>
                </Bounce>
                <Bounce left>
                    <div className="">
                        <a
                            href="/contact"
                        >
                        Contact me!
                        </a>
                    </div>
                </Bounce>
            </div>
            
        </div>
    )
}

export default About
