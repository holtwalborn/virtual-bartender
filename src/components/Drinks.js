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

    function updateDrinkList(amount, id) {
        const newList = drinkList.map(drink => {
            if(drink.id === id) {
                drink.amount = amount;
            }
            return drink;
        });
        setDrinkList(newList);
    }

    const drinkElements = drinkList.map((drink, i) => <Drink name={drink.name}
                                                        amount={drink.amount}
                                                        type={drink.type}
                                                        id={drink.id}
                                                        key={`drink-${i}`}
                                                        updateDrinkList={updateDrinkList} />);

    return (
        <div id="drink-container">
            {drinkElements}
        </div>
    )
}

export default Drinks;