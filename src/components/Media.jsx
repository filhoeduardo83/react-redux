import React from 'react'
import Card from './Card'
export default props => {
    
    const {min, max} = props

    return (
        <Card title="Media" green>
            <div className="Media">
                <span>
                    <strong>Média: {(min + max) / 2} </strong>
                </span> 
            </div>
        </Card> 
    );
}