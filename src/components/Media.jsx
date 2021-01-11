import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

function Media (props){
    const {min, max} = props
    console.log(props.numeros)

    return (
        <Card title="Media" green>
            <div className="Media">
                <span>
                    <strong>Média: {(max+min)/2} </strong>
                </span> 
            </div>
        </Card> 
    );
}

function mapStateToProps (state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)