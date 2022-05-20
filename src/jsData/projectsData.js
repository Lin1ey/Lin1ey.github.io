import React from "react";

import TowerOfHanoiCoverImage from "../pages/projects/Tower-of-Hanoi/images/Tower_of_Hanoi_img.PNG";
import CourseWikiCoverImage from "../pages/projects/CourseWiki/images/coursewikilogonew.svg";
import GISCoverImage from "../pages/projects/GIS/images/Henrico_County_GIS.jpg";
import SSNPCoverImage from "../pages/projects/Sanitizing-Social-Network-Postings/images/high-level-language-overview.PNG";
import TypeTwoCoverImage from "../pages/projects/Type-Two/images/Title_Screen.PNG";

import typetwoScreenshots from "./typetwoScreenshots";
import GISScreenshots from "./GISScreenshots";
import SSNPScreenshots from "./SSNPScreenshots";


const projectsData = [
  {
    projectName: "Type-Two",
    projectImage: TypeTwoCoverImage,
    projectDesc: [
      'A minigame collection game created by a group of 5 for the VTGP Club GameJam for Spring 2019. Based and inspired by the game "Wario Ware".',
    ],
    hasDemo: true,
    demoLink: "https://www.youtube.com/watch?v=VD5slyS43pI",
    hasLive: false,
    liveLink: "https://google.com",
    hasCode: true,
    codeLink: "https://github.com/Lin1ey/Type-Two",
    hasScreenShots: true,
    columnSize: 6,
    screenShotLinks: typetwoScreenshots,
  },
  {
    projectName: "Tower of Hanoi",
    projectImage: TowerOfHanoiCoverImage,
    projectDesc: [
      "The Tower of Hanoi puzzle visualized. A project for CS2114: Software Design & Data Structures",
      "Due to honor code I am unable to show the code publically. If you wish to see it, please reach out to my email brnguyen2017@gmail.com",
    ],
    hasDemo: true,
    demoLink:
      "https://www.youtube.com/watch?v=NraPT-YHyO8&list=PL7rRfcJDHzQUTWvZVdGFr_HK9T5QC66Vt",
    hasLive: false,
    liveLink: "https://google.com",
    hasCode: false,
    codeLink: "https://github.com/Lin1ey/Tower-of-Hanoi",
    hasScreenShots: false,
    columnSize: 6,
    screenShotLinks: typetwoScreenshots,
  },
  {
    projectName: "CourseWiki",
    projectImage: CourseWikiCoverImage,
    projectDesc: [
      "A web application for Virginia Tech students that acts as an organizational and social tool for students and professors.",
    ],
    projectLink: "/projects/type-trhe",
    hasDemo: true,
    demoLink:
      "https://www.youtube.com/playlist?list=PL7rRfcJDHzQUdjniKR3nRdy3l8wkObn4F",
    hasLive: false,
    liveLink: "https://google.com",
    hasCode: false,
    codeLink: "https://github.com/nickyhuynh1/CourseProject",
    hasScreenShots: false,
    columnSize: 6,
    screenShotLinks: typetwoScreenshots,
  },
  {
    projectName: "Geographic Coordinate System (GIS)",
    projectImage: GISCoverImage,
    projectDesc: [
      "A geographic information system that organizes information pertaining to geographic features and provide various kinds of access to the information. A project for Data Structures and Algorithms class in Spring 2021.",
      "Due to honor code I am unable to show the code publically. If you wish to see it, please reach out to my email brnguyen2017@gmail.com",
    ],
    projectLink: "/projects/type-adsf",
    hasDemo: false,
    demoLink: "https://www.youtube.com/watch?v=VD5slyS43pI",
    hasLive: false,
    liveLink: "https://google.com",
    hasCode: false,
    codeLink: "https://github.com/Lin1ey/GIS",
    hasScreenShots: true,
    columnSize: 6,
    screenShotLinks: GISScreenshots,
  },
  {
    projectName: "Sanitizing Social Network Postings (SSNP)",
    projectImage: SSNPCoverImage,
    projectDesc: [
      "A program that returns \"questionable posts\" of a candidate's social network. Given a candidate and interviewer, following the social network's visibility rules, it will return a list of the candidate's posts that are questionable. A project for Comparative Language class in Fall 2021.",
      "Due to honor code I am unable to show the code publically. If you wish to see it, please reach out to my email brnguyen2017@gmail.com",
    ],
    projectLink: "/projects/type-adsf",
    hasDemo: false,
    demoLink: "https://www.youtube.com/watch?v=VD5slyS43pI",
    hasLive: false,
    liveLink: "https://google.com",
    hasCode: false,
    codeLink: "https://github.com/Lin1ey/Sanitizing-Social-Network-Postings",
    hasScreenShots: true,
    columnSize: 12,
    screenShotLinks: SSNPScreenshots,
  },
];

export default projectsData;
