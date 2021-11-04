import React, { useState, useEffect } from 'react';
import record from '../../../images/record.jpeg';
import { Slide, Column, Twitter, Github, Instagram, IconHolder, IconTag, Resume, Record, Email, OffPageLink } from '../../../styled/bio.style.jsx';
import Res from '../../../documents/ALM_Resume.pdf'


function SlideOne() {
    return (
        <>
            <IconHolder>
                <Resume document={Res}>Resume</Resume>
                <OffPageLink href={'https://www.github.com/jazznerd206'} target="_blank" rel="noreferrer noopener">
                    <Github size={window.innerWidth > 768 ? '120' : '60'}/>
                </OffPageLink>  
                <OffPageLink href={'mailto:andrew.fullstack@gmail.com'} target="_blank" rel="noreferrer noopener">
                    <Email size={window.innerWidth > 768 ? '120' : '60'}/>
                </OffPageLink>
            </IconHolder>
            <Column>
                <Record src={record} alt="record" />
            </Column>
            <IconHolder>
                <OffPageLink href={'https://twitter.com/AndrewM47203123'} target="_blank" rel="noreferrer noopener">
                    <Twitter size={window.innerWidth > 768 ? '100' : '50'}/>
                </OffPageLink>
                <OffPageLink href={'https://www.instagram.com/206alm/'} target="_blank" rel="noreferrer noopener">
                    <Instagram size={window.innerWidth > 768 ? '100' : '50'}/>
                </OffPageLink>
            </IconHolder>
            
        </>
    )
}

export default SlideOne
