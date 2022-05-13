import { Container, Divider, Grid } from "@mui/material";
import React from "react";
import Introduction from "./Introduction";
import ProjectSlides from "./ProjectSlides";

import aboutMeIntroductionData from "../../jsData/aboutMeData";
import typeTwoIntroData from "../../jsData/typetwoData";
import gisIntroData from "../../jsData/gisData";

function Home() {
  const projectsData = [typeTwoIntroData, gisIntroData];

  return (
    <Container maxWidth="lg">
      <br></br>
      <Introduction aboutMe={aboutMeIntroductionData} />
      <br></br>
      <Divider />
      <br></br>
      <ProjectSlides projects={projectsData} />
      <br></br>
    </Container>
  );
}

export default Home;
