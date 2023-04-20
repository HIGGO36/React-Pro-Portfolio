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

const Main = ({ user, token, myFirebase }) => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  // Handles User Auth via myFirebase shared object on the Work Experience Header list element
  // can use this similar logic on other elements while maintaining data integrity
  const handleWorkExperienceClick = () => {
    if (token) {
      setShowWorkExperience(true);

    } else {
      myFirebase.auth().signInWithPopup(new myFirebase.auth.GoogleAuthProvider())
        .then(() => {
          setShowWorkExperience(true);
        })
        .catch(() => {
          myFirebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
              setShowWorkExperience(true);
            })
            .catch((error) => {
              console.error(error);
            });
        });
    }
  };
  
  const onSignInSuccess = () => {
    setShowWorkExperience(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header user={user} handleWorkExperienceClick={handleWorkExperienceClick} />
            <Greeting user={user} />
            <Skills />
            <StackProgress />
            <Education />
            {showWorkExperience && user ? (
              <WorkExperience user={user} onSignInSuccess={onSignInSuccess} />
            ) : (
              <div id="private-section">
                <h3>Private Content</h3>
                <p className="private-text">Only need your email address and password.</p>
                <input type="email" placeholder="Email" onChange={handleEmailChange} />
                <input type="password" placeholder="Password" onChange={handlePasswordChange} />
                <button onClick={handleWorkExperienceClick}>Sign In</button>
              </div>
            )}
            <Projects />
            <Achievement />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
