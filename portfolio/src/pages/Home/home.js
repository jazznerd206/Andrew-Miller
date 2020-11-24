import React from 'react';
import Header from '../../components/Header/header';
import MainContent from '../../components/MainContent/maincontent';
import Contact from "../../components/Contact/contact";
// import Footer from "../../components/Footer/footer";
import './style.css';
import Particles from 'react-particles-js';
import particlesConfig from '../../config/configParticles.js';


function Home() {
    return (
        <div>
            <div style={{ position: 'absolute'}}>
                <Particles height="100vh" width="100vw" params={particlesConfig} />
            </div>
            <div className="home">
                <Header />
                {/* <MainContent /> */}
                {/* <Contact /> */}
                {/* <Footer /> */}
            </div>
            <div className="main">
               
            </div>


            
        </div>
    )
}

export default Home;