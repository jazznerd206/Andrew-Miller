import React, { useState, useEffect } from 'react'
import { Column, Text, TextHolder, Title, I } from '../../../styled/bio.style.jsx';


function SlideTwo() {
    return (
        <>
            <Column>
                <Title>Hey!! I'm Andrew.</Title>
                <TextHolder width={'50%'} fs={24}>
                    <Text>
                        <strong>I am a web developer based in Seattle, Washington. I have a deep love for Javascript and all things CSS, as well as long walks through documentation on the beach at sunset.</strong>
                    </Text>
                </TextHolder>
                <TextHolder width={'75%'} fs={20} visible={'not-mobile'}>
                    <Text>
                        Aside from coding, my greatest passions in life are golf, music and my dogs. My wife and I foster dogs through the Seattle Animal Shelter, and we have successfully rehomed 20+ and counting!!
                    </Text>
                </TextHolder>
                <TextHolder width={'100%'}>
                    <I className={`fas fa-coffee ${window.innerWidth > 768 ? 'fa-5x' : 'fa-2x'}`}></I>
                    <I className={`fab fa-react ${window.innerWidth > 768 ? 'fa-5x' : 'fa-2x'}`}></I>
                    <I className={`fab fa-html5 ${window.innerWidth > 768 ? 'fa-5x' : 'fa-2x'}`}></I>
                    <I className={`fab fa-css3 ${window.innerWidth > 768 ? 'fa-5x' : 'fa-2x'}`}></I>
                    <I className={`fab fa-node-js ${window.innerWidth > 768 ? 'fa-5x' : 'fa-2x'}`}></I>
                    <I className={`fab fa-java ${window.innerWidth > 768 ? 'fa-5x' : 'fa-2x'}`}></I>
                    <I className={`fab fa-python ${window.innerWidth > 768 ? 'fa-5x' : 'fa-2x'}`}></I>
                </TextHolder>
            </Column>
        </>
    )
}

export default SlideTwo
