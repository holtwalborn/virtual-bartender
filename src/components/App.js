import React, { useState, useEffect } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Header from './Header';

import TokenUtilities from '../utilities/token';
import Drinks from './Drinks';
import AddDrink from './AddDrink';

import '../style/index.css';

//http://localhost:3000/ -> Home Component
//http://localhost:3000/login -> Login Component
const App = () => {
    const [token, setToken] = useState(TokenUtilities.getToken());
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    useEffect(function() {
        setIsLoggedIn(!!token);
    }, [token]);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} setToken={setToken} />
            <main>
                <Switch>
                    <Route path="/drinks/add"><AddDrink /></Route>
                    <Route path="/drinks"><Drinks /></Route>
                    <Route path="/login"><Login setToken={setToken} /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </main>
        </>
    )
};

export default App;