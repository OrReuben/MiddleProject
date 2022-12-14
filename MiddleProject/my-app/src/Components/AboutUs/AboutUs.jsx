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

export default function AboutUs(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
            <CssBaseline />
      <Grid container>
        <Grid  item xs={12} md={6} >
          <div data-aos="fade-right">
            <Box
              sx={{
                pt: 8,
                pb: 0,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  variant="h2"
                  align="center"
                  color="text.secondary"
                  paragraph
                  sx={{fontSize:{xs:30, sm:35, md:45, lg:50 }}} 
                  
                >
                  {props.title}
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                  sx={{fontSize:{xs:15, sm:20, md:22 }}} 
                >
                  {props.par}
                </Typography>
              </Container>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"center",padding:"7.5% 10px 20px 10px",opacity:"90%"}}>
          <div data-aos="zoom-in-up">
            <CardMedia
              className="imgMedia"
              component="img"
              height="400"
              image={props.image}
              
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
