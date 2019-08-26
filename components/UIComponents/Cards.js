import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as imgSrc from './imgUrl'
import '../../styles/card'
import FrontPage from './FrontPage'
export default function Cards(props) {
 
  return (
    <div className="container">
      
      <Card className="card" onClick={props.reactClicked}>
        <CardActionArea>
        <CardMedia
          id="imageIcon"
          component="img"
          alt="React"
          height="140"
          image={props.imgUrl}
          title="React"
          />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
    
   </div> 
  );
}
