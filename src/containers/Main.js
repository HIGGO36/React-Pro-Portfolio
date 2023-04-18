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
import './Main.scss';

const Main = ({ user, token, onWorkExperienceClick }) => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(false);

  useEffect(() => {
    const unsubscribe = token && user ? setShowWorkExperience(true) : () => {};
    return unsubscribe;
  }, [token, user]);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const handleWorkExperienceClick = () => {
    if (token && user) {
      setShowWorkExperience(true);
    } else {
      onWorkExperienceClick();
    }
  };

  const onSignInSuccess = () => {
    setShowWorkExperience(true);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header user={user} handleWorkExperienceClick={handleWorkExperienceClick} />
            <Greeting user={user} />
            <Skills user={user} />
            <StackProgress user={user} />
            <Education user={user} />
            {showWorkExperience && user ? (
              <WorkExperience user={user} onSignInSuccess={onSignInSuccess} />
            ) : (
              <div className="user-notice">Please sign in to see work experience.</div>
            )}
            <Projects user={user} />
            <Achievement user={user} />
            <Profile user={user} />
            <Footer user={user} />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
