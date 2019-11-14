import React, { Component } from 'react'
import { Comment, Form, Header, TextArea, Rating} from 'semantic-ui-react'
import '../App.css'
import Avatar from '../ImgSrc/Avatar.png'
class CommentGrid extends Component{
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      rating: 0
    }
  }
  _fetchMovie(id){
  fetch('http://181.50.100.167:5000/GetReviewsXRestaurant/'+id)
  .then(res => res.json())
  .then(result => {
    const {Content=[]}=result
    this.setState({result : Content})
  }) 
  //.catch(console.log)     
  }
  handleRate = (e, { rating}) =>
    this.setState({ rating });
  componentDidMount(){
    try {
      let url = window.location.href;
      let urlSplit= url.split("?")
      const id = urlSplit[1].split("=")[1];
      this._fetchMovie(id);
    } catch(e) {
      console.log('catch e');
    }
    
  }
  render(){
    console.log(this.state.result)
    if(this.state.result.length !==0){
    return(
      <Comment.Group size='large' className="Form-Comment">
        <Header as='h3' dividing className="Header-Comments">
          Commentarios
        </Header>
        <div className="Comments-Grid" style={{overflow: 'auto', maxHeight: 700 }}>
        {this.state.result.map((data, i) => (
          <Comment  key={i}>
          <Comment.Avatar src={Avatar}/>
          <Comment.Content>
          {data.autor.map((data, i) => (
            <Comment.Author as='a' key={i}>{data.userName}</Comment.Author>
            ))}
            <Comment.Metadata>
            <Rating icon='star' defaultRating={data.puntuation} maxRating={5} size='tiny' disabled/>
            </Comment.Metadata>
            <Comment.Text>{data.comment}</Comment.Text>
          </Comment.Content>
        </Comment>
        ))}
        </div>
        <Form className="ui reply form">
        <div className="Align-Reply">
        <Rating icon='star' defaultRating={0} maxRating={5} size='huge' onRate={this.handleRate}/>
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
    </Comment.Group>);
    }else{
      return(
      <Comment.Group size='large' className="Form-Comment">
        <Header as='h3' dividing className="Header-Comments">
          Commentarios
        </Header>
        <div className="Comments-Error text-center">Aún no hay comentarios</div>
        <Form className="ui reply form">
        <div className="Align-Reply">
        <Rating icon='star' defaultRating={0} maxRating={5} size='huge' onRate={this.handleRate}/>
        <TextArea placeholder='Agrega tu comentario aquí!' rows={1} style={{
        width: "100%",
        height: "10vh",
        maxHeight: "80px",
        marginBottom: "1em",
        }} />    
        <button className="ui icon primary left labeled button">
          <i aria-hidden="true" className="edit icon"></i>
          Comentar
        </button>
        </div>
      </Form>
      </Comment.Group>);
    }
  }
}

export default CommentGrid
