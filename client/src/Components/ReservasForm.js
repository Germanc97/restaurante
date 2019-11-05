import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import '../App.css'
import ResList from './ResList.js'

 class CardsRes extends Component {
  state={
        result:[]
    }
    _fetchMovie(){
        fetch('http://181.50.100.167:8000/api/getActiveReservationsByRestaurantId/1')
        .then(res => res.json())
        .then(result => {
        const {Content=[]}=result
        this.setState({result : Content})
        //console.log(this.state.result);
        })        
    }

    componentDidMount(){
    this._fetchMovie()
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

