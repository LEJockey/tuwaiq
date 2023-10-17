import React from 'react'
import './AboutUs.css'
import {FaPlay} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import aboutImg from '../../assests/home/about-home.png'
import ImageComp from '../ImageComp/ImageComp'
const AboutUs = ({className= '',location= ''}) => {
  return (
    <section className='about-home position-relative py-5'>

    <div className="container-lg pb-5">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center text-center px-5">
                
                <div>
            
                    <h1 className='text-center mb-5'> <span className='custom-head'>About US</span> </h1>
                    <p className=' text-center'>
                        
                        Tuwaiq Industrial Factory extracts, cuts and shapes natural stone used in building and construction through several processes starting from
                        Extracting the stone, cutting it, cleaning it, and designing it according to aesthetic drawings. We also provide most types of natural stone with the latest technologies
                        It is used according to the appropriate sizes and designs for the facades of villas, houses and buildings. We welcome cooperation with construction companies
                        We offer them natural stones that are distinguished by their quality, shape and distinctive design
            
                    </p>

                    <div className='d-flex justify-content-around'>

                        <button className={`btn main-bg text-white rounded mx-2 hide-btn ${className}`}>
                            <Link className=' text-decoration-none text-white'  to= {location} >
                            Discover More
                            </Link>
                        </button>

                        <button className='btn navy-bg text-white rounded mx-2'>
                            <a className=' text-decoration-none text-white' href=" " download=''>
                            Download Proflie
                            </a> 
                        </button>

                    </div>
                </div>
            </div>
        
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
                <Link className='overlay-link'>
                    <div className='p-3 position-relative shadowing z-1 bg-white rounded overflow-hidden'>
                        {/* <img className='w-100 h-100' src={aboutImg} alt="About US" /> */}
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