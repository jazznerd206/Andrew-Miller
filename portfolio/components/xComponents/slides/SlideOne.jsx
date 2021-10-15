import React, { useState, useEffect } from 'react';
import record from '../../../images/record.jpeg';
import { Slide, Column, Twitter, Github, Instagram, IconHolder, IconTag, Resume } from '../../../styled/bio.style';
import Res from '../../../documents/ALM_Resume.pdf'


function SlideOne() {
    return (
        <>
            <Column>
                <Resume document={Res}>Resume</Resume>                    
                <Twitter />
            </Column>
            <Column>
                <img src={record} alt="record" />
            </Column>
            <Column>
                <Github />
                <Instagram />
            </Column>
            
        </>
    )
}

export default SlideOne
