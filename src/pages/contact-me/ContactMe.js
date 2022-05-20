import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  colors,
  createTheme,
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  Collapse,
  Alert,
  IconButton,
  CardContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import color, {colorPalette, buttonStyleBlack,  buttonStyleBlue} from "../../jsData/colors";
import aboutMeIntroductionData from "../../jsData/aboutMeData";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";

const email = "brnguyen2017@gmail.com";

const contactMeData = [
  {
    icon: <GitHubIcon sx={{ fontSize: 80 }} />,
    name: "GitHub",
    display: "Github.com/Lin1ey",
    link: "https://github.com/Lin1ey",
  },
];

const useStyles = makeStyles({
  button: {
    "&.MuiButton-root": {
      border: "2px black solid",
      color: "black",
      //background: "#1d2024",
    },
    "&:hover": {
      borderColor: "black",
      color: "black",
      backgroundColor: "transparent",
    },
  },
});

function EmailCard(props) {
  return (
    <Card m={10}>
      <CardContent
        sx={{
          p: 6,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <EmailIcon sx={{ fontSize: 80 }} />
        <br />
        <Typography variant="h4">Email</Typography>
        <br />
        <Typography variant="h6">{email}</Typography>
      </CardContent>
    </Card>
  );
}

function ContactMeCard(props) {
  const contact = props.contact;
  const classes = useStyles();
  return (
    <Card m={10}>
      <CardContent
        sx={{
          p: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {contact.icon}
        <br />
        <Typography variant="h4">{contact.name}</Typography>
        <br />
        <Button
          variant="outlined"
          target="_blank"
          href={contact.link}
          sx={buttonStyleBlack}
        >
          {/* <Button
          variant="outlined"
          target="_blank"
          href={contact.link}
          className={classes.button}
        > */}
          {contact.display}
        </Button>
      </CardContent>
    </Card>
  );
}

function ContactMe() {
  return (
    <Box bgcolor={colorPalette.dark}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6} my={5}>
            <EmailCard />
          </Grid>
          {contactMeData.map((contact, index) => (
            <Grid item xs={6} my={5} key={index}>
              <ContactMeCard contact={contact} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactMe;
