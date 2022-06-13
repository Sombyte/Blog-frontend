import React from 'react';
import './contact.css';
export default function Contact() {
  return (
    <div className="contact">
            <span className="registerTitle">Contact</span>
            <form className="registerForm">
                <label>Name</label>
                <input className="registerInput" type="text" placeholder="Enter your name..." />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Massage</label>
                <input className="registerInput" type="text" size='50' placeholder="Type your Massage..." />
                <button className="registerButton">Send</button>
            </form>
            
        </div>
  )
}
