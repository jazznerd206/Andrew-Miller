import React, { useState, useEffect } from 'react';
import { WelcomeContainer, WTitle, TitleMain, TitleSub, TitleContent } from '../../styled/welcome.style';

function Welcome({active}) {

    if (active === true) {
        return null
    }
    else return (
        <WelcomeContainer>
            <WTitle>
                <TitleMain>
                    Andrew Miller
                </TitleMain>
                <TitleSub>
                    {`{ SOFTWARE ENGINEER } < FULL STACK DEVELOPER > [ CRITICAL THINKER ]`}
                </TitleSub>
                
            </WTitle>
        </WelcomeContainer>
    )
}

export default Welcome
