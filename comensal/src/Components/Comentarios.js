import React, { Component } from 'react'
import Media from 'react-bootstrap/Media'
import { Button, Comment, Form, Header, TextArea, Rating} from 'semantic-ui-react'
import '../App.css'
import Avatar from '../ImgSrc/Avatar.png'
class CommentGrid extends Component{
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
  }
  _fetchMovie(){
  fetch('http://181.50.100.167:5000/GetReviewsXRestaurant/1')
  .then(res => res.json())
  .then(result => {
    const {Content=[]}=result
    this.setState({result : Content})
    console.log(this.state.result);
  }) 
  //.catch(console.log)     
  }

  componentDidMount(){
  this._fetchMovie()
  }
  render(){
    return(
      <Comment.Group size='large' className="Form-Comment">
        <Header as='h3' dividing className="Header-Comments">
          Commentarios
        </Header>
        {this.state.result.map((data, i) => (
        <Comment key={i}>
          <Comment.Avatar src={Avatar}/>
          <Comment.Content>
            <Comment.Author as='a'>{data.autor_id}</Comment.Author>
            <Comment.Metadata>
            <Rating icon='star' defaultRating={data.puntuation} maxRating={5} size='tiny' disabled/>
            </Comment.Metadata>
            <Comment.Text>{data.comment}</Comment.Text>
          </Comment.Content>
        </Comment>))}
        <Form className="ui reply form">
        <div className="Align-Reply">
        <Rating icon='star' defaultRating={0} maxRating={5} size='huge'/>
        <TextArea placeholder='Agrega tu comentario aquí!' rows={1} style={{
        width: "100%",
        height: "10vh",
        marginBottom: "1em",
        }} />    
        <button className="ui icon primary left labeled button">
          <i aria-hidden="true" className="edit icon"></i>
          Comentar
        </button>
        </div>
      </Form>
      </Comment.Group>
    )
  }
}

export default CommentGrid
