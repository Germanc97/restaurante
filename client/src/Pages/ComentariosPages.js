import React from 'react';
import '../App.css'
import {Title} from '../Components/Title.js';
import ComentariosForm from '../Components/ComentariosForm.js';
class PageInf extends React.Component {
    state={
        result:[
       ]
    }

_fetchMovie(){
fetch('http://181.50.100.167:5000/getReviewsxRestaurant/1')
.then(res => res.json())
.then(result => {
  const {Content=[]}=result
  this.setState({result : Content})
  //console.log(this.state.result);
})        
}

componentDidMount(){
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