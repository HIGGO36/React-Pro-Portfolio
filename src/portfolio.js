/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: Infinity, // Set a high initial duration value
  maxDuration: 5000, // Set a maximum duration value (in milliseconds)
};


// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "John D. Higgins",
  title: "Front-End Developer",
  subTitle: emoji(
    "Creative, innovative, and reliable web developer proficient in HTML, CSS, and JavaScript. Excels in front-end responsive web development, user interface design, mobile testing, prototyping, and trouble-shooting within a team or individual setting. "
  ),

  resumeLink:
    "https://docs.google.com/document/d/12f1ErIoy-OFDym7pqYxdqqjHHGd7LVArcMwYckSgrhA/edit?usp=sharing", // Set to empty to hide the button


  displayGreeting: true, // Set false to hide this section, defaults to true
  displayResume: true // Set false to hide the resume link, defaults to true
};



// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HIGGO36",
  linkedin: "https://www.linkedin.com/in/j-d-h/",
  gmail: "prowebdev36@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Developer Skills",
  subTitle:
    "💡 Currently, I am focused on learning different React frameworks that are using Functional programming and Modular Design.",
  skills: [
    emoji(
      "🛠️ I have a wide range of abilities in planning, designing and building web applications, interactice components and other types of assets."
    ),

    emoji(
      "🤔 I focus on using a mobile-first approach while keeping an eye on accessiblity and performance to deliver top notch user experiences."
    ),
    emoji(
      "🥳 Most recent success would have to be setting up a functional User Authentication and User Profile creation options using Firebase Auth and a Firestore Realtime Database. "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "cPanel",
      fontAwesomeClassname: "fab fa-cpanel"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "codepen",
      fontAwesomeClassname: "fab fa-codepen"
    },
    {
      skillName: "terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "chrome",
      fontAwesomeClassname: "fab fa-chrome"
    },
    {
      skillName: "firefox",
      fontAwesomeClassname: "fab fa-firefox-browser"
    }
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Florida Institute of Technology",
      logo: require("./assets/images/FIT-seal-Logo.png"),
      subHeader: "Master of Science in Computer Information Systems",
      duration: "January 2020 - Dec 2023 (expected graduation time)",
      desc: "Completed 9 out of the 10 required program courses, with the capstone remaining.",
      descBullets: ["current GPA 3.2", "Courses Completed: "]
    },
    {
      schoolName: "Florida Institute of Technology",
      logo: require("./assets/images/FIT-seal-Logo.png"),
      subHeader: "Bachelor of Science in Computer Information Systems",
      duration: "Jan 2014 - Dec 2016",
      desc: "Attended the schools for computer programming, engineering and computer science while completing all the courses from this degree program.",
      descBullets: ["GPA 3.3", "Courses Completed: "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Responsive Mobile-First Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React Frameworks",
      progressPercentage: "75%"
    },
    {
      Stack: "Functional Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Modular Design",
      progressPercentage: "80%"
    },
    {
      Stack: "React Hooks",
      progressPercentage: "90%"
    },
    {
      Stack: "Bootstrap",
      progressPercentage: "90%"
    },
    {
      Stack: "Web Accessibility",
      progressPercentage: "90%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "95%"
    },
    {
      Stack: "Team Work",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Collaborator",
      company: "Entrepreneurial",
      companylogo: require("./assets/images/nftelite-tradables-logo-yellow.jpeg"),
      date: "May 2022 – January 2023",
      desc: "This venture focused on non-fungible token technologies for Ethereum blockchain, our team  began developing a decentralized application (DAPP) with a simple frontend that allowed for DeFi wallet connectivity and other key features. Additionally, we worked on the development of a smart contract, but due to unforeseen challenges, the project was not completed before the end of my tenure.",
      descBullets: [
        "Worked on venture focused on non-fungible token technologies for Ethereum blockchain projects.",
        "Developed business plans and managed project goals using Agile Scrum methodology.",
        "Hired and managed an international contracted employee to help with blockchain smart contracts.",
        "Learned valuable lessons on market volatility, project risk assessment, and contingency planning."
      ]
    },
    {
      role: "User-Interface Developer",
      company: "Unisys Corporation",
      companylogo: require("./assets/images/Unisys-U-Logo.png"),
      date: "Feb 2019 – Dec 2019",
      desc: "One of three primary developers in the creation and initial deployment for second version of their universal design system supporting multiple applications under the CBP umbrella.",
      descBullets: [
        "Played a key role in the development and deployment of a universal design system for multiple applications under the CBP umbrella.",
        "Utilized tools like GitHub, Npm, Yarn, Travis CI, Gatsby, Webpack4 to create a more efficient codebase, resulting in a 50% reduction in build times.",
        "Collaborated in an Agile Scrum team to develop user stories and ensure they met acceptance criteria."
      ]
    },
    {
      role: "Web Developer",
      company: "Birchwood Media",
      companylogo: require("./assets/images/remote-dev-1.jpg"),
      date: "Oct 2018 – June 2019",
      desc: "Modernized an older PHP website called 'Old-Friends.co's user interface using JavaScript, CSS and HTML, while being required to keep a very similar theme while also leaving the original framework in place.",
      descBullets: [
        "Modernized an older PHP website user interface, leading to improved engagement metrics by over 100%.",
        "Designed and developed a responsive mobile-friendly layout that adapts seamlessly to different screen sizes."
      ]
    },
    {
      role: "Application Systems Developer II & Certified DHS 508 Trusted Tester (TT)",
      company: "Cascades Technologies, Inc.",
      companylogo: require("./assets/images/CTI-logo.png"),
      date: "April 2017 – September 2018",
      desc: "Supported multiple web service teams front-end web development client requests for the FDIC.gov website.",
      descBullets: [
        "Supported multiple web service teams in front-end web development client requests for the FDIC.gov website.",
        "Led accessibility testing, development, and design for web and software applications in line with 508 Web standards.",
        "Redesigned multiple global web components to comply with 508 web accessibility requirements."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 📜"),
  subtitle: "for Web Development",

  achievementsCards: [
    {
      title:
        "Section 508 Trusted Tester Certification for Software and Web Applications",
      subtitle:
        "I took courses and final TT exam through the OAST program provided by the Department of Homeland Security.",
      image: require("./assets/images/OAST-TT-Logo.jpg"),
      imageAlt:
        "508 Trusted Tester Certification v3 for Web & Applications from the DHS",
      footerLink: [
        {
          name: "Certification",
          url: "https://docs.google.com/document/d/1WSSGtZ37w4eEKrfVQe8sTJAiDDYaYlxha9NIgHSV3Ws/edit?usp=sharingg"
        },
        {
          name: "Exam Results",
          url: "https://docs.google.com/document/d/1FX88Y-Pcjgb86qWw0DAsMEAQiSS4AucLw38uTw5s_A8/edit?usp=sharing"
        },
        {
          name: "Section 508",
          url: "https://www.dhs.gov/508-testing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "",
  email_address: "prowebdev36@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable
};