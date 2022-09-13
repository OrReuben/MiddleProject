import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Reviews.css";
import { Box } from "@mui/material";

export default function Reviews(props) {
  return (
    <Box>
      <Card sx={{ width: {xs:250,sm:350}, height:480 }}>
        <CardMedia
          component="img"
          height="280"
          image={props.image}
          alt="green iguana"
        />
        <CardContent sx={{padding:{xs:"2px", sm:"10px"}}}>
          <Typography gutterBottom variant="h6" component="div" sx={{fontSize:{xs:"15px", sm:"25px"}}}>
            {props.name}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{fontSize:{xs:"10px", sm:"12px"}}}>
            {props.discripion}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
