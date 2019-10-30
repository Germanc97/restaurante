import React from 'react';
import '../App.css';
import App from '../App.js'
import MesasForm from '../Components/MesasForm.js'
import {Title} from '../Components/Title.js';
import { Segment,Button } from 'semantic-ui-react';
import '../semantic/semantic.min.css'
function Mesas() {
  return (
    <div >
        <div className="ui botton attached button">
          <Title>Mesas</Title>
          <Button className='ui inverted secondary button'>
                <i className="add icon"></i>
                Añadir Mesa          
          </Button>
        </div>
      <Segment className="PantallaButton">
          <MesasForm/>
      </Segment>
    </div> 
  );
}
export default Mesas;
