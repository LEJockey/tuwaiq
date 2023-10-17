import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import SectionBg from './../../Components/SectionBg/SectionBg';
import AboutUs from './../../Components/AboutUs/AboutUs';
import GoldHead from '../../Components/GoldHead/GoldHead';
import ImageComp from '../../Components/ImageComp/ImageComp';
import { ourTeam, whyUs } from '../../data';


const About = () => {
  return (
    <>
    <SectionBg title= 'ABOUT US'/>

    <AboutUs className='hide-link'/>

    {/* Why Us  */}
    <section className="py-5 why-us">
        <div className="container">
            <div className="row">
                <h1 className='text-center'> <span className='custom-head'>Why US?!</span> </h1>

                <div className="row mt-5">
                  {whyUs.map(({img, title, desc}, idx) =>

                  <div className="col-md-3" key={idx}>
                    <div className="whyus-card Border shadowing rounded h-100 text-center p-3">
                      
                      <ImageComp src={img} alt={title}/>
                      
                      <h2 className='py-2 m-0 text-white'>{title}</h2>
                      <p>{desc}</p>
                    </div>
                  </div>
                  )}
                </div>
            </div>
        </div>
    </section>

    {/* Our Team */}
    <section className='py-5 our-team'>
        <div className="container">
            <div className="row">
            <h1 className='text-center'> <span className='custom-head'>Our Specialized Team</span> </h1>

            <div className="row mt-5">
              {ourTeam.map(({img, name, title}, idx) =>

              <div className="col-md-4">
                <div className="team-card Border shadowing rounded text-center p-3">

                  <ImageComp src={img} alt={title}/>
                  <h2 className='py-2 mt-2 m-0 second-color'>{name}</h2>
                  <h4 className='gold-color m-0'>{title}</h4>

                </div>
              </div>
              )}
            </div>

            </div>
        </div>
    </section>
    
    </>
  )
}

export default About