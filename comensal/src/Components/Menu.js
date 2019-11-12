import React, { Component }  from 'react';
import { Button, Menu,Segment} from 'semantic-ui-react'
import '../semantic/semantic.min.css'

export default class MenuRes extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu vertical inverted pointing secondary>
          <Menu.Item header style={{fontSize: '18px', padding:'0.2em 0px 1em 1em'}}>Menú</Menu.Item>
          <Menu.Item
              style={{fontSize: '18px', padding:'2px 0px 0.5em 1em'}}
              name='Informacion'
              active={activeItem === 'Informacion'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              style={{fontSize: '18px' , padding:'2px 0px 0.5em 1em'}}
              name='Reserva aqui!'
              active={activeItem === 'Reserva aqui!'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
             style={{fontSize: '18px' , padding:'2px 0px 0.5em 1em'}}
              name='Eventos'
              active={activeItem === 'Eventos' }
              onClick={this.handleItemClick}
            />
            <Menu.Item
             style={{fontSize: '18px' , padding:'2px 0px 0.5em 1em'}}
              name='Decoraciones'
              active={activeItem === 'Decoraciones'}
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