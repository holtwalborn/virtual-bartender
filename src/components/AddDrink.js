import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import API from '../utilities/api';

/**
 * I want to keep track of inputs
 *  useState to build an object [drink, setDrink]
 *  - defaults to: {name: '', type: '', amount: 750}
 *  - set the input values to be bound to the property of the state
 *  - build an onChange listener to update the state property
 * Make a request with the inputs to the API
 *  - onClick vs. onSubmit -> onSubmit is what we should use to fire the submit listener
 *  - import the API
 *  - API.makeRequest takes three parameters -> '/liquor', 'POST', drink
 *  - await
 * redirect to the /drinks route on success
 *  - part of react-router-dom called useHistory -> that has to be
 *      defined at the beginning of our component, and then we
 *      can push a redirect route when we finish the request
 */

import '../style/AddDrink.css';

const AddDrink = () => {
    const defaultState = {name: '', type: '', amount: 750}
    const [drink, setDrink] = useState(defaultState);
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    let history = useHistory();

    function handleChange(e, stateKey) {
        if(stateKey === 'name') {
            setName(e.target.value);
        } else if (stateKey === 'type') {
            setType(e.target.value);
        }
        const newState = {...drink};
        // const newState = {};
        // const stateKey = e.target.attributes.name;
        let value = e.target.value;
        if (stateKey === 'amount') {
            value = Number(value);
        }
        newState[stateKey] = value;
        setDrink(newState);
        console.log(drink);
    }

    function handleAmountChange(e) {
        let newState = {};
        newState.amount = Number(e.target.value);
        setDrink(newState);
    }

    async function onSubmit(e) {
        e.preventDefault();
        // {name, type, amount}
        await API.makeRequest('/liquor', 'POST', drink);
        history.push('/drinks');
    }

    // function preHandleChange(e) {
    //     handleChange(e, 'name');
    // }

    return (
        <div id="drink-form-container">
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name:</label>
                    <input onChange={e => handleChange(e, 'name')} value={drink.name} type="text" />
                </div>
                <div>
                    <label>Type:</label>
                    <input onChange={e => handleChange(e, 'type')} value={drink.type} type="text" />
                </div>
                <div>
                    <label>Amount:</label>
                    <input onChange={handleAmountChange} value={drink.amount} type="number" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddDrink;