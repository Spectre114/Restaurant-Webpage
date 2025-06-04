import React from "react";
import HeroImage from "../../assets/images/hero.png";
import "animate.css";
import "./HeroBanner.scss";
import "animate.css/animate.min.css";

const HeroBanner = () => {
  return (
    <div className="hero-header my-container py-lg-5">
      <div className="mx-2 mx-lg-0 my-3 my-lg-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="animate__animated animate__slideInLeft display-5 display-lg-3 text-white">
              Enjoy Our <br /> Delicious Meal
            </h1>

            <p className="animate__animated animate__slideInLeft text-white w-85 mx-auto mx-lg-0 mb-4 pb-2">
              dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsu
              stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <a
              href="#booking Table"
              className="animate__animated animate__slideInLeft btn btn-primary py-2 py-lg-3 px-4 px-lg-5"
            >
              Book a table
            </a>
          </div>

          <div className="d-none d-lg-block col-lg-6 overflow-hidden">
            <img className="img-fluid" src={HeroImage} alt="dish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
