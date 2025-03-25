import React from "react";
import "./skills.css";
import { skillsData } from "../../../utlis/data";
import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
  return (
    <div className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {skillsData?.length > 0 &&
            skillsData.map((item, i) => {
              return (
                <SkillCard
                  key={item.title}
                  title={item.title}
                  iconUrl={item.icon}
                />
              );
            })}
        </div>
        <div className="skills-info">hellow</div>
      </div>
    </div>
  );
};

export default Skills;
