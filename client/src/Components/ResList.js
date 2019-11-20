import React, { Component }  from 'react'
import {Button,Card, Loader,Confirm, Modal } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import PropTypes from 'prop-types'
import Error from '../ImgSrc/ErrorServer.png'
import '../App.css';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class ResList extends Component {
      PropTypes ={
        Content : PropTypes.array,
      }
      state = {
        idRes:"",
        open: false
      }

      open = (id) => this.setState({idRes:id,open: true})

      close = () => this.setState({open: false})

      handleDeleteReservation=()=>{
        fetch("http://159.65.58.193:8000/api/deleteReservationByReservationId/" +this.state.idRes)
        .then(() => {
            this.handleOpenToast()
            this.handleClose()
             console.log('removed');
          }).catch(err => {
            console.error(err);
          });    
      }

      handleOpenToast=()=>{
        ToastsStore.success("Eliminada correctamente")
      }
    
      handleClose=()=>{
            window.setTimeout(function(){
              window.location.reload();  
          }, 1000);
      }

      render(){
      const {Content} = this.props
      console.log(Content) 
            console.log('3')
            return(
        Content.map(file =>{
        return(
            <Card color='yellow' key={file.PK_idReservation} >
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
                    <Button basic color='black' onClick={() => this.open(file.PK_idReservation)}>
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
                            onClick={this.handleDeleteReservation} 
                          />                            
                          <ToastsContainer
                            style='toast'
                            store={ToastsStore} 
                            position={ToastsContainerPosition.TOP_RIGHT}
                            preventDuplicates={true}  
                            iconClassNames={"toast-success"}                         
                            />
                        </Modal.Actions>
                      </Modal>                                    
                    </div>
                    </Card.Content>
                </Card.Content>
            </Card>
        )}))}
    }
export default ResList;