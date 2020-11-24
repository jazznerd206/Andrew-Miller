import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Content from './Content.js';
import '../style.css';

function Item(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className={`title_${props.name}`} layout></motion.div>            
            <AnimatePresence>{isOpen && <Content key={props.key} name={props.name} code={props.code} url={props.url}/>}</AnimatePresence>
        </motion.li>
    );
}

export default Item;
