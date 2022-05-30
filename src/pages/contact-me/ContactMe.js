import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { colorPalette, buttonStyleBlack } from "../../jsData/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const email = "brnguyen2017@gmail.com";

const contactMeData = [
  {
    icon: <GitHubIcon sx={{ fontSize: 80 }} />,
    name: "GitHub",
    display: "Github.com/Lin1ey",
    link: "https://github.com/Lin1ey",
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 80 }} />,
    name: "Linkedin",
    display: "Brian Nguyen",
    link: "https://www.linkedin.com/in/brian-nguyen-2000/",
  },
];

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
          <Grid item xs={4} my={5}>
            <EmailCard />
          </Grid>
          {contactMeData.map((contact, index) => (
            <Grid item xs={4} my={5} key={index}>
              <ContactMeCard contact={contact} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactMe;
