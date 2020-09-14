import React from 'react';
import './style.css';
import IconBar from '../IconBar/iconbar';

function header() {
    return (
        <div className="header-wrapper">
            <div className="header-logo">

            </div>
            <div className="header-content">
                <span>Andrew Miller</span>
            </div>
            <div className="header-menu">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <IconBar />
        </div>
    )
}

export default header;
