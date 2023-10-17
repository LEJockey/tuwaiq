import React from 'react'
import './Footer.css'
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom';



const Footer = () => {
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
                      <p className='my-0'>Installation and supply of natural stone for palaces, villas and buildings - we prepare designs according to the appropriate dimensions of the natural stone facades We provide all types of natural stone with the latest methods used and guaranteed.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
              <div className="widget">
                  <h5>Useful Links</h5>
                  <ul className="footer-menu list-unstyled">
                      <li><Link className='d-inline-block' to="about">About Us</Link></li>
                      <li><Link className='d-inline-block' to="products">Services</Link></li>
                      <li><Link className='d-inline-block' href="">News</Link></li>
                      <li><Link className='d-inline-block' to="blog">Blog</Link></li>
                      <li><Link className='d-inline-block' to="clients">Our Clients</Link></li>
                  </ul>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
              <div className="widget">
                  <h5>Contact Info</h5>
                  <div className="textwidget">
                      <p>Riyadh 15228,<br/> Saudi Arabia</p>
                      <p> 0544440399<br/>
                      <a className='d-inline-block' href="mailto:twieaq@gmail.com">twieaq@gmail.com</a>
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