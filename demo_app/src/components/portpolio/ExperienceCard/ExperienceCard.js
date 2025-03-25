import React from "react";
import "./experiencecard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="workExperienceCard">
      <h6>{details.title}</h6>
      <div className="workDuration">{details.date}</div>
      <ul>
        {details?.responsibilities?.map((item, i) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
