import React, { useState, useEffect, createRef } from 'react';
import axios from 'axios';
import { Page } from '../../styled/components.style';
import { FormContainer, Form, Row, FormTitle, FormLabel, Submit, Input, Message, Box, FormSubTitle } from '../../styled/contact.style';

function Contact() {

    const [name, setName] = useState('');
    const nameRef = createRef(null);
    const [email, setEmail] = useState('');
    const emailRef = createRef(null);
    const [message, setMessage] = useState('');
    const messageRef = createRef(null);
    const [ response, setResponse ] = useState('');
    const [ confirm, setConfirm ] = useState('');

    const submitForm = e => {
        if (name === '' || email === '' || message === '') {
            setResponse("All fields required");
            return;
        }
        e.preventDefault();
        axios.post('/access', {
            name: name,
            email: email,
            message: message
          })
          .then(function (response) {
            setConfirm(`Hey ${name}, thanks for reaching out. Watch ${email} for a response soon!!`)
            setName('');
            setEmail('');
            setMessage('');
          })
          .catch(function (error) {
              setResponse("Oops! Something went wrong!!");
          });
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
            {confirm === '' && 
            <>
                <FormTitle>
                    Drop me a line!!
                    {response !== '' && <FormSubTitle>{response}</FormSubTitle>}
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
            </>}
        {confirm !== '' && 
            <>
                <FormTitle>{confirm}</FormTitle>
            </>
        }
        </Page>
    )
}

export default Contact;
