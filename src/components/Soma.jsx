import React from 'react'
import Card from './Card'
export default props => {
    
    const {min, max} = props

    return (
        <Card title="Soma" blue>
            <div className="Soma">
                <span>
                    <strong>Soma: {min + max} </strong>
                </span> 
            </div>
        </Card> 
    );
}