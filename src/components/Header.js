import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

const pages = [
  {
    buttonName: "Contact Me",
    path: "/contact-me",
  },
  {
    buttonName: "Projects",
    path: "/projects",
  },
  {
    buttonName: "About",
    path: "/about",
  },
  {
    buttonName: "Home",
    path: "/",
  },
];

// const pages = [
//   {
//     buttonName: "Contact Me",
//     path: "Lin1ey.github.io/contact-me",
//   },
//   {
//     buttonName: "Projects",
//     path: "lin1ey.github.io/projects",
//   },
//   {
//     buttonName: "About",
//     path: "lin1ey.github.io/about",
//   },
//   {
//     buttonName: "Home",
//     path: "lin1ey.github.io/",
//   },
// ];

const useStyles = makeStyles({
  button: {
    color: "white",
    fontSize: "1em",
    // "&:hover": {
    //   backgroundColor: "#545253",
    // },
  },
  toolbar: {
    display: "flex",
    flexDirection: "row-reverse",
  },
});

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyles();

  /*
  {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                size="large"
                variant="contained"
                sx={{ my: 2, display: 'block' }}
              >
                {page}
              </Button>
            ))}
            
            
<div>
      <AppBar
        position="static"
        style={{ backgroundColor: colors.grey[900], minHeight: "70px" }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Brian Nguyen
            </Typography>
            {pages.map((page) => (
              <Button
                key={page}
                size="large"
                onClick={handleCloseNavMenu}
                style={{ color: "white", fontSize: "1.1em", mx: 10 }}
                className={classes.button}
              >
                {page}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
            
            */

  return (
    <AppBar position="sticky" style={{ minHeight: "70px", backgroundColor: '#2E3B55'}}>
      <Toolbar className={classes.toolbar}>
        {pages.map((page) => (
          <Button
            key={page.buttonName}
            sx={{color: "white", fontSize: "1em"}}
            onClick={handleCloseNavMenu}
            to={page.path}
            component={Link}
            // href={page.path}
          >
            {page.buttonName}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
