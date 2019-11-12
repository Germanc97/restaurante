import React from 'react';
import '../App.css'
import {Title} from '../Components/Title.js';
import ComentariosForm from '../Components/ComentariosForm.js';
class PageInf extends React.Component {
    state={
        result:[1]
    }

_fetchMovie(id){
fetch('http://181.50.100.167:5000/getReviewsxRestaurant/'+id)
.then(res => res.json())
.then(result => {
  const {Content=[]}=result
  this.setState({result : Content})
  //console.log(this.state.result);
})        
}

componentDidMount(){
  let url = window.location.href;
  let urlSplit = url.split("?")
  const id = urlSplit[1].split("=")[1];
  console.log(id)
  this._fetchMovie()
}
    render() {
    return(
      <div>
      <div className="ui botton attached button"><Title>Comentarios</Title></div> 
      <div className="Salto"/>
      <ComentariosForm  Content={this.state.result}></ComentariosForm>
      </div>
    );
    }
  }
  export default PageInf;