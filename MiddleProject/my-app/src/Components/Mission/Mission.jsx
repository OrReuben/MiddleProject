import * as React from "react";

import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import "./Mission.css";




export default function Mission() {
  return (
    <div>
      <CssBaseline />

      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <div className="wrapper" id="pricing">
            <div className="static-txt">Let's</div>
            <ul className="dynamic-txts">
              <li>
                <span>Start</span>
              </li>
              <li>
                <span>Begin</span>
              </li>
              <li>
                <span>Innovate</span>
              </li>
              <li>
                <span>Create</span>
              </li>
            </ul>
          </div>

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
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" href="pricing">
              Lets start
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
