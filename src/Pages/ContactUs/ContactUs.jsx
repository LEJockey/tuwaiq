import React from 'react'
import './ContactUs.css'
import SectionBg from './../../Components/SectionBg/SectionBg';
import ContactForm from '../../Components/ContactForm/ContactForm';
import useLangContext from '../../Hooks/useLangContext';
import SiteHelmet from '../../Components/SiteHelemt/SiteHelmet';


const ContactUs = () => {

  const {lang, langs} = useLangContext()


  return (
    <>

    <SiteHelmet title= {langs[lang].Titles.contacttitle}/>
    <SectionBg title={langs[lang].ContactForm.title}/>
    <ContactForm/>  
    </>
  )
}

export default ContactUs