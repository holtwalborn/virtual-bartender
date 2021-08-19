import React, { useState } from 'react';
import API from '../utilities/api';

const Drink = ({name, amount, type, id, updateDrinkList}) => {
    const [updateAmount, setUpdateAmount] = useState(0);

    function handleUpdate(e) {
        setUpdateAmount(Number(e.target.value));
    }

    async function updateDrink() {
        const updatedAmount = amount + updateAmount;
        const data = {
            amount: updatedAmount,
            id
        }
        await API.makeRequest('/liquor', 'PUT', data);
        setUpdateAmount(0);
        updateDrinkList(updatedAmount, id);
    }

    return (
        <div className="drink">
            <div>
                <p>name: {name}</p>
                <p>amount: {amount}</p>
                <p>type: {type}</p>
            </div>
            <div className="actions-container">
                <>
                    <button onClick={updateDrink}>Add More</button>
                    <input onChange={handleUpdate} value={updateAmount} type="number" />
                </>
                <button>Use</button>
            </div>
        </div>
    )
}

export default Drink;