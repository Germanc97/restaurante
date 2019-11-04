import React, { Component }  from 'react';
import '../semantic/semantic.min.css'
import {Card, Icon, Rating, Container} from 'semantic-ui-react'
import '../App.css'
import PropTypes from 'prop-types'
class ComentariosForm extends React.Component {
    PropTypes ={
        Content : PropTypes.array,
    }
   render(){
    const {Content} = this.props
    return(
        <Card.Group centered className="center"  itemsPerRow={1}>
            {Content.map((data, i) => (
            //<Container className="width">
                <Card  color='yellow'>
                        <Card.Content className="bold" >Puntuación  <Rating icon='star' defaultRating={data.puntuation} maxRating={data.puntuation} disabled icon='star' size='huge'/></Card.Content>
                        <Card.Content description={data.comment} />
                        <Card.Content extra>
                            <Icon name='user' />{data._id}
                        </Card.Content>
                </Card>
            //</Container>
            ))}
        </Card.Group>       
     )
  }
  }
  export default ComentariosForm;