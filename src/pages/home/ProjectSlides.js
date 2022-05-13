import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  button: {
    maxWidth: "100%",
    maxHeight: "70%",
    minWidth: "100%",
    minHeight: "70%",
  },
});

function ProjectSlides(props) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const projects = props.projects;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <IconButton
            className={classes.button}
            aria-label="previous"
            onClick={() => {
              if (index <= 0) {
                setIndex(projects.length - 1);
              } else {
                setIndex(index - 1);
              }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              component="img"
              height="500"
              width="100%"
              image={projects[index].projectImage}
              alt="project image"
            ></CardMedia>
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="div"
              >
                {projects[index].projectName}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {projects[index].projectDesc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.button}
                variant="contained"
                //component={Link}
                //to={projects[index].projectLink}
                href={projects[index].projectLink}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            className={classes.button}
            aria-label="next"
            onClick={() => {
              if (index === projects.length - 1) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}

export default ProjectSlides;
