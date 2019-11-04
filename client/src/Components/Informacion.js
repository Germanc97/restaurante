import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import '../semantic/semantic.min.css'
import { Segment, Form } from 'semantic-ui-react'


class InformacionForm extends Component {
  PropTypes ={
    Content : PropTypes.array,
  }
  state = {
    _id:"",
    name: "",
    description: "",
    city_id: "",
    telephone: "",
    email: "",
    address: "",
    schedule: ""
  }
  handleChangeName = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      name: e.target.value
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
        _id:1,
        name: name1,
        description: "Muy lujoso",
        city_id: 2,
        telephone: 12348756,
        email: "rest2@yopmail.com",
        address: "Lejos de aqui",
        schedule: "Lun-Dom 10:00AM-12:00AM"
      }
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
          };
      })
      .catch(err => console.log("Se presentó un error"));
  }

render(){
    const {Content} = this.props
  return (  
    Content.map(User =>{
    return(
        <div key={User._id}>           
        <Segment className="PantallaNoButton">
        <Form onSubmit={this._handleSubmit}>    
        <div className="container">
                  <div className="row">
                      <div className="col-6 ">                     
                              <div className="field">
                              <label>
                              Nombre:
                              </label>
                              <div className="ui left input">
                              <input type="text" placeholder={User.name ||"Nombre restaurante"} onChange={this.handleChangeName}></input>
                              </div>
                              </div>
                              <br/>
                              <div className="field">
                              <label>
                              Dirección:
                              </label>
                              <div className="ui left input">
                              <input type="text" placeholder={User.address ||"Ingresa la dirección"}></input>
                              </div>
                              </div>
                              <br/>
                              <div className="field">
                              <label>
                              Telefono:
                              </label>
                              <div className="ui left input">
                              <input type="text" placeholder={User.telephone ||"Ingresa el telefono"}></input>
                              </div>
                              </div>
                      </div>
                      <div className="col-6">
                      <div className="field">
                              <label>
                              Correo:
                              </label>
                              <div className="ui left input">
                              <input type="text" placeholder={User.email ||"Nombre restaurante"}></input>
                              </div>
                              </div>
                              <br/>
                            <div className="field">
                            <label>
                              Horario:
                              </label>
                              <div className="ui left input">
                              <input type="text" placeholder={User.schedule ||"ej. Lun - Dom 10:00AM - 12:00AM"}></input>
                              </div>
                              </div>
                              <br/>
                            <div className="field">
                            <label>
                            Descripción:
                            </label>
                            <div className="ui left textarea"><textarea placeholder={User.description || "Cuentanos de ti"} rows="3"></textarea></div>
                            </div>
                            <br/>
                      </div>
                    </div>
                </div>
                <div className="form-row justify-content-end align-items-end">           
                <button className="ui inverted secondary button" type="submit">Aceptar</button>
                <button className="ui inverted secondary button">Cancelar</button>
                </div>
                </Form>
                </Segment>               
                </div>
      
        )
     })
            
     )
    }
}
export default InformacionForm;
