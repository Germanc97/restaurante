import React, { Component } from 'react';
import logo from './LogoBlanco.png';
import './App.css';
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
      activeItem: 'home',
      Validate:{
        content: ''
      },
      Screen:'NoAutenticado'
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
      const id =urlSplit[1].split("=")[1];
      if(urlSplit.length===3){
        const User =urlSplit[2].split("=")[1];
        this._fetchValidate(User);
        if(this.state.Validate.content==="user is authenticate!!!"){
          this.setState({ Screen: 'Autenticado' });
          this._fetchMovie(User);
        }else{
          this.setState({ Screen: 'NoAutenticado' });
        }
      }else{
        this.setState({ Screen: 'NoAutenticado' });
      }
    } catch(e) {
      this.setState({ hasError: true });
    }
  }
  render(){
  const { activeItem } = this.state
  console.log(this.state.Validate.content)
  if (this.state.hasError) {
      return <div className="Error-Page"><img src={logo} className="Error-Logo" alt=" Error!Imagen no cargada!"/></div>;
    }else{
  if (this.state.Screen==="Autenticado"){

  return (
    <div>
      <header className="App-header">
        <div className="Menu">
        <img src={logo} className="App-logo" alt="logo"/>
        <Menu inverted pointing secondary>
            <Menu.Item href={'http://159.65.58.193:3000/profile'} target='_self'
              name='Mi perfil'
              active={activeItem === 'Mi perfil'}
              onClick={this.handleItemClick}
            />
            <Menu.Item href={'http://159.65.58.193:3000/tinder'} target='_self'
              name='Reservas Públicas'
              active={activeItem === 'Reservas Públicas'}
              onClick={this.handleItemClick}
            />
            <Menu.Item href={'http://181.50.100.167:4001/Principal/'} target='_self'
              name='Buscar Restaurantes'
              active={activeItem === 'Buscar Restaurantes'}
              onClick={this.handleItemClick}
            />
          </Menu>
        <br/>
        </div>
        <div className="UserInformation">
          Bienvenido, 
          {" "+this.state.result.content.name}
        </div>
        <div className="LogOut"><Button  secondary icon href="http://159.65.58.193:3000/login/" target='_self' ><Icon name='sign-out alternate' size='small'/></Button></div>
      </header>
      <div className="decorBar"></div>
    </div> 
    )}else{
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
    }
    
    ;}
  }
}
export default App;

