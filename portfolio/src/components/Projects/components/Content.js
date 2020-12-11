import React from 'react';
import { motion } from 'framer-motion';
import Jello from 'react-reveal/Jello';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import '../styles.css'

function Content(props) {

    // const [isHovered, setHovered] = useState(false);

    return (
    <div>
      <Zoom>
        <motion.div 
            className="project-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="project-row">
              <Jello className="project-name data">
                <h1>{props.name}</h1>
              </Jello>
              <motion.div 
                className="project-url data"
                animate={{ x: 50 }}
                transition={{
                  delay: .5,
                  x: { type: "spring", stiffness: 100 },
                  default: { duration: 2 },
                }}
              >
                <a href={props.url}>Live Site</a>
              </motion.div>
              <motion.div 
                className="project-code data"
                animate={{ x: -50 }}
                transition={{
                  delay: .5,
                  x: { type: "spring", stiffness: 100 },
                  default: { duration: 2 },
                }}
              >
                <a href={props.code}>Code</a>
              </motion.div>
            </div>
            <div className="project-row">
              <Fade left className="tech-stack row-member">
                <ul className="tech-title"><p>Tech Stack:</p>
                  {props.stack.map((item, index) => (
                    <li className="tech-list-item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Fade>
              <div className="project-purpose row-member">
                <p className="tech-title">Project Purpose</p>
                {props.purpose.map((line, index) => (
                  <Fade left>
                  <p key={index} className="tech-list-item">{line}</p>
                  </Fade>
                ))}
              </div>
              <div className="personal-contribution row-member">
                <p className="tech-title">My Contribution</p>
                {props.contribution.map((line, index) => (
                  <Fade right>
                  <p key={index} className="tech-list-item">{line}</p>
                  </Fade>
                ))}
              </div>
            </div>
            
          </motion.div>
        </Zoom>
      </div>
    )
}

export default Content;
