import React, { Component }  from 'react';
import { Button, Menu,Segment} from 'semantic-ui-react'
import '../semantic/semantic.min.css'

export default class MenuRes extends Component {
    state = { activeItem: 'home', idUser:'', idRes: ''}
    componentDidMount(){
      try {
        let url = window.location.href;
        let urlSplit= url.split("?")
        const id = urlSplit[1].split("=")[1];
        const User =urlSplit[2].split("=")[1];
        this.setState({idUser : User})
        this.setState({idRes : id})
      } catch(e) {
        console.log("Error");
      }
    }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu vertical inverted pointing secondary>
          <Menu.Item header style={{fontSize: '18px', padding:'0.2em 0px 1em 1em'}}>Menú</Menu.Item>
            <Menu.Item href={'http://181.50.100.167:8000/api/createReservationByRestaurantIdAndUserId/'+this.state.idRes+'/'+this.state.idUser} target='_self'
              style={{fontSize: '18px' , padding:'2px 0px 0.5em 1em'}}
              name='Reserva aqui!'
              active={activeItem === 'Reserva aqui!'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
             style={{fontSize: '18px' , padding:'2px 0px 0.5em 1em'}}
              name='Ver Menú'
              active={activeItem === 'Ver Menú'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
      )
    }
  }