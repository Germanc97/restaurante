import React, { Component } from 'react';
import logo from './LogoBlanco.png';
import './App.css';
import './semantic/semantic.min.css'
import { Button, Menu, Icon} from 'semantic-ui-react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: {
        content:{
          name:'',
        },
      },
      hasError: false,
      idUser:'0',
      activeItem: 'home',
      Validate:{
        content: ''
      },
      Screen:'NoAutenticado',
    }
  }
  _fetchMovie(User){
  fetch('http://181.50.100.167:4000/getNameUser?id='+User)
  .then(res => res.json())
  .then((jsonData) => {
    this.setState({result : jsonData});
  }) 
  }
  _fetchValidate(User){
    fetch('http://181.50.100.167:4000/validateSession?id='+User)
    .then(res => res.json())
    .then((jsonData) => {
      this.setState({Validate : jsonData});
    })    
    }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  componentDidMount(){
    try {
      let url = window.location.href;
      let urlSplit= url.split("?")
      let id =urlSplit[1].split("=")[1];
      if(urlSplit.length>2){
        const User =urlSplit[2].split("=")[1];
        this.setState({idUser: User})
        this._fetchValidate(User);
        this._fetchMovie(User)
      }
    } catch(e) {
      this.setState({ hasError: true });
    }
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
  render(){
  const { activeItem } = this.state
  if (this.state.hasError) {
      return <div className="Error-Page"><img src={logo} className="Error-Logo" alt=" Error!Imagen no cargada!"/></div>;
    }else{
  if (this.state.Validate.content==="user is authenticate!!!"){
    console.log(this.state.Validate.content)
  return (
    <div>
      <header className="App-header">
        <div className="Menu">
        <img src={logo} className="App-logo" alt="logo"/>
        <Menu inverted pointing secondary>
            <Menu.Item href={'http://159.65.58.193:3000/profile/'} target='_self'
              name='Mi perfil'
              active={activeItem === 'Mi perfil'}
              onClick={this.handleItemClick}
            />
            <Menu.Item href={'http://159.65.58.193:3000/tinder'} target='_self'
              name='Reservas Públicas'
              active={activeItem === 'Reservas Públicas'}
              onClick={this.handleItemClick}
            />
            <Menu.Item href={'http://181.50.100.167:4001/Principal/?id='+this.state.idUser+"?pass=1?ciudad=1"} target='_self'
              name='Buscar Restaurantes'
              active={activeItem === 'Buscar Restaurantes'}
              onClick={this.handleItemClick}
            />
          </Menu>
        <br/>
        </div>
        <div className="UserInformation"> 
          {" "+this.state.result.content.name}
          <div className="LogOut" onClick={()=>this.HandleLogOut(this.state.idUser)}><Icon size={15} name='sign-out inverted'/></div>
        </div>
      </header>
      <div className="decorBar"></div>
    </div> 
    )}else if(this.state.Validate.content==="user is not authenticated!!!" || this.state.idUser==='0'){
      return(
        <div>
        <header className="App-header">
          <div className="Menu">
          <img src={logo} className="App-logo" alt="logo"/>
          <Menu inverted pointing secondary>
              <Menu.Item href={'http://159.65.58.193:3000/login'} target='_self'
                name='Iniciar Sesión'
                active={activeItem === 'Iniciar Sesión'}
                onClick={this.handleItemClick}
              />
              <Menu.Item href={'http://159.65.58.193:3000/signup'} target='_self'
                name='Registrate'
                active={activeItem === 'Registrate'}
                onClick={this.handleItemClick}
              />
              <Menu.Item href={'http://159.65.58.193:3000/signup'} target='_self'
                name='Recuperar Contraseña'
                active={activeItem === 'Recuperar Contraseña'}
                onClick={this.handleItemClick}
              />
            </Menu>
          <br/>
          </div>
          </header>
        <div className="decorBar"></div>
      </div>
      )
    }else{
      return(
          <div>
            <div className="App-header">
              <br/>
              <div className="ui active centered inline big loader"></div>
            </div>
            <div className="decorBar"></div>
          </div>
      );   
    }
    
    ;}
  }
}
export default App;

