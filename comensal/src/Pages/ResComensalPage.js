import React, { Component }  from 'react';
import Galery from '../Components/GaleryForm.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Segment,Rating} from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import PageInf from './InformacionPage.js'
import MenuRes from '../Components/Menu.js'
import CommentGrid from '../Components/Comentarios.js'

export default class Restaurant extends Component{
    constructor(props) {
        super(props)
        this.state = {
          result: [],
          hasError: false 
        }
      }
      _fetchMovie(id){
      fetch('http://181.50.100.167:5000/getRestaurantPuntuation/'+id)
      .then(res => res.json())
      .then(result => {
        const {Content=[]}=result
        this.setState({result : Content})
      }) 
      //.catch(console.log)     
      }
    
      componentDidMount(){
        try {
          let url = window.location.href;
          let urlSplit= url.split("?")
          const id = urlSplit[1].split("=")[1];
          this._fetchMovie(id);
        } catch(e) {
          this.setState({ hasError: true });
        }
      }
    render(){
      if (this.state.hasError) {
        return <h1 className="Error-Link"><a href={'http://159.65.58.193:3000/signup/'} className="Link">Click Aqui! Intentalo de nuevo</a></h1>;
      }else{
    return(
       <div className="sizewindow">
        <Row>
        <Col xs={2} className="Buttons">
            <MenuRes/>
            <PageInf/>           
        </Col>
        <Col md={6} >
        <div className="justify">
        <div className="d-flex row">
        {this.state.result.map((data, i) => (
            <div key={i} className="Restaurant-Header">
            <label className="font-weight-bold" style={{fontSize: '28px', marginRight: '6px'}}>
            {data.name}
            </label> 
            <Rating icon='star' defaultRating={data.puntuation} maxRating={5} size='massive' disabled/>
            </div>
        ))}
        <Galery/>
        </div>
        </div>
        </Col>
        <Col lg={3}>
        <Segment className="Data">
        <CommentGrid/>
        </Segment>
        </Col>
        </Row>
        </div>
        )}
    }
}
