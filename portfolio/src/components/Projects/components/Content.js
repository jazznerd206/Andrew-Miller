import React from 'react';
import { motion } from 'framer-motion';
import '../style.css'

function Content(props) {

    // const [isHovered, setHovered] = useState(false);

    return (
        <motion.div 
            className="project-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="project-name">
              <h2>{props.name}</h2>
            </div>
            <div className="project-url">
              <h2>{props.url}</h2>
            </div>
            <div className="project-code">
              <h2>{props.code}</h2>
            </div>
          </motion.div>
    )
}

export default Content;
