import React from "react";
import { TeamCard } from "./TeamCard";
import teamImage1 from "../../assets/images/team-1.jpg";
import teamImage2 from "../../assets/images/team-2.jpg";
import teamImage3 from "../../assets/images/team-3.jpg";
import teamImage4 from "../../assets/images/team-4.jpg";
import "./TeamSection.scss";

const TeamSection = () => {
  const response = {
    data: [
      {
        image: teamImage1,
        name: "Full Name",
        designation: "Designation",
        social: [{ link: "#" }, { link: "#" }, { link: "#" }],
      },
      {
        image: teamImage2,
        name: "Full Name",
        designation: "Designation",
        social: [{ link: "#" }, { link: "#" }, { link: "#" }],
      },
      {
        image: teamImage3,
        name: "Full Name",
        designation: "Designation",
        social: [{ link: "#" }, { link: "#" }, { link: "#" }],
      },
      {
        image: teamImage4,
        name: "Full Name",
        designation: "Designation",
        social: [{ link: "#" }, { link: "#" }, { link: "#" }],
      },
    ],
  };
  return (
    <div className="my-container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
          Team Member
        </h5>
        <h1 className="mb-4 mb-md-5">Our master Chefs</h1>
      </div>
      <div className="row g-2 g-md-4">
        {response.data.map((item, index) => (
          <TeamCard
            key={index}
            image={item.image}
            name={item.name}
            designation={item.designation}
            social={item.social}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
