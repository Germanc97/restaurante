import React, { Component}  from 'react';
import '../semantic/semantic.min.css'
import ham from '../ImgSrc/Ham.jpeg'
import pasta from '../ImgSrc/Pasta.jpg'
import pizza from '../ImgSrc/pizza.jpg'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel'
 class Galery extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        img: ham,
        title: 'Pasta',
       },
       {
        _id: 4,
        img: pizza,
        title: 'Pasta',
       },
       {
        _id: 5,
        img: ham,
        title: 'Pasta',
       },
       {
        _id: 6,
        img: pizza,
        title: 'Pizza',
       },
       {
        _id: 7,
        img: ham,
        title: 'Pizza',
       },
       {
        _id: 8,
        img: pasta,
        title: 'Pasta',
       },
  
     ]
    }
  }
   render(){ 
     return(
      <Carousel className="gridList">
        {this.state.result.map((data,i)=>(         
        <Carousel.Item key={i}>
            <img
            className="d-block w-100 img-thumbnail Size"
            src={data.img}
            alt="Error!! Imagen no cargada"
          />
          </Carousel.Item>          
      ))}        
      </Carousel>
     )
  }
}

export default Galery

