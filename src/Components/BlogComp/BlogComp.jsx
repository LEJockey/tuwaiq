import React from 'react'
import './BlogComp.css'
import { homeBlog } from '../../data'
import { Link } from 'react-router-dom'
import {AiOutlineClockCircle} from 'react-icons/ai'
import ImageComp from '../ImageComp/ImageComp'
const BlogComp = ({className= '', location= ''}) => {
  return (

    <section className='blog-home position-relative py-5'>
      <div className="overlay opacity-25"></div>
      <div className="container text-center">
        <h1> <span className='custom-head'>Blog</span> </h1>
        <div className="row mt-5">
          {homeBlog.map(({img, desc, dur}, idx) => 
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="blog-card p-2 rounded bg-white">
                <Link className='text-decoration-none position-relative'>
                  <div className="card-img position-relative">
                    {/* <img className='w-100 h-100' src={img} alt={desc} /> */}
                    <ImageComp src={img} alt={desc} />
                  </div>
                  <div className="card-title text-start mt-4">
                      <h3>{desc}</h3>
                      <p> <AiOutlineClockCircle/> {dur}</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
          <div className='.row mt-4'>
            <Link className={`text-decoration-none col-6 col-md-3 custom-btn z-1 ${className}`} to={location}>View All</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogComp