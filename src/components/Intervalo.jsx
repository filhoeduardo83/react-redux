import React from 'react'
import Card from './Card'
import './Intervalo.css'
import { connect } from 'react-redux'
import { minChanged, maxChanged } from '../store/actions/numeros'


function Intervalo(props) {

    const { min, max } = props

    return (
        <Card title="Intervalo dos números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} onChange={e => props.changeMin(parseInt(e.target.value))} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} onChange={e => props.changeMax(parseInt(e.target.value))} />
                </span>
            </div>
        </Card>
    );
}


function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeMin(newValue) {
            const action = minChanged(newValue)
            dispatch(action)
        },
        changeMax(newValue) {
            const action = maxChanged(newValue)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)