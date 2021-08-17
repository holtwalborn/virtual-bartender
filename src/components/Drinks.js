import React, { useEffect, useState } from 'react';

import Drink from './Drink';

import API from '../utilities/api';

import '../style/Drinks.css';

const Drinks = () => {

    const [drinkList, setDrinkList] = useState([]);

    useEffect(async function() {
        try {
            const data = await API.makeRequest('/liquor', 'GET');
            setDrinkList(data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const drinkElements = drinkList.map(drink => <Drink name={drink.name}
                                                        amount={drink.amount}
                                                        type={drink.type} />);

    return (
        <div id="drink-container">
            {drinkElements}
        </div>
    )
}

export default Drinks;