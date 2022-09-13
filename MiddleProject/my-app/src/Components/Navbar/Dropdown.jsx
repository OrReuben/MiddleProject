import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import TaskIcon from "@mui/icons-material/Task";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Dropdown.css";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ alignSelf: "center" }}>
      <Button
        sx={{
          borderRadius: "30px",
          color: "white",
          backgroundColor: "#e57373",
          fontSize:{xs:10,sm:13},
          width:{xs:80,sm:100},
          padding:{xs:"4px 0px 4px 0px",sm:"5px"},
          margin:0
        }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon  />}
      >
        Explore
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <a href="#Home" style={{ color: "black", textDecoration: "none" }}>
          <MenuItem onClick={handleClose} disableRipple>
            <HomeIcon />
            Welcome
          </MenuItem>
        </a>
        <a href="#mission" style={{ color: "black", textDecoration: "none" }}>
          <MenuItem onClick={handleClose} disableRipple>
            <TaskIcon />
            Our Mission
          </MenuItem>
        </a>
        <a href="#product" style={{ color: "black", textDecoration: "none" }}>
          <MenuItem onClick={handleClose} disableRipple>
            <CollectionsBookmarkIcon />
            About
          </MenuItem>
        </a>
        <Divider />
        <a href="#contact" style={{ color: "black", textDecoration: "none" }}>
          <MenuItem onClick={handleClose} disableRipple>
            <InfoIcon />
            Contact
          </MenuItem>
        </a>
      </StyledMenu>
    </div>
  );
}
