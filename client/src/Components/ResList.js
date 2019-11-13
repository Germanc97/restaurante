import React, { Component }  from 'react'
import {Button,Card, Loader,Confirm, Modal } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import PropTypes from 'prop-types'
import Error from '../ImgSrc/ErrorServer.png'
import '../App.css';
class ResList extends Component {
      PropTypes ={
        Content : PropTypes.array,
      }
      state = {
        open: false
      }

      open = () => this.setState({open: true})

      close = () => this.setState({open: false})

      handleDeleteReservation=(id)=>{
        fetch("http://181.50.100.167:8000/api/deleteReservationByReservationId/" + id, {
            method: 'POST'
          }).then(() => {
             console.log('removed');
             window.location.reload();
          }).catch(err => {
            console.error(err);
          });    
      }

      render(){
      const {Content} = this.props
      console.log(Content)
      if (Content.length === 0){
          console.log('1')
        return <img src={Error} className="ImgErrorButton" alt='Vale shit'/>;
      }else if (Content[0]=== 1){
        console.log('2')       
        return <div className="waiting"> 
                <div className="ui active centered inline loader loader "></div>
               </div>
      }
        else{ 
            console.log('3')
            return(
        Content.map(file =>{
        return(
            <Card color='yellow'key={file.PK_idReservation} >
                <Card.Content>
                <Card.Header>{file.firstname+" "+file.secondname+" "+file.firstLastname+" "+file.secondLastname || "Responsable"}</Card.Header><br></br>  
                    <div className="rowres d-flex flex-column">
                        <div><div class="font-weight-bold bloc">Mesa:</div> <div className="bloc">{" "+file.idTableRest || "No se ha definido mesa"}</div> </div>
                        <div><div class="font-weight-bold bloc">Contacto:</div> <div className="bloc">{" "+file.telephone || "No hay contacto"}</div> </div>    
                    </div>
                    <div className="rowres d-flex flex-column">
                        <div><div class="font-weight-bold bloc">Fecha:</div> <div className="bloc">{" "+file.reservationDate || "fecha por definir"}</div> </div><br></br>  
                    </div>
                    <Card.Content extra>
                    <div className='ui two buttons align-bottom'>
                    <Button basic color='black'>
                        Detalle
                    </Button>
                    <Button basic color='black' onClick={this.open}>
                        Eliminar
                    </Button>
                      <Modal className="confirm" open={this.state.open} onClose={this.close} >
                        <Modal.Header>Eliminación reserva</Modal.Header>
                        <Modal.Content>
                          <p>¿ Está seguro(a) que desea eliminar la reserva ?</p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button onClick={this.close} negative>Cancelar</Button>
                          <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Eliminar'
                            onClick={() => this.handleDeleteReservation(file.PK_idReservation)} 
                          />
                        </Modal.Actions>
                      </Modal>                                    
                    </div>
                    </Card.Content>
                </Card.Content>
            </Card>
        )}))}
    }}
export default ResList;