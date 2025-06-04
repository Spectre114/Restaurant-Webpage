import React from "react";
import HeroBanner from "../../component/HeroBanner/HeroBanner.jsx";
import ServiceItem from "../../component/ServiceItem/ServiceItem.jsx";
import Menu from "../../component/Menu/Menu.jsx";
import AboutSection from "../../component/AboutSection/AboutSection.jsx";
import TeamSection from "../../component/TeamSection/TeamSection.jsx";
import TestimonialSection from "../../component/TestimonialSection/Testimonialsection.jsx";
export const Home = () => {
  return (
    <>
      <HeroBanner />
      <ServiceItem />
      <Menu />
      <AboutSection />
      <TeamSection />
      <TestimonialSection />
    </>
  );
};
