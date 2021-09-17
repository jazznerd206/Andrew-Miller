import React, { useState, useEffect } from 'react';
import { Container, Grabby, GrabbyText, Growy, GrowyText } from '../../styled/flexiboi.style'
import { Close } from '@styled-icons/evil/Close'
import { I } from '../../styled/components.style';


function Flexiboi() {

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
            } else {
                panels[i].style.maxHeight = '0%';
            }
        }
        setOpen(true);
    }

    const shrink = () => {
        let handles = document.getElementsByClassName('shower');
        let panels = document.getElementsByClassName('grower');
        for (let i = 0; i < handles.length; ++i) {
            handles[i].style.display = 'flex'
        }
        for (let i = 0; i < panels.length; ++i) {
            panels[i].style.maxHeight = '0%';
        }
    }
    
    

    return (
        <Container>
            <Grabby 
                className="shower" 
                id="id-this"
                onClick={open === false ? () => {setOpen(true); grow('this')} : () => {setOpen(false); shrink()}}
            >
                {open === false ?
                    <GrabbyText>
                        this
                    </GrabbyText>
                    :
                    'X'
                }
            </Grabby>
            <Grabby className="shower" id="id-that" onClick={() => {setOpen(true); grow('that')}}>
                <GrabbyText>that</GrabbyText>
            </Grabby>
            <Grabby className="shower" id="id-theOther" onClick={() => {setOpen(true); grow('theOther')}}>
                <GrabbyText>the other</GrabbyText>
            </Grabby>
            <Growy
                id="this"
                className="grower"
            >
                <GrowyText>
                    this
                </GrowyText>
            </Growy>
            <Growy 
                id="that"
                className="grower"
            >
                <GrowyText>
                    that
                </GrowyText>
            </Growy>
            <Growy 
                id="theOther"
                className="grower"    
            >
                <GrowyText>
                    theOther
                </GrowyText>
            </Growy>
            {/* {open === true ? <>this is true</> : <>not true</>} */}
        </Container>
    )
}

export default Flexiboi


