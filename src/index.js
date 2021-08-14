import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

//http://localhost:3000/ -> Home Component
//http://localhost:3000/login -> Login Component
const App = () => {
    return (
        <>
            <Switch>
                <Route path="/login"><Login /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </>
    )
};

ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById('root')
);
