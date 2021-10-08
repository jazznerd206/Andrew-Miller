import React, { useState, useEffect } from 'react';
import { projlist } from './projlist.jsx';
import { ProjectContainer, ProjectList, ProjectItem } from '../../styled/projects.style';

function Projects2() {

    const projectsList = [
        'React_Graph',
        'CH-inventory',
        'Standard_10',
        'tabylon',
        'Google-Books-Search-Engine',
        'td_sounds',
    ]
    const passionsList = [
        'DataStructures',
        'KandR',
        'appogiatura',
        'Connect_Four',
        'RAF_Party',
    ]

    const [ projects, setProjects ] = useState([]);
    const [ passions, setPassions ] = useState([]);

    useEffect(() => {
        const f = () => {
            projectsList.forEach(item => {
                fetch(`https://api.github.com/repos/jazznerd206/${item}`)
                    .then(response => response.json())
                    .then(data => setProjects(projects => [...projects, data]))
            })
            passionsList.forEach(item => {
                fetch(`https://api.github.com/repos/jazznerd206/${item}`)
                    .then(response => response.json())
                    .then(data => setPassions(passions => [...passions, data]))
            })
        }
        f();
    }, [])

    useEffect(() => {
        console.log('projects :>> ', projects, passions);
    }, [projects, passions])

    return (
        <ProjectContainer>
            <ProjectList>
                {projlist.map(item => {
                    return (
                        <ProjectItem>
                            item
                        </ProjectItem>
                    )
                })}
            </ProjectList>
        </ProjectContainer>
    )
}

export default Projects2;