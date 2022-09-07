import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Reviews(prpos) {
   
  return (
    <Card sx={{ maxWidth: 1000}}>
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
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
