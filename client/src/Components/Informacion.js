import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import '../semantic/semantic.min.css'
import { Segment } from 'semantic-ui-react'


class InformacionForm extends Component {
  PropTypes ={
    Content : PropTypes.array,
}
  render(){
    const {Content} = this.props
  return (  
    Content.map(User =>{
    return(
      <Segment key={User._id}>
      <div class="container" >
                <div class="row">
                    <div className="col-6 ">
                    <form className="ui form">
                            <div className="field">
                            <label>
                            Nombre:
                            </label>
                            <br/>
                            <div className="ui left input">
                            <input type="text" placeholder={User.name ||"Nombre restaurante"}></input>
                            </div>
                            </div>
                            <br/>
                            <div className="field">
                            <label>
                            Dirección:
                            </label>
                            <br/>
                            <div className="ui left input">
                            <input type="text" placeholder={User.address ||"Ingresa la dirección"}></input>
                            </div>
                            </div>
                            <br/>
                            <div class="field">
                            <label>
                            Telefono:
                            </label>
                            <br/>
                            <div className="ui left input">
                            <input type="text" placeholder={User.telephone ||"Ingresa el telefono"}></input>
                            </div>
                            </div>
                          </form>
                    </div>
                    <div class="col-6">
                    <form class="ui form">
                    <div class="field">
                            <label>
                            Correo:
                            </label>
                            <br/>
                            <div className="ui left input">
                            <input type="text" placeholder={User.email ||"Nombre restaurante"}></input>
                            </div>
                            </div>
                            <br/>
                          <div class="field">
                          <label>
                            Horario:
                            </label>
                            <br/>
                            <div className="ui left input">
                            <input type="text" placeholder={User.schedule ||"ej. Lun - Dom 10:00AM - 12:00AM"}></input>
                            </div>
                            </div>
                            <br/>
                          <div class="field">
                          <label>
                          Descripción:
                          </label>
                          <br/>
                          <div className="ui left textarea"><textarea placeholder={User.description || "Cuentanos de ti"} rows="3"></textarea></div>
                          </div>
                          <br/>
                        </form>
                    </div>
                  </div>
              </div>
              <div class="form-row justify-content-end align-items-end">           
              <button className="ui inverted secondary button">Aceptar</button>
              <button className="ui inverted secondary button">Cancelar</button>
              </div>
              </Segment>
        )
     })
            
     )
    }
}
export default InformacionForm;
