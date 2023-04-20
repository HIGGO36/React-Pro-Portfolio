import React, { useContext, useEffect, useRef } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences, skillsSection, openSource, achievementSection } from "../../portfolio";

function Header({ handleWorkExperienceClick }) {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  
  const expLinkRef = useRef(null);
// checking for html elements presence during mounting and dismounting of component
// can reuse this logic for styling via components mounting events
  useEffect(() => {
    const workId = "workExperience";

    if (expLinkRef.current && !document.getElementById(workId)) {
      expLinkRef.current.style.backgroundColor = "#7B97DA";
      expLinkRef.current.style.backgroundColor =  "800";
    } else if (expLinkRef.current) {
      expLinkRef.current.style.backgroundColor = "#171c28";
      expLinkRef.current.style.backgroundColor = "500";
    }
  }, []);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          <li>
            <a href="#education">Education</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience" onClick={handleWorkExperienceClick} ref={expLinkRef}>
                Work Experiences
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Certifications</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
