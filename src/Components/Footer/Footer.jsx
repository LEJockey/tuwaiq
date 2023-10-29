import React from 'react'
import './Footer.css'
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom';
import useLangContext from '../../Hooks/useLangContext';



const Footer = ({contactDetails}) => {

  const {lang, langs} = useLangContext()


  return (
    <footer>
    
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
                <p className="footer-logo">                    
                    <img src={logo} alt="TUWAIQ" />                   
                </p>

            </div>
          </div>

        <div className="empty-s"></div>

        <div className="row px-5">

        <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
              <div className="widget">
                  {/* <h5></h5> */}
                  <div className="textwidget w-75">
                      <p className='my-0'>{langs[lang].Footer.desc}</p>
                  </div>
              </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
              <div className="widget">
                  <h5>{langs[lang].Footer.UsefulLinks}</h5>
                  <ul className={`footer-menu list-unstyled ${lang === 'ar' && ' px-0'}`}>
                    
                      <li><Link className='d-inline-block' to="about">{langs[lang].Footer.AboutUs}</Link></li>
                      <li><Link className='d-inline-block' to="products">{langs[lang].Footer.services}</Link></li>
                      <li><Link className='d-inline-block' to="blog">{langs[lang].Titles.Blog}</Link></li>
                      <li><Link className='d-inline-block' to="clients">{langs[lang].Titles.OurClients}</Link></li>
                  </ul>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
              <div className="widget">
                  <h5>{langs[lang].Footer.ContactInfo}</h5>
                  <div className="textwidget">
                      <p>{contactDetails?.address[lang]},<br/>{langs[lang].Address.place}</p>
                      <p> {contactDetails?.phones[1]}<br/> {contactDetails?.phones[2]}<br/>
                      <a className='d-inline-block' href={`mailto:${contactDetails?.email}`}>{contactDetails?.email}</a>
                      </p>
                  </div>
              </div>
          </div>            
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer