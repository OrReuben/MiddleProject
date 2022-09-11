import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import AboutUs from "../../Components/AboutUs/AboutUs";
import AboutUsReverse from "../../Components/AboutUs/AboutUsReverse";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <CssBaseline />
      <AboutUs
        title="Hava Nagila"
        par="For more than 30 years we have been producing events out of a
      passion to do special things that have not yet been seen Huan
      is able to reach any point where the couple dreams of having
      their special day - in a private area, in the forest, in the
      field or in the private garden. In a few minutes, the bar
      opens in a chaotic style with various special objects from
      time to time: an old radio, a gramophone, And special ..."
        image={
          "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-3-e1548941719436.jpg.webp"
        }
      />
      <AboutUsReverse />
      <AboutUs
      title={"Wedding in nature"}
      par={" We will be able to design the celebrations with your special family touch. We will be happy to have a look at the yard and the house and to plan the production in the best and most thorough manner possible, so that on the special day all you have to do is enjoy the celebrations."}
        image={
          "https://www.havaveadam.co.il/wp-content/uploads/2018/08/RY-106.jpg.webp"
        }
      />
    </div>
  );
}
