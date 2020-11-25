import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css'

function Content(props) {

    // const [isHovered, setHovered] = useState(false);

    return (
        <motion.div 
            className="project-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="project-row">
              <div className="project-name data">
                <h2>{props.name}</h2>
              </div>
              <div className="project-url data">
                <a href={props.url}>Live Site</a>
              </div>
              <div className="project-code data">
                <a href={props.code}>Code</a>
              </div>
            </div>
            <div className="project-row">
              <div className="tech-stack row-member">
                <ul className="tech-list"><p>Tech Stack:</p>
                  {props.stack.map((item, index) => (
                    <li className="tech-list-item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-purpose row-member">
                <p>Project Purpose</p>
                <p>{props.purpose}</p>
              </div>
              <div className="personal-contribution row-member">
                <p>My Contribution</p>
                <p>{props.contribution}</p>
              </div>
            </div>
            
          </motion.div>
    )
}

export default Content;
