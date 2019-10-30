import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import carne from '../ImgSrc/carne.jpg'
import ham from '../ImgSrc/Ham.jpeg'
import pasta from '../ImgSrc/Pasta.jpg'
import pizza from '../ImgSrc/pizza.jpg'
import '../App.css'
import List from './imgList.js'

 class CardsImg extends Component {
  state={
    result:[
      {
       _id: 1,
       img: ham,
       title: 'Hamvorguesa',
     },
     {
      _id: 2,
      img: pizza,
      title: 'Pizza',
     },
     {
      _id: 3,
      img: pasta,
      title: 'Pasta',
     },
     {
      _id: 4,
      img: carne,
      title: 'Carnesita',
     },
   ]
}
   render(){
    
     return(
      <Card.Group itemsPerRow={5}>
        <List className=" d-flex align-items-center" Content={this.state.result}></List>
      </Card.Group>
     )
  }
}

export default CardsImg

