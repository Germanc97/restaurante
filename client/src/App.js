import React, { Component } from 'react';
import logo from './LogoBlanco.png';
import './App.css';
import { Button, Menu, Icon ,Rating } from 'semantic-ui-react';
import {Link} from "react-router-dom";
const ValueStars=5;

function App() {
  return (
    <div>
      <header className="App-header">
        <div className="Menu">
        <img src={logo} className="App-logo" alt="logo"/>
        <Menum/>
        <br/>
        </div>
        <div className="UserInformation">
          Bienvenido:
          UserName
          <div><Rating icon='star' defaultRating={ValueStars} maxRating={ValueStars} disabled icon='star' size='huge'/></div>
        </div>
        <div className="LogOut"><Button  secondary icon><Icon name='angle down' size='large'/></Button></div>
      </header>
      <div className="decorBar"></div>
      
    </div> 
  );
}

export default App;
class Menum extends Component {
  state = { activeItem: 'Información' }
  handleItemClick = (e, { name }) => {
    return this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state

    return (
        <Menu inverted pointing secondary>
          <Menu.Item  as={ Link } name='Información' to ="/"
            active={activeItem === 'Información'}
            onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Item
            name='Reservas'
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
           <Menu.Item
            name='Eventos'
            active={activeItem === 'Eventos'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='Decoración'
            active={activeItem === 'Decoración'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='Comentarios'
            active={activeItem === 'Comentarios'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Mesas'
            active={activeItem === 'Mesas'}
            onClick={this.handleItemClick}
          />
        </Menu>
    )
  }
}
