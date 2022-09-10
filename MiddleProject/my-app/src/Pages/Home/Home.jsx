import React from "react";
import videoBg from "./VideoBg.mp4";
import "./Home.css";
import OurProduct from "../../Components/OurProduct/OurProduct";
import InfoCard from "../../Components/card-info/infoCard";

const Home = () => {
  return (
    <div>
      <div className="Home">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>Let's bring your dream to reality</p>

          <span
            className="hero__scroll aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="800"
            style={{display:"flex", flexDirection:"column"}}
          >
            Scroll down <br />
           <a href="#product"> <i className="chevron bottom"></i> </a>
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
