import React, { Component }  from 'react'
import { Segment,Table} from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import '../App.css';
import MesasList from './MesasList.js'
class ListTable extends Component {
    state={
      result:[1]
  }

    _fetchMovie(id){
    fetch('http://181.50.100.167:8000/api/getTablesByRestaurantId/'+id)
    .then(res => res.json())
    .then(result => {
      const {Content=[]}=result
      this.setState({result : Content})
      console.log(this.state.result);
    })        
    } 

    componentDidMount(){
      let url = window.location.href;
      let urlSplit = url.split("?")
      const id = urlSplit[1].split("=")[1];
      console.log(id)
      this._fetchMovie(id)
    }
    
    render(){
      const Content = this.state.result
      if (Content.length === 0){
        return <img src={Error} className="ImgErrorButton" alt='Vale shit'/>;
      }else if (Content[0]=== 1){
        return <div className="waiting"> 
                <br></br><div className="ui active centered inline loader loader "></div>
               </div>
      }else{ 
            return(  
              <Segment className="PantallaButton">
                <Table stackable size='large'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Identificador</Table.HeaderCell>
                    <Table.HeaderCell>Capacidad</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                <MesasList Content={this.state.result}></MesasList>
                </Table.Body>
              </Table>
              </Segment>
            )}
}
}

export default ListTable
