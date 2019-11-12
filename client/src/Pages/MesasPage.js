import  React, { Component } from 'react';
import '../App.css';
import ListTable from '../Components/MesasForm.js'
import {Title} from '../Components/Title.js';
import { Segment, Form, Checkbox } from 'semantic-ui-react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
class Mesas extends Component {
  state = {
      AddTable: false
    };

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
            <Modal className="confirm" open={this.state.AddTable} onClose={this.close}>Hola
            <Modal.Actions>
                <Button onClick={this.close} negative>No</Button>
                <Button
                  positive
                  icon='checkmark'
                  labelPosition='right'
                  content='Yes'
                  onClick={this.close}
                />
              </Modal.Actions>
            </Modal>                        
          <ListTable/>
    </div>
  );
}
 
}
 

export default Mesas;
