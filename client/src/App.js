import React, { Component } from 'react';
import logo from './LogoBlanco.png';
import './App.css';
import PropTypes from 'prop-types'
import { Button, Menu, Icon ,Rating } from 'semantic-ui-react';
import {Link} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
  }
  _fetchMovie(){
  fetch('http://181.50.100.167:5000/getRestaurantPuntuation/1')
  .then(res => res.json())
  .then(result => {
    const {Content=[]}=result
    this.setState({result : Content})
    console.log(this.state.result);
  }) 
  //.catch(console.log)     
  }

  componentDidMount(){
  this._fetchMovie()
  }
  render(){
  return (
    <div>
      <header className="App-header">
        <div className="Menu">
        <img src={logo} className="App-logo" alt="logo"/>
        <Menum/>
        <br/>
        </div>
        {this.state.result.map((data, i) => (
        <div className="UserInformation" key={i}>
          Bienvenido, 
          {" "+data.name||"Nombre restaurante"}
          <div><Rating icon='star' defaultRating={data.puntuation} maxRating={data.puntuation} disabled icon='star' size='huge'/></div>
        </div>
        ))}
        <div className="LogOut"><Button  secondary icon><Icon name='angle down' size='large'/></Button></div>
      </header>
      <div className="decorBar"></div>
      
    </div> 
    );
  }
}
export default App;



class Menum extends Component {
  state = { activeItem: '' || this.state }
  handleItemClick = (e, { name }) => {
    return this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state
    return (
        <Menu inverted pointing secondary>
          <Menu.Item as={ Link } name='Información' to ="/"
            active={activeItem === 'Información'}
            onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Item as={ Link } name='Reservas' to ='/Reservas'
            active={activeItem === 'Reservas'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Buzón'
            active={activeItem === 'Buzón'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={ Link }  name='Galería' to ="/Galeria"          
            active={activeItem === 'Galería'}
            onClick={this.handleItemClick}/>
           <Menu.Item  as={ Link } name='Eventos' to ="/Eventos"
            active={activeItem === 'Eventos'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='Decoración'
            active={activeItem === 'Decoración'}
            onClick={this.handleItemClick}
          />
           <Menu.Item as={ Link } name='Comentarios' to ="/Comentarios"           
            active={activeItem === 'Comentarios'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={ Link } name='Mesas' to ="/Mesas"
            active={activeItem === 'Mesas'}
            onClick={this.handleItemClick}
          />
        </Menu>
    )
  }
}
