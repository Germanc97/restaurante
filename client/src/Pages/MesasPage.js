import  React, { Component } from 'react';
import '../App.css';
import ListTable from '../Components/MesasForm.js'
import {Title} from '../Components/Title.js';
import { Segment, Form, Checkbox } from 'semantic-ui-react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import '../semantic/semantic.min.css'

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
      var idTableRest1 = parseInt(this.state.idTableRest)
      var numberChairs1 = parseInt(this.state.idTableRest)
      var params = {
        FK_idRestaurant: parseInt(this.state.id),
        idTableRest: idTableRest1,
        numberChairs: numberChairs1,
      }
      console.log(params)
      var request = {
        method: 'POST',
        body : JSON.stringify(params)
    } 
      fetch('http://181.50.100.167:8000/api/addTable',request)
      .then(response =>  {
          console.log(response.status)
          if (response.status == "200") {
              console.log("se escribió con exito")
          };
      })
      .catch(err => console.log("Se presentó un error"));
      this.setState({
        open: false
      });
  }


    open = () => this.setState({AddTable: true})

    close = () => this.setState({AddTable: false})

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
                <input type="text"  onChange={this.handleChandleChangeChairsangeIdTable}></input>
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
              </Modal.Actions>
            </Modal>                        
          <ListTable/>
    </div>
  );
}
 
}
 

export default Mesas;
