import React from 'react'
import './AboutUs.css'
import {FaPlay} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import aboutImg from '../../assests/home/about-home.png'
import ImageComp from '../ImageComp/ImageComp'
import useLangContext from '../../Hooks/useLangContext'
const AboutUs = ({className= '',location= ''}) => {

    const {lang, langs} = useLangContext()
    
  return (
    <section className='about-home position-relative py-5'>

    <div className="container-lg pb-5">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center text-center px-5">
                
                <div>
                    {/* About Us Title */}
                    <h1 className='text-center mb-5'> <span className='custom-head'>{langs[lang].AboutUS.aboutTitle}</span> </h1>

                    {/* About Us Desc */}
                    <p className=' text-center'>
                        
                        Tuwaiq Industrial Factory extracts, cuts and shapes natural stone used in building and construction through several processes starting from
                        Extracting the stone, cutting it, cleaning it, and designing it according to aesthetic drawings. We also provide most types of natural stone with the latest technologies
                        It is used according to the appropriate sizes and designs for the facades of villas, houses and buildings. We welcome cooperation with construction companies
                        We offer them natural stones that are distinguished by their quality, shape and distinctive design
            
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
                        <ImageComp src={aboutImg} alt= 'About US' />
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