import React from 'react'
import './ContactBoxes.css'
import {IoCallOutline} from 'react-icons/io5'
import {AiOutlineProfile, AiOutlineMail, AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {FaXTwitter} from 'react-icons/fa6'
import {GrLinkedinOption} from 'react-icons/gr'


const ContactBoxes = () => {
  return (
    <>
    <div className='contact-icons'>
        <a href="tel:+201007796818">
            <IoCallOutline/>
        </a>

        <a href="">
            <AiOutlineMail/>
        </a>

        <a href="">
            <GrLinkedinOption/>
        </a>

        <a href="">
            <AiOutlineProfile/>
        </a>
    </div>


    <div className='social-icons'>
        <a href="tel:+201007796818">
            <FiFacebook/>
        </a>

        <a href="">
            <FaXTwitter/>
        </a>

        <a href="">
        <AiOutlineYoutube/>
        </a>

        <a href="">
            <AiOutlineInstagram/>
        </a>
    </div>
    </>

    
  )
}

export default ContactBoxes