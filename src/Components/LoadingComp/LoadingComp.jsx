import React from 'react'
import './LoadingComp.css'
import {} from 'react-icons/fi'

const LoadingComp = () => {
  return (
    <div className='d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0 load h-100' >
        
      <div className="gears-container">

        <div className="gear-rotate"></div>
        <div className="gear-rotate-left"></div>

      </div>

    </div>
  )
}

export default LoadingComp