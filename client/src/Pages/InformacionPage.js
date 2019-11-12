import React from 'react';
import '../App.css'
import InformacionForm from '../Components/Informacion.js';
import {Title} from '../Components/Title.js';

class PageInf extends React.Component {
  state={
    _id:"",
    result:[1]
}


_fetchMovie(id){
fetch('http://181.50.100.167:5000/getRestaurant/'+id)
.then(res => res.json())
.then(result => {
  const {Content=[]}=result
  if(Content.length ===0){
    const {Content=[]}=[1]
    this.setState({result : Content})
  }else{
    this.setState({result : Content})
  }  
  console.log(this.state.result)
})      
.catch(err => {
  const Content=[]
  this.setState({result : Content})
  console.log('hoola')
});  
}

componentDidMount(){
  let url = window.location.href;
  let urlSplit = url.split("?")
  const id = urlSplit[1].split("=")[1];
  console.log(id)
  this.setState({_id:id})
  this._fetchMovie(id)
}
    render() {
      if (this.state._id === ""){
        return (
        <div className="waiting"> 
            <div className="ui active centered inline loader loader "></div>
        </div>
        )
      }else{
        return(
          <div>
          <div className="ui botton attached button"><Title>Información</Title></div> 
          <div className="Salto"/>
          <InformacionForm Content={this.state.result}></InformacionForm>
          </div>    
        );
      }
    }
  }
export default PageInf;