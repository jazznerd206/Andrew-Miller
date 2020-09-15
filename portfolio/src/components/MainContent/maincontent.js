import React from 'react';
import './style.css';

function maincontent() {
    return (
        <div className="flex">
            <div className="flex-item-first">
                <span>Experience</span>
            </div>  
            <div className="flex-item-first">
                <span>Experience</span>
            </div>
            <div className="flex-item-next">
                <span>Bio/Image</span>
            </div>
        </div>
    )
}

export default maincontent;