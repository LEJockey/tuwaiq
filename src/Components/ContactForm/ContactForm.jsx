import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
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

            <h1 className=' position-relative'>GET IN TOUCH</h1>

            <form className='row' action="">

                {/* Name Input */}
                <div className="form-floating my-2 col-sm-6 px-sm-1 ps-sm-0 px-0">
                    <input type="text" className="form-control" id="floatingName" placeholder="Name" required/>
                    <label className='mx-2' htmlFor="floatingName">Name*</label>
                </div>
                
                {/* Email Imput */}
                <div className="form-floating my-2 col-sm-6 px-sm-1 pe-sm-0 px-0">
                    <input type="Email" className="form-control" id="floatingEmail" placeholder="Email" required/>
                    <label className='mx-2' htmlFor="floatingEmail">Email*</label>
                </div>
                
                {/* Phone Input */}
                <div className="form-floating my-2 col-12 px-0">
                    <input type="phone" className="form-control" id="floatingPhone" placeholder="Phone"/>
                    <label htmlFor="floatingPhone">Phone*</label>
                </div>

                {/* Message Input */}
                <div className="form-floating my-2 col-12 px-0">
                    <textarea className="form-control" placeholder="Leave your message here" id="floatingTextarea" cols={40} ></textarea>
                    <label htmlFor="floatingTextarea">Message*</label>
                </div>
                
                    {/* <label for="formFile" class="form-label"></label> */}
                {/* <div className="my-2 px-0">
                    <input className="form-control upload-input" type="file" id="formFile"/>
                </div> */}

                <div className="col-12 px-0 mt-3 mb-5">
                    <button className='custom-btn z-1' type="submit">Submit</button>
                </div>

            </form>

        </div>
    </section>
)
}

export default ContactForm