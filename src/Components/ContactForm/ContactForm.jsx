import React, { useEffect, useState } from 'react'
import './ContactForm.css'
import useLangContext from '../../Hooks/useLangContext'
import axios from 'axios'
import {GrStatusGood} from 'react-icons/gr'


const ContactForm = () => {

    const {lang, langs} = useLangContext()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [submissionStatus, setSubmissionStatus] = useState(false);

    
    const   handleSubmit = (e) => {
        e.preventDefault();
        
        const contactDetails = {name, email, phone, message }
        axios.post('https://tuwaiq.ezdhaar.com/public/api/test/new/sendemail', contactDetails)
        .then((response) => {console.log(response)
            setSubmissionStatus(true)})
            .catch((error) => {
                console.log(error);
            });
        console.log(contactDetails)
        setName('');
        setEmail('');
        setPhone('')
        setMessage('')
    }

    useEffect(() => {
        // Reset submission status after a delay
        if (submissionStatus) {

            const timer = setTimeout(() => {
                setSubmissionStatus(false);
            }, 3000);
    
            return () => clearTimeout(timer);
        }
    }, [submissionStatus]);

    
return (
    <section className="row mx-0">
        <div className="col-md-6 map px-0">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.782587558247!2d45.821685975379964!3d25.14304017774589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2bdbb9eba79ecd%3A0xb9f3e6885c6b253f!2z2YXYtdmG2Lkg2LfZiNmK2YIg2YTZhNit2KzYsSDYp9mE2LfYqNmK2LnZig!5e0!3m2!1sen!2seg!4v1697013184918!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            title="Google Maps"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

        <div className="col-md-6 touch">

            <h1 className=' position-relative'>{langs[lang].ContactForm.touch}</h1>

            <form className='row' onSubmit={handleSubmit}>

                {/* Name Input */}
                <div className="form-floating my-2 col-sm-6 px-sm-1 px-0">
                    <input type="text" 
                    className="form-control" 
                    id="floatingName" placeholder="Name" required 
                    value={name} onChange={(e)=>setName (e.target.value)}/>
                    {/* Label */}
                    <label className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor="floatingName"
                    >
                    {langs[lang].ContactForm.name}
                    </label>
                </div>
                
                {/* Email Imput */}
                <div className="form-floating my-2 col-sm-6 px-sm-1 px-0">
                    <input type="Email" 
                    className="form-control" 
                    id="floatingEmail" placeholder="Email" required 
                    value={email} onChange={(e)=>setEmail (e.target.value)}/>
                    {/* Label */}
                    <label className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor="floatingEmail"
                    >
                    {langs[lang].ContactForm.email}
                    </label>
                </div>
                
                {/* Phone Input */}
                <div className="form-floating my-2 col-12 px-0 px-sm-1">
                    <input type="phone" 
                    className="form-control" 
                    id="floatingPhone" placeholder="Phone" 
                    value={phone} onChange={(e)=>setPhone (e.target.value)}/>
                    {/* Label */}
                    <label className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`} 
                    htmlFor="floatingPhone"
                    >
                    {langs[lang].ContactForm.phone}
                    </label>
                </div>

                {/* Message Input */}
                <div className="form-floating my-2 col-12 px-0 px-sm-1">
                    <textarea className="form-control" 
                    placeholder="Leave your message here" 
                    id="floatingTextarea" cols={40} 
                    value={message} onChange={(e)=>setMessage (e.target.value)} ></textarea>
                    <label className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`} 
                    htmlFor="floatingTextarea"
                    >
                    {langs[lang].ContactForm.message}
                    </label>
                </div>
                
                <div className="col-12 px-0 px-sm-1 mt-3 mb-5">
                    <button className='custom-btn z-1' type="submit">{langs[lang].ContactForm.submit}</button>
                </div>

                {/* Success Msg */}
                <div className={`success-msg w-auto ${submissionStatus ? '' : 'hidden'}`}>
                    {submissionStatus && (
                <div className="alert alert-success w-auto fade-message">
                    {langs[lang].successMsg.msg}  <GrStatusGood />
                </div>
                )}
                </div>

            </form>

        </div>
    </section>
)
}

export default ContactForm