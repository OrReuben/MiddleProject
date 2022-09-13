import * as React from "react";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const cards = [];

export default function Album(props) {
  (() => {
    for (let index = 0; index < props.image.length; index++) {
      cards[index] = index;
    }
  })();
  return (
    <main>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 10,
          pb: 0,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{fontSize:{xs:30,sm:50}}}
          >
            Our Photo Album
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{fontSize:{xs:15,sm:22}}}
          >
            Our extensive experience in producing events has led us to discover
            a wide variety of special ocations. When we meet, we will offer you
            a selection of interesting locations in nature. we will ensure that
            the view matches the atmosphere you want
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="xlg">
        {/* End hero unit */}
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={props.image[index]}
                    alt={index}
                    style={{
                      width: 250,
                      height: 225,
                      display: "flex",
                      alignSelf: "center",
                      justifySelf: "center",
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
