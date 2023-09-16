import React from 'react'
import './Contact.css'
import Header from '../../components/header/Header'
import End from '../../components/end/End'
export default function contact() {
  return (
    <>
    <Header/>
    <div className='contact-header'>
      <img src='https://wallpaperaccess.com/full/3124511.jpg' alt='contact'/>
      <div className='Contact-outdoors'>
        <h1><b>Contact Acme Outdoors</b></h1>
        <div className='Contact-card'>
          {/* grid */}
          <div>
            <h1><b>Contact Us</b></h1>
            <h3>Just want to say hi? We'd love to hear from you. We love our customers and community! </h3>
            <button>Send Us a Message</button>
          </div>
          <div>
            <h1><b>Contact Us</b></h1>
            <h3>Just want to say hi? We'd love to hear from you. We love our customers and community! </h3>
            <button>Send Us a Message</button>
          </div>
        </div>
      </div>
    </div>
    <End/>
    </>
  )
}
