import React, { Component } from 'react'
import { Comment, Form, Header, TextArea, Rating} from 'semantic-ui-react'
import '../App.css'
import Avatar from '../ImgSrc/Avatar.png'
class CommentGrid extends Component{
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      rating: 0,
      Text: "",
      idRes: null,
      UserId: null,
      Validate:{
        response: null,
        content: ''
      }
    }
  }
  _fetchValidate(User){
    fetch('http://181.50.100.167:4000/validateSession?id='+User)
    .then(res => res.json())
    .then((jsonData) => {
      this.setState({Validate : jsonData});
    })    
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
      if(urlSplit.length > 2){
        var User = urlSplit[2].split("=")[1];
        this.setState({UserId : User})
        this._fetchValidate(User)
      }
      this.setState({ idRes : id})
      this._fetchMovie(id);
    } catch(e) {
      console.log('catch e');
    }   
  }
  handleChangeText = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      Text: e.target.value
    });
  }
  _PutComment = (e)=>{
    let url = window.location.href;
    let urlSplit= url.split("?")
    console.log(urlSplit)
    var Autor = this.state.UserId
    var Restaurant = this.state.idRes
    var valueStar = this.state.rating
    var Comentario = this.state.Text
    if(Comentario===""){
      var Comentario = "No hay comentario"
    }
    if(this.state.Validate.response === 2){
      var params ={
        restaurant_id : Restaurant,
        autor_id : Autor,
        puntuation : valueStar,
        comment : Comentario
      }
    }else if (this.state.Validate.response === 1){
      var params ={
        restaurant_id : Restaurant,
        autor_id : null,
        puntuation : valueStar,
        comment : Comentario
      }
    }
    var request = {
        method: 'POST',
        headers:{
          "Content-type": "application/json"
        },
      body : JSON.stringify(params)
    }
    console.log(params)
    if(Restaurant && this.state.Validate.response && (valueStar||Comentario)){
      fetch('http://181.50.100.167:5000/postReview',request)
        .then(response =>  {
            console.log(response)
            if (response.status === 200) {
                console.log("se escribió con exito")
                //window.location.reload();
            };
        })
        .catch(err => console.log("Se presentó un error"));
    }
  }
  render(){
    if(this.state.result.length !==0){
    return(
      <Comment.Group size='large' className="Form-Comment">
        <Header as='h3' dividing className="Header-Comments">
          Commentarios
        </Header>
        <div className="Comments-Grid" style={{overflow: 'auto'}}>
        {this.state.result.map((data, i) => (
          <Comment  key={i}>
          <Comment.Avatar src={Avatar}/>
          <Comment.Content>
          {data.autor.map((data, i) => (
            <Comment.Author as='a' key={i}>{data.userName || "Anónimo"}</Comment.Author>
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
        }} onChange={this.handleChangeText}/>    
        <button className="ui icon primary left labeled button" onClick={this._PutComment}>
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
        }}  onChange={this.handleChangeText} />    
        <button className="ui icon primary left labeled button" onClick={this._PutComment}>
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
