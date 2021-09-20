import React, { useState, useEffect } from 'react';
import { WelcomeContainer, WTitle, TitleMain, TitleSub, TitleContent, WContent } from '../../styled/welcome.style';

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
            </WTitle>
            <WContent>
                <TitleSub>
                    {`{ SOFTWARE ENGINEER }`}
                </TitleSub>
                <TitleSub>
                    {`< FULL STACK DEVELOPER >`}
                </TitleSub>
                <TitleSub>
                    {`[ CRITICAL THINKER ]`}
                </TitleSub>
            </WContent>    
        </WelcomeContainer>
    )
}

export default Welcome
