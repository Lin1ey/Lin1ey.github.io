import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    color: "white",
    fontSize: "1em",
    // "&:hover": {
    //   backgroundColor: "#545253",
    // },
  },
  introTextButtonBox: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

function Introduction(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src={props.aboutMe.myImage} height="100%" width="100%" />
      </Grid>
      <Grid item xs={8}>
        <IntroductionText aboutMe={props.aboutMe} />
      </Grid>
    </Grid>
  );
}

function IntroductionText(props) {
  const classes = useStyles();

  return (
    <Box>
      <Typography align="center" variant="h2">
        {props.aboutMe.name}
      </Typography>
      <Typography variant="h6">{props.aboutMe.introParagraphOne}</Typography>
      <br></br>
      <Typography variant="h6">{props.aboutMe.introParagraphTwo}</Typography>
      <br></br>
      <Box className={classes.introTextButtonBox}>
        <Button
          variant="contained"
          to={props.aboutMe.pathToAbout}
          component={Link}
        >
          Learn more about me
        </Button>
        <Button
          variant="contained"
          to={props.aboutMe.pathToProjects}
          component={Link}
        >
          See My Projects
        </Button>
        
      </Box>
    </Box>
  );
}

export default Introduction;
