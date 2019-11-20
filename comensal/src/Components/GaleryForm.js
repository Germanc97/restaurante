import React, { Component}  from 'react';
import '../semantic/semantic.min.css'
import Noimg from '../ImgSrc/NoImg.png'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel'
 class Galery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result:[0],
      hasError: false,
    }
  }
  _fetchImages(id){
    fetch('http://181.50.100.167:5000/getImagesxRestaurant/'+id)
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
      this._fetchImages(id);
    } catch(e) {
      this.setState({ hasError: true });
    }
  }

   render(){ 
     console.log(this.state.result)
     if(this.state.hasError){
       console.log("Error")
     }else if(this.state.result.length !==0 && this.state.result[0]!==0){
     return(
      <Carousel className="gridList">
        {this.state.result.map((data,i)=>(         
        <Carousel.Item key={i}>
            <img
            className="d-block w-100 img-thumbnail Size"
            src={data.url}
            alt="Error!! Imagen no cargada"
          />
          </Carousel.Item>          
      ))}        
      </Carousel>
     )
    }else{
      return(
        <Carousel className="gridList">        
          <Carousel.Item>
          <img
            className="d-block w-100 img-thumbnail Size"
            src={Noimg}
            alt="Error!! Imagen no cargada"
          />
            </Carousel.Item>                 
        </Carousel>
        )
    }
  }
}

export default Galery

