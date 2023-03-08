import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>shanrastogi57@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=CllgCJqXxrhGrqWxtHlpMkckgKskcPbTsVSlLgXGfkWzdxScrnKMpddSXcmwpNwhkznWRVzvWKL" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>rastogishan</h5>
            <a href="https://www.instagram.com/direct/t/340282366841710300949128115467697132730" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>8005070089</h5>
            <a href="https://api.whatsapp.com/send?+918005070089" target={"_blank"}>
              Send a message
            </a>
          </article>

        </div>

<form action="">
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
  <button type='submit' className='btn btn-primary'> Send Message </button>
</form>
      </div>
    </section>
  )
}

export default Contact
