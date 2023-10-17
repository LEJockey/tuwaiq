import React from 'react'
import { facadeDesign } from '../../data'
import { Link } from 'react-router-dom'
import {HiOutlineViewfinderCircle} from 'react-icons/hi2'
import { Fancybox } from "@fancyapps/ui";
import ImageComp from '../ImageComp/ImageComp';


const FacadeDesign = ({className='', location=''}) => {
    
    Fancybox.bind("[data-fancybox]", {
        
    });

return (

    <section className='facade-design py-5'>
        <div className="container px-5">

            {/* <h1 className='text-center mb-5'> <span className='custom-head'>External facade designs</span> </h1> */}

            <div className="row ">
                {facadeDesign.map(({img}, idx)=>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
                        <a href={img} className='overlay-link' data-fancybox="gallery" data-caption="Facade Designs">
                        <div className='custom-height position-relative shadowing rounded overflow-hidden Border cursor  z-1'>
                            {/* <img className='w-100 h-100 scale-img' src={img} alt="" /> */}
                            <ImageComp src={img} alt="Facade Designs"/>
                            <div className="overlay-img">
                                <HiOutlineViewfinderCircle className='icon z-3'/>
                            </div> 
                        </div>
                        </a>
                    </div>
                )}
            </div>


            <div className={`text-end mt-3 ${className}`} >
                <button className='btn main-bg text-white rounded'>
                    <Link className=' text-decoration-none text-white'  to= {location} >
                        Discover More
                    </Link>
                </button>
            </div>
        </div>
    </section>
)
}

export default FacadeDesign

