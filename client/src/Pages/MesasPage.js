import  React, { Component } from 'react';
import '../App.css';
import ListTable from '../Components/MesasForm.js'
import {Title} from '../Components/Title.js';
import { Segment, Form, Checkbox } from 'semantic-ui-react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class Mesas extends Component {
  state = {
    id:"",
    FK_idRestaurant:"",
    idTableRest:"",
    numberChairs:"",
    AddTable: false
  }
  
  componentDidMount(){
    let url = window.location.href;
    let urlSplit = url.split("?")
    const id = urlSplit[1].split("=")[1];
    console.log(id)
    this.setState({id : id})
  }

  handleChangeIdTable = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      idTableRest: e.target.value
    });
  }

  handleChangeChairs = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      numberChairs: e.target.value
    });
  }
  _handleSubmit=(e)=>{
      var FK_idRestaurant1 = parseInt(this.state.id)
      var idTableRest1 = parseInt(this.state.idTableRest)
      var numberChairs1 = parseInt(this.state.numberChairs)
      fetch('http://159.65.58.193:8000/api/addTable/' + FK_idRestaurant1 +'/'+idTableRest1+'/'+numberChairs1)
      .then(response =>  {
          console.log(response.status)
          if (response.status == "200") {
              console.log("se escribió con exito")
              this.handleClose()
              this.handleOpenToast()
          };
      })
      .catch(err => console.log("Se presentó un error"));
      this.setState({
        open: false
      });
  }
    open = () => this.setState({AddTable: true})

    close = () => this.setState({AddTable: false})
    
    handleOpenToast=()=>{
      ToastsStore.success("Creada correctamente")
    }
    //handleOpenToastError=()=>{
    //  ToastsStore.error("Error")
    //}  
  
    handleClose=()=>{
      window.setTimeout(function(){
        window.location.reload();  
      }, 1000);
    }
  render(){ 
    return (
    <div >
        <div className="ui botton attached button">
          <Title>Mesas</Title>
            <Button onClick={this.open} className='ui inverted secondary button'>
                  <i className="add icon"></i>
                  Añadir Mesa          
            </Button> 
        </div>                      
            <Modal className="createtable" open={this.state.AddTable} onClose={this.close}>
              <Modal.Header>Creación Mesa</Modal.Header>
              <Modal.Content>               
              <label>
              Número de mesa:
              </label>
              <div className="ui input">
                <input type="text"  onChange={this.handleChangeIdTable}></input>
              </div> 
              <label>
              <br></br>
              Número de sillas:
              </label>
              <div className="ui input">
                <input type="text"  onChange={this.handleChangeChairs}></input>
              </div>             
              </Modal.Content>
            <Modal.Actions>
                <Button onClick={this.close} negative>Cancelar</Button>
                <Button
                  positive
                  icon='checkmark'
                  labelPosition='right'
                  content='Crear'
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
          <ListTable/>
    </div>
  );
}
 
}
 

export default Mesas;
