import React, { useState, useEffect, useRef } from 'react'


function NameCanvas({text}) {
    let nameCanvas = useRef();
    useEffect(() => {
        const context = nameCanvas.current.getContext("2d");
        context.font = "40px Courier"
        context.fillText(text, 0, nameCanvas.current.height / 2)
        
    }, [])
    return (
        <canvas 
            ref={nameCanvas}
            width={315}
            height={350}
        />
    )
}

function NameAnim({text}) {
    return (
        <NameCanvas
            text={text}
        />
    )
}

export default NameAnim
