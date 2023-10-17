import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import slide1 from '../../assests/home/main-slider/1-.jpg'
import slide2 from '../../assests/home/main-slider/2-.jpeg'
import slide3 from '../../assests/home/main-slider/3-.jpeg'

import ContactForm from '../../Components/ContactForm/ContactForm'
import Photos from '../Photos/Photos'
import Videos from '../Videos/Videos'
import GoldHead from '../../Components/GoldHead/GoldHead'
import DakHead from '../../Components/DarkHead/DakHead'
import FacadeDesign from '../../Components/FacadeDesign/FacadeDesign'
import Clients from '../Clients/Clients'
import AboutUs from '../../Components/AboutUs/AboutUs'
import BlogComp from '../../Components/BlogComp/BlogComp'
import Service from '../../Components/Service/Service'
import ImageComp from '../../Components/ImageComp/ImageComp'
import PhotoComp from '../../Components/PhotoComp/PhotoComp'
import VideoComp from '../../Components/VideoComp/VideoComp'

const Home = () => {
return (

<main>
      
      {/* Carousel Section */}
  <section id="carouselExampleFade" className="carousel slide carousel-fade z-1 custom-padding"  data-bs-ride="carousel" >
  
    <div className="overlay "></div>
    
    {/* Carousel-Indicators */}
    <div className="carousel-indicators z-3">
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active rounded-circle" aria-current="Slide 1" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" className=' rounded-circle' aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" className=' rounded-circle' aria-label="Slide 3"></button>
    </div>
    
    <div className="carousel-inner h-100 z-2">
      
      {/* Slide 1 */}
      <div className="carousel-item active h-100 position-relative  d-flex justify-content-center align-items-center" data-bs-slide="fade" data-bs-interval="5000">

      <div className="overlay z-2"></div>
        
        {/* <img src={slide1} className="d-block w-100 h-100" alt="Guarntee"/> */}
        <ImageComp src={slide1} alt='Guarntee' />
        <div className="carousel-caption d-flex justify-content-center align-items-center z-3">


          <div>

              <h1>A guarantee</h1>
              <p>Guarantee on our product Your trust is important to us</p>
              {/* <button className='custom-btn mt-4'>Diimport ImageComp from './../../Components/ImageComp/ImageComp';
scover more</button> */}
              
          </div>

        </div>

      </div>
      
      {/* Slide 2 */}
      <div className="carousel-item h-100 position-relative" data-bs-slide="fade" data-bs-interval="5000">

      {/* <img src={slide2} className="d-block w-100 h-100 slide" alt="Installation"/> */}
      <ImageComp src={slide2} alt='Installation' />
      <div className="overlay z-2"></div>

        <div className="carousel-caption d-flex justify-content-center align-items-center  z-3">

          <div>

            <h1>Install</h1>
            <p>We provide installation and supply of natural stone for palaces, villas and buildings.</p>
            {/* <button className='custom-btn mt-4'>Discover more</button> */}

          </div>

        </div>
        
      </div>
      
      {/* Slide 3 */}
      <div className="carousel-item h-100 position-relative" data-bs-slide="fade" data-bs-interval="5000">

      <div className="overlay z-2"></div>
        
        {/* <img src={slide3} className="d-block w-100 h-100 slide" alt="Design"/> */}
        <ImageComp src={slide3} alt='Design' />

        <div className="carousel-caption d-flex justify-content-center align-items-center z-3">

          <div>

            <h1>Design</h1>
            <p>We prepare designs according to the appropriate sizes</p>
            {/* <button className='custom-btn mt-4'>Discover more</button> */}

          </div>

        </div>

      </div>

    </div>

  </section>

      {/* About Home Section */}
      <AboutUs  location='about'/>
      
      <hr className='my-0'/>

      {/* Photo home Section */}
      <PhotoComp location='photos'/>

      <GoldHead title = 'Types of Natural Stones' location= 'https://www.almrsal.com/post/1082985'/>

      {/* Video home Section */}
      <VideoComp location='videos'/>

      <DakHead title= 'External Facade Designs'/>

      {/* Facade Design */}
      <FacadeDesign location='projects'/>
      
      {/* Services */}
      <Service title='Services'/>

      {/* Clients Section */}
      <Clients/>

      <GoldHead title= 'Learn more about the factory'/>


      {/* Blog Home Section */}
      <BlogComp location='blog'/>

  
      {/* Contact Section */}
      <ContactForm/>

</main>
  )
}

export default Home

