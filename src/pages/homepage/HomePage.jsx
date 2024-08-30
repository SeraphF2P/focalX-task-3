import React from "react";
import { BestDeal } from "./../../components/bestDeal/BestDeal";
import { Contactus } from "./../../components/contactUs/ContactUs";
import { Featured } from "./../../components/featured/Featured";
import { Hero } from "./../../components/hero/Hero";
import { PropertiesSection } from "./../../components/properteisSection/PropertiesSection";
import { VideoView } from "./../../components/videoView/VideoView";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <VideoView />
      <BestDeal />
      <PropertiesSection />
      <Contactus />
    </>
  );
};
