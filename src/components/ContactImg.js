import React from 'react'
import "./ContactImg.css";
import ConIm from "../assest/contact.jpg";


const ContactImg = () => {
  return (
    <div className='contactImg'>
        <div className='conImagePart'>
         <img src={ConIm} className='Contactim'></img>
        </div>
        <div className='heading2'>
        <h1>Contact me</h1>
        <p>Reach to me and lets have a cup of coffee together </p> 
        </div>
        
    </div>
  )
}

export default ContactImg