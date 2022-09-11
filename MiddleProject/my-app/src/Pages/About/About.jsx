import * as React from "react";


import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css"
import { CardMedia } from "@material-ui/core";



export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <CssBaseline />
      <div data-aos="fade-right">
      {/* Hero unit */}
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
            Something short
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
          
        </Container>
      </Box>
      </div>
      <div  data-aos="zoom-in-up">
      <CardMedia
        className='imgMedia'
          component="img"
          height="400"
          image="https://www.havaveadam.co.il/wp-content/uploads/2018/08/%D7%93%D7%A3-%D7%91%D7%99%D7%AA-3-e1548941719436.jpg.webp"
        />
    
      </div>
    </div>
  );
}
