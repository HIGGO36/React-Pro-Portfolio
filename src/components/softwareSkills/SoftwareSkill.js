import React, { useContext } from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);
  
  return (
    <div>
      <div className={`software-skills-main-div ${isDark ? 'dark-mode' : ''}`}>
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={`${skills.fontAwesomeClassname} ${isDark ? 'dark-mode' : ''}`}></i>
                <p className={`${isDark ? 'dark-mode' : ''}`}>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
