import React from 'react'
import './BlogComp.css'
import { Link } from 'react-router-dom'
import {AiOutlineClockCircle} from 'react-icons/ai'
import ImageComp from '../ImageComp/ImageComp'
import useLangContext from '../../Hooks/useLangContext'
import FormatData from '../FormatData/FormatData'


const BlogComp = ({blogs, title='', className= '', location= '', getName=''}) => {

  const {lang, langs} = useLangContext()
  


  return (

    <section className='blog-home position-relative py-5'>
      <div className="overlay opacity-25"></div>
      <div className="container text-center">
        <h1> <span className='custom-head'>{title}</span> </h1>
        <div className="row mt-5 gy-4">
          {blogs?.map((blog, idx) => 
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className="blog-card p-2 rounded bg-white h-100">
                <Link className='text-decoration-none position-relative d-inline-block h-100'
                to={`/blogdetails/${blog?.id}`}
                >
                  <div className="card-img position-relative">

                    <ImageComp src={blog.image} alt={getName(blog)} />

                  </div>

                  <div className="card-title me-0 mt-4">
                      <h3 className='d-flex justify-content-start'> <span className='blog-title'>{getName(blog)}</span> </h3>
                      <p className='d-flex justify-content-start '> <span className='blog-desc'> <AiOutlineClockCircle/> <FormatData dateString={blog.updated_at}/> </span> </p>
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