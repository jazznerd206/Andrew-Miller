import React, { useState, useEffect, createRef, useRef } from 'react';
import { Page } from '../../styled/components.style';
import { Container, Grabby, GrabbyContainer, GrabbyText, Growy, GrowyText, CloseClicker } from '../../styled/flexiboi.style'
import Contact from '../xComponents/Contact';
import Projects2 from '../xComponents/Projects2';
import Bio from '../xComponents/Bio';
import Posts from '../xComponents/Posts';


function Flexiboi({setActive}) {

    const elements = [
        {
            id: 2,
            name: 'About Me',
            key: 'personal',
            content: Bio,
        },
        {
            id: 0,
            name: 'Projects',
            key: 'projects',
            content: Projects2,
        },
        // {
        //     id: 3,
        //     name: 'Posts',
        //     key: 'blog',
        //     content: Posts,
        // },
        {
            id: 1,
            name: 'Contact',
            key: 'contact',
            content: Contact,
        },
    ]

    const [ open, setOpen ] = useState(false);
    const grabbyContainer = createRef(null);

    const grow = data => {
        let handles = document.getElementsByClassName('shower');
        let panels = document.getElementsByClassName('grower');
        for (let i = 0; i < handles.length; ++i) {
            if (handles[i].id === `id-${data}`) {
                handles[i].style.display = 'flex';
                handles[i].style.margin = 0;
                handles[i].style.padding = 0;
            } else {
                handles[i].style.display = 'none';
            }
        }
        for (let i = 0; i < panels.length; ++i) {
            if (panels[i].id === `${data}`) {
                panels[i].style.display = 'flex';
                panels[i].style.visibility = 'visible';
                panels[i].style.flex = '1 1 auto';
                panels[i].style.height = '100%'
                panels[i].style.maxHeight = '100%'
            } else {
                panels[i].style.visibility = 'hidden';
                panels[i].style.display = 'none';
                panels[i].style.height = '0%';
                panels[i].style.maxHeight = '0%';
            }
        }
        setOpen(true);
        setActive(true);
    }

    const shrink = () => {
        let handles = document.getElementsByClassName('shower');
        let panels = document.getElementsByClassName('grower');
        for (let i = 0; i < handles.length; ++i) {
            handles[i].style.display = 'flex';
        }
        for (let i = 0; i < panels.length; ++i) {
            panels[i].style.visibility = 'hidden';
            panels[i].style.height = '0%';
            panels[i].style.maxHeight = '0%';
        }
        setOpen(false);
        setActive(false);
    }
    
    

    return (
        <Container>
            <GrabbyContainer ref={grabbyContainer} open={open}>
                {elements.map(each => {
                    return(
                        <Grabby 
                            open={open}
                            className="shower" 
                            id={`id-${each.id}`}
                            key={`grabby-${each.key}`}
                            onClick={open === false ? () => {setOpen(true); grow(each.id)} : () => {setOpen(false); shrink()}}
                        >
                            {open === false ?
                                <GrabbyText>
                                    {each.name}
                                </GrabbyText>
                                :
                                <GrabbyText onClick={() => shrink()}>
                                    x
                                </GrabbyText>
                            }
                        </Grabby>
                    )
                })}
            </GrabbyContainer>
                {elements.map(each => {
                    return (
                        <Growy
                            id={each.id}
                            key={`growy-${each.key}`}
                            className="grower"
                            >
                                {typeof each.content === 'string' ? 
                                <Page>
                                    <GrowyText>
                                        {each.content}
                                    </GrowyText>
                                </Page>
                                :
                                <Page>
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


