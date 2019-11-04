import React from 'react';
import '../App.css'
import InformacionForm from '../Components/Informacion.js';
import {Title} from '../Components/Title.js';
class PageInf extends React.Component {
  state={
    result:[
      ]
}

_fetchMovie(){
fetch('http://181.50.100.167:5000/getRestaurant/1')
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
      <div className="ui botton attached button"><Title>Información</Title></div> 
      <div className="Salto"/>
      <InformacionForm Content={this.state.result}></InformacionForm>
      </div>
    );
    }
  }
  export default PageInf;