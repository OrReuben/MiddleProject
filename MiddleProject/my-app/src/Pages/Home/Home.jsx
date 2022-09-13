import React from "react";
import "./Home.css";
import OurProduct from "../../Components/OurProduct/OurProduct";
import { Button, Typography } from "@mui/material";
import videoBg from "./VideoBg.mp4";
import "./Home.css";
import Mission from "../../Components/Mission/Mission";
import BtmReviews from "../../Components/Reviews/BtmReviews";
import LeaveDetails from "../../Components/leaveDetails/LeaveDetails";
import InfintyText from "../../Components/infinty-text/infintyText";
import Svg from "../../Components/svg/svg";
import AboutUs from "../../Components/AboutUs/AboutUs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Home" id="Home">
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
        <AboutUs
          title="Hava Nagila"
          par="For more than 30 years we have been producing events out of a
      passion to do special things that have not yet been seen Huan
      is able to reach any point where the couple dreams of having
      their special day - in a private area, in the forest, in the
      field or in the private garden. In a few minutes, the bar
      opens in a chaotic style with various special objects from
      time to time: an old radio, a gramophone, And special"
          image={
            "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-3-e1548941719436.jpg.webp"
          }
        />
        <Button
          variant="contained"
          onClick={() => navigate("/about")}
          sx={{ width: {xs:"30vw" ,sm:"30vw"}, padding: {xs:0.5 ,sm:2}, color: "white" }}
        >
          READ MORE
        </Button>
        <InfintyText />
        <OurProduct />
      </div>
      <hr />
      <div className="svg-container">
        <Svg />{" "}
      </div>
      <hr />
      <span>
        {" "}
        <BtmReviews />{" "}
      </span>
      <Button
        variant="contained"
        onClick={() => navigate("/photo-album")}
        sx={{ width:{xs:"15vw" ,sm:"30vw"}, padding: {xs:0.5 ,sm:2}, color: "white"}}
      >
        MORE
      </Button>
      <br /><br /><br />
      <div id="contact">
        <LeaveDetails />
      </div>
      <div id="card"></div>
    </div>
  );
};

export default Home;
