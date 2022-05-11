import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import color from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import AdbIcon from "@material-ui/icons/Adb";
import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
    <AppBar position="sticky" style={{ minHeight: "70px" }}>
      <Toolbar className={classes.toolbar}>
        {pages.map((page) => (
          <Button
            key={page.buttonName}
            className={classes.button}
            onClick={handleCloseNavMenu}
            to={page.path}
            component={Link}
          >
            {page.buttonName}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
