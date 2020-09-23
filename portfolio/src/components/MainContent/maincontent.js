import React from 'react';
import './style.css';
import Projects from '../Projects/Projects.js';
// import music_1 from "../../public/images/sheet_music_3.png";
// import glass_img from '../../public/images/glassblower_mold.jpg';

function Maincontent() {
    return (
    <div className="main-content-wrapper" id="experience">
        <div className="flex-column">
            <div className="flex-item">
                <div className="exp-title">
                    <span><h1>Goals</h1></span>
                </div>
            </div>
            <div className="flex-item">
                <div className="text-item-right">
                    <span>Create streamlined user experiences combined with elegant code.</span>
                </div>
                <div className="text-item-left">
                    <span>Build clean, aesthetically and visually pleasing designs. Simple is beautiful.</span>
                </div>
                <div className="text-item-right">
                    <span>Deploy useful, meaningful tech.</span>
                </div>
            </div>
        </div>
        <div className="flex-column">
            <div className="flex-item">
                <div className="exp-title">
                    <span><h1>About Me</h1></span>
                </div>
            </div>
            <div className="flex-item">
                <div className="text-item-right">
                    <span>Decades of experience as an artist, captivated and delighted by web development.</span>
                </div>
                <div className="text-item-left">
                    <span>Valued as both team member and leader across many disciplines -- keenly developed skills of improvisation and collaboration.</span>
                </div>
                <div className="text-item-right">
                    <span>Always in search of new ways to improve myself and support those around me.</span>
                </div>
            </div>
        </div>
        <div className="flex" id="portfolio-anchor">
            <Projects />
        </div>
    </div>
    )
}

export default Maincontent;