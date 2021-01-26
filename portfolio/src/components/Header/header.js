import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Fade } from 'react-reveal';
// import useHeaderSize from '../../hooks/windowSize.js'
import './style.css';
import useWindowSize from '../../hooks/windowSize.js';

function Header() {

    const [ width, setWidth ] = useState(0)

    const size = useWindowSize();
    // console.log(size)

    const windowSize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        windowSize();
    }, [width])


    return(
        <div className="header-wrapper">
            <div className="stars">
                <div className="twinkling">
                </div>
            </div>
            <div className="header-title">
                <h1>Andrew Miller</h1>
                <div className="statement">
                    
                </div>
                <Fade left delay={2500} duration={500}>
                    <div className="learn-more">
                        <AnchorLink href="#about">Learn More</AnchorLink>
                    </div>
                </Fade>
            </div>
        </div>
    )

}

export default Header;
