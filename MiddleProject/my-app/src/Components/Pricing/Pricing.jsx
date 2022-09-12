import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import { addPrice } from "../../Store/InputSlice";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      paddingBottom="10px"
      paddingTop="45px"
    ></Typography>
  );
}

const tiers = [
  {
    title: "Wedding In Nature",
    price: "40,000",
    description: [
      "Get closer to one another.",
      "Best in every celebration",
      "Charming vineyard",
      "Unique atmosphere",
    ],
    buttonText: "Get started",
    buttonVariant: "outlined",
  },
  {
    title: "Wedding at sea",
    subheader: "Most popular",
    price: "100,000",
    description: [
      "Endless energies",
      "A tickling sand sensation",
      "Light breeze caressing and waves",
      "Amazing bar with a variety",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Hava NAGILA",
    price: "35,000",
    description: [
      "Bar service",
      "Photo booth",
      "Public singing",
      "Unique souveniers",
    ],
    buttonText: "Get started",
    buttonVariant: "outlined",
  },
];

export default function Pricing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const priceList = tiers.map((tier) => tier.price);
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #FFEFBA, #F9F9F9, #FFEFBA)",
      }}
    >
      <Navbar />
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <Container maxWidth="sm" component="main" sx={{ pt: 5, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          We will be happy to have a look at the yard and the house and to plan
          the production in the best and most thorough manner possible, so that
          on the special day all you have to do is enjoy the celebrations.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier, index) => (
            <Grid
              item
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
              key={index}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[300]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ₪{tier.price}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      navigate("/payment");
                      dispatch(addPrice(priceList[index]));
                    }}
                    fullWidth
                    variant={tier.buttonVariant}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Copyright />
    </div>
  );
}
