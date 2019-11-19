import React, {Component} from 'react';
import '../App.css';
import CardsImg from '../Components/Images.js'
import {Title} from '../Components/Title.js';
import { Segment, Button, Modal } from 'semantic-ui-react';
import Input from '../Components/Upload.js'
import '../semantic/semantic.min.css'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class galeria extends Component{
  state = {
    restaurant_id:"",
    archivo:null,
    name:"",
    open:false
  }

  open = () => this.setState({open: true})

  close = () => this.setState({open: false})

  handleSaveImage=(e)=>{
    this.setState({archivo : e.target.files[0]})
  }

  handleSaveName=(e)=>{
    this.setState({name: e.target.value})
  }

  _handleSubmit=(e)=>{
    var restaurant_id1 = this.state.restaurant_id
    var name1 = this.state.name
    var archivo1 = this.state.archivo
    var params = {
      restaurant_id: restaurant_id1,
      archivo: archivo1,
      name: name1
    }
    var data = new FormData()
    for(var key in params){
        data.append(key,params[key])
    }
    var request ={
      method: 'POST',
      body : data
    }
    
    fetch('http://181.50.100.167:5000/postPrueba',request)
    .then(response => {console.log(response)
        if (response.status == "200") {
            console.log("se escribió con exito")
            this.handleClose()
            this.handleOpenToast()
        }else{
            //this.handleOpenToastError()
            console.log('error')
        }
    })
    .catch(err => {
        console.log(err)});    
  }

  componentDidMount(){
    let url = window.location.href;
    let urlSplit = url.split("?")
    const id = urlSplit[1].split("=")[1];
    this.setState({restaurant_id:id})
  }

  handleOpenToast=()=>{
    ToastsStore.success("Cargada correctamente")
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
      <div> 
          <div className="ui botton attached button"><Title>Galeria</Title>
          <input type="file" className='ui inverted secondary button' onChange={this.handleSaveImage} ></input>  
          <Button className='ui inverted secondary button' value="Añadir Imagen" onClick={this.open} ><i className="add icon"></i>Añadir Imagen</Button></div>   
                        <Modal className="confirm2" open={this.state.open} onClose={this.close} >
                          <Modal.Header>Añadir Imagen Restaurante</Modal.Header>
                          <Modal.Content>
                            <p>¿ Está seguro(a) de cargar este archivo ?</p>
                            <div class="ui input">
                              <input type="text" placeholder="Asignele un nombre" onChange={this.handleSaveName}></input>
                            </div>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button onClick={this.close} negative>Cancelar</Button>
                            <Button
                              positive
                              icon='checkmark'
                              labelPosition='right'
                              content='Cargar'
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
      <Segment className="PantallaButton">
        <CardsImg/>
      </Segment>
      </div>
      
    );
  }
}
export default galeria;
