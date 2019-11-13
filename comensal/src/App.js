import React, { Component } from 'react';
import logo from './LogoBlanco.png';
import './App.css';
import { Button, Menu, Icon} from 'semantic-ui-react';
import logoNegro from './LogoNegro.png'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: {
        content:{
          name:'',
        },
      },
      hasError: false 
    }
  }
  _fetchMovie(User){
  fetch('http://181.50.100.167:4000/getNameUser?id='+User)
  .then(res => res.json())
  .then((jsonData) => {
    console.log(jsonData)
    this.setState({result : jsonData})
    console.log("ResultEnFetch"+this.state.result.name);
  }) 
  //.catch(console.log)     
  }

  componentDidMount(){
    try {
      let url = window.location.href;
      let urlSplit= url.split("?")
      const id = urlSplit[1].split("=")[1];
      const User =urlSplit[2].split("=")[1];
          console.log("idUserappjs"+User)
      this._fetchMovie(User);
    } catch(e) {
      this.setState({ hasError: true });
    }
  }
  render(){
  if (this.state.hasError) {
      return <div className="Error-Page"><img src={logo} className="Error-Logo" alt=" Error!Imagen no cargada!"/></div>;
    }else{
      console.log(this.state.result.content.name);
  return (
    <div>
      <header className="App-header">
        <div className="Menu">
        <img src={logo} className="App-logo" alt="logo"/>
        <br/>
        </div>
        <div className="UserInformation">
          Bienvenido, 
          {" "+this.state.result.content.name}
        </div>
        <div className="LogOut"><Button  secondary icon><Icon name='angle down' size='large'/></Button></div>
      </header>
      <div className="decorBar"></div>
    </div> 
    );}
  }
}
export default App;

