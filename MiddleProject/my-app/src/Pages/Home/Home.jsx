import React from "react";
import videoBg from "./VideoBg.mp4";
import "./Home.css";
import OurProduct from "../../Components/OurProduct/OurProduct";
import InfoCard from "../../Components/card-info/infoCard";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <div className="header">
            <Typography
              variant="h3"
              fontWeight={900}
              letterSpacing={3}
              gutterBottom
              className="main-header"

            >
              WELCOME
            </Typography>
            <Typography variant="h5" fontWeight={800} className="par-header">
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
              fontWeight: "800",
            }}
          >
            Scroll down <br />
            <a href="#product">
              {" "}
              <i className="chevron bottom"></i>{" "}
            </a>
          </span>
        </div>
      </div>
      <div id="product">
        <OurProduct />
      </div>
      <div id="card">
        <InfoCard />
      </div>
    </div>
  );
};

export default Home;
