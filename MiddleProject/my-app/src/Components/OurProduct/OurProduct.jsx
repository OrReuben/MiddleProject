import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ActionAreaCard from "./Card";
import "./OurProduct.css";
import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
export default function OurProduct() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
    <div className="OurProduct">
      <Typography variant="h4" pb={10} className="product-header">What do we offer?</Typography>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <div data-aos="zoom-in-up" className="product-img">
            <ActionAreaCard
              img={
                "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-3-e1548941719436.jpg.webp"
              }
            />
          </div>
          <div data-aos="zoom-in-up" className="product-img">
            <ActionAreaCard
              img={
                "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-2-e1548941746980.jpg.webp"
              }
            />
          </div>
          <div data-aos="zoom-in-up" className="product-img">
            <ActionAreaCard
              img={
                "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA1-e1548941773585.jpg.webp"
              }
            />
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}
