/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Imaad",
  title: "Hello there, I'm Imaad",
  subTitle: emoji(
    "A published Machine Learning Engineer, and Full Stack Developer who's built machine learning data pipelines, intelligent web applications, computer vision systems and more using Next.js, Python, scikit-learn, PyTorch and other cool tools and technologies. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/13BOHzZ8kMU2TUllNVQYQQdwCdSJTFHdr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/imaadMMI",
  linkedin: "https://www.linkedin.com/in/muhammad-imaad",
  gmail: "muhammadimaad.work@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Technologies I have worked with:",
  skills: [
    emoji(
      "⚡ Develop highly interactive Frontend / User Interfaces for web, mobile, and responsive dashboard applications"
    ),
    emoji(
      "⚡ Train deep learning models for real-time computer vision, NLP, and deploy autonomous AI agents"
    ),
    emoji(
      "⚡ Design and build real-time interactive game mechanics and 3D graphic environments"
    ),
    emoji(
      "⚡ Integrate cloud ecosystems, relational databases, and automated data processing pipelines"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
    skillName: "pytorch",
    fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "matplotlib",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "ollama",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "nlp",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "opencv",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "nextjs", 
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "rest-api",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "powerbi",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {skillName: "blender", fontAwesomeClassname: "fas fa-cube"}
    ,{
      skillName: "unity",
      fontAwesomeClassname: "fas fa-cube"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Wollongong",
      logo: require("./assets/images/logo-shorthand-horizontal.png"),
      subHeader: "Master of Computer Science (Machine Learning and Big Data)",
      duration: "March 2026 - Present",
      desc: "Focusing on advanced algorithms, data architectures, and deploying intelligence at scale.",
      descBullets: [
        "Studying core areas including machine learning algorithms, big data analytics, and computer vision systems.",
        "Engaging in independent learning strategies and industry trends to keep abreast of innovations in computer science.",
        "Applying foundational methodologies and advanced technical theory to an upcoming individual capstone project."
      ]
    },
    {
      schoolName: "Heriot-Watt University",
      logo: require("./assets/images/HW-logo.jpeg"),
      subHeader: "BSc (Hons) Computer Science (Artificial Intelligence)",
      duration: "September 2021 - July 2025",
      desc: "Graduated with First Class Honours and recognized multiple times for outstanding academic achievement.",
      descBullets: [
        "Received the Deputy Principal's Award for Academic Excellence three separate times.",
        "Achieved high performance across core curriculum including Data Mining and Machine Learning, 3D Graphics and Animation, Intelligent Robotics, and Data Visualisation.",
        "Authored and published research on a real-time smartphone-based computer vision system at the AAAI Conference 2025."
      ]
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML Theory", // High proficiency based on 1st Class Honours and academic excellence awards
      progressPercentage: "90%" 
    },
    {
      Stack: "Full Stack & UI Design", // Proven experience rebuilding dashboards from scratch and managing architectures
      progressPercentage: "80%" 
    },
    {
      Stack: "Data Analytics & ML Frameworks", // Applied scikit-learn, PyTorch, ETL pipelines, and PowerBI dashboards
      progressPercentage: "80%" 
    },
    {
      Stack: "Game Design & 3D Graphics", // Hands-on work with Unity, Unreal Engine, Godot, and Blender
      progressPercentage: "65%" 
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Coding Samurai",
      companylogo: require("./assets/images/codingSamurai.jpg"), // Ensure you add this logo asset or use a default
      date: "Jan 2026 – Feb 2026",
      desc: "Implemented end-to-end predictive modeling and natural language processing pipelines using Python-based workflows.",
      descBullets: [
        "Developed a Customer Churn Prediction model utilizing behavioral and demographic data to identify at-risk users through advanced feature engineering and model tuning.",
        "Built a Sentiment Analysis pipeline for tweets involving extensive data cleaning, preprocessing, and feature extraction to classify emotional intent and social signals.",
        "Leveraged data visualization libraries and frameworks like scikit-learn and Keras to execute robust performance evaluations."
      ]
    },
    {
      role: "Full Stack Developer and Data Engineer",
      company: "Sentiment AI",
      companylogo: require("./assets/images/sentiment_ai_logo.jpg"), // Ensure you add this logo asset or use a default
      date: "Aug 2025 – Oct 2025",
      desc: "Delivered core technical infrastructure spanning user interface design, data engineering, and internal testing platforms under tight production deadlines.",
      descBullets: [
        "Rebuilt a client dashboard from scratch in one week, taking full ownership of UI design, frontend development, and backend data integration to facilitate immediate business reporting.",
        "Engineered automated ETL pipelines to process raw, unstructured CSV logs into actionable behavioral insights for client-facing applications.",
        "Developed robust backend APIs for ontology databases and internal orchestrations used in AI voice agent evaluation."
      ]
    },
    {
      role: "Marketing Lead",
      company: "Google Developer Students Club",
      companylogo: require("./assets/images/gdsc.png"), // Ensure you add this logo asset or use a default
      date: "Sep 2023 – Aug 2024",
      desc: "Spearheaded growth marketing strategies and coordinated cross-functional content production teams for community outreach.",
      descBullets: [
        "Led a data-driven social media strategy that boosted page interaction by 457% and increased total impressions by 215% through optimized content distribution.",
        "Managed large-scale event workflows including DevFest 23, successfully scaling community engagement to reach over 4,500 new unique accounts.",
        "Analyzed granular community interaction metrics to optimize speaker session visibility and target messaging profiles."
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

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// Achievements Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Hackathons, Award Letters and Some Cool Game Dev Stuff that I have done !",

  achievementsCards: [
    {
      title: "AAAI Scientific Publication",
      subtitle:
        "First-author and published research at the AAAI scientific conference (2025) on a deployable, real-time smartphone hybrid computer vision system for visually impaired crosswalk navigation, optimized via TFLite.",
      image: require("./assets/images/aaai.jpg"),
      imageAlt: "AAAI Conference Logo",
      footerLink: [
        {
          name: "View Published Paper",
          url: "https://doi.org/10.1609/aaaiss.v6i1.36057"
        }
      ]
    },
    {
      title: "Deputy Principal's Award for Academic Excellence",
      subtitle:
        "Received the prestigious award 3 separate times during my Bachelor of Science in Computer Science (Artificial Intelligence) for maintaining an exceptional academic record.",
      image: require("./assets/images/HW-logo.jpeg"), // Ensure you add this asset or use a default university logo
      imageAlt: "Heriot-Watt Academic Excellence Logo",
      footerLink: [
        {
          name: "Award 2025",
          url: "https://www.linkedin.com/in/muhammad-imaad/overlay/Certifications/1449688249/treasury/?profileId=ACoAAEEazb0BqOdCg1HGPpt43IRXPUCXRqzX49U"
        },
        {
          name: "Award 2023",
          url: "https://www.linkedin.com/in/muhammad-imaad/overlay/Certifications/1449822371/treasury/?profileId=ACoAAEEazb0BqOdCg1HGPpt43IRXPUCXRqzX49U"
        },
        {
          name: "Award 2022",
          url: "https://www.linkedin.com/in/muhammad-imaad/overlay/Certifications/1449938675/treasury/?profileId=ACoAAEEazb0BqOdCg1HGPpt43IRXPUCXRqzX49U"
        }
      ]
    },
    {
      title: "NASA Space Apps Challenge Global Honourable Mention",
      subtitle:
        "Garnered an Honourable Mention at the Global Level of the NASA hackathon with team Titan's Frontier, contributing to the game scripting in GDScript, custom visual styling, and trailer production.",
      image: require("./assets/images/nasa.png"),
      imageAlt: "NASA Space Apps Logo",
      footerLink: [
        {
          name: "Hackathon Project",
          url: "https://nasa-titanvoyagers.netlify.app/" // Add your project link if available
        }
      ]
    },
    {
      title: "3D Game & Experience Creator",
      subtitle:
        "Shipped physics-based and turn-based 3D multiplayer games 'Rizzy Runner' and 'Alen: Lost and Hunted' using Unity, Mixamo, and C#, integrating path-planning AI NPCs and hosting deployments on Itch.io.",
      image: require("./assets/images/unity.png"),
      imageAlt: "Unity Game Engine Logo",
      footerLink: [
        {
          name: "Alen: Lost and Hunted",
          url: "https://areejahmed2149.itch.io/alen-lost-and-hunted-playtesting" // You can substitute with your specific user link
        },
        {
          name: "Rizzy Runner",
          url: "https://github.com/imaadMMI/Rizzy-Runner" // You can substitute with your specific user link
        }
      ]
    },
    {
      title: "Deriv AI Talent Sprint & AI Genesis",
      subtitle:
        "Built autonomous AI-powered HR systems and multi-stage agentic procurement workflows (ProcurePilot) using Google ADK and Opus during intense 48-hour sprint hackathons with lablab.ai.",
      image: require("./assets/images/lablab.jpeg"),
      imageAlt: "LabLab AI Logo",
      footerLink: [
        {
          name: "View Deriv Hackathon Project",
          url: "https://github.com/imaadMMI/Deriv-Talent-Sprint"
        },
        {
          name: "View AI Genesis Hackathon Project",
          url: "https://github.com/imaadMMI/AI-GENESIS-2025-TEAM-CHICKEN-NUGGETS"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
