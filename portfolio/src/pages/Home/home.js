import React from 'react';
import Header from '../../components/Header/header';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects'
import ProjectBoard from '../../components/Projects/ProjectBoard'
import './style.css';
import Particles from 'react-particles-js';
import particlesConfig from '../../config/configParticles.js';


function Home() {
    return (
        <div>
            {/* <div style={{ position: 'absolute', pointerEvents: 'none', overflow: 'none'}}>
                <Particles height="auto" width="100%" params={particlesConfig} style={{pointerEvents: 'none'}}/>
            </div> */}
            <div className="header">
                <Header />
            </div>
            <div className="header" id="about">
                <About />
            </div>
            <div className="projects" id="projects">
                <ProjectBoard />
                {/* <Projects /> */}
            </div>
            
        </div>
    )
}

export default Home;