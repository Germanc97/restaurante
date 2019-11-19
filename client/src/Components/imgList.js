import React, { Component }  from 'react';
import '../semantic/semantic.min.css'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import '../App.css'
class List extends Component {
    PropTypes ={
        Content : PropTypes.array,
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
                    <div className="icono d-flex justify-content-end"><Button circular icon='delete' /></div>
            </div>
            </div>       
      )
      })
     )
  }
}
export default List

