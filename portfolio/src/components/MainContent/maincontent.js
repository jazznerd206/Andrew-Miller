import React from 'react';
import './style.css';
import music_1 from "../../public/images/sheet_music_3.png";
import glass_img from '../../public/images/glassblower_mold.jpg';

function maincontent() {
    return (
    <div className="main-content-wrapper">
        <div className="flex-column">
            <div className="flex-item">
                {/* <div className="exp-image">
                    <img src={music_1}/>
                </div> */}
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
                <div className="text-item-right">
                    <span>Decades of experience as an artist, captivated and delighted by web development.</span>
                </div>
                <div className="text-item-right">
                    <span>Valued as both team member and leader across many disciplines -- keenly developed skills of improvisation and collaboration.</span>
                </div>
                <div className="text-item-right">
                    <span>Always in search of new ways to improve myself and support those around me.</span>
                </div>
            </div>
            <div className="flex-item">
                {/* <div className="exp-image">
                    <img src={glass_img}/>
                </div> */}
            </div>
        </div>
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
{/*         
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
        </div> */}
    </div>
    )
}

export default maincontent;