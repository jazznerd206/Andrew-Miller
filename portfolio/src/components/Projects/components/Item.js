import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Content from './Content.js';
import '../styles.css';

function Item(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div 
                whileHover={{
                    scale: 1.2,
                    transition: { duration: .25 },
                  }}
                whileTap={{ scale: 0.9 }}
                className={`title_${props.name}`} 
                layout
            >
            </motion.div>            
            <AnimatePresence>{isOpen && <Content dataKey={props.dataKey} name={props.name} code={props.code} url={props.url} stack={props.stack} purpose={props.purpose} contribution={props.contribution}/>}</AnimatePresence>
        </motion.li>
    );
}

export default Item;
