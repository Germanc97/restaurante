import React from 'react';
import logo from './LogoBlanco.png';
import './App.css';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment,Rating } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
const ValueStars=3;
const useStyles = makeStyles({
  LogOut: {
    marginTop: 10,
    alignContent: "center",  
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <header className="App-header">
        <div className="Menu">
        <img src={logo} className="App-logo" alt="logo"/>
          <Button inverted basic>Información</Button>
          <Button inverted basic>Reservas</Button>
          <Button inverted basic>Buzón</Button>
          <Button inverted basic>Galeria</Button>
          <Button inverted basic>Eventos</Button>
          <Button inverted basic>Decoración</Button>
          <Button inverted basic>Comentarios</Button>
          <Button inverted basic>Mesas</Button>
        </div>
        <div className="UserInformation">
          Bienvenido:
          UserName
          <div><Rating icon='star' defaultRating={ValueStars} maxRating={ValueStars} disabled icon='star' size='huge'/></div>
        </div>
        <div><Button className={classes.LogOut} inverted basic>CS</Button></div>
      </header>
    </div>
  );
}

export default App;
