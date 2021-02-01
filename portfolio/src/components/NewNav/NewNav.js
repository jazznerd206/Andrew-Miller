import React, { useEffect } from 'react';
import './styles.css'

function NewNav() {
    
    return (
        <nav class="navbar">
            <div class="nav-icon">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

            <div class="menu">
                <li class="item">Rooster</li>
                <li class="item">Frog</li>
                <li class="item">Fox</li>
                <li class="item">Peacock</li>
                <li class="item">Spider</li>
            </div>
        </nav>
    )
}

export default NewNav;