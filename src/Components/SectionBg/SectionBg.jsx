import React from 'react'
import './SectionBg.css'

const SectionBg = ({title}) => {
  return (
    <div className="section-bg custom-padding">
        
        <div className="overlay-custom"></div>

        <div className='section-content'>

          <div className="section-head">

            <h1>{title}</h1>

          </div>

        </div>

      </div>
  )
}

export default SectionBg