import React, { Component }  from 'react'
import { Segment,Table} from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import '../App.css';
import MesasList from './MesasList.js'
class ListTable extends Component {
    state={
      result:[
        {
        _id: 1,
        title: 'Mesa 1',
        capacity: 4,
      },
      {
        _id: 2,
        title: 'Mesa 2',
        capacity: 4,
      },
      {
        _id: 3,
        title: 'Mesa 3',
        capacity: 4,
      },

    ]
  }

    _fetchMovie(){
    fetch('http://181.50.100.167:5000/getRestaurant/2')
    .then(res => res.json())
    .then(result => {
      const {Content=[]}=result
      this.setState({result : Content})
      //console.log(this.state.result);
    })        
    }

    //componentDidMount(){
    //this._fetchMovie()
    //}
      render(){
        return(  
          <Segment className="PantallaButton">
            <Table stackable size='large'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Identificador</Table.HeaderCell>
                <Table.HeaderCell>Capacidad</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Eliminar</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            <MesasList Content={this.state.result}></MesasList>
            </Table.Body>
          </Table>
           </Segment>
        )
}
  
}

export default ListTable