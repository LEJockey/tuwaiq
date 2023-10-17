import React from 'react'
import darklogo from '../../assests/logo.png'
const DakHead = ({title}) => {
  
    const img = darklogo;

    return (
        <div className='head-section'>
            <div className="container-fluid dark-bg py-5">
                <div className="row">
    
                    <div className="col-2 col-sm-2 d-flex justify-content-center align-items-center">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='custom-img' width={120} height={100} src={img} alt= "TUWAIQ" />
                        </div>
                    </div>
    
                    <div className="col-8 d-flex align-items-center justify-content-center ">
                        <h1 className='text-white text-center mb-0 custom-title'>{title}</h1>
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

export default DakHead