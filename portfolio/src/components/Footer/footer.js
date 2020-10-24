import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="title"> <h1> -- Check me out online -- </h1></div>
            <div className="footer-layer-one">
                <a target="_blank" href="https://github.com/jazznerd206" >
                    <div className="icon-wrapper">
                        <i className="fab fa-github fa-3x footer-icon"></i>
                        <span>Github</span>
                    </div>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/andrew-miller-113a1a195/" >
                    <div className="icon-wrapper">
                        <i className="fab fa-linkedin-in fa-3x footer-icon"></i>
                        <span>LinkedIn</span>
                    </div>
                </a>
                <a target="_blank" href="https://www.instagram.com/206alm/?hl=en" >
                    <div className="icon-wrapper">
                        <i className="fab fa-instagram fa-3x footer-icon"></i>
                        <span>Instagram</span>
                    </div>
                </a>
            </div>
            <div></div>
            
        </div>
    )
}

export default Footer
