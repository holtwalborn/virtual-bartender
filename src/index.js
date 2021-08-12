import React from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'http://localhost:1234';

const user = {
    username: 'hwalborn',
    password: 'Password123!!!'
};

const App = () => {
    async function getToken() {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log(data);
    }
    getToken();
    return (
        <p>hi holt</p>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));