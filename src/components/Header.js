import React from 'react';
import { Link } from 'react-router-dom';

import TokenUtilities from '../utilities/token';

import '../style/Header.css';

const Header = ({isLoggedIn, setToken}) => {

    function handleLogout(e) {
        e.preventDefault();
        TokenUtilities.removeToken();
        setToken(null);
    }

    return (
        <header>
            <h3>Virtual Bartender</h3>
            {
                isLoggedIn ? 
                    <>
                        <Link to="/drinks">Drinks</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </> :
                    <>
                        <div></div>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </>
            }
        </header>
    )
}

export default Header;