import React from 'react';
import '../App.css';
import App from '../App.js'
import CardsImg from '../Components/Images.js'
import {Title} from '../Components/Title.js';
import { Segment,Button } from 'semantic-ui-react';
import Input from '../Components/Upload.js'
import '../semantic/semantic.min.css'
function galeria() {
  return (
    <div >
      <App/>
        <div className="ui botton attached button">
          <Title>Galería</Title>
          <Button className='ui inverted secondary button'>
                <i className="add icon"></i>
                Añadir Imagen          
          </Button>
        </div>
      <Segment>
          <CardsImg/>
      </Segment>
    </div> 
  );
}
export default galeria;
