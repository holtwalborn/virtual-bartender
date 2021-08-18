import React from 'react';

const Drink = ({name, amount, type}) => {
    return (
        <div className="drink">
            <div>
                <p>name: {name}</p>
                <p>amount: {amount}</p>
                <p>type: {type}</p>
            </div>
            <div className="actions-container">
                <>
                    <button>Add More</button>
                    <input type="number" />
                </>
                <button>Use</button>

            </div>
        </div>
    )
}

export default Drink;