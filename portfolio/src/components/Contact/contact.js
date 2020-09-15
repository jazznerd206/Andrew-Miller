import React from 'react';
import './style.css';
import { Row, Col, TextArea, TextInput } from 'react-materialize';

function contact() {
    return (
    <div className="contact-wrapper">
        <Row>
            <span><h3>I would love to hear from you!!</h3></span>
        </Row>
        <Row>
            <Col
                className="white black-text"
                s={12}
                l={4}
            >
                <div className="input-field">
                    <TextInput
                        id="TextInput"
                        label="Name"
                    />
                </div>
            </Col>
            <Col
                className="white black-text"
                s={12}
                l={4}
            >
                <div className="input-field">
                    <TextInput
                        id="EmailInput"
                        label="Email"
                        validate
                    />
                </div>
            </Col>
            <Col
                className="white black-text"
                s={12}
                l={4}
            >
                <div className="input-field">
                    <TextInput
                        id="MessageInput"
                        label="Message"
                    />
                </div>
            </Col>
        </Row>
    </div>
    )
}

export default contact;
