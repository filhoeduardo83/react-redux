import React from 'react'
import Card from './Card'
import { connect, connnect } from 'react-redux'


function Sorteio(props){
    
    const { min, max } = props
    
    const sorteado = Math.floor(Math.random() * (max - min + 1) + min); 

    return (
        <Card title="Sorteio" purple>
            <div className="Sorteio">
                <span>
                    <strong>Resultado: </strong>
                    <strong>{sorteado}</strong>
                </span> 
            </div>
        </Card> 
    );
}

function mapPropsToState(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapPropsToState)(Sorteio)