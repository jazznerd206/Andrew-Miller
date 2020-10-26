import React from 'react';
import './style.css';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-logo">
                
            </div>
            <div className="header-content">
                <span className="nunito"><h1 >Andrew Miller</h1></span>
                <div className="line"></div>
                <span className="raleway"><h1><a href="#experience">Experience</a></h1></span>
                <div className="line"></div>
                <span className="raleway"><h1><a href="#projects">Portfolio</a></h1></span>
                <div className="line"></div>
                <span className="raleway"><h1><a href="#contact">Contact</a></h1></span>
                <div className="line"></div>
            </div>
            
        </div>
    )
}

export default Header;
