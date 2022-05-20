import { Fab, Box, useScrollTrigger, Zoom } from "@mui/material";
import React from "react";
import Introduction from "./Introduction";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import aboutMeIntroductionData from "../../jsData/aboutMeData";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import ContactMe from "../contact-me/ContactMe";
import Education from "../education/Education";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function Home(props) {
  return (
    <div>
      <div id="back-to-top-anchor">
        <Introduction aboutMe={aboutMeIntroductionData} />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div>

      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default Home;
