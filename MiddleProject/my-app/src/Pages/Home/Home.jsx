import React from "react";
import "./Home.css";
import OurProduct from "../../Components/OurProduct/OurProduct";
import InfoCard from "../../Components/card-info/infoCard";
import { createTheme, Typography } from "@mui/material";
import videoBg from "./VideoBg.mp4";
import "./Home.css";
import Mission from "../../Components/Mission/Mission";
import Reviews from "../../Components/Reviews/Reviews";
import BtmReviews from "../../Components/Reviews/BtmReviews";
import LeaveDetails from "../../Components/leaveDetails/LeaveDetails";
import About from "../About/About";
import InfintyText from "../../Components/infinty-text/infintyText";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <div className="header">
            <Typography
              variant="h2"
              letterSpacing={1}
              fontWeight={600}
              gutterBottom
              className="main-header"
            >
              WELCOME
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              letterSpacing={2}
              className="par-header"
            >
              Let's bring your dream to reality!
            </Typography>
          </div>
          <span
            className="hero__scroll aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="800"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            Scroll down <br />
            <a href="#mission">
              {" "}
              <i className="chevron bottom"></i>{" "}
            </a>
          </span>
        </div>
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="product">
        <About />
        <InfintyText />
        <OurProduct />
      </div>
      <span> <BtmReviews /> </span>
      <LeaveDetails />
      <div id="card"></div>
    </div>
  );
};

export default Home;
