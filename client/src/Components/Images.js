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
    result:[]
  }

  _fetchMovie(id){
    fetch('http://181.50.100.167:5000/getImagesxRestaurant/'+id)
    .then(res => res.json())
    .then(result => {
      const {Content=[]}=result
      if(Content.length ===0){
        const {Content=[]}=[1]
        this.setState({result : Content})
      }else{
        this.setState({result : Content})
      }  
      console.log(this.state.result)
    })      
    .catch(err => {
      const Content=[]
      this.setState({result : Content})
      console.log('hoola')
    });  
    }
    
    componentDidMount(){
      let url = window.location.href;
      let urlSplit = url.split("?")
      const id = urlSplit[1].split("=")[1];
      console.log(id)
      this.setState({_id:id})
      this._fetchMovie(id)
    }
   render(){
     console.log(this.state.result)
     return(
      <Card.Group centered itemsPerRow={5}>
        <List className=" d-flex align-items-center" Content={this.state.result}></List>
      </Card.Group>
     )
  }
}

export default CardsImg;

