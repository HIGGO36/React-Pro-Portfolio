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
  protonmail: "mailto:jwebdev99@protonmail.com",
  // gmail: "saadpasta70@gmail.com",
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
    "- My past professional work has been primarly as a Front End developer, with some of my core abilities listed below.",
  skills: [
    emoji(
      "🌞 I have a wide range of abilities with designing and developing web sites, interactice components and other types of assets."
    ),

    emoji(
      "🌞 I focus on using a mobile-first approach while keeping an eye on accessiblity and performance to deliver top notch user experiences."
    ),
    emoji(
      "🌞 Currently learning more about Progressive Web Applications ( PWA ). Web Services and the Integration of third party services such as AWS."
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
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
    },
    {
      skillName: "codepen",
      fontAwesomeClassname: "fab fa-codepen"
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
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Responsive Web Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Interactive User Experiences",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "75%"
    },
    {
      Stack: "Web Accessibility",
      progressPercentage: "90%"
    },
    {
      Stack: "Team Work & Problem Solving",
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
      role: "Co-Founder & Managing Member",
      company: "Nftradables, LLC.",
      companylogo: require("./assets/images/nftelite-tradables-logo-yellow.jpeg"),
      date: "May 2022 – January 2023",
      desc: "Co-Founded a small organization focused on web 3.0 non-fungible token technologies for usage in launching a new project on the Ethereum blockchain.",
      descBullets: [
        "Gained advanced web 3.0 technical and overall ecosystems knowledge",
        "Created a business plan, short-term project goals that we managed using agile scrum methodology.",
        "Hired an international contracted employee to help with blockchain smart contracts.",
        "Worked with our team to plan, design and develop a beta version of our nft marketplace project."
      ]
    },
    {
      role: "User-Interface Developer",
      company: "Unisys Corporation",
      companylogo: require("./assets/images/Unisys-U-Logo.png"),
      date: "Feb 2019 – Dec 2019",
      desc: "One of three primary developers in the creation and initial deployment for second version of their universal design system supporting multiple applications under the CBP umbrella.",
      descBullets: [
        "Primarily used tools like: Github, Npm, Yarn, Travis CI, Gatsby, Webpack4",
        "Set up an intermediate-level Webpack environment for a medium-scale web application writing mostly in JSON.",
        "Configured custom loaders for handling CSS and image assets.",
        "Overcame challenges with integrating Webpack into the project’s testing framework, asynchronous loading and compatibility issues with multiple web browsers.",
        "Wrote “Build Scripts” in some of their package.json files used in the CBP Theme application that help with automating tasks like compiling source code, bundling files, and optimizing assets for deployment.",
        "Resulted in about a 50% reduction in build times and a more efficient overall codebase."
      ]
    },
    {
      role: "Web Developer",
      company: "Birchwood Media",
      companylogo: require("./assets/images/remote-dev-1.jpg"),
      date: "Oct 2018 – June 2019",
      desc: "Modernized an older PHP website called 'Old-Friends.co's user interface using JavaScript, CSS and HTML, while being required to keep a very similar theme while also leaving the original framework in place.",
      descBullets: [
        "Overhauled the website’s user interface by creating from scratch new global web elements such as navigation, layout, and interactive web forms.",
        "Built a new and intuitive navigation system that streamlined user journeys and improved engagement metrics by over 100%.",
        "Designed and developed a responsive mobile friendly layout that adapts seamlessly to different screen sizes, ensuring a consistent user experience across all devices.",
        "Implemented interactive web forms to enhance user engagement, enabling visitors to easily submit inquiries, feedback, open and close account requests, and other types of requests through the website."
      ]
    },
    {
      role: "Application Systems Developer II & Certified DHS 508 Trusted Tester (TT)",
      company: "Cascades Technologies, Inc.",
      companylogo: require("./assets/images/CTI-logo.png"),
      date: "April 2017 – September 2018",
      desc: "Supported multiple web service teams front-end web development client requests for the FDIC.gov website.",
      descBullets: [
        "Designed, developed, rapidly prototyped, tested and deployed for production a new global user-interface web elements for site navigation.",
        "Solved a high priority U.S. Government 508 Web Accessibility site minimum testing score requirement across more than 20,000 pages by primarly leveraging Javascript and jQuery.",
        "Was first employee in history of this company to successfully earn the '508 Trusted Tester Certification for Software and Web Applications'.",
        "Worked with our team to plan, design and develop a beta version of our nft marketplace project."
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "jwebdev99@protonmail.com"
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