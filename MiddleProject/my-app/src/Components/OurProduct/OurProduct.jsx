import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ActionAreaCard from "./Card";
import "./OurProduct.css";
import { useEffect } from "react";
export default function OurProduct() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="OurProduct">
      <div  data-aos="zoom-in-up">
        <ActionAreaCard
          img={
            "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-3-e1548941719436.jpg.webp"
          }
        />
      </div>
      <div  data-aos="zoom-in-up">
        <ActionAreaCard
          img={
            "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-2-e1548941746980.jpg.webp"
          }
        />
      </div>
      <div  data-aos="zoom-in-up">
        <ActionAreaCard
          img={
            "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA1-e1548941773585.jpg.webp"
          }
        />
      </div>
    </div>
  );
}
