import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Mission.css";
import { useNavigate } from "react-router-dom";

export default function Mission() {
  const navigate = useNavigate()
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
            We fulfill dreams and execute weddings in nature in a special way.
            With lots of thought and love for our work, we create weddings
            against the backdrop of natural scenery – the trees, vegetation, sea
            or desert of our beautiful country. Weddings in the family yard or
            even boutique weddings in unusual homes or other rare places.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" onClick={() => navigate('/pricing')} sx={{width:"30vw",padding:2, color:"white"}}> 
              Lets start
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
