import React from 'react';
import './styles.css'

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
                    <p>During my professional career, I always searched for ways to enhance existing processes or otherwise streamline production and impact quality. This quickly built a passion for technology, first as a user, now as a developer.</p>
                    <p>Outside of the foxhole, I seek opportunities to improve myself and others and assist and ally with other to overcome real world challenges. </p>
                </div>
            </div>
            <div className="flex-row">
                <button>
                    Resume
                </button>
            </div>
        </div>
    )
}

export default About
