import React, { useEffect } from 'react'
import goldlogo from '../../assests/logo.png'
import { Link } from 'react-router-dom';

const GoldHead = ({title, location = ''}) => {

    const img = goldlogo;
    // location !== (null || undefined) && document.querySelector('.custom-title')?.classList.add('custom-anchor') 
    
  useEffect(() => {
    if (location !== null && location !== undefined) {
        const customTitle = document.querySelector('.custom-title');
        if (customTitle) {
        customTitle.classList.add('custom-anchor');
    }
    }
  }, [location]);
   
    return (
        <div className='head-section'>
            <div className="container-fluid gold-bg py-5">
                <div className="row">
    
                    <div className="col-2 col-sm-2 d-flex justify-content-center align-items-center">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='custom-img' width={120} height={100} src={img} alt= "TUWAIQ" />
                        </div>
                    </div>
    
                    <div className="col-8 d-flex align-items-center justify-content-center ">
                        <h1 className='text-white text-center mb-0 '>
                            <a className='text-decoration-none custom-title text-white no-cursor' target= '_blank'
                            rel= 'noreferrer' href={location}>{title}</a></h1>
                    </div>
    
                    <div className="col-2 col-sm-2 d-flex justify-content-center align-items-center">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='custom-img' width={120} height={100} src={img} alt= "TUWAIQ" />
                        </div>
                    </div>
    
                </div>
    
            </div>
        </div>
    )
}

export default GoldHead