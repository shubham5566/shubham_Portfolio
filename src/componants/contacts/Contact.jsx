import React from 'react'
import './contact.css'
import {IoIosMail} from "react-icons/io"
import {BsLinkedin} from "react-icons/bs"
import {ImWhatsapp} from "react-icons/im"
import{useRef} from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7kg5gfp', 'template_2fpforu', form.current, '5sgOg7wGx7MPnya7P');
    e.target.reset();
    
    
  };
 
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <IoIosMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>shubhambhavsar5566@gmail.com</h5>
            <a href="mailto:shubhambhavsar5566@gmail.com">send a message</a>

          </article>
          <article className="contact_option">
            <BsLinkedin className='contact_option_icon'/>
            <h4>Linkdin</h4>
            <h5>Shubham Bhavsar</h5>
            <a href="https://www.linkedin.com/in/shubham-bhavsar-2b3241183"  target='_blank'>send a message</a>

          </article>
          <article className="contact_option">
            <ImWhatsapp className='contact_option_icon'/>
            <h4>What's App</h4>
            <h5> +91 9970198303</h5>
            <a href="mailto:shubhambhavsar5566@gmail.com">send a message</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" nameame ='name' placeholder='Your Full Name' required />
          <input type="text" name ='email' placeholder='Email Id' required />
          <textarea name="message" id="" cols="20" rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact