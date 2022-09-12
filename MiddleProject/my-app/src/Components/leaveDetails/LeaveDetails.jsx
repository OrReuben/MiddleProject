import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import "./LeaveDetails.css";

export default function SignInSide() {
  return (
    <Box
      className="LeaveDetailsSection"
      borderBottom={1}
      sx={{ borderColor: "white" }}
    >
        <Grid container component="main" sx={{ height: "40vh", width: "60vw" }}>
          <div className="allC">
            <div
              id="contact-header"
              className="fit gilroy ltr font-22 bolder line-2h5 space-55 auto text pos-rel l-1 cf7-main-title"
            >
              NOW, LET'S TALK!
              <div className="underline cyan-bg ul-m pos-abs behind"></div>
            </div>

            <div className="buttomC">
              <CssBaseline />
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
                sx={{ color: "white", bgcolor: "#cfdef300" }}
              >
                <Box
                  sx={{
                    my: 1,
                    mx: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="fullName"
                      label="Full name"
                      type="text"
                      id="fullName"
                      autoComplete="current-fullName"
                      variant="standard"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      variant="standard"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="Tel"
                      label="Tel"
                      type="number"
                      id="tel"
                      autoComplete="current-tel"
                      variant="standard"
                    />

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Event
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Event"
                        defaultValue=""
                      >
                         <MenuItem value={"Wedding"}>Wedding</MenuItem>
                        <MenuItem value={"Bar"}>Bar</MenuItem>
                        <MenuItem value={"Else"}>Else</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="message"
                      label="Message"
                      type="text"
                      id="message"
                      autoComplete="current-message"
                      variant="standard"
                    />
                    <div className="contact-button">
                    <Button
                      type="submit"
                      color="error"
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        float: "left",
                        fontSize: "15px",
                        fontWeight: "700",
                        borderRadius: "25px",
                        padding: "3px 30px",
                        border: "1.5px solid white",
                        bgcolor: "rgba(0,0,0,0)",
                        color: "black",
                      }}
                    >
                      Send
                    </Button>
                    </div>
                  </Box>
                </Box>
              </Grid>

              <div>
                <Typography
                  component="h1"
                  variant="h1"
                  sx={{
                    color: "white",
                    bgcolor: "#cfdef300",
                    fontweight: "700",
                  }}
                >
                  Leave <br></br> Your <br /> Details
                </Typography>
                <div></div>
              </div>
            </div>
          </div>
        </Grid>
    </Box>
  );
}
