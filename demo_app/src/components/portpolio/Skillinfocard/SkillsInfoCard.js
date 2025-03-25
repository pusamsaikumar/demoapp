import React from "react";
import "./skillsinfocard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skillsInfoCard">
      <h6>{heading}</h6>
      {/* <p className="heading"></p> */}
      <div className="skillsInfoContent">
        {skills?.length > 0 &&
          skills?.map((item, index) => {
            return (
              <React.Fragment key={`skill_${index}`}>
                <div className="skill-info">
                  <p>{item.skill}</p>
                  <p className="percentage">{item.percentage}</p>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress"
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
