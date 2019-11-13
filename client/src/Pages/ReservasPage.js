import  React, { Component } from 'react';
import '../App.css';
import App from '../App.js'
import CardsRes from '../Components/ReservasForm.js'
import {Title} from '../Components/Title.js';
import { Segment,Button, Modal } from 'semantic-ui-react';
import '../semantic/semantic.min.css'

class Reservas extends Component {  
  render(){ 
    return (
    <div >
        <div className="ui botton attached button">
          <Title>Reservas</Title>
          <Button  href='http://181.50.100.167:8000/api/createReservationByRestaurantIdAndUserId/1/1' target='_self'
              className='ui inverted secondary button'>
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
}

export default Reservas;
