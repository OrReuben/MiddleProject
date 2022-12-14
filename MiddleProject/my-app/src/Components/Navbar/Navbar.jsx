import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Navbar/Dropdown";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const username = useSelector((state) => state.input.objValue);
  const location = useLocation();
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const settings = [
    "Register",
    `Welcome ${username[username.length - 1].username}!`,
    "Events",
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenu1 = () => {
    setAnchorElNav(null);
    navigate("/pricing");
  };
  const handleCloseNavMenu2 = () => {
    setAnchorElNav(null);
    navigate("/photo-album");
  };
  const handleCloseNavMenu3 = () => {
    setAnchorElNav(null);
    navigate("/about");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ boxShadow: "none" }}
      className={
        location.pathname === "/" && color === true
          ? "headerbg"
          : location.pathname === "/"
          ? "header"
          : ""
      }
    >
      <Container maxWidth="1920px">
        <Toolbar disableGutters>
          {" "}
          <Box
            component="img"
            sx={{
              width: "75px",
              height: "65px",
              display: { xs: "none", md: "block" },
              cursor: "pointer",
            }}
            alt="logo"
            src="https://www.havaveadam.co.il/wp-content/uploads/2018/05/logo_header.png.webp"
            onClick={navigateHome}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", justifyContent: "center", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                  padding: "15px",
                }}
              >
                <Button
                  onClick={handleCloseNavMenu3}
                  variant="string"
                  disableElevation
                  sx={{ my: 2, color: "red", display: "block" }}
                >
                  <Typography>About us</Typography>
                </Button>
                <Button
                  onClick={handleCloseNavMenu1}
                  variant="string"
                  disableElevation
                  sx={{ my: 2, color: "red", display: "block" }}
                >
                  <Typography>pricing</Typography>
                </Button>
                <Button
                  onClick={handleCloseNavMenu2}
                  variant="string"
                  disableElevation
                  sx={{ my: 2, color: "red", display: "block" }}
                >
                  <Typography>Album</Typography>
                </Button>
              </Box>
            </Menu>
                {location.pathname === "/" && <Dropdown />}
          </Box>{" "}
          <Box
            component="img"
            sx={{
              width: {xs:"60px",sm:"75px"},
              height: {xs:"65px",sm:"65px"},
              padding:"3px 0px",
              display: { xs: "block", md: "none" },
              cursor: "pointer",
            }}
            alt="logo"
            src="https://www.havaveadam.co.il/wp-content/uploads/2018/05/logo_header.png.webp"
            onClick={navigateHome}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu3}
              variant="string"
              disableElevation
              sx={{
                my: 2,
                color: "white",
                display: "block",
                mr: 3,
                alignSelf: "center",
                padding: 1.5,
                borderRadius: 5,
              }}
            >
              <Typography>About us</Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu1}
              variant="string"
              disableElevation
              sx={{
                my: 2,
                color: "white",
                display: "block",
                mr: 3,
                alignSelf: "center",
                padding: 1.5,
                borderRadius: 5,
              }}
            >
              <Typography className="navbar-button">pricing</Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu2}
              variant="string"
              disableElevation
              sx={{
                my: 2,
                color: "white",
                display: "block",
                mr: 3,
                alignSelf: "center",
                padding: 1.5,
                borderRadius: 5,
              }}
            >
              <Typography className="navbar-button">Album</Typography>
            </Button>
            {location.pathname === "/" && <Dropdown />}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={username[username.length - 1].url}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={setting} onClick={() =>
                  index === 0
                    ? navigate("/register")
                    : index === 1
                    ? navigate("/")
                    : navigate("/event-date")
                }>
                  <Typography
                    textAlign="center"
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
