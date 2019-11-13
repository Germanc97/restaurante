import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import InformacionForm from '../Components/Informacion.js';
class PageInf extends React.Component {
  state={
    result:[],
}

_fetchMovie(id){
fetch('http://181.50.100.167:5000/getRestaurant/'+id)
.then(res => res.json())
.then(result => {
  const {Content=[]}=result
  this.setState({result : Content})
  //console.log(this.state.result);
})        
}

componentDidMount(){
  try {
    let url = window.location.href;
    let urlSplit= url.split("?")
    const id = urlSplit[1].split("=")[1];
    this._fetchMovie(id);
  } catch(e) {
    console.log('catch e', e);
  }
}
    render() {
    return(
      <div>
      <InformacionForm Content={this.state.result}></InformacionForm>
      </div>
    );
    }
  }
  export default PageInf;