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
                        <span>Hey!! I am a full stack web developer. I deliver solutions using innovative technology and creative problem solving.</span>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header;
