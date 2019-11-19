import React, { Component }  from 'react';
import { Menu} from 'semantic-ui-react'
import '../semantic/semantic.min.css'

export default class MenuRes extends Component {
    state = { activeItem: 'home', idUser:'', idRes: '',Validate:{content: ''},Screen:'NoAutenticado'}
    _fetchValidate(User){
      fetch('http://181.50.100.167:4000/validateSession?id='+User)
      .then(res => res.json())
      .then((jsonData) => {
        this.setState({Validate : jsonData});
      })     
      }
    componentDidMount(){
      try {
        let url = window.location.href;
        let urlSplit= url.split("?")
        const id = urlSplit[1].split("=")[1];
        this.setState({idRes : id})
        if(urlSplit.length===3){
          const User =urlSplit[2].split("=")[1];
          this.setState({idUser:User})
          this._fetchValidate(User);
        }
      } catch(e) {
        console.log("Error");
      }
    }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
      if (this.state.Validate.content==="user is authenticate!!!"){
      return (
        <div>
          <Menu vertical inverted pointing secondary>
          <Menu.Item header style={{fontSize: '16.5px', padding:'0.2em 0px 0.2em 1em'}}>Menú</Menu.Item>
            <Menu.Item href={'http://159.65.58.193:8000/api/createReservationByRestaurantIdAndUserId/'+this.state.idRes+'/'+this.state.idUser} target='_self'
              style={{fontSize: '16.5px' , padding:'2px 0px 0.5em 1em'}}
              name='Reserva aqui!'
              active={activeItem === 'Reserva aqui!'}
              onClick={this.handleItemClick}
            />
            <Menu.Item href={'http://181.50.100.167:7001/home/'+this.state.idRes+'-'+this.state.idUser} target='_self'
             style={{fontSize: '16.5px' , padding:'2px 0px 0.5em 1em'}}
              name='Ver Menú'
              active={activeItem === 'Ver Menú'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
      )}else{
        return(
            <div>
              <Menu vertical inverted pointing secondary>
              <Menu.Item header style={{fontSize: '16.5px', padding:'0.2em 0px 1em 1em'}}>Menú</Menu.Item>
                <Menu.Item href={'http://159.65.58.193:3000/login'} target='_self'
                  style={{fontSize: '16.5px' , padding:'2px 0px 0.5em 1em'}}
                  name='Reserva aqui!'
                  active={activeItem === 'Reserva aqui!'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item href={'http://181.50.100.167:7001/home/'+this.state.idRes+'-'+this.state.idUser} target='_self'
                style={{fontSize: '16.5px' , padding:'2px 0px 0.5em 1em'}}
                  name='Ver Menú'
                  active={activeItem === 'Ver Menú'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </div>

        )}
    }
  }