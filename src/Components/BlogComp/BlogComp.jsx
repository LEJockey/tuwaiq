import React from 'react'
import './BlogComp.css'
import { homeBlog } from '../../data'
import { Link } from 'react-router-dom'
import {AiOutlineClockCircle} from 'react-icons/ai'
import ImageComp from '../ImageComp/ImageComp'
import useLangContext from '../../Hooks/useLangContext'


const BlogComp = ({ title='', className= '', location= ''}) => {

  const {lang, langs} = useLangContext()


  return (

    <section className='blog-home position-relative py-5'>
      <div className="overlay opacity-25"></div>
      <div className="container text-center">
        <h1> <span className='custom-head'>{title}</span> </h1>
        <div className="row mt-5">
          {homeBlog.map(({img, desc, dur}, idx) => 
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="blog-card p-2 rounded bg-white">
                <Link className='text-decoration-none position-relative'>
                  <div className="card-img position-relative">
                    {/* <img className='w-100 h-100' src={img} alt={desc} /> */}
                    <ImageComp src={img} alt={desc} />
                  </div>
                  <div className="card-title me-0 mt-4">
                      <h3 className='d-flex justify-content-start'> <span className='blog-title'>{desc}</span> </h3>
                      <p className='d-flex justify-content-start'> <span className='blog-desc'> <AiOutlineClockCircle/> {dur} </span> </p>
                  </div>
                </Link>
              </div>
            </div>
          )}
          <div className='.row mt-4 view-blogs'>
            <Link className={`text-decoration-none col-6 col-md-3 custom-btn z-1 ${className}`} to={location}>{langs[lang].Buttons.view}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogComp