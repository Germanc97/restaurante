import React, { Component } from 'react';
import logo from './LogoBlanco.png';
import './App.css';
import PropTypes from 'prop-types'
import { Button, Menu, Icon ,Rating } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import './semantic/semantic.min.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:"",
      idUser:"",
      result: [],
      activeItem: '',
      Validate:{
        content:''
      }
  }
}
  handleItemClick = (e, { name }) => {
    return this.setState({ activeItem: name });
  };

  _fetchValidate(User){
    fetch('http://181.50.100.167:4000/validateSession?id='+User)
    .then(res => res.json())
    .then((jsonData) => {
      this.setState({Validate : jsonData});
    })    
  }

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

  HandleLogOut(User){
    var request ={
      method: 'POST'
    }
    fetch('http://181.50.100.167:4000/logout?id='+User,request)
    .then(res => res.json())
    .then(response => {
      if (response.response ==2){
        console.log("funciiono")
        window.location.replace("http://159.65.58.193:3000/login")
      }
    })    
  }

  componentDidMount(){
    let url = window.location.href;
    let urlSplit = url.split("?")
    const id = urlSplit[1].split("=")[1];
    const idUser = urlSplit[2].split("=")[1];
    console.log(id)
    this.setState({id : id,idUser:idUser})
    this._fetchValidate(idUser)
    this._fetchMovie(id)
  }

  render(){
  const { activeItem } = this.state
  if (this.state.Validate.content==="user is authenticate!!!"){
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
            <Menu.Item href={'http://181.50.100.167:4001/Buzon/?id='+this.state.id+'?id='+this.state.idUser} target='_self'
              name='Buzón'
              active={activeItem === 'Buzón'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={ Link }  name='Galería' to ={'/Galeria/?id='+this.state.id+"?id="+this.state.idUser}        
              active={activeItem === 'Galería'}
              onClick={this.handleItemClick}/>
            <Menu.Item  href={'http://181.50.100.167:4001/Events/?id='+this.state.id+'?id='+this.state.idUser} target='_self'
            name='Eventos'
            active={activeItem === 'Eventos'}
            onClick={this.handleItemClick}
            >Eventos</Menu.Item>
            <Menu.Item  href={'http://181.50.100.167:4001/Decorations/?id='+this.state.id+'?id='+this.state.idUser} target='_self'
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
          <div className="LogOut" onClick={()=> this.HandleLogOut(this.state.idUser)}><Icon name='sign out inverted' size={20}/></div>
        </header>
        <div className="decorBar"></div>      
      </div> 
      );
    }else{
      window.location.href = "http://159.65.58.193:3000/login"
      return( 
      <div className="loaderhref">
        <div class="ui active loader"></div> 
      </div>
      
      )
    }
  }
}
export default App;
