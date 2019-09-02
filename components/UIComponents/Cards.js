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
import {withRouter} from 'react-router-dom'

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


class Cards extends React.Component {
 state = {
    toTutorial: false,
  }

  handleClick=()=>{
    this.setState({
      toTutorial:true
    })
    

}
  render(){
    console.log(this.props.name)
    if(this.state.toTutorial===true && this.props.name==='React'){
      this.props.history.push('/react');
    }
    if(this.state.toTutorial===true && this.props.name==='Redux'){
      this.props.history.push('/redux');
    }
    if(this.state.toTutorial===true && this.props.name==='JS'){
      this.props.history.push('/js');
    }

  return (
    <div className="container">
      
      <Card className="card" onClick={this.handleClick}>
        <CardActionArea>
        <CardMedia
          id="imageIcon"
          component="img"
          alt="img"
          height="140"
          image={this.props.imgUrl}
         
          />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.name}
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
    
   </div> 
  );
}

}
export default withRouter(Cards)