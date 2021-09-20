import React, { useState, useEffect, createRef } from 'react'
import { Page } from '../../../styled/components.style';
import { FormContainer, Form, Row, FormTitle, FormLabel, Submit, Input, Message, Box } from '../../../styled/contact.style';

function Contact() {

    const [name, setName] = useState('');
    const nameRef = createRef(null);
    const [email, setEmail] = useState('');
    const emailRef = createRef(null);
    const [message, setMessage] = useState('');
    const messageRef = createRef(null);

    const submitForm = e => {
        e.preventDefault();
        console.log(`name, email, message -> `, name, email, message);
    }

    const setFocus = name => {
        switch(name) {
            case 'name':
                nameRef.current.style.color = 'white';
                nameRef.current.style.fontSize = '1.75em';
                break;
            case 'email':
                emailRef.current.style.color = 'white';
                emailRef.current.style.fontSize = '1.75em';
                break;
            case 'message':
                messageRef.current.style.color = 'white';
                messageRef.current.style.fontSize = '1.75em';
                break;
            default:
                break;
        }   
    }

    return (
        <Page>
            <FormTitle>
                Drop me a line!!
            </FormTitle>
            <Form>
                <Box>
                    <Row>
                        <FormLabel ref={nameRef}>Name</FormLabel>
                        <Input 
                            onFocus={() => setFocus('name')}
                            value={name}
                            placeholder="Name"
                            aria-placeholder="Name"
                            onChange={e => setName(e.target.value)}
                        >
                        </Input>

                    </Row>
                    <Row>
                        <FormLabel ref={emailRef}>Email</FormLabel>
                        <Input 
                            onFocus={() => setFocus('email')}
                            value={email}
                            placeholder="Email"
                            aria-placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        >
                        </Input>
                    </Row>
                </Box>
                <Box>
                    <Row>
                        <FormLabel ref={messageRef}>Message</FormLabel>
                        <Message
                            onFocus={() => setFocus('message')} 
                            value={message}
                            rows="10"
                            cols="25"
                            placeholder="Message"
                            aria-placeholder="Message"
                            onChange={e => setMessage(e.target.value)}
                        >
                        </Message>
                    </Row>
                    <Submit
                        onClick={e => submitForm(e)}

                    >
                        Send it
                    </Submit>
                </Box>
            </Form>
        </Page>
    )
}

export default Contact;
