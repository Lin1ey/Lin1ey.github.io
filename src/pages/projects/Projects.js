import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  createTheme,
  Dialog,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import projectsData from "../../jsData/projectsData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IosShareIcon from "@mui/icons-material/IosShare";
import GitHubIcon from "@mui/icons-material/GitHub";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import { makeStyles } from "@mui/styles";
import color, {
  colorPalette,
  buttonStyleBlack,
  buttonStyleBlue,
} from "../../jsData/colors";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles({
  button: {
    "&.MuiButton-root": {
      border: "2px black solid",
      color: "black",
      background: "#FFFFFF",
    },
    "&:hover": {
      borderColor: "black",
      color: "white",
      bgColor: "#000000",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "red",
    },
  },

  projImg: {
    border: "2px solid gray",
    borderRadius: "2%",
  },
});

const buttonStyle = {
  maxWidth: "150px",
  maxHeight: "50px",
  minWidth: "150px",
  minHeight: "50px",
  marginRight: 10,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ScreenShotButton(props) {
  const [open, setOpen] = React.useState(false);
  const screenshotArray = props.screenshots;
  const columnSize = props.columnSize;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<CameraEnhanceIcon />}
        style={buttonStyle}
        sx={buttonStyleBlue}
        size="large"
        onClick={handleClickOpen}
      >
        Images
      </Button>
      <Dialog
        // maxWidth="xl"
        // fullWidth
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative", backgroundColor: colorPalette.dark }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Screenshots
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={5} columnSpacing={5}>
          {screenshotArray.map((screenshot, index) => (
            <Grid item key={index} md={columnSize} xs={columnSize} >
              <Box p={3} sx={{ boxShadow: 5, bgcolor: colorPalette.main }}>
                <Typography align="center" variant="h4">
                  {screenshot.title}
                </Typography>
                <img width="100%" height="500px" src={screenshot.image} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Dialog>
    </div>
  );
}

function ProjectButton(props) {
  return (
    <Button
      variant="outlined"
      startIcon={props.icon}
      target="_blank"
      href={props.link}
      style={buttonStyle}
      sx={buttonStyleBlue}
      size="large"
    >
      {props.label}
    </Button>
  );
}

function ProjectCard(props) {
  const project = props.project;
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container spacing={5}>
      <Grid item xs={5}>
        <img
          src={project.projectImage}
          width="100%"
          height="400px"
          className={classes.projImg}
        />
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h4">{project.projectName}</Typography>
        <br />
        {project.projectDesc.map((paragraph, index) => (
          <div key={index}>
            <Typography variant="h6">{paragraph}</Typography>
            <br></br>
          </div>
        ))}
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {project.hasScreenShots && (
            <ScreenShotButton screenshots={project.screenShotLinks} columnSize={project.columnSize}/>
          )}
          {project.hasDemo && (
            <ProjectButton
              icon={<YouTubeIcon />}
              link={project.demoLink}
              label="Demo"
            />
          )}
          {project.hasLive && (
            <ProjectButton
              icon={<IosShareIcon />}
              link={project.liveLink}
              label="Live"
            />
          )}
          {project.hasCode && (
            <ProjectButton
              icon={<GitHubIcon />}
              link={project.codeLink}
              label="Code"
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

function Projects() {
  return (
    <Box bgcolor={colorPalette.main} p={5} px={20}>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h2" align="center">
            PROJECTS
          </Typography>
          <br />
          <br />
          {projectsData.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
              <br />
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
