import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import Aos from "aos";
import "./AboutUs.css";
import { CardMedia } from "@material-ui/core";
import Grid from "@mui/material/Grid";

export default function AboutUsReverse() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div data-aos="zoom-in-up">
            <CardMedia
              className="imgMedia"
              component="img"
              height="400"
              image="https://www.havaveadam.co.il/wp-content/uploads/2018/08/DSC_6354.jpg.webp"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
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
                  Wedding at sea
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  A wedding in the family backyard is an event of an intimate
                  nature closely tied in with home and family. If you have a big
                  backyard, this is an excellent opportunity to experience an
                  event of this kind.
                </Typography>
              </Container>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
