import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { manufactureImg } from '../../data';
import ImageComp from '../ImageComp/ImageComp';

const PhotoComp = ({className= '', location= ''}) => {
    
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 523,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    
        ]
    }

    return (
    <section className='photo-sec py-5'>


        <div className="container px-5">

            <h1 className='text-center mb-5'><span className='custom-head'>Images of the manufacturing process</span> </h1>
        
            <div className="row">
                
                <Slider {...settings}>
            
                {manufactureImg?.map(({img}, idx) => (

                <div className='col-4 px-2' key={idx}>

                    <div className="custom-height position-relative shadowing rounded overflow-hidden Border">
                {/* <img
                className="w-100 h-100"
                // height={250}
                src={img}
                alt= 'Manufacturing Images'
                /> */}
                        <ImageComp  src={img}alt= 'Manufacturing Images' />

                {/* <div className="overlay-img">
                    <HiOutlineViewfinderCircle className='icon z-3'/>
                  </div> */}
                
                    </div>
                </div>
                ))}
                
                </Slider>

            </div>

            <div className= {`text-end px-2 mt-3 ${className}`}>
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

export default PhotoComp