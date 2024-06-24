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
  title: "Web Developer",
  subTitle: emoji(
    "Motivated and innovative Web Developer with hands-on experience in full-stack development. Proven ability to build and optimize web applications while contributing to small team efforts to ensure high-quality code and timely project delivery. Adept at collaborating with UX/UI teams to transform wireframes into responsive, user-friendly interfaces. Skilled in both front-end and back-end development, including API integration and microservices. Strong background in JavaScript, CSS, and HTML, committed to delivering high-quality, on-time, and on-budget solutions. Proudly served as a US Army Veteran, bringing discipline and dedication to all projects. "
  ),

  resumeLink:
    "https://docs.google.com/document/d/12rW4RfNL61vNucTpvlTsksucUAC1An4W7BaWEbew_7c/edit?usp=sharing", // Set to empty to hide the button


  displayGreeting: true, // Set false to hide this section, defaults to true
  displayResume: true // Set false to hide the resume link, defaults to true
};



// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HIGGO36",
  linkedin: "https://www.linkedin.com/in/j-d-h/",
  gmail: "higginsjohnd27@gmail.com",
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
      "🛠️ Front-End Development: JavaScript, jQuery, HTML5, CSS3, React, TypeScript, Next.js, Vue.js, Bootstrap, Tailwind CSS, MUI"
    ),
    emoji(
      "🤔 WordPress Development: Custom Theme & Plugin Development, Theme Customization (Child Themes), Proficiency with Popular Plugins (e.g., Elementor)"
    ),
    emoji(
      "💻 Back-End Development: PHP, Node.js (Express.js), MongoDB, PostgreSQL, MySQL, MariaDB, Heroku"
    ),
    emoji(
      "🌐 Web 3.0: Solidity, Smart Contracts"
    ),
    emoji(
      "📋 Project Management & Development Workflow: Agile, Scrum, Git, GitHub, Vercel, ServiceNow, Jira, Confluence"
    ),
    emoji(
      "🎨 UI Design & Web Accessibility: Figma, Sketch, Mobile-First Design, WCAG, ARIA"
    ),
    emoji(
      "🔗 Web Services & API: RESTful APIs, Custom API Endpoints"
    ),
    emoji(
      "⚡ SEO & Performance: On-Page SEO, Technical SEO, Google Analytics, Lighthouse, Performance Audits, Page Speed Optimization"
    ),
    emoji(
      "📊 Data Visualization: D3.js, Chart.js, Highcharts"
    )
  ]
};


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 const softwareSkills = [
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
  },
  {
    skillName: "jQuery",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Next.js",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Vue.js",
    fontAwesomeClassname: "fab fa-vuejs"
  },
  {
    skillName: "Bootstrap",
    fontAwesomeClassname: "fab fa-bootstrap"
  },
  {
    skillName: "Tailwind CSS",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "MUI",
    fontAwesomeClassname: "fas fa-palette"
  },
  {
    skillName: "PHP",
    fontAwesomeClassname: "fab fa-php"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "PostgreSQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "MariaDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Heroku",
    fontAwesomeClassname: "fab fa-heroku"
  },
  {
    skillName: "Solidity",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Figma",
    fontAwesomeClassname: "fab fa-figma"
  },
  {
    skillName: "Sketch",
    fontAwesomeClassname: "fab fa-sketch"
  },
  {
    skillName: "RESTful APIs",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Google Analytics",
    fontAwesomeClassname: "fab fa-google"
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
      duration: "January 2020 - May 2024 (completed after a break from 2022-2023)",
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
      Stack: "JavaScript", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SCSS", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React",
      progressPercentage: "70%"
    },
    {
      Stack: "jQuery",
      progressPercentage: "80%"
    },
    {
      Stack: "TypeScript",
      progressPercentage: "70%"
    },
    {
      Stack: "Next.js",
      progressPercentage: "65%"
    },
    {
      Stack: "Vue.js",
      progressPercentage: "60%"
    },
    {
      Stack: "Bootstrap",
      progressPercentage: "75%"
    },
    {
      Stack: "Tailwind CSS",
      progressPercentage: "70%"
    },
    {
      Stack: "MUI",
      progressPercentage: "65%"
    },
    {
      Stack: "PHP",
      progressPercentage: "70%"
    },
    {
      Stack: "Node.js (Express.js)",
      progressPercentage: "70%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "65%"
    },
    {
      Stack: "PostgreSQL",
      progressPercentage: "60%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "65%"
    },
    {
      Stack: "MariaDB",
      progressPercentage: "60%"
    },
    {
      Stack: "Heroku",
      progressPercentage: "65%"
    },
    {
      Stack: "Solidity",
      progressPercentage: "50%"
    },
    {
      Stack: "Figma",
      progressPercentage: "70%"
    },
    {
      Stack: "Sketch",
      progressPercentage: "65%"
    },
    {
      Stack: "RESTful APIs",
      progressPercentage: "75%"
    },
    {
      Stack: "Google Analytics",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

        {
      role: "Web Developer (Contract) | Remote",
      company: "Casino Finder",
      companylogo: require("./assets/images/remote-dev-1.jpg"),
      date: "August 2023 – March 2024",
      desc: "Customized the company's Mercury plugin components, developed new advertisement features with PHP, HTML, CSS, and JavaScript, optimized data display efficiency, and extensively used Elementor for WordPress development.",
      descBullets: [
        "Successfully customized the company's Mercury plugin components for online casino marketing client tickets.",
        "Developed new advertisement components using a combination of PHP, HTML, CSS, and JavaScript, enhancing user engagement.",
        "Optimized page load times and improved data display efficiency through code streamlining and database interaction enhancements.",
        "Utilized Elementor tools extensively for WordPress development."
      ]
    },
    
    {
      role: "Web Developer & Contributor | Remote",
      company: "NFT Elites, LLC.",
      companylogo: require("./assets/images/nftelite-tradables-logo-yellow.jpeg"),
      date: "April 2022 – July 2023",
      desc: "Developed a DAPP with intuitive UI for DeFi wallet, planned and designed a robust minting algorithm, utilized JavaScript for NFT technologies on Ethereum blockchain, and contributed to project planning and user engagement improvements.",
      descBullets: [
        "Worked on venture focused on non-fungible token technologies for Ethereum blockchain projects.",
        "Developed a decentralized application (DAPP) with a simple frontend that allowed for DeFi wallet connectivity, minting, trading and an embedded cloud-based CMS.",
        "Contributed to project planning and design, achieving measurable improvements in user engagement."
      ]
    },

     {
      role: " Web Developer (Contract) | Remote",
      company: "Birchwood Media",
      companylogo: require("./assets/images/remote-dev-1.jpg"),
      date: "July 2021 - March 2022",
      desc: "Enhanced PHP website UI with JavaScript, CSS, HTML, developed global web elements, designed responsive mobile layouts, implemented interactive web forms, and improved user journeys with an interactive navigation system.",
      descBullets: [
        "Enhanced PHP website UI with JavaScript, CSS, HTML, maintaining original framework.",
        "Developed global web elements, improving site navigation and layout.",
        "Designed responsive mobile layout, ensuring consistent user experience on all devices.",
        "Implemented interactive web forms, boosting user engagement and request handling."
        "Created an interactive navigation system, improving user journeys and engagement metrics."
      ]
    },
    
    {
      role: "User-Interface Developer",
      company: "Unisys Corporation",
      companylogo: require("./assets/images/Unisys-U-Logo.png"),
      date: "January 2019 - June 2021",
      desc: "Redesigned a universal design system for CBP applications, integrated advanced JavaScript for improved user engagement, optimized build times, enhanced browser support, improved accessibility compliance, and provided weekly guidance on JavaScript and Section 508 accessibility to small teams.",
      descBullets: [
        "Collaborated with Creative Services to redesign a universal design system for CBP applications.",
        "Enhanced UI by integrating advanced JavaScript, improving user engagement.",
        "Slashed build times by 50% through optimized script development.",
        "Solved Webpack integration issues, enhancing browser support."
        "Improved application accessibility, ensuring compliance with WCAG 2.1 standards."
        "Refined Webpack configuration, ensuring optimal performance and compatibility."
        "Implemented lazy-loading for images, decreasing page load times by 30%."
        "Team Leader: Provided weekly guidance and support to small teams on using JavaScript and meeting Section 508 accessibility requirements."
      ]
    },
   
    {
      role: "Application Systems Developer II & Certified DHS 508 Trusted Tester (TT)",
      company: "Cascades Technologies, Inc.",
      companylogo: require("./assets/images/CTI-logo.png"),
      date: "April 2017 - December 2018",
      desc: "Developed web components ensuring Section-508 compliance, built keyboard-accessible navigation for FDIC.gov, facilitated JavaScript development across teams, managed client ticket requests in Agile Scrum, coordinated UX integration of accessibility standards, and led efforts to guide teams on best practices for JavaScript usage and web accessibility.",
      descBullets: [
        "Designed and developed web components, ensuring Section-508 compliance, enhancing accessibility.",
        "Built fully keyboard-accessible navigation for the FDIC.gov site, improving user experience.",
        "Supported JavaScript development across teams, facilitating collaborative progress.",
        "Managed client ticket requests via ServiceNow in Agile Scrum, ensuring timely resolutions.",
        "Earned DHS 508 Trusted Tester certification, demonstrating web accessibility expertise.",
        "Coordinated with UX teams to integrate accessibility standards into new designs."
        "Led cross-functional teams to align web design with accessibility standards."
        "Conducted thorough code reviews to ensure robustness and adherence to best practices."
        "Team Leader: Led efforts to educate and guide teams on best practices for JavaScript usage and Section 508 web accessibility compliance."
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
        "I took online courses and the final Trusted Tester exam through the OAST program provided by the Department of Homeland Security.",
      image: require("./assets/images/OAST-TT-Logo.jpg"),
      imageAlt:
        "DHS Office of Accessible Systems & Technology | Section 508 Trusted Tester Certification",
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
    },

    {
      title:
        "Military Service",
      subtitle:
        "United States Army Veteran | Honorably Served Four Years",
      // image: require("./assets/images/OAST-TT-Logo.jpg"),
      // imageAlt:
      //   "DHS Office of Accessible Systems & Technology | Section 508 Trusted Tester Certification",
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
