import React, { useContext, useEffect, useRef } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  const experienceRef = useRef(null);
// checking for html elements presence during mounting and dismounting of component
// can reuse this logic for styling via components mounting events
// Note: this is not using shared userAuth property to try increase performance, 
// still being tested and might be updated to ref user state from authProvider
  useEffect(() => {
    const workId = "workExperience";

    if (experienceRef.current && !document.getElementById(workId)) {
      experienceRef.current.style.border = "4px solid #7B97DA";

    } else if (experienceRef.current) {
      experienceRef.current.style.border = "none";
    }
  }, []);


  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience" ref={experienceRef}>
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}