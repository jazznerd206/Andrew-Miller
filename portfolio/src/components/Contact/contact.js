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
      })
      .catch(function (error) {
        console.log(`this is the error ${error}`);
      });
        const response = await fetch("/access", { 
          method: 'POST', 
          headers: { 
              'Content-type': 'application/json',
              'Accept': 'application/json'
          }, 
          body: JSON.stringify({email, message})
      }); 
        const resData = await response.text();
        if (resData.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(resData.status === 'fail'){
          alert("Message failed to send.")
      }
    };

    return (
      <div>
        <div className="contact-form-wrapper" id="contact">
          <div className="form-container">
            <form
              className=""
              onSubmit={submitRequest}
            >
              <h2 className="">
                Contact Me
              </h2>
              <div className="">
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
                  placeholder="Email Address"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="">
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
                  placeholder="Tell us your purpose"
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
                  Hello World!!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      );
    };


export default Contact;
