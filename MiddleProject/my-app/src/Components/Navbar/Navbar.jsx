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
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const username = useSelector((state) => state.input.objValue);
  const settings = [
    "Register",
    `Welcome ${username[username.length - 1].username}`,
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

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
  const redirection = () => {
    navigate("register");
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            {" "}
            <Box
              component="img"
              sx={{
                width: "75px",
                height: "75px",
                display: { xs: "none", md: "block" },
              }}
              alt="logo"
              src="https://www.havaveadam.co.il/wp-content/uploads/2018/05/logo_header.png.webp"
            />
          </Link>

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
              color="inherit"
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
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <Button
                  onClick={handleCloseNavMenu}
                  variant="string"
                  disableElevation
                  sx={{ my: 2, color: "red", display: "block" }}
                  href="about"
                >
                  <Typography>About us</Typography>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  variant="string"
                  disableElevation
                  sx={{ my: 2, color: "red", display: "block" }}
                  href="pricing"
                >
                  <Typography>pricing</Typography>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  variant="string"
                  disableElevation
                  sx={{ my: 2, color: "red", display: "block" }}
                  href="reviews"
                >
                  <Typography>reviews</Typography>
                </Button>
                <Dropdown />
              </Box>
            </Menu>
          </Box>
          <Link to="/">
            {" "}
            <Box
              component="img"
              sx={{
                width: "75px",
                height: "75px",
                display: { xs: "block", md: "none" },
              }}
              alt="logo"
              src="https://www.havaveadam.co.il/wp-content/uploads/2018/05/logo_header.png.webp"
            />
          </Link>
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
              onClick={handleCloseNavMenu}
              variant="contained"
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
              href="about"
            >
              <Typography>About us</Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              variant="contained"
              disableElevation
              sx={{
                my: 3,
                color: "white",
                display: "block",
                mr: 3,
                alignSelf: "center",
                padding: 1.5,
                borderRadius: 5,
              }}
              href="pricing"
            >
              <Typography className="navbar-button">pricing</Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              variant="contained"
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
              href="reviews"
            >
              <Typography className="navbar-button">reviews</Typography>
            </Button>
            <Dropdown />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={redirection}>
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
