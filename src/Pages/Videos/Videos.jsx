import React from "react";
import "./Videos.css";
import SectionBg from "../../Components/SectionBg/SectionBg";
import useLangContext from "../../Hooks/useLangContext";
import SiteHelmet from "../../Components/SiteHelemt/SiteHelmet";
import useQueryData from "../../Hooks/useQueryData";
import Display from "../../Components/Display/Display";
import LoadingComp from "../../Components/LoadingComp/LoadingComp";

const Videos = () => {
  const { lang, langs } = useLangContext();

  let { data, isLoading } = useQueryData(
    "https://tuwaiq.ezdhaar.com/api/vedio/showall",
    "GET",
    "Images"
  );

  const items = data?.data.videosandcovers;

  return (
    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <>
          <SiteHelmet title={langs[lang].Titles.videotitle} />
          <SectionBg />
          <Display items={items} hideImgIcon="hide-link" />
        </>
      )}
    </>
  );
};

export default Videos;
