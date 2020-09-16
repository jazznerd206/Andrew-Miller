import React from 'react';
import './style.css';

function maincontent() {
    return (
    <div className="main-content-wrapper">
        <div className="flex">
            <span><h3>Projects</h3></span>
            <div className="flex-item-first flex-column">
                <div className="flex-column-item flip-card-inner">Green Grub
                    <div className="flip-front">
                        <span><p>Tech Stack:</p></span>
                            <ul>
                                <li>
                                    Express JS
                                </li>
                            </ul>
                        </div>
                    <div className="flip-back">
                        
                    </div>
                </div>
                <div className="flex-column-item flip-card-inner">Inventory
                    <div className="flip-front">
                        <span><p>Tech Stack:</p></span>
                            <ul>
                                <li>
                                    Express JS
                                </li>
                            </ul>
                        </div>
                    <div className="flip-back">
                        
                    </div>
                </div>
                <div className="flex-column-item flip-card-inner">studyBuddy
                    <div className="flip-front">
                        <span><p>Tech Stack:</p></span>
                            <ul>
                                <li>
                                    Express JS
                                </li>
                            </ul>
                        </div>
                    <div className="flip-back">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="flex">
            <span><h3>Experience</h3></span>
            <div className="flex-item-first flex-column"> 
            <div className="flex-column-item flip-card-inner">Leadership
                    <div className="flip-front">
                        <span><p>Experience</p></span>
                            <ul>
                                <li>
                                    Music
                                </li>
                                <li>
                                    Inventory
                                </li>
                            </ul>
                        </div>
                    <div className="flip-back">
                        
                    </div>
                </div>
                <div className="flex-column-item flip-card-inner">Artistry
                    <div className="flip-front">
                        <span><p>Experience</p></span>
                            <ul>
                                <li>
                                    Music
                                </li>
                                <li>
                                    Glass
                                </li>
                            </ul>
                        </div>
                    <div className="flip-back">
                        
                    </div>
                </div>
                <div className="flex-column-item flip-card-inner">Full Stack Development
                    <div className="flip-front">
                        <span><p>Tech Stack:</p></span>
                            <ul>
                                <li>
                                    Express JS
                                </li>
                            </ul>
                        </div>
                    <div className="flip-back">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="flex">
            <span><h3>Bio</h3></span>
            <div className="flex-item-next flex-column">
                <div className="flex-column-item">Image
                    <img src="https://picsum.photos/200" alt="placeholder" />
                </div>
                <div className="flex-column-item">Small paragraph
                    <img src="https://picsum.photos/200" alt="placeholder" />
                </div>
            </div>
            <div className="flex-item-next flex-column">
                <div className="flex-column-item">Social/Contact Buttons
                    <img src="https://picsum.photos/200" alt="placeholder" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default maincontent;