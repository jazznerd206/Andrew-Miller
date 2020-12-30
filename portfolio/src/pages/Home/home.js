import React from 'react';
import Header from '../../components/Header/header';
import About from '../../components/About/About';
import ProjectBoard from '../../components/Projects/ProjectBoard'
import './style.css';


function Home() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="header" id="about">
                <About />
            </div>
            <div className="projects" id="projects">
                <ProjectBoard />
            </div>
            
        </div>
    )
}

export default Home;