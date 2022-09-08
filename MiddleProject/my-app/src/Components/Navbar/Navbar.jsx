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
  const navigateHome = () => {
    navigate('/')
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    navigate('/about')
  };
  const handleCloseNavMenu1 = () => {
    setAnchorElNav(null);
    navigate('/pricing')
  };
  const handleCloseNavMenu2 = () => {
    setAnchorElNav(null);
    navigate('/reviews')

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
            {" "}
            <Box
              component="img"
              sx={{
                width: "75px",
                height: "75px",
                display: { xs: "none", md: "block" },
                cursor:"pointer"
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
                  <Typography>reviews</Typography>
                </Button>
                <Dropdown />
              </Box>
            </Menu>
          </Box>
            {" "}
            <Box
              component="img"
              sx={{
                width: "75px",
                height: "75px",
                display: { xs: "block", md: "none" },
                cursor:"pointer"
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
            >
              <Typography>About us</Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu1}
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
            >
              <Typography className="navbar-button">pricing</Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu2}
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
            >
              <Typography className="navbar-button">reviews</Typography>
            </Button>
            <Dropdown />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={username[username.length - 1].url} />
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
                  <Typography textAlign="center" onClick={() => navigate('/register')}>
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
