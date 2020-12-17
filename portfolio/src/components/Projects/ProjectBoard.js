import React from 'react';
import './styles.css';
import Flyer from './components/Flyer.js';
import itemsJS from './components/items.js';

function ProjectBoard() {

    const items = itemsJS;
    console.log(items);
    return (
        <div className="project-board">
            <h1 className="project-title">projects</h1>
            {items.map(project => {
                return (
                <Flyer 
                    key={project.key} 
                    dataKey={project.key} 
                    name={project.name} 
                    code={project.code} 
                    url={project.url} 
                    image={project.image} 
                    stack={project.techStack} 
                    purpose={project.purpose} 
                    contribution={project.contribution}
                >
                </Flyer>
                )
                // <h1>{project.name}</h1>
               
            })}
        </div>
    )
}

export default ProjectBoard;