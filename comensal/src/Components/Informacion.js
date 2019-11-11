import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import '../semantic/semantic.min.css'


class InformacionForm extends Component {
  PropTypes ={
    Content : PropTypes.array,
}
  render(){
    const {Content} = this.props
  return (  
    Content.map(User =>{
    return(
      <div key={User._id}>
                            <label>
                            Nombre:
                            </label>
                            {User.name ||"Nombre restaurante"}
                            <label>
                            Dirección:
                            </label>
                            {User.address ||"Ingresa la dirección"}
                            <label>
                            Telefono:
                            </label>
                            {User.telephone ||"Ingresa el telefono"}
                            <label>
                            Correo:
                            </label>
                            {User.email ||"Nombre restaurante"}
                          <label>
                            Horario:
                            </label>
                            {User.schedule ||"ej. Lun - Dom 10:00AM - 12:00AM"}
                          <label>
                          Descripción:
                          </label>
                          {User.description || "Cuentanos de ti"}
        </div>
     ) })
            
     )
    }
}
export default InformacionForm;
