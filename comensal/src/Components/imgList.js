import React, { Component }  from 'react';
import '../semantic/semantic.min.css'
import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'semantic-ui-react'
import '../App.css'
class List extends Component {
    PropTypes ={
        Content : PropTypes.array,
    }
   render(){
    const {Content} = this.props
    return(
        Content.map(file =>{
      return(        
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={file.img}
          alt="ERROR!! Imagen no cargada!"
        />
       </Carousel.Item>
      )
      })
     )
  }
}
export default List

