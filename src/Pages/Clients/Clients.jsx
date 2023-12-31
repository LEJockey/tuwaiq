import React from 'react'
import './clients.css'
import Slider from "react-slick";

import { Link } from 'react-router-dom';
import ImageComp from '../../Components/ImageComp/ImageComp';
import SectionBg from '../../Components/SectionBg/SectionBg';
import useLangContext from '../../Hooks/useLangContext';




const Clients = ({clients}) => {

    const {lang, langs} = useLangContext()

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 523,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    
        ]
    }
return (
    <>
    
    <SectionBg title= 'Our Clients'/>

    <section className='clients py-5'>
        <div className="container">

            <h1 className='text-center mb-5'> <span className='custom-head'>{langs[lang].Titles.OurClients}</span> </h1>

            <div className="row px-5">
                <Slider {...settings}>
                {clients?.map((client, idx) => (

                    <div className='px-xxl-5 px-4' key={idx}>
                        
                        <div key={idx} className="small-height rounded overflow-hidden Border position-relative">
                            
                            <ImageComp src={client?.image}
                            alt= 'Our Clients'/>
                        
                        </div>
                    </div>
                ))}
                </Slider>

            </div>
        </div>
    </section>
    </>
)
}

export default Clients