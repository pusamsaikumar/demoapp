import React, { useRef } from "react";
import "./workexperience.css";
import { experienceData } from "../../../utlis/data";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Slider from "react-slick";
import slider from "react-slick/lib/slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const WorkExperience = () => {
  const sliderRef = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  return (
    <section className="experience-container">
      <h5>Work Experience</h5>
      <div className="experience-content">
        {/*  */}
        <div className="arrow-right" onClick={slideRight}>
          <FaChevronRight />
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <FaChevronLeft />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {experienceData?.length > 0 &&
            experienceData?.map((item, i) => (
              <ExperienceCard key={item} details={item} />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
