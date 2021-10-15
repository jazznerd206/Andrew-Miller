import React, { useState, useEffect } from 'react';
import record from '../../../images/record.jpeg';
import { Slide, Column, Twitter, Github, Instagram, IconHolder, IconTag } from '../../../styled/bio.style';


function SlideOne() {
    return (
        <>
            <Column>
                <h1>Resume</h1>                    
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
