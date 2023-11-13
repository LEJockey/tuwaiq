import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import SectionBg from "./../../Components/SectionBg/SectionBg";
import AboutUs from "./../../Components/AboutUs/AboutUs";
import GoldHead from "../../Components/GoldHead/GoldHead";
import ImageComp from "../../Components/ImageComp/ImageComp";
import { ourTeam, whyUs } from "../../data";
import useLangContext from "../../Hooks/useLangContext";
import SiteHelmet from "../../Components/SiteHelemt/SiteHelmet";
import useQueryData from "../../Hooks/useQueryData";
import LoadingComp from "../../Components/LoadingComp/LoadingComp";

const About = () => {
  let { data, getTitle, getDesc, isLoading } = useQueryData(
    "https://tuwaiq.ezdhaar.com/api/home/aboutus",
    "GET",
    "AboutUS"
  );

  const { lang, langs } = useLangContext();

  const aboutUs = data?.data.about;
  const whyUs = data?.data.allwhy;
  const allTeam = data?.data.allteam;

  return (
    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <>
          <SiteHelmet title={langs[lang].Titles.abouttitle} />
          <SectionBg title={langs[lang].AboutUS.aboutTitle} />

          <AboutUs className="hide-link" aboutUs={aboutUs} />

          {/* Why Us  */}
          <section className="py-5 why-us">
            <div className="container">
              <div className="row">
                {/* Why Us Title */}
                <h1 className="text-center">
                  {" "}
                  <span className="custom-head">
                    {langs[lang].AboutUS.WhyUS}
                  </span>{" "}
                </h1>

                {/* Why Us Description */}
                <p className="text-center main-desc mt-3">
                  {" "}
                  {langs[lang].AboutUS.desc}{" "}
                </p>
              </div>

              <div className="row mt-5 gy-4">
                {whyUs?.map((why, idx) => (
                  <div className="col-lg-3 col-md-6" key={idx}>
                    <div className="whyus-card Border shadowing rounded h-100 text-center p-3">
                      {/* Image */}
                      <ImageComp src={why.image} alt="" />

                      {/* Title */}
                      <h2 className="py-2 m-0 text-white">{getTitle(why)}</h2>

                      {/* Desc */}
                      <p>{getDesc(why)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="py-5 our-team">
            <div className="container">
              <div className="row">
                <h1 className="text-center">
                  {" "}
                  <span className="custom-head">
                    {langs[lang].AboutUS.team}
                  </span>{" "}
                </h1>

                <div className="row mt-5 gy-4">
                  {allTeam?.map((team, idx) => (
                    <div className="col-md-4 " key={idx}>
                      <div className="team-card Border shadowing rounded text-center p-3">
                        {/* Image */}
                        <ImageComp src={team.image} alt={getTitle(team)} />
                        {/* Name */}
                        <h2 className="py-2 mt-2 m-0 second-color">
                          {getTitle(team)}
                        </h2>
                        {/* Title */}
                        <h4 className="gold-color m-0">{getDesc(team)}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default About;
