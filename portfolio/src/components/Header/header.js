import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

function Header() {

    // const [position, setPosition] = useState({x: 0, y: 0});
    // useEffect(() => {
    //     addEventListeners();
    //     return () => removeEventListeners();
    // }, []);
    // const addEventListeners = () => {
    //     document.addEventListener("mousemove", onMouseMove);
    // };
    // const removeEventListeners = () => {
    //     document.removeEventListener("mousemove", onMouseMove);
    // }; 
    // const onMouseMove = (e) => {
    //     setPosition({x: e.clientX, y: e.clientY});
    // };


    return (
        <div className="header-wrapper">
            <div className="header-content">
                <div className="header-title">
                    {/* <span className="nunito"><h1>Andrew Miller</h1></span> */}
                </div>
                <div className="header-message">
                    <div className="message">
                        <motion.p 
                            animate={{x: -300, fontSize: '60px', rotateZ: 360}} 
                            transition={{ duration: .25 }}
                        >
                            Hey!!
                        </motion.p>                        
                        <motion.p 
                            animate={{ x: -100, fontSize: '50px' }} 
                            transition={{ duration: .5 }}
                        >
                            My name is
                        </motion.p>
                        <motion.h2 
                            className="name"
                            animate={{fontSize: '150px', color: '#add8e6'}} 
                            transition={{fontSize: { type: 'spring', bounce: .5 }, color: {type: 'spring', bounce: .5 }, delay: .5, duration: 1}}
                        >
                            Andrew Miller
                        </motion.h2>
                        <motion.p 
                            animate={{ x: 100 }} 
                            transition={{ duration: 1 }}
                        >
                            I deliver solutions using innovative technology and creative problem solving.
                        </motion.p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header;
