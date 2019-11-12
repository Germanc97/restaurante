import React, { Component } from 'react';
import logo from './LogoBlanco.png';
import './App.css';
import { Button, Menu, Icon} from 'semantic-ui-react';
import {Link} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
  }
  _fetchMovie(id){
  fetch('http://181.50.100.167:5000/getRestaurantPuntuation/'+id)
  .then(res => res.json())
  .then(result => {
    const {Content=[]}=result
    this.setState({result : Content})
    console.log(this.state.result);
  }) 
  //.catch(console.log)     
  }

  componentDidMount(){
    let url = window.location.href;
    let urlSplit= url.split("?")
    const id = urlSplit[1].split("=")[1];
    console.log(id)
    this._fetchMovie(id)
  }
  render(){
  return (
    <div>
      <header className="App-header">
        <div className="Menu">
        <img src={logo} className="App-logo" alt="logo"/>
        <br/>
        </div>
        {this.state.result.map((data, i) => (
        <div className="UserInformation" key={i}>
          Bienvenido, 
          {" "+data.name}
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

