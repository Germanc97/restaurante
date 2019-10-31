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
                    <div className=" rowres d-flex flex-row">
                        <div className="d-flex flex-row">Mesa: {" "+file.identificador}</div>
                        <div className="info d-flex flex-row">Contacto:{" "+file.telefono}</div>      
                    </div>
                    <div className="rowres d-flex flex-row">
                        <div className="d-flex flex-row">Fecha: {" "+file.fecha}</div>
                        <div className="d-flex flex-row">idreserva:{" "+file._id}</div>      
                    </div>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                        </div>
                    </Card.Content>
                </Card.Content>
            </Card>
        )}))
    
    }}
export default ResList;