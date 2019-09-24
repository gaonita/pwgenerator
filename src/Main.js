import React from 'react';
import {NavLink} from 'react-router-dom';

const Main = () => {
    return(
        <div className="main">
            <ul>
                <li><NavLink className="nav" to='/version3'>Ver.3</NavLink></li>
                <li><NavLink className="nav" to='/version2'>Ver.2</NavLink></li>
                <li><NavLink className="nav" to='/version1'>Ver.1</NavLink></li>
            </ul>
        </div>
    )
};

export default Main
