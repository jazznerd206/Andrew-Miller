import React from 'react';
import IconBar from '../IconBar/iconbar.js'
import './style.css';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-content">
                <div className="header-title">
                    {/* <span className="nunito"><h1>Andrew Miller</h1></span> */}
                </div>
                <div className="header-message">
                    <div className="message">
                        <div>Hey!! My name is <span className="name">Andrew Miller.</span></div>
                        <div>I deliver solutions using innovative technology and creative problem solving.</div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header;
