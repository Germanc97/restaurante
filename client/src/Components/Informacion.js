import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import '../semantic/semantic.min.css'
import { Segment, Form, Confirm, Modal, Button} from 'semantic-ui-react'
import Error from '../ImgSrc/ErrorServer.png'
import { Redirect } from 'react-router-dom'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class InformacionForm extends Component {
  PropTypes ={
    Content: PropTypes.array
  }
  state = {
    _id:"",
    name: "",
    description: "",
    city_id: "",
    telephone: "",
    email: "",
    address: "",
    schedule: "",
    open: false,
    id:"",
    idUser:""
  }

  open = () => this.setState({open: true})

  close = () => this.setState({open: false})

  handleChangeName = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    });
  }

  handleChangeAddress = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      address: e.target.value
    });
  }

  handleChangeTelephone = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      telephone: e.target.value
    });
  }

  handleChangeEmail = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      email: e.target.value
    });
  }

  handleChangeSchedule = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      schedule: e.target.value
    });
  }

  handleChangeDescription = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      description: e.target.value
    });
  }

  _handleSubmit=(e)=>{
      var name1 = this.state.name
      var description1 = this.state.description
      var address1 = this.state.address
      var telephone1 = this.state.telephone
      var email1 = this.state.email
      var schedule1 = this.state.schedule
      var params = {
        _id:this.props.Content[0]._id,
        name: name1 || this.props.Content[0].name ,
        description: description1 || this.props.Content[0].description,
        city_id: this.props.Content[0].city_id,
        telephone: telephone1 || this.props.Content[0].telephone,
        email: email1 || this.props.Content[0].email,
        address: address1 || this.props.Content[0].address,
        schedule: schedule1 || this.props.Content[0].schedule
      }
      console.log(params)
      var request = {
        method: 'PUT',
        headers:{
          "Content-type": "application/json"
        },
      body : JSON.stringify(params)
    } 
      fetch('http://181.50.100.167:5000/putUpdateRestaurant',request)
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
    ToastsStore.success("Actualizado correctamente")
  }

  handleClose=()=>{
        window.setTimeout(function(){
          window.location.reload();  
      }, 1000);
  }
  componentDidMount(){
    let url = window.location.href;
    let urlSplit = url.split("?")
    const id = urlSplit[1].split("=")[1];
    const idUser = urlSplit[2].split("=")[1];
    this.setState({id:id,idUser:idUser})
  }
  
render(){
    const {Content} = this.props
    console.log("Ya estas en Informacion.js")
  if(Content.length === 0){
    console.log(Content)
    return <div>
      <img src={Error} className="ImgErrorNoButton" alt='Error! Imagen No cargada'/>
    </div>
  ;}else{
      console.log("eNTRE EN ELSE")
      return(      
        Content.map(User =>{
        return(
            <div key={User._id}>           
            <Segment className="PantallaNoButton">
            <Form >    
            <div className="container" >
                      <div className="row">
                          <div className="col-6 ">                     
                                  <div className="field">
                                  <label>
                                  Nombre:
                                  </label>
                                  <div className="ui left input">
                                  <input type="text" defaultValue={User.name } onChange={this.handleChangeName}></input>
                                  </div>
                                  </div>
                                  <br/>
                                  <div className="field">
                                  <label>
                                  Dirección:
                                  </label>
                                  <div className="ui left input">
                                  <input type="text" defaultValue={User.address } onChange={this.handleChangeAddress}></input>
                                  </div>
                                  </div>
                                  <br/>
                                  <div className="field">
                                  <label>
                                  Telefono:
                                  </label>
                                  <div className="ui left input">
                                  <input type="text" defaultValue={User.telephone } onChange={this.handleChangeTelephone}></input>
                                  </div>
                                  </div>
                          </div>
                          <div className="col-6">
                          <div className="field">
                                  <label>
                                  Correo:
                                  </label>
                                  <div className="ui left input">
                                  <input type="text" defaultValue={User.email } onChange={this.handleChangeEmail}></input>
                                  </div>
                                  </div>
                                  <br/>
                                <div className="field">
                                <label>
                                  Horario:
                                  </label>
                                  <div className="ui left input">
                                  <input type="text" defaultValue={User.schedule } onChange={this.handleChangeSchedule}></input>
                                  </div>
                                  </div>
                                  <br/>
                                <div className="field">
                                <label>
                                Descripción:
                                </label>
                                <div className="ui left textarea"><textarea defaultValue={User.description } rows="3" onChange={this.handleChangeDescription}></textarea></div>
                                </div>
                                <br/>
                          </div>
                        </div>
                    </div>
                    <div className="form-row justify-content-end align-items-end">                              
                    <button className="ui inverted secondary button" href={'http://181.50.100.167:7001/admin/'+this.state.id+'-'+this.state.idUser}>Modificar Menú</button> 
                    <button className="ui inverted secondary button" onClick={this.handleClose}>Cancelar</button> 
                    <button className="ui inverted secondary button" onClick={this.open}>Aceptar</button>                  
                    </div>                  
                    </Form>
                    </Segment>                                                     
                        <Modal className="confirm" open={this.state.open} onClose={this.close} >
                          <Modal.Header>Modificar información Restaurante</Modal.Header>
                          <Modal.Content>
                            <p>¿ Está seguro(a) de editar la información del Restaurante ?</p>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button onClick={this.close} negative>Cancelar</Button>
                            <Button
                              positive
                              icon='checkmark'
                              labelPosition='right'
                              content='Actualizar'
                              onClick={this._handleSubmit}
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
            )
         })          
         );
     }
    }
}
export default InformacionForm;