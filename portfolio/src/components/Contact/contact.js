import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const Contact = () => {

    // SET FORM FIELD ENTRY WITH HOOKS
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // HANDLE FORM STEPS WITH HOOKS
    const [formIndex, setFormIndex] = useState(0);

    // SUBMIT DATA AFTER FIRST STEP
    function handleFormSubmit(event) {
        event.preventDefault();
        setFormIndex(formIndex + 1);
        //console.log(name, email, message);
    }

    // AXIOS POST -- SEND EMAIL TO SERVER
    const submitRequest = async (e) => {
        e.preventDefault();
        //console.log({ name, email, message });
        axios.post('/access', {
        name: name,
        email: email,
        message: message
      })
      .then(function (response) {
        // console.log(`this is the response ${response}`);
        setName('');
        setEmail('');
        setMessage('');
        setFormIndex(0);
      })
      .catch(function (error) {
        // console.log(`this is the error ${error}`);
      });
    };

    return (
  <AnimatePresence
    layout 
    initial={{ opacity: .5}}
    animate={{ opacity: 1 }}
  >
    <div>
      {/* First section of the form */}
      {formIndex === 0 && (
      <div className="contact-form-wrapper" id="contact">
        <motion.div 
          className="form-container"
          layout 
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
        >
          <div className="contact-title">
            <span className="nunito">
              <i className="fas fa-comments"></i>
            </span>
            <span>
              <p>Leave your name, email and a short message. I'd love to hear from you!!</p>             
            </span>


          </div>

          <form onSubmit={handleFormSubmit} autoComplete="off">
              <p></p>
              <div className="input-row">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange={e => setName(e.target.value)} />
              </div>
              <div className="input-row">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <button className="button" type="submit" disabled={!name && !email}>Continue to message</button>
              </div>
            </form>
        </motion.div>
      </div>
      )}

      {/* Second section of the form */}
      {formIndex === 1 && (
      <div className="contact-form-wrapper">
        <motion.div 
          className="form-container"
          layout 
          initial={{ opacity: .5}}
          animate={{ opacity: 1 }}
        >
          <form onSubmit={handleFormSubmit} autoComplete="off">
            <div className="message-title">
              <div>MESSAGE FROM:</div>
              <div>{name.toUpperCase()}</div>  
            </div>
            

            <div className="message-row">
              {/* <label htmlFor="message">Message</label> */}
              <input id="message" type="text" onChange={e => setMessage(e.target.value)} />
            </div>
            <div>
              <button className="button" type="submit" disabled={!message}>One more step!!</button>
            </div>
          </form>
        </motion.div>
      </div>
      )}

      {/* Thank you message */}
      
      {formIndex === 2 && (
      <div className="contact-form-wrapper">
        <motion.div 
          className="form-container"
          layout 
          initial={{ opacity: .5}}
          animate={{ opacity: 1 }}
        >
          <div>
            <div className="review-box text-left">
              <h1>Please confirm your information and message.</h1>
              <div className="sender">
                <p>TO: <h3>Andrew Miller</h3></p>
                <p>FROM: <h3>{name}</h3></p>
                <p>@: <h3>{email.toLowerCase()}</h3></p>
              </div>
              <div className="message">
                <p>Message: <h3>{message}</h3></p>
              </div>
            </div>
            <button className="button" type="button" onClick={submitRequest}>
              Send
            </button>
          </div>
        </motion.div>
      </div>
        
      )}

      </div>
    </AnimatePresence>
      );
    };


export default Contact;
