import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import API from '../utilities/api';

/**
 * A form that has a username and password input and a button
 * OnSubmit we want to make a POST request to the login endpoint
 * Store the results in localstorage
 * error handling -> catch and alert the error
 */

const Login = ({setToken}) => {

    const [user, setUser] = useState({username: '', password: ''});

    async function storeToken() {
        try {
            const data = await API.makeRequest('/login', 'POST', user);
            localStorage.setItem('vb-token', data.token);
            setToken(data.token);
        } catch (error) {
            alert(error);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        storeToken();
    }

    function handleInput(event) {
        const userKey = event.target.attributes['name'].value;
        // userKey -> 'username'
        const newState = {...user};
        // {username: 'holt', password: '123'}
        // console.log(newState[userKey]) -> 'holt'
        // newState[userKey] = 'Tom'
        // newState -> {username: 'Tom', password: '123'}
        newState[userKey] = event.target.value;
        setUser(newState);
    }

    // KEEP IT DRY
    // function handlePasswordChange(event) {
    //     const newState = {...user};
    //     newState['password'] = event.target.value;
    //     setUser(newState);
    // }

    // function handleUserNameChange(event) {
    //     const newState = {...user};
    //     newState['username'] = event.target.value;
    //     setUser(newState);
    // }

    return (
        <div>
            <Link to="/">Virtual Bartender</Link>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       required
                       name="username"
                       value={user.username}
                       onChange={handleInput}
                       placeholder="username" />
                <input type="password"
                       required
                       name="password"
                       value={user.password}
                       onChange={handleInput}
                       placeholder="password"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;