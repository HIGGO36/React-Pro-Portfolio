import React, { useContext, useEffect, useRef } from "react";
import Headroom from "react-headroom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences, skillsSection, openSource, achievementSection } from "../../portfolio";
import "./Header.scss";

function Header({ requestWorkExperience, user }) {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;


  // declares a reference to a DOM element using the useRef hook,
  const expLinkRef = useRef(null);
  // and then uses the useEffect hook to update the background color and text boldness of that element based on the shared user state.
  // Note: the data integrity and persistancy is maintained by having one single point in the context/authProvider.js
  useEffect(() => {
    const workId = "workExperience";
    
    if (expLinkRef.current && !document.getElementById(workId) && !user) {
      expLinkRef.current.style.backgroundColor = "#7B97DA";
      expLinkRef.current.style.backgroundColor = "800";
    } else if (expLinkRef.current && user) {
      expLinkRef.current.style.backgroundColor = "#171c28";
      expLinkRef.current.style.backgroundColor = "500";
    }
  }, [user]);
  

  const handleExperienceClick = (event) => {
    requestWorkExperience();
    event.preventDefault();
  };
  
  return (
    <Headroom>
      <header id="headerComp" className={isDark ? "dark-menu header" : "header"}>
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
              <a href="#experience" onClick={handleExperienceClick} ref={expLinkRef}>
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
