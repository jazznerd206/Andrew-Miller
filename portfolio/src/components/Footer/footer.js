import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="title">
                <i className="fas fa-arrow-down fa-3x footer-icon"></i><span><h1>Social Media</h1></span><i className="fas fa-arrow-down fa-3x footer-icon"></i>
            </div>
            <div className="footer-layer-one">
                <div className="icon-wrapper">
                    <span></span>
                    <i className="fab fa-github fa-3x footer-icon"></i>
                </div>
                <div className="icon-wrapper">
                    <i className="fab fa-linkedin-in fa-3x footer-icon"></i>
                </div>
                <div className="icon-wrapper">
                    <i className="fab fa-instagram fa-3x footer-icon"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
