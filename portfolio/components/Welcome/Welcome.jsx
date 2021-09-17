import React, { useState, useEffect } from 'react';
import { WelcomeContainer } from '../../styled/welcome.style';

function Welcome({active}) {
    console.log(`active`, active)
    if (active === true) {
        return null
    }
    else return (
        <WelcomeContainer>
            <p>welcome to my house</p>
        </WelcomeContainer>
    )
}

export default Welcome
