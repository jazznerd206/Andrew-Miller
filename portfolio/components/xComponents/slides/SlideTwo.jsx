import React, { useState, useEffect } from 'react'
import { Column, Text, TextHolder, Title, I } from '../../../styled/bio.style';
// JS, Java, C, Python, React, SQL, Mongo, Postgres, Jest, Mocha, Cypress, AWS

function SlideTwo() {
    return (
        <>
            <Column>
                <Title>Hey!! I'm Andrew.</Title>
                <TextHolder width={'50%'} fs={24}>
                    <Text>
                        I am a web developer based in Seattle, Washington. I have a deep love for Javascript and all things CSS, as well as long walks through documentation on the beach at sunset.
                    </Text>
                </TextHolder>
                <TextHolder width={'75%'} fs={20} visible={'not-mobile'}>
                    <Text>
                        This will be the bio copy. This will be the bio copy. This will be the bio copy. This will be the bio copy. This will be the bio copy. This will be the bio copy. This will be the bio copy. This will be the bio copy. This will be the bio copy. This will be the bio copy. This will be the bio copy.
                    </Text>
                </TextHolder>
                <TextHolder width={'100%'}>
                    <I className="fas fa-coffee fa-5x"></I>
                    <I className="fab fa-react fa-5x"></I>
                    <I className="fab fa-html5 fa-5x"></I>
                    <I className="fab fa-css3 fa-5x"></I>
                    <I className="fab fa-node-js fa-5x"></I>
                    <I className="fab fa-java fa-5x"></I>
                    <I className="fab fa-python fa-5x"></I>
                </TextHolder>
            </Column>
        </>
    )
}

export default SlideTwo
