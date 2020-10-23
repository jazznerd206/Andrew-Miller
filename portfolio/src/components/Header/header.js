import React from 'react';
import './style.css';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-menu">
                <ul>
                </ul>
            </div>
            <div className="header-logo">
                
            </div>
            <div className="header-content">
                <span><h1 className="nunito">Andrew Miller</h1></span>
                <div className="line"></div>
                <span><h1 className="raleway"><a href="#experience">Experience</a></h1></span>
                <div className="line"></div>
                <span><h1 className="raleway"><a href="#projects">Portfolio</a></h1></span>
                <div className="line"></div>
                <span><h1 className="raleway"><a href="#contact">Contact</a></h1></span>
                <div className="line"></div>
            </div>
            
        </div>
    )
}

export default Header;
