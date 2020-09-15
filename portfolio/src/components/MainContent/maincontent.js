import React from 'react';
import './style.css';

function maincontent() {
    return (
    <div>
        <div className="flex">
            <span><h3>Experience</h3></span>
            <div className="flex-item-first flex-column"> 
                <div className="flex-column-item">
                    <img src="https://picsum.photos/200" alt="placeholder" />
                </div>
            </div>
        </div>
        <div className="flex">
            <span><h3>Projects</h3></span>
            <div className="flex-item-first flex-column">
                <div className="flex-column-item">
                    <img src="https://picsum.photos/200" alt="placeholder" />
                </div>
                <div className="flex-column-item">
                    <img src="https://picsum.photos/200" alt="placeholder" />
                </div>
                <div className="flex-column-item">
                    <img src="https://picsum.photos/200" alt="placeholder" />
                </div>
            </div>
        </div>
        <div className="flex">
            <span><h3>Bio</h3></span>
            <div className="flex-item-next flex-column">
                <div className="flex-column-item">
                    <img src="https://picsum.photos/200" alt="placeholder" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default maincontent;