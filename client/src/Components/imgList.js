import React, { Component }  from 'react';
import '../semantic/semantic.min.css'
import PropTypes from 'prop-types'
import { Button, Modal } from 'semantic-ui-react'
import '../App.css'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class List extends Component {
    state={
      id:"",
      open:false
    }

    PropTypes ={
        Content : PropTypes.array,
    }
    open = (id) => this.setState({id:id,open: true})

    close = () => this.setState({open: false})
    
    _handleSubmit=(e)=>{
      var request={
        method:'PUT'
      }
      fetch('http://181.50.100.167:5000/putUpdateImage/' + this.state.id,request)
      .then(response =>  {
          console.log(response.status)
          if (response.status == "200") {
              console.log("se escribió con exito")
              this.handleClose()
              this.handleOpenToast()
          };
      })
      .catch(err => console.log("Se presentó un error"));
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
    console.log(this.props)
    return(
        Content.map(file =>{
      return(       
            <div className="ui card" key={file._id}>
            <img src={file.url} className="cardimg" alt="ERROR! imagen no cargada!"/>
            <div className="Barra">
                    <div className="titulo d-flex align-items-center justify-content-start">{file.name}</div>
                    <div className="icono d-flex justify-content-end"><Button circular icon='delete' onClick={() => this.open(file._id)}/></div>
                    <Modal className="confirm" open={this.state.open} onClose={this.close} >
                          <Modal.Header>Eliminar imagen Restaurante</Modal.Header>
                          <Modal.Content>
                            <p>¿ Está seguro(a) de eliminar la imagen del Restaurante ?</p>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button onClick={this.close} negative>Cancelar</Button>
                            <Button
                              positive
                              icon='checkmark'
                              labelPosition='right'
                              content='Eliminar'
                              onClick={this._handleSubmit}
                            />
                            <ToastsContainer
                            style='toast'
                            store={ToastsStore} 
                            position={ToastsContainerPosition.TOP_RIGHT}
                            preventDuplicates={true}                           
                            />
                          </Modal.Actions>
                        </Modal>
            </div>
            </div>       
      )
      })
     )
  }
}
export default List

