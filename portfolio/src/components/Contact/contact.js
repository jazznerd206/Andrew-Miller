import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitRequest = async (e) => {
        e.preventDefault();
        console.log({ email, message });
        axios.post('/access', {
        email: email,
        message: message
      })
      .then(function (response) {
        console.log(`this is the response ${response}`);
        setEmail('');
        setMessage('');
      })
      .catch(function (error) {
        console.log(`this is the error ${error}`);
      });
    };

    return (
      <div>
        <div className="contact-form-wrapper" id="contact">
          <div className="form-container">
            <form
              className=""
              onSubmit={submitRequest}
            >
              <div className="contact-title">
                <h2 className="">
                  Contact Me
                </h2>
              </div>
              <div className="contact-email">
                <label
                  className=""
                  htmlFor="Email"
                >
                  Your Email
                </label>
                <textarea
                  className=""
                  type="text"
                  name="email"
                  placeholder="you@example.com"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="contact-message">
                <label
                  className=""
                  htmlFor="message"
                >
                  Message For Us
                </label>
                <textarea
                  className=""
                  name="message"
                  type="text"
                  placeholder="Your message here..."
                  onChange={e => setMessage(e.target.value)}
                  value={message}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="button"
                  type="submit"
                >
                  Send to Andrew!!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      );
    };


export default Contact;
