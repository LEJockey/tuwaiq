import React, { useEffect } from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import GoldHead from "../../Components/GoldHead/GoldHead";
import DakHead from "../../Components/DarkHead/DakHead";
import FacadeDesign from "../../Components/FacadeDesign/FacadeDesign";
import Clients from "../Clients/Clients";
import AboutUs from "../../Components/AboutUs/AboutUs";
import BlogComp from "../../Components/BlogComp/BlogComp";
import Service from "../../Components/Service/Service";
import ImageComp from "../../Components/ImageComp/ImageComp";
import PhotoComp from "../../Components/PhotoComp/PhotoComp";
import VideoComp from "../../Components/VideoComp/VideoComp";
import useLangContext from "../../Hooks/useLangContext";
import SiteHelmet from "../../Components/SiteHelemt/SiteHelmet";
import useQueryData from "../../Hooks/useQueryData";
import LoadingComp from "./../../Components/LoadingComp/LoadingComp";
import "./Home.css";
import Slider from "react-slick";

const Home = () => {


  const { lang, langs } = useLangContext();

  // Fetching Home Data

  let { data, getTitle, getDesc, getName, isLoading } = useQueryData(
    "https://tuwaiq.ezdhaar.com/api/home",
    "GET",
    "Home"
  );

  

  const allSliders = data?.data?.allsliders;
  const manufacturingImages = data?.data.Manufacturingimages;
  const manufacturingVideos = data?.data.videosandcovers;
  const facadeDesign = data?.data.facades;
  const services = data?.data.allservice;
  const clients = data?.data.Clients;
  const latestBlogs = data?.data.latestBlogs;
  const aboutUs = data?.data.about;
  console.log (allSliders)

  return (
    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <main>
          <SiteHelmet title={langs[lang].Titles.home} />

          {/* Carousel Section */}
          
          <section
                      id="carouselExampleFade"
                      className="carousel slide carousel-fade z-1 custom-padding"
                      data-bs-ride="carousel"
                  >
          
                      <div className="carousel-indicators z-3">
                          {allSliders?.map((slide, index) => (
                              <button
                                  key={index}
                                  type="button"
                                  data-bs-target="#carouselExampleFade"
                                  data-bs-slide-to={index}
                                  className={
                                      index === 0
                                          ? "active rounded-circle"
                                          : "rounded-circle"
                                  }
                                  aria-label={`Slide ${index + 1}`}
                              ></button>
                          ))}
                      </div>

                      {/* Slider Content */}
                      <div className="carousel-inner h-100 z-2">
                          {allSliders?.map((slide, index) => (
                              <div
                                  key={index}
                                  className={`carousel-item ${
                                      index === 0 ? "active" : ""
                                  } h-100 position-relative d-flex justify-content-center align-items-center`}
                                  data-bs-slide="fade"
                                  data-bs-interval={5000}
                              >
                                  <div className="overlay z-2"></div>
                                  <ImageComp
                                      src={slide.image}
                                      alt={slide.title}
                                  />
                                  <div className="carousel-caption d-flex justify-content-center align-items-center z-3">
                                      <div>
                                          <h1>{getTitle(slide)}</h1>
                                          <p>{getDesc(slide)}</p>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </section>


          {/* About Home Section */}
          <AboutUs
            location="about"
            aboutUs={aboutUs}
            getName={getName}
            getDesc={getDesc}
          />

          <hr className="my-0" />

          {/* Photo home Section */}
          <PhotoComp location="photos" images={manufacturingImages} />

          <GoldHead
            title={langs[lang].Titles.TypesofNaturalStones}
            location="https://www.almrsal.com/post/1082985"
          />

          {/* Video home Section */}
          <VideoComp location="videos" videos={manufacturingVideos} />

          <DakHead title={langs[lang].Titles.ExternalFacadeDesigns} />

          {/* Facade Design */}
          <FacadeDesign location="projects" facadeDesign={facadeDesign} />

          {/* Services */}
          <Service
            title={langs[lang].Titles.Services}
            services={services}
            getName={getName}
            getDesc={getDesc}
          />

          {/* Clients Section */}
          <Clients clients={clients} />

          <GoldHead title={langs[lang].Titles.Learnmoreaboutthefactory} />

          {/* Blog Home Section */}
          <BlogComp
            title={langs[lang].Titles.Blog}
            location="blog"
            blogs={latestBlogs}
            getName={getName}
            getDesc={getDesc}
          />

          {/* Contact Section */}
          <ContactForm />
        </main>
      )}
    </>
  );
};

export default Home;
