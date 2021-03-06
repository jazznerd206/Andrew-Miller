import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="title">
                <h1>Connect, Follow and More...</h1>
            </div>
            <div className="footer-layer-one">
                <a target="_blank" href="https://github.com/jazznerd206"  rel="noopener noreferrer">
                    <div className="icon-wrapper footer-icon">
                        <i className="fab fa-github fa-3x"></i>
                        <span>Github</span>
                    </div>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/andrew-miller-113a1a195/" rel="noopener noreferrer" >
                    <div className="icon-wrapper footer-icon">
                        <i className="fab fa-linkedin-in fa-3x"></i>
                        <span>LinkedIn</span>
                    </div>
                </a>
                <a target="_blank" href="https://www.instagram.com/206alm/?hl=en" rel="noopener noreferrer">
                    <div className="icon-wrapper footer-icon">
                        <i className="fab fa-instagram fa-3x"></i>
                        <span>Instagram</span>
                    </div>
                </a>
                <a target="_blank" href="https://twitter.com/AndrewM54836877" rel="noopener noreferrer">
                    <div className="icon-wrapper footer-icon">
                        <i className="fab fa-twitter fa-3x"></i>
                        <span>Twitter</span>
                    </div>
                </a>
            </div>            
        </div>
    )
}

export default Footer
