import React from 'react'
import ImageComp from '../ImageComp/ImageComp'
import {FaPlay} from 'react-icons/fa'
import {HiOutlineViewfinderCircle} from 'react-icons/hi2'
import { Fancybox } from "@fancyapps/ui";


const Display = ({items, hideImgIcon='', hideVideoIcon=''}) => {

    Fancybox.bind("[data-fancybox]", {
        
    });
  return (

    <div className="container-fluid position-relative index">

    <div className="row py-5 ">
                {items?.map(({image, cover, vedio}, idx)=>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
                        <a href={vedio? vedio: image} className='overlay-link' data-fancybox="gallery" data-caption="Facade Designs">
                        <div className='custom-height position-relative shadowing rounded overflow-hidden Border cursor z-1'>

                            <ImageComp src={cover? cover: image} alt="Facade Designs"/>
                            <div className="overlay-img">
                                <HiOutlineViewfinderCircle className={`icon z-3 ${hideImgIcon}`}/>
                                <FaPlay className={`icon z-3 ${hideVideoIcon}`}/>
                            </div> 
                        </div>
                        </a>
                    </div>
                )}
            </div>
    </div>
  )
}

export default Display