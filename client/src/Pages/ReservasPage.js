import  React, { Component } from 'react';
import '../App.css';
import App from '../App.js'
import CardsRes from '../Components/ReservasForm.js'
import {Title} from '../Components/Title.js';
import { Segment,Button, Modal } from 'semantic-ui-react';
import '../semantic/semantic.min.css'
import {Link} from 'react-router-dom'


class Reservas extends Component {  
  state={
    id:"",
    idUser:""
  }
  componentDidMount(){
    let url = window.location.href;
    let urlSplit = url.split("?")
    const id = urlSplit[1].split("=")[1];
    const idUser = urlSplit[2].split("=")[1];
    this.setState({id:id,idUser:idUser})
    console.log(urlSplit)
  }
  render(){ 
    return (
    <div >
        <div className="ui botton attached button">
          <Title>Reservas</Title>
            <Button href={'http://159.65.58.193:8000/api/createReservationByRestaurantIdAndUserId/' + this.state.id + '/' + this.state.idUser} target='_self'
                  className='ui inverted secondary button'>
                  <i className="add icon"></i>
                  Añadir Reserva          
            </Button>           
        </div>       
        <Segment><CardsRes></CardsRes></Segment>          
    </div> 
  );
}
}

export default Reservas;
