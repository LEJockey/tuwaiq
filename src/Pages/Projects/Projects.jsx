import React from "react";
import "./Projects.css";
import SectionBg from "../../Components/SectionBg/SectionBg";
import useLangContext from "../../Hooks/useLangContext";
import SiteHelmet from "../../Components/SiteHelemt/SiteHelmet";
import Display from "../../Components/Display/Display";
import useQueryData from "../../Hooks/useQueryData";
import LoadingComp from "../../Components/LoadingComp/LoadingComp";

const Projects = () => {
  const { lang, langs } = useLangContext();
  let { data, isLoading } = useQueryData(
    "https://tuwaiq.ezdhaar.com/api/facade/showall",
    "GET",
    "Projects"
  );

  const items = data?.data.facades;

  return (
    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <section>
          <SiteHelmet title={langs[lang].Titles.projecttitle} />
          <SectionBg title={langs[lang].Navbar.OURPROJECTS} />
          <Display items={items} hideVideoIcon="hide-link" />
        </section>
      )}
    </>
  );
};

export default Projects;
