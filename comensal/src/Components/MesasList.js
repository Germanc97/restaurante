import React, { Component }  from 'react'
import { Segment,Image, Table,Button } from 'semantic-ui-react'
import '../semantic/semantic.min.css'
import PropTypes from 'prop-types'
import '../App.css';
class MesasList extends Component {
      PropTypes ={
        Content : PropTypes.array,
      }
      render(){
      const {Content} = this.props
      return(
        Content.map(file =>{
        return(
              <Table.Row>
                <Table.Cell>{file.title}</Table.Cell>
                <Table.Cell>{file.capacity}</Table.Cell>
                <Table.Cell textAlign='right'>
                <Button className="info" circular inverted secondary icon='delete' />
                </Table.Cell>
              </Table.Row>
        )}))
    
    }}
export default MesasList;