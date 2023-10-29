import React from 'react'
import { Link } from 'react-router-dom'


import useLangContext from '../../Hooks/useLangContext';
import Display from '../Display/Display';


const FacadeDesign = ({className='', location='', facadeDesign}) => {
    
    const {lang, langs} = useLangContext()

    
    

return (

    <section className='facade-design py-5'>
        <div className="container px-5">

            {/* <h1 className='text-center mb-5'> <span className='custom-head'>External facade designs</span> </h1> */}

            <Display items={facadeDesign} hideVideoIcon='hideVideoIcon' />


            <div className='d-flex justify-content-end mt-3' >
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

export default FacadeDesign

