import React, { useState, useEffect } from 'react';
import { Container, Grabby, GrabbyText, Growy, GrowyText } from '../../styled/flexiboi.style'
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

    const grow = data => {
        let handles = document.getElementsByClassName('shower');
        let panels = document.getElementsByClassName('grower');
        for (let i = 0; i < handles.length; ++i) {
            if (handles[i].id === `id-${data}`) {
                handles[i].style.display = 'flex'
            } else {
                handles[i].style.display = 'none';
            }
        }
        for (let i = 0; i < panels.length; ++i) {
            if (panels[i].id === `${data}`) {
                panels[i].style.maxHeight = '100%'
                panels[i].style.display = 'flex'
            } else {
                panels[i].style.maxHeight = '0%';
                panels[i].style.display = 'none'
            }
        }
        setOpen(true);
        setActive(true);
    }

    const shrink = () => {
        let handles = document.getElementsByClassName('shower');
        let panels = document.getElementsByClassName('grower');
        for (let i = 0; i < handles.length; ++i) {
            handles[i].style.display = 'flex'
        }
        for (let i = 0; i < panels.length; ++i) {
            panels[i].style.maxHeight = '0%';
            panels[i].style.display = 'none';
        }
        setOpen(false);
        setActive(false);
    }
    
    

    return (
        <Container>
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
                            <></>
                        }
                    </Grabby>

                )
            })}
            {elements.map(each => {
                return (
                    <Growy
                        id={each.id}
                        key={each.key}
                        className="grower"
                        >
                            {typeof each.content === 'string' ? 
                            <GrowyText>
                                {each.content}
                            </GrowyText>
                            :
                            <>
                                {each.content()}
                            </>
                }
                    </Growy>
                )
            })}
        </Container>
    )
}

export default Flexiboi


