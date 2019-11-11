import React, { Component }  from 'react';
import Galery from '../Components/GaleryForm.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Button, Menu,Segment} from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import PageInf from './InformacionPage.js'
import CommentGrid from '../Components/Comentarios.js'

export default class Restaurant extends Component{
    render(){
    return(
        <Row className="sizewindow">
        <Col xs={2} className="Buttons">
            <MenuRes/>
        </Col>
        <Row>
        <Col>
        <div classNamw="d-flex row">
        <div className="justify">
        <Galery/>
        </div>
        </div>
        <div classNamw="d-flex row">
            <CommentGrid/>
        </div>
        </Col>
        <Segment className="Data">
           <PageInf/>
        </Segment>
        </Row>
        </Row>
        )
    }
}

class MenuRes extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu vertical inverted pointing secondary>
            <Menu.Item
              name='Reserva aqui!'
              active={activeItem === 'Reserva aqui!'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Eventos'
              active={activeItem === 'Eventos'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Decoraciones'
              active={activeItem === 'Decoraciones'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Menú'
              active={activeItem === 'Menú'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
      )
    }
  }