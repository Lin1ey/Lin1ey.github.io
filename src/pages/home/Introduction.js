import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import color, { colorPalette, buttonStyleBlue } from "../../jsData/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const buttonStyle = {
  maxWidth: "125px",
  maxHeight: "50px",
  minWidth: "125px",
  minHeight: "50px",
};

function Introduction(props) {
  return (
    <Box bgcolor={colorPalette.dark} p={10} px={20}>
      <Typography
        align="center"
        variant="h3"
        color={colorPalette.darkContrastText}
      >
        {props.aboutMe.name}
      </Typography>
      <br />
      <Typography
        align="center"
        variant="h4"
        color={colorPalette.darkContrastText}
      >
        {props.aboutMe.shortDesc}
      </Typography>
      <br />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* <Button
          startIcon={<GitHubIcon />}
          variant="outlined"
          sx={buttonStyleBlue}
          style={buttonStyle}
        >
          GitHub
        </Button>
        <Button
          startIcon={<EmailIcon />}
          variant="outlined"
          sx={buttonStyleBlue}
          style={buttonStyle}
        >
          Email
        </Button> */}
      </Box>
    </Box>
  );
}

export default Introduction;
