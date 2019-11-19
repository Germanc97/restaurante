import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import '../App.css'
import ResList from './ResList.js'

 class CardsRes extends Component {
  state={
        result:[1]
    }
    _fetchMovie(id){
        fetch('http://159.65.58.193:8000/api/getActiveReservationsByRestaurantId/'+id)
        .then(res => res.json())
        .then(result => {
          const {Content=[]}=result
        this.setState({result : Content})
        //console.log(this.state.result);
        })        
    }

    componentDidMount(){
      let url = window.location.href;
      let urlSplit = url.split("?")
      const id = urlSplit[1].split("=")[1];
      this._fetchMovie(id)
    }
   render(){
     return(
      <Card.Group itemsPerRow={4}>
        <ResList  Content={this.state.result}></ResList>
      </Card.Group>
     )
  }
}

export default CardsRes

