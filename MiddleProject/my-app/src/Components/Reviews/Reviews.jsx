import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Reviews.css"
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

export default function Reviews(props) {
   
  return (
    <div>
    <Card sx={{ width: 410 ,height:480}}>
    <CardMedia
      component="img"
      height="280"
      image={props.image}
      alt="green iguana"
    />
    <CardContent sx={{height: 200}}>
      <Typography gutterBottom variant="h6" component="div">
          {props.name}
      </Typography>
      
      <Typography variant="body2" color="text.secondary">
          {props.discripion}
      </Typography>
    </CardContent>
  </Card>

  </div>
  );
}
