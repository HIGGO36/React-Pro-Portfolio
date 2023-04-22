import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

  // Note: the data integrity and persistancy is maintained by having one single point in the context/authProvider.js

const Main = ({ user, token, handleSignIn }) => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const  [showContactInfo, setShowContactInfo] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(() => {
        setIsShowingSplashAnimation(false);
      }, splashScreen.duration);

      return () => {
        clearTimeout(splashTimer);
      };
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = token && user ? setShowWorkExperience(true) : () => {};
    return unsubscribe;
  }, [token, user]);


  useEffect(() => {
    const unsubscribe = token && user ? setShowContactInfo(true) : () => {};
    return unsubscribe;
  }, [token, user]);


  const scrollToSignIn = () => {
    const signInButton = document.getElementById("firebaseAuthUi");
    signInButton.scrollIntoView({ behavior: "smooth" });
  };

  const requestWorkExperience = () => {
    if (!user) {
      scrollToSignIn();
      handleSignIn();
    } else {
      const workExperienceSection = document.getElementById("experience");
      workExperienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const requestContactInfo = () => {
    if (!user) {
      scrollToSignIn();
      handleSignIn();
    } else {
      const contactInfoSection = document.getElementById("contact");
      contactInfoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
           <Header requestWorkExperience={requestWorkExperience} requestContactInfo={requestContactInfo} user={user} />
            <Greeting user={user} />
            <Skills />
            <StackProgress />
            <Education />
            {showWorkExperience && user ? (
              <WorkExperience user={user} />
            ) : (
              <div id="private-section">
              <button className="glowing-btn" onClick={requestWorkExperience}>
              <span className="glowing-txt">
              SIGN<span className="faulty-letter">IN</span>
              </span>
              </button>
              <h3>Private Content</h3>
              <p className="private-text">You can use the Sign-In option for New or Existing user.</p>

              </div>
              )}
              <Projects />
              <Achievement />

              {showContactInfo && user ? (
              <Profile user={user} />
            ) : (
              <div id="private-section">
              <button className="glowing-btn" onClick={requestContactInfo}>
              <span className="glowing-txt">
              SIGN<span className="faulty-letter">IN</span>
              </span>
              </button>
              <h3>Private Content</h3>
              <p className="private-text">You can use the Sign-In option for New or Existing user.</p>

              </div>
              )}

              <Footer />
              <ScrollToTopButton />
              </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;