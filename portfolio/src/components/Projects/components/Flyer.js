import React from 'react';
import Image from '../../../public/images/RBSData.JPG';
import { Fade } from 'react-reveal';
import '../styles.css';

function Flyer(props) {
    return (
    <Fade>
        <div className={`project ${props.name}`} key={props.dataKey}>
            <div className="column">
                <div className="title">
                    <h1>{props.name}</h1>
                </div>
                <div className="about"> 
                    {props.purpose.map((line, index) => (
                    <Fade delay={150 * index}>
                        <div>
                            <p key={index} className="">{line}</p>
                        </div>
                    </Fade>
                    ))}
                </div>
                <div className="tech-stack">
                    <ul>
                    {props.stack.map((item, index) => (
                        <Fade delay={75 * index}>
                            <li key={index}>
                                {item}
                            </li>
                        </Fade>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="column">
                <Fade delay={500}>
                    <div className="image">
                        <img src={props.image} alt={props.name}></img>
                    </div>
                </Fade>
                <div className="blank-row">
                    <ul>
                        <li><a href={props.url}>LIVE SITE</a></li>
                        <li><a href={props.code}>CODE</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </Fade>
    )
}

export default Flyer
