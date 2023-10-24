import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { manufactureImg } from '../../data';
import ImageComp from '../ImageComp/ImageComp';
import useLangContext from '../../Hooks/useLangContext';

const PhotoComp = ({className= '', location= ''}) => {

    const {lang, langs} = useLangContext()

    
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

            <h1 className='text-center mb-5'><span className='custom-head'>{langs[lang].Titles.Imagesofthemanufacturingprocess}</span> </h1>
        
            <div className="row">
                
                <Slider {...settings}>
            
                {manufactureImg?.map(({img}, idx) => (

                <div className='col-4 px-2' key={idx}>

                    <div className="custom-height position-relative shadowing rounded overflow-hidden Border">
                
                        <ImageComp  src={img}alt= 'Manufacturing Images' />
                
                    </div>
                    
                </div>
                ))}
                
                </Slider>

            </div>

            <div className= 'd-flex justify-content-end px-2 mt-3'>
                <button className={`btn main-bg text-white rounded ${className} `}>
                    <Link className=' text-decoration-none text-white'  to= {location} >
                        {langs[lang].Buttons.discover}
                    </Link>
                </button>
            </div>

        </div>

    </section>
    )
}

export default PhotoComp