import React, { Component }  from 'react';
import Galery from '../Components/GaleryForm.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Button, Menu,Segment} from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import PageInf from './InformacionPage.js'
import MenuRes from '../Components/Menu.js'
import CommentGrid from '../Components/Comentarios.js'

export default class Restaurant extends Component{
    render(){
    return(
       <div className="sizewindow">
        <Row>
        <Col xs={2} className="Buttons">
            <MenuRes/>
            <PageInf/>           
        </Col>
        <Col>
        <Row>
        <Col md={7} >
        <div className="justify">
        <div className="d-flex row">
        <Galery/>
        </div>
        </div>
        </Col>
        <Col md={4}>
        <Segment className="Data">
        <CommentGrid/>
        </Segment>
        </Col>
        </Row>
        </Col>
        </Row>
        </div>
        )
    }
}
