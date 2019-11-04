import  React, { Component } from 'react';
import '../App.css';
import ListTable from '../Components/MesasForm.js'
import {Title} from '../Components/Title.js';
import { Segment,Button } from 'semantic-ui-react';
import '../semantic/semantic.min.css'
class Mesas extends Component {
  render(){ 
    return (
    <div >
        <div className="ui botton attached button">
          <Title>Mesas</Title>
          <Button className='ui inverted secondary button'>
                <i className="add icon"></i>
                Añadir Mesa          
          </Button>
        </div>     
          <ListTable/>
    </div> 
  );
}
 
}
export default Mesas;
