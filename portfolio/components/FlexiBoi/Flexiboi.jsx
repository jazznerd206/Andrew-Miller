import React, { useState, useEffect, createRef, useRef } from 'react';
import { Page } from '../../styled/components.style';
import { Container, Grabby, GrabbyContainer, GrabbyText, Growy, GrowyText, CloseClicker } from '../../styled/flexiboi.style'
import Contact from '../xComponents/Contact/Contact';


function Flexiboi({setActive}) {

    const elements = [
        {
            id: 0,
            name: 'Projects',
            key: 'projects',
            content: 'component'
        },
        {
            id: 1,
            name: 'Contact',
            key: 'contact',
            content: Contact
        },
        {
            id: 2,
            name: 'Get to know me!',
            key: 'personal',
            content: 'component'
        },
    ]

    const [ open, setOpen ] = useState(false);
    const grabbyContainer = createRef(null);

    const grow = data => {
        let handles = document.getElementsByClassName('shower');
        let panels = document.getElementsByClassName('grower');
        // grabbyContainer.current.style.display = 'none';
        for (let i = 0; i < handles.length; ++i) {
            if (handles[i].id === `id-${data}`) {
                handles[i].style.display = 'flex';
            } else {
                handles[i].style.display = 'none';
            }
        }
        for (let i = 0; i < panels.length; ++i) {
            if (panels[i].id === `${data}`) {
                panels[i].style.visibility = 'visible'
                panels[i].style.flex = '1 1 auto'
                panels[i].style.maxHeight = '100%'
            } else {
                panels[i].style.visibility = 'hidden';
                panels[i].style.flex = '0 1 auto'
                panels[i].style.maxHeight = '0%';
            }
        }
        setOpen(true);
        setActive(true);
    }

    const shrink = () => {
        let handles = document.getElementsByClassName('shower');
        let panels = document.getElementsByClassName('grower');
        // grabbyContainer.current.style.display = 'flex';
        for (let i = 0; i < handles.length; ++i) {
            handles[i].style.display = 'flex';
        }
        for (let i = 0; i < panels.length; ++i) {
            panels[i].style.maxHeight = '0%';
            panels[i].style.flex = '0 1 auto'
            panels[i].style.visibility = 'hidden';
            // panels[i].style.display = 'none';
        }
        setOpen(false);
        setActive(false);
    }
    
    

    return (
        <Container>
            <GrabbyContainer ref={grabbyContainer}>
            {elements.map(each => {
                return(
                    <Grabby 
                        className="shower" 
                        id={`id-${each.id}`}
                        key={`key-${each.key}`}
                        onClick={open === false ? () => {setOpen(true); grow(each.id)} : () => {setOpen(false); shrink()}}
                    >
                        {open === false ?
                            <GrabbyText>
                                {each.name}
                            </GrabbyText>
                            :
                            <GrabbyText>{each.name}</GrabbyText>
                        }
                    </Grabby>
                )
            })}
            </GrabbyContainer>
            {elements.map(each => {
                return (
                    <Growy
                        id={each.id}
                        key={each.key}
                        className="grower"
                        >
                            {typeof each.content === 'string' ? 
                            <Page>
                                <CloseClicker
                                    onClick={() => shrink()}
                                >
                                    X
                                </CloseClicker>
                                <GrowyText>
                                    {each.content}
                                </GrowyText>
                            </Page>
                            :
                            <Page>
                                <CloseClicker
                                    onClick={() => shrink()}
                                >
                                    X
                                </CloseClicker>
                                {each.content()}
                            </Page>
                }
                    </Growy>
                )
            })}
        </Container>
    )
}

export default Flexiboi


