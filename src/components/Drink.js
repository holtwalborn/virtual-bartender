import React from 'react';

const Drink = ({name, amount, type}) => {
    return (
        <div className="drink">
            <h4>{name}</h4>
            <p>amount: {amount}</p>
            <p>type: {type}</p>
        </div>
    )
}

export default Drink;