import React from 'react'
import './Service.css'


const Service = ({services, title='', className='', getName='', getDesc=''}) => {

  
  return (
    <section className='service-home position-relative py-5'>

    <div className={`overlay opacity-50 ${className}`}></div>

    <div className="container px-2 px-md-5 text-center h-100">
      <h1 className='m-0'><span className='custom-head'>{title}</span> </h1>
      <div className="row mt-5 gy-4">
        
        {services?.map((service, idx) =>
        <div key={idx} className="col-md-6 col-lg-3 my-3">

          <div className="service-card position-relative z-1 bg-white shadow rounded p-3 h-100">

            <div className="service-img mx-auto mb-3">

              <img className='w-100' src={service?.image} alt={getName(service)} />
              

            </div>

            <div className="service-desc text-center">
              
              <h3>{getName(service)}</h3>
              <p>{getDesc(service)}</p>
            </div>
          </div>

        </div>
        )}
        
      </div>

    </div>

  </section>
  )
}

export default Service