import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-reveal';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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

    if (size.width > 1200) {
        return (
            <div className="header-wrapper">
                <div className="header-content">
                    <div className="header-title">
                        {/* <span className="nunito"><h1>Andrew Miller</h1></span> */}
                    </div>
                    <div className="header-message">
                        <div className="message">
                            <motion.p 
                                animate={{fontSize: '60px'}} 
                                transition={{ duration: .25 }}
                            >
                                Hey!!
                            </motion.p>                        
                            <motion.p 
                                animate={{ x: -100, fontSize: '50px' }} 
                                transition={{ delay: .15, duration: .5 }}
                            >
                                My name is
                            </motion.p>
                            <motion.h2 
                                className="name"
                                animate={{fontSize: '150px', color: '#add8e6', opacity: 1}} 
                                transition={{fontSize: { type: 'spring', bounce: .5 }, color: {type: 'spring', bounce: .5 }, delay: .5, duration: 1}}
                            >
                                Andrew Miller
                            </motion.h2>
                            <motion.p 
                                // animate={{ x: 100 }} 
                                // transition={{ duration: 1 }}
                            >
                                <Fade duration={3000} delay={1000}>I deliver solutions using innovative technology and creative problem solving.</Fade>
                            </motion.p>
                        </div>
                    </div>
                    <Fade duration={3000} delay={1500}>
                        <AnchorLink href="#about">
                            Learn more
                        </AnchorLink>
                    </Fade>
                </div>
                
                
            </div>
    )
    } else if (size.width > 600) {
        return (
            <div className="header-wrapper">
                <div className="header-content">
                    <div className="header-title">
                        {/* <span className="nunito"><h1>Andrew Miller</h1></span> */}
                    </div>
                    <div className="header-message">
                        <div className="message">
                            <motion.p 
                                animate={{x: -30, fontSize: '30px'}} 
                                transition={{ duration: .25 }}
                            >
                                Hey!!
                            </motion.p>                        
                            <motion.p 
                                animate={{ x: -10, fontSize: '35px' }} 
                                transition={{ duration: .5 }}
                            >
                                My name is
                            </motion.p>
                            <motion.h2 
                                className="name"
                                animate={{fontSize: '85px', color: '#add8e6',opacity: 1}} 
                                transition={{fontSize: { type: 'spring', bounce: .5 }, color: {type: 'spring', bounce: .5 }, delay: .5, duration: 1}}
                            >
                                Andrew Miller
                            </motion.h2>
                            <motion.p 
                                animate={{ x: 0 }} 
                                transition={{ duration: 1 }}
                            >
                                <Fade duration={3000} delay={1000}>I deliver solutions using innovative technology and creative problem solving.</Fade>
                            </motion.p>
                        </div>
                    </div>
                    <Fade duration={3000} delay={1500}>
                        <AnchorLink href="#about">
                            Learn more
                        </AnchorLink>
                    </Fade>
                </div>
                
                
            </div>
        )
    } else if (width < 599) {
        return (
            <div className="header-wrapper">
                <div className="header-content">
                    <div className="header-title">
                        {/* <span className="nunito"><h1>Andrew Miller</h1></span> */}
                    </div>
                    <div className="header-message">
                        <div className="message">
                            <motion.p 
                                animate={{x: -30, fontSize: '30px'}} 
                                transition={{ duration: .25 }}
                            >
                                Hey!!
                            </motion.p>                        
                            <motion.p 
                                animate={{ x: -10, fontSize: '35px' }} 
                                transition={{ delay: .15, duration: .5 }}
                            >
                                My name is
                            </motion.p>
                            <motion.h2 
                                className="name"
                                animate={{fontSize: '85px', color: '#add8e6', opacity: 1}} 
                                transition={{fontSize: { type: 'spring', bounce: .5 }, color: {type: 'spring', bounce: .5 }, delay: .5, duration: 1}}
                            >
                                Andrew Miller
                            </motion.h2>
                            <motion.p 
                                animate={{ x: 0 }} 
                                transition={{ duration: 1 }}
                            >
                                <Fade duration={3000} delay={1000}>I deliver solutions using innovative technology and creative problem solving.</Fade>
                            </motion.p>
                        </div>
                    </div>
                    <Fade duration={300} delay={1500}>
                        <AnchorLink href="#about">
                            Learn more
                        </AnchorLink>
                    </Fade>
                </div>
                
                
            </div>
        )
    }
    
}

export default Header;
