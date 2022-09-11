import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ActionAreaCard from "./Card";
import "./OurProduct.css";
import { useEffect } from "react";
import  Grid  from "@mui/material/Grid";
export default function OurProduct() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="OurProduct">
      <Grid container>
        <Grid item xs={12} md={6}>
      <div data-aos="zoom-in-up">
        <ActionAreaCard
          img={
            "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-2-e1548941746980.jpg.webp"
          }
          title = {"Connect!"}
          text={
            "With you all the way! Together we will connect all parts of the puzzle to your perfect production."
          }
        />
      </div>
      </Grid>
      <Grid item xs={12} md={6}>
      <div data-aos="zoom-in-up">
        <ActionAreaCard
          img={
            "https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA1-e1548941773585.jpg.webp"
          }
          title = {"The Small Details..."}
          text={
            "Emphasize every detail of your event, from choosing the menu to lighting design and choosing the right suppliers for you."
          }
        />
      </div>
      </Grid>
      <Grid item xs={12} md={6}>
      <div data-aos="zoom-in-up">
        <ActionAreaCard
          img={
            "https://www.havaveadam.co.il/wp-content/uploads/2018/08/ByNatiHortig-9-of-31.jpg.webp"
          }
          title = {"Wedding In Nature"}
          text={
            "There is something about nature that causes people to breathe better, to let go of their inhibitions, and to get closer to one another. Nature brings out the best in every celebration. A wedding in a magical forest, in an olive grove or in a charming vineyard."
          }
        />
      </div>
      </Grid>
      <Grid item xs={12} md={6}>
      <div data-aos="zoom-in-up">
        <ActionAreaCard
          img={
            "https://www.havaveadam.co.il/wp-content/uploads/2018/08/ByNatiHortig-17-of-31-1.jpg.webp"
          }
          title = {"A wedding in the family yard"}
          text={
            "A wedding in the family backyard is an event of an intimate nature closely tied in with home and family. If you have a big backyard, this is an excellent opportunity to experience an event of this kind."
          }
        />
      </div>
      </Grid>
      </Grid>
    </div>
  );
}
