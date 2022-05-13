import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


const projectsPages = [
  {
    buttonName: "Type-Two",
    path: "/projects/type-two",
  },
];

function Projects() {
  return (
    <div>
      {projectsPages.map((project) => (
        <Button
          key={project.buttonName}
          to={project.path}
          component={Link}
          //href={project.path}
        >
          {project.buttonName}
        </Button>
      ))}
    </div>
  );
}

export default Projects;
