import React from 'react';
import './style.css';

function header() {
    return (
        <div className="header-wrapper">
            <div className="header-menu">
                <ul>
                    <li>
                        @2020
                    </li>
                </ul>
            </div>
            <div className="header-logo">
                
            </div>
            <div className="header-content">
                <span><h1>Andrew Miller</h1></span>
                <span><h1>Resume</h1></span>
                <span><h1>Portfolio</h1></span>
                <span><h1>Contact</h1></span>
            </div>
            
        </div>
    )
}

export default header;
