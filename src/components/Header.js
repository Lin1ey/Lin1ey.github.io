import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import color, { colorPalette } from "../jsData/colors";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import BuildIcon from "@mui/icons-material/Build";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Zoom, useScrollTrigger } from "@mui/material";

const pages = [
  {
    buttonName: "Contact",
    buttonIcon: <EmailIcon />,
    path: "/#contact-me",
  },
  // {
  //   buttonName: "Education",
  //   buttonIcon: <SchoolIcon />,
  //   path: "/#education",
  // },
  // {
  //   buttonName: "Skills",
  //   buttonIcon: <BuildIcon />,
  //   path: "/#skills",
  // },
  {
    buttonName: "Projects",
    buttonIcon: <FolderCopyIcon />,
    path: "/#projects",
  },
];

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexDirection: "row-reverse",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="absolute"
      style={{
        minHeight: "70px",
        backgroundColor: colorPalette.dark,
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar className={classes.toolbar}>
        {pages.map((page) => (
          <Button
            key={page.buttonName}
            sx={{ color: colorPalette.darkContrastText, fontSize: "1em" }}
            //to={page.path}
            //component={Link}
            startIcon={page.buttonIcon}
            href={page.path}
          >
            {page.buttonName}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
