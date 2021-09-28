import React, { useState, useEffect, createRef } from 'react';
import { projlist } from './projlist.jsx';
import { ArrowBox, Card, CardContent, CardFront, CardLink, CardTitle, InnerCard, ProjectContainer, StackItem, StackList, Summary } from '../../styled/projects.style'
import { ArrowLeft, ArrowRight } from '@styled-icons/evil';

function Projects() {

    const [ active, setActive ] = useState(0);
    const refs = [];
    // shift is left/right movement... left arrow is 0 and right arrow is 1
    const [ shift, setShift ] = useState(0);
    const containerRef = createRef(null);

    useEffect(() => {
        setActive(0);
        refs[0].current.classList.add('active');
        refs[0].current.focus();
    }, [])

    useEffect(() => {
        refs[active].current.classList.remove("active");
        refs[shift].current.classList.add('active');
        setActive(shift);
    }, [shift])

    const showContent = index => {
        refs[index].current.classList.add('active');
        setActive(index);
    }


    return (
        <>
        <ProjectContainer ref={containerRef}>
            {projlist.map(project => {
                let newRef = createRef(null);
                refs.push(newRef);
                return (
                    <Card ref={newRef} key={project.id}>
                        <InnerCard>
                            <CardFront>
                                <CardTitle>
                                    {project.name}
                                </CardTitle>
                                <Summary>{project.contribution}</Summary>
                            </CardFront>
                            <CardContent>
                                <Summary>
                                    {project.summary}
                                </Summary>

                                <CardLink  href="/" alt="this">
                                    link
                                </CardLink>
                                <StackList>
                                    {project.stack.map(item => {
                                        return (
                                            <StackItem key={item}>
                                                {item}
                                            </StackItem>

                                        )
                                    })}
                                </StackList>
                            </CardContent>
                        </InnerCard>
                    </Card>
                )
            })}
        </ProjectContainer>
        <ArrowBox>
            <ArrowLeft size={100} color="white" onClick={active === 0 ? null : () => setShift(active - 1)}/>
            <ArrowRight size={100}  color="white" onClick={active === refs.length - 1 ? null : () => setShift(active + 1)}/>
        </ArrowBox>
        </>
    )
}

export default Projects
