import React from 'react';
import Header from '../../components/Header/header';
// import Graphics from '../../components/Graphics/Graphics.js';
import './style.css';
import Particles from 'react-particles-js';
import particlesConfig from '../../config/configParticles.js';


function Home() {
    return (
        <div>
            <div style={{ position: 'absolute', pointerEvents: 'none', overflow: 'none'}}>
                <Particles height="100%" width="100%" params={particlesConfig} />
            </div>
            <div className="home">
                <Header />
            </div>            
        </div>
    )
}

export default Home;