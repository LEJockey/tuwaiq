import React from 'react'
import './AboutUs.css'
import {FaPlay} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import aboutImg from '../../assests/home/about-home.png'
import ImageComp from '../ImageComp/ImageComp'
import useLangContext from '../../Hooks/useLangContext'
const AboutUs = ({aboutUs, className= '',location= '', getName='', getDesc=''}) => {

    const {lang, langs} = useLangContext()
    
return (
    <section className='about-home position-relative py-5'>

    <div className="container-lg pb-5">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center text-center px-5">
                
                <div>
                    {/* About Us Title */}
                    <h1 className='text-center mb-5'> <span className='custom-head'>{aboutUs?.name[lang]}</span> </h1>

                    {/* About Us Desc */}
                    <p className=' text-center'>
                        {aboutUs?.description[lang]}
                    </p>
                    
                    {/* Buttons */}
                    <div className='d-flex justify-content-around about-btns'>
                        
                        {/* Discover More Button */}
                        <button className={`btn main-bg text-white rounded mx-2 hide-btn ${className}`}>
                            <Link className=' text-decoration-none text-white'  to= {location} >
                                {langs[lang].Buttons.discover}
                            </Link>
                        </button>
                        
                        {/* Download Profile Link */}
                        <button className='btn navy-bg text-white rounded mx-2'>
                            <a className=' text-decoration-none text-white' 
                            href=" " 
                            target= '_blank'
                            rel= 'noreferrer'   
                            download=''>
                                {langs[lang].Buttons.download}
                            </a> 
                        </button>

                    </div>
                </div>
            </div>
            
            {/* About Us Image */}
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
                <Link className='overlay-link'>
                    <div className='p-3 position-relative shadowing z-1 bg-white rounded overflow-hidden'>
                        <ImageComp src={aboutUs?.image} alt= 'About US' />
                        <div className="overlay-img">
                            <FaPlay className='icon z-3'/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>

    
    
    </section>
)
}

export default AboutUs