import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import { CardMedia } from "@material-ui/core";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <CssBaseline />
      <Grid container>
        <Grid xs={12} md={6}>
      <div data-aos="fade-right">
        <Box 
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="text.secondary"
              paragraph
            >
              Hava Nagila
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              For more than 30 years we have been producing events out of a
              passion to do special things that have not yet been seen Huan is
              able to reach any point where the couple dreams of having their
              special day - in a private area, in the forest, in the field or in
              the private garden. In a few minutes, the bar opens in a chaotic
              style with various special objects from time to time: an old
              radio, a gramophone, And special ...
            </Typography>
          </Container>
        </Box>
      </div>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6}>
      <div data-aos="zoom-in-up">
        <CardMedia
          className="imgMedia"
          component="img"
          height="400"
          image="https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-3-e1548941719436.jpg.webp"
        />
      </div>
      </Grid>
      </Grid>
    </div>
  );
}
