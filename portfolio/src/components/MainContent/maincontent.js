import React from 'react';
import './style.css';
import Projects from '../Projects/Projects.js';
import Headshot from '../../public/images/HeadshotPost1.jpg'
// import music_1 from "../../public/images/sheet_music_3.png";
// import glass_img from '../../public/images/glassblower_mold.jpg';

function Maincontent() {
    return (
    <div className="main-content-wrapper" id="experience">
        <div className="flex-column">
            <div className="flex-item">
                <div className="exp-title content">
                    <span><h1>Full Stack Web Developer</h1></span>
                </div>
            </div>
            <div className="flex-item content">
                <div className="headshot">
                    <img src={Headshot}></img>
                </div>
                <div className="about-me">
                    <span>With decades of art industry experience under his belt, Andrew draws inspiration from all perspectives. A simple birdsong turned into a symphony, a grain of wood translated into glass. Applying these philosophies and working methods to development, Andrew has found a voice creating unique, beautiful and immersive experiences for all kinds of users. Combining artistic experience with technical knowledge and an insatiable desire to keep learning, he stays busy exploring new ways to translate his vision into <span className="italic"> useful, meaningful technology </span> to expose to the world.</span>
                </div>
            </div>
        </div>
        <div className="flex-column second-column">
            <div className="flex-item">
                <div className="exp-title content">
                    <span><h1>Experience</h1></span>
                </div>
            </div>
            <div className="flex-item">
                <div className="text-item-left content">
                    <div className="experience-title"><h2>Art:</h2></div>
                    <ul>
                        <li>20+ years experience studying, performing and recording music.</li>
                        
                        <li>6 years experience as a glassblower, honing aesthetic interpretation skills, creating work to exacting standards while maintaining the individuality of each handmade piece.</li>
                        <li>Highly detail oriented and uncompromising standards of excellence.</li>
                    </ul>
                </div>
                <div className="text-item-left content">
                    <div className="experience-title"><h2>Certifications:</h2></div>
                    <ul>
                        <li>LinkedIn: 
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </li>
                        <li>PluralSight:
                            <ul>
                                <li>JavaScript</li>
                                <li>NodeJS</li>
                            </ul>
                        </li>
                        <li>Coursera:
                            <ul>
                                <li>Data Science and Alogrithms, Duke University</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="text-item-left content">
                    <div className="experience-title"><h2>Technology I love:</h2></div>
                    <ul>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Foundation by Zurb</li>
                        <li>Material CSS</li>
                        <li>D3.JS</li>
                        <li>WebAudio API</li>
                    </ul>
                </div>
                <div className="text-item-left content">
                    <div className="experience-title"><h2>Other:</h2></div>
                    <ul>
                        <li>Audio/Video editing</li>
                        <li>Studio construction consultation</li>
                        <li>Sales/Customer service</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex-column">
            <div className="flex-item">
                <div className="exp-title content">
                    <span><h1>Education</h1></span>
                </div>
            </div>
            <div className="flex-item text-item-left content">
                <ul>
                    <li>Full Stack Web Development Certificate, University of Washington (2019-2020)</li>
                    <li>Trumpet Performance, Jazz Studies, University of Washington (2012)</li>
                    <li>Associate of Arts, North Seattle College (2010)</li>
                </ul>
            </div>
        </div>
        <div className="flex" id="portfolio-anchor">
            <Projects />
        </div>
    </div>
    )
}

export default Maincontent;