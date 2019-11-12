import React, { Component } from 'react';
import '../App.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
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
      <div className="Information-Container">
      <div className="Column-Information">
                            <label className="font-weight-bold" style={{fontSize: '22px', color:"rgba(241, 185, 17, 0.746)"}}>
                            Encuentranos Aqui!!!
                            </label>                 
                            <label className="font-weight-bold"  style={{fontSize: '18px'}}>
                            Dirección:
                            </label>   
                            <label style={{fontSize: '17px'}}>{User.address ||"Dirección"}</label>                          
                             
                            <label className="font-weight-bold" style={{fontSize: '18px'}}>
                            Telefono:
                            </label>
                            <label style={{fontSize: '17px'}}>
                            {User.telephone ||"Telefono"}
                            </label>
                            <label className="font-weight-bold" style={{fontSize: '18px'}}>
                            Correo:
                            </label>
                            <label style={{fontSize: '17px'}}>
                            {User.email ||"Email"}
                            </label>
                          <label className="font-weight-bold" style={{fontSize: '18px'}}>
                            Horario:
                            </label>
                            <label style={{fontSize: '17px'}}>
                            {User.schedule ||"Horario"}
                            </label>
                          <label className="font-weight-bold" style={{fontSize: '18px'}}>
                          Descripción:
                          </label >
                          <label style={{fontSize: '17px'}}>
                          {User.description || "Cuentanos de ti"}
                          </label>
        </div>
        </div>
        </div>
     ) })
            
     )
    }
}
export default InformacionForm;
