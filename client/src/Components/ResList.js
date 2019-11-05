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
            <Card color='green'key={file.PK_idReservation} >
                <Card.Content>
                <Card.Header>{file.firstname+" "+file.secondname+" "+file.firstLastname+" "+file.secondLastname || "Responsable"}</Card.Header>
                    <div className="rowres d-flex flex-column">
                        <div>Mesa: {" "+file.idTableRest || "No se ha definido mesa"}</div>
                        <div >Contacto:{" "+file.telephone || "No hay contacto"}</div>      
                    </div>
                    <div className="rowres d-flex flex-column">
                        <div >Fecha: {" "+file.reservationDate || "Fecha por definir"}</div>
                        <div >idreserva:{" "+file.PK_idReservation}</div>      
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