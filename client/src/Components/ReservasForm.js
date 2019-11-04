import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import '../App.css'
import ResList from './ResList.js'

 class CardsRes extends Component {
  state={
        result:[
        {
        _id: 1,
        responsable:"David Hernandez",
        username:"@TengoHambre",
        fecha: '01/11/2019',
        identificador: 2,
        telefono: '30242356',
        },
        {
            _id: 2,
            responsable:"Elizabeth Moncada",
            username:"@TengoHambre:p",
            fecha: '01/11/2019',
            identificador: 3,
            telefono: '30242356',
        },
        {
            _id: 3,
            responsable:"German Caycedo Mutis",
            username:"@TengoHambre-.-",
            fecha: '01/11/2019',
            identificador: 4,
            telefono: '30248556'
        },
        {
            _id: 4,
            responsable:"Kypper Gonzales",
            username:"@TengoHambre-.-'",
            fecha: '01/11/2019',
            identificador: 5,
            telefono: '30002356'
        },
    ]
    }
    _fetchMovie(){
        fetch('http://181.50.100.167:5000/getRestaurant/2')
        .then(res => res.json())
        .then(result => {
        const {Content=[]}=result
        this.setState({result : Content})
        //console.log(this.state.result);
        })        
    }

    //componentDidMount(){
    //this._fetchMovie()
    //}
   render(){
    
     return(
      <Card.Group itemsPerRow={4}>
        <ResList  Content={this.state.result}></ResList>
      </Card.Group>
     )
  }
}
export default CardsRes

