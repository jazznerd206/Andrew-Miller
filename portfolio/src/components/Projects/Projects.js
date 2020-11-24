import React from 'react';

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Item from './components/Item';
import itemsJSON from './components/items.json';
import './style.css';


function Projects() {

    const items = itemsJSON;
  
    return (
    <AnimatePresence>
      <motion.div 
        className="project-wrapper" 
        id="projects"
        >
        <div className="project-row">

        <AnimateSharedLayout>
          <motion.ul 
            layout 
            initial={{ opacity: .5}}
            animate={{ opacity: 1 }}
          >
            {items.map(item => (
              <Item key={item.key} name={item.name} code={item.code} url={item.url} image={item.image}/>
            ))}
          </motion.ul>
        </AnimateSharedLayout>
        </div>
      </motion.div>  
    </AnimatePresence>  
    );
  }

export default Projects;