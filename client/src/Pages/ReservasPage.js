import React from 'react';
import '../App.css';
import App from '../App.js'
import CardsRes from '../Components/ReservasForm.js'
import {Title} from '../Components/Title.js';
import { Segment,Button } from 'semantic-ui-react';
import '../semantic/semantic.min.css'
function Reservas() {
  return (
    <div >
        <div className="ui botton attached button">
          <Title>Reservas</Title>
          <Button className='ui inverted secondary button'>
                <i className="add icon"></i>
                Añadir Reserva          
          </Button>
        </div>
      <Segment className="PantallaButton">
          <CardsRes/>
      </Segment>
    </div> 
  );
}
export default Reservas;
