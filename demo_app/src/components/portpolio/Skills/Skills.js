import React, { useState } from "react";
import "./skills.css";
import { skillsData } from "../../../utlis/data";
import SkillCard from "../SkillCard/SkillCard";
import SkillsInfoCard from "../Skillinfocard/SkillsInfoCard";

const Skills = () => {
  const [selectSkill, setSelectSkill] = useState(skillsData[0]);
  const handleSelectSkill = (item) => {
    setSelectSkill(item);
  };
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
                  isActive={selectSkill.title === item.title}
                  onClick={() => {
                    handleSelectSkill(item);
                  }}
                />
              );
            })}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectSkill.title}
            skills={selectSkill.skills}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
