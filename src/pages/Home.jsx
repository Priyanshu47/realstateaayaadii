import React from "react";
import { DescriptionComponent } from "../components/DescriptionComponent";
import { DescriptionTitle } from "../components/DescriptionTitle";
import { DescriptionCard } from "../components/DescriptionCard";
import { HomeBanner } from "../components/HomeBanner";
import { AboutIntro } from "../components/AboutIntro";
import { Gallery } from "../components/Gallery";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aayaadi</title>
      </Helmet>
      <HomeBanner />
      {/* <DescriptionTitle /> */}
      <AboutIntro />
      <DescriptionCard />
      <Gallery />
      <DescriptionComponent />
    </>
  );
};
