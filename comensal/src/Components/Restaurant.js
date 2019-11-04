import React, { Component }  from 'react';
import CardsImg from './Images.js'
import { Button} from 'semantic-ui-react'
import '../semantic/semantic.min.css'

class Restaurant extends Component{
    render(){
    return(
        <div className="d-flex row">
        <div className="Buttons">
        <div className= 'space'>
        <Button className='ui inverted secondary button space'>
            Reserva ya!
        </Button>
        </div>
        <div className= 'space'>
        <Button className='ui inverted secondary button space'>
            Ver eventos
        </Button>
        </div>
        <div className= 'space'>
        <Button className='ui inverted secondary button space'>
            Ver decoraciones
        </Button>
        </div>
        <div className= 'space'>
        <Button className='ui inverted secondary button space'>
            Ver menú
        </Button>
        </div>
        </div>
        <div className="justify"></div>
        <CardsImg/>
        </div>
        )
    }
}
export default Restaurant;