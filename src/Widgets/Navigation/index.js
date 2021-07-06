import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Navigation = () => {
    return <ul className="main-nav">
    <li>
        <NavLink exact activeClassName="active-link" to="/">
            Home
        </NavLink>
    </li>
    <li>
        <NavLink activeClassName="active-link" to="/sci">
            Science
        </NavLink>
    </li>

    <li>
    <NavLink activeClassName="active-link" to="/programming">Programming</NavLink>

    </li>
    <li>
        <NavLink activeClassName="active-link" to="/sports"> FDSFSDFSDF Sport </NavLink>
    </li>
</ul>
}

export default Navigation;