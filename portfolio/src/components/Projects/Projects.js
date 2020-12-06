import React from 'react';

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Item from './components/Item';
import itemsJSON from './components/items.json';
import './styles.css';


function Projects() {

    const items = itemsJSON;
    console.log(items)
  
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
              <Item key={item.key} dataKey={item.key} name={item.name} code={item.code} url={item.url} image={item.image} stack={item.techStack} purpose={item.purpose} contribution={item.contribution}/>
            ))}
          </motion.ul>
        </AnimateSharedLayout>
        </div>
      </motion.div>  
    </AnimatePresence>  
    );
  }

export default Projects;