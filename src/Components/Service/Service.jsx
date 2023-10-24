import React from 'react'
import './Service.css'
import service1 from '../../assests/home/services/1-design.png'
import service2 from '../../assests/home/services/2-guarantee.png'
import service3 from '../../assests/home/services/3-stracture.png'
import service4 from '../../assests/home/services/4-export.png'

const Service = ({title='', className=''}) => {
 
  return (
    <section className='service-home position-relative py-5'>

    <div className={`overlay opacity-50 ${className}`}></div>

    <div className="container px-2 px-md-5 text-center h-100">
      <h1 className='m-0'><span className='custom-head'>{title}</span> </h1>
      <div className="row mt-5">
        <div className="col-md-6 col-lg-3 my-3 my-lg-0">

          <div className="service-card position-relative z-1 bg-white shadow rounded p-3">

            <div className="service-img mx-auto mb-3">

              <img className='w-100' src={service1} alt="Extraction" />
              

            </div>

            <div className="service-desc text-center">
              
              <h3>Extraction</h3>
              <p>Natural Stone</p>
            </div>
          </div>

        </div>

        <div className="col-md-6 col-lg-3 my-3 my-lg-0">

          <div className="service-card position-relative z-1 bg-white shadow rounded p-3">

            <div className="service-img mx-auto mb-3">

              <img className='w-100' src={service2} alt="Manufacturing" />

          </div>

            <div className="service-desc text-center">
              
              <h3>Manufacturing</h3>
              <p>Natural Stone</p>
            </div>

          </div>

        </div>

        <div className="col-md-6 col-lg-3 my-3 my-lg-0">

          <div className="service-card position-relative z-1 bg-white shadow rounded p-3">

            <div className="service-img mx-auto mb-3">

              <img className='w-100' src={service3} alt="Installation" />

            </div>

            <div className="service-desc text-center">
              
              <h3>Installation</h3>
              <p>Natural Stone</p>
            </div>

          </div>

        </div>

        <div className="col-md-6 col-lg-3 my-3 my-lg-0">

          <div className="service-card position-relative z-1 bg-white shadow rounded p-3">

          <div className="service-img mx-auto mb-3">

            <img className='w-100' src={service4} alt="Extraction" />

          </div>

          <div className="service-desc text-center">
            <h3>Extraction</h3>
            <p>Natural Stone</p>
          </div>
          </div>

        </div>
        
      </div>

    </div>

  </section>
  )
}

export default Service