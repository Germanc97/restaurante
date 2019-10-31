import React, { Component }  from 'react'
import {Button,Card } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import PropTypes from 'prop-types'
import '../App.css';
class ResList extends Component {
      PropTypes ={
        Content : PropTypes.array,
      }
      render(){
      const {Content} = this.props
      return(
        Content.map(file =>{
        return(
            <Card color='green' >
                <Card.Content>
                <Card.Header>Responsable:{" "+file.responsable}</Card.Header>
                    <div className="rowres d-flex flex-column">
                        <div>Mesa: {" "+file.identificador}</div>
                        <div >Contacto:{" "+file.telefono}</div>      
                    </div>
                    <div className="rowres d-flex flex-column">
                        <div >Fecha: {" "+file.fecha}</div>
                        <div >idreserva:{" "+file._id}</div>      
                    </div>
                    <Card.Content extra>
                    <div className='ui two buttons align-bottom'>
                    <Button basic color='green'>
                        Detalle
                    </Button>
                    <Button basic color='red'>
                        Eliminar
                    </Button>
                    </div>
                    </Card.Content>
                </Card.Content>
            </Card>
        )}))
    
    }}
export default ResList;