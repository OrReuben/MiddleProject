import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";

export default function Reviews(prpos) {
   
  return (
    <Card sx={{ width: 800 }}>
      <CardMedia
        component="img"
        height="500"
        image={prpos.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {prpos.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {prpos.discripion}
        </Typography>
      </CardContent>
    </Card>
  );
}
