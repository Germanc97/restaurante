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
      id:"",
      idUser:"",
      result: [],
      activeItem: ''
    }
  }
  handleItemClick = (e, { name }) => {
    return this.setState({ activeItem: name });
  };
  _fetchMovie(id){
  fetch('http://181.50.100.167:5000/getRestaurantPuntuation/'+id)
  .then(res => res.json())
  .then(result => {
    const {Content=[]}=result
    this.setState({result : Content})
    this.setState({id : id})
    console.log(this.state.result);
  }) 
  //.catch(console.log)     
  }

  componentDidMount(){
    let url = window.location.href;
    let urlSplit = url.split("?")
    const id = urlSplit[1].split("=")[1];
    const idUser = urlSplit[2].split("=")[1];
    console.log(id)
    this.setState({id : id,idUser:idUser})
    this._fetchMovie(id)
  }
  render(){
  const { activeItem } = this.state
  return (
    <div>
      <header className="App-header">
        <div className="Menu">
        <img src={logo} className="App-logo" alt="logo"/>
        <Menu inverted pointing secondary>
          <Menu.Item as={ Link } name='Información' to ={"/?id="+this.state.id+"?id="+this.state.idUser}
            active={activeItem === 'Información'}
            onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Item as={ Link } name='Reservas' to ={'/Reservas/?id='+this.state.id+"?id="+this.state.idUser}
            active={activeItem === 'Reservas'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Buzón'
            active={activeItem === 'Buzón'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={ Link }  name='Galería' to ={'/Galeria/?id='+this.state.id+"?id="+this.state.idUser}        
            active={activeItem === 'Galería'}
            onClick={this.handleItemClick}/>
           <Menu.Item  href='http://181.50.100.167:4001/Events' target='_self'
           name='Eventos'
           active={activeItem === 'Eventos'}
           onClick={this.handleItemClick}
          >Eventos</Menu.Item>
           <Menu.Item
            name='Decoración'
            active={activeItem === 'Decoración'}
            onClick={this.handleItemClick}
          />
           <Menu.Item as={ Link } name='Comentarios' to ={'/Comentarios/?id='+this.state.id+"?id="+this.state.idUser}            
            active={activeItem === 'Comentarios'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={ Link } name='Mesas' to ={'/Mesas/?id='+this.state.id+"?id="+this.state.idUser}  
            active={activeItem === 'Mesas'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <br/>
        </div>
        {this.state.result.map((data, i) => (
        <div className="UserInformation" key={i}>
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
