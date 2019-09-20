import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <h1>PASS PHRASE GENERATOR</h1>
            <ul>
                <li><NavLink to='/version3'>Version03</NavLink></li>
                <li><NavLink to='/version2'>Version02</NavLink></li>
                <li><NavLink to='/version1'>Version01</NavLink></li>
            </ul>
        </div>


    )
};

export default Header
