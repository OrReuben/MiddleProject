import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import "./Reviews.css"

export default function Reviews(prpos) {
   
  return (
    <Card sx={{ width: 600 ,height:480}}>
    <CardMedia
      component="img"
      height="280"
      image={prpos.image}
      alt="green iguana"
    />
    <CardContent sx={{height: 200}}>
      <Typography gutterBottom variant="h6" component="div">
          {prpos.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
          {prpos.discripion}
      </Typography>
    </CardContent>
  </Card>
  );
}
